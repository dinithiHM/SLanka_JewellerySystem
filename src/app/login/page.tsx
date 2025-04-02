"use client"; // Add this line at the top of the file

import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios"; // Import axios
import { useRouter } from "next/navigation"; // Import useRouter

const Login = () => {
  // State variables to hold the email, password, and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Use the Next.js router for navigation
  const router = useRouter();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const data = { email, password };

    try {
      const adminResponse = await axios.post("http://localhost:3002/auth/adminlogin", data);
      if (adminResponse.data.loginStatus) {
        localStorage.setItem("token", adminResponse.data.accessToken);
        localStorage.setItem("role", "Admin"); // Store role
        router.push("/DashView/admin");
        return;
      }
    } catch (adminError) {
      console.error("Admin login error:", adminError);
    }

    try {
      const userResponse = await axios.post("http://localhost:3002/users/userlogin", data);
      if (userResponse.data.loginStatus) {
        // Make sure we're running in the browser
        if (typeof window !== 'undefined') {
          localStorage.setItem("token", userResponse.data.accessToken);
          localStorage.setItem("role", userResponse.data.role); // Store role from response

          // Store user name if available
          if (userResponse.data.userName) {
            localStorage.setItem("userName", userResponse.data.userName);
          }

          // Store branch information if available
          if (userResponse.data.branchName) {
            localStorage.setItem("branchName", userResponse.data.branchName);
            console.log("Stored branch name:", userResponse.data.branchName);
          }
          if (userResponse.data.branchId) {
            localStorage.setItem("branchId", userResponse.data.branchId.toString());
            console.log("Stored branch ID:", userResponse.data.branchId);
          }

          // For Store Managers, set a hardcoded branch name based on branch ID if not provided
          if (userResponse.data.role === "Store Manager" && userResponse.data.branchId && !userResponse.data.branchName) {
            const branchId = userResponse.data.branchId;
            let branchName = "";

            if (branchId === 1) {
              branchName = "Mahiyanganaya Branch";
            } else if (branchId === 2) {
              branchName = "Mahaoya Branch";
            } else {
              branchName = `Branch ${branchId}`;
            }

            localStorage.setItem("branchName", branchName);
            console.log("Set hardcoded branch name:", branchName);
          }
        }

        router.push(userResponse.data.redirectUrl || "/DashView/user");
        return;
      }
    } catch (userError) {
      console.error("User login error:", userError);
      setError("Invalid credentials.");
    }
  };


  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 py-8 sm:py-16"
      style={{
        backgroundImage: "url('/slide2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-60 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md">
        <h2 className="text-white text-xl sm:text-2xl font-semibold text-center mb-6">
          Login
        </h2>
        {error && (
          <div className="text-red-500 text-center mb-4">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center bg-gray-200 p-2 sm:p-3 rounded-lg">
            <FaUser className="text-gray-600 mr-2 sm:mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent flex-1 outline-none text-gray-700 text-sm sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center bg-gray-200 p-2 sm:p-3 rounded-lg">
            <FaLock className="text-gray-600 mr-2 sm:mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent flex-1 outline-none text-gray-700 text-sm sm:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-300 text-gray-900 font-semibold py-2 sm:py-3 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Login
          </button>
          <p className="text-center text-white mt-2 text-xs sm:text-sm cursor-pointer hover:underline">
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
