"use client";

import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import axios from "axios";

const Login = () => {
  // State variables to hold the email, password, and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Use the language context
  const { language } = useLanguage();

  // We're removing the auto-redirect effect completely
  // This ensures the login page stays visible until the user submits the form

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError(language === 'ta' ? 'மின்னஞ்சல் மற்றும் கடவுச்சொல் தேவை' : 'Email and password are required');
      setIsLoading(false);
      return;
    }

    // We'll try to authenticate with the backend

    try {
      // First try admin login
      try {
        console.log("Trying admin login with:", { email, password });
        const adminResponse = await axios.post("http://localhost:3002/auth/login", { email, password });
        console.log("Admin login response:", adminResponse.data);

        if (adminResponse.data.loginStatus) {
          localStorage.setItem("token", adminResponse.data.token || "admin-token");
          localStorage.setItem("role", "Admin");

          const userInfo = {
            role: "Admin",
            userName: "Administrator",
            userId: 0,
            branch_id: null,
            branchName: ''
          };

          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          window.location.href = "/DashView/admin";
          return;
        }
      } catch (adminError) {
        console.error("Admin login error:", adminError);
        // Continue to try employee login
      }

      // Then try employee login
      try {
        console.log("Trying employee login with:", { email, password });
        const userResponse = await axios.post("http://localhost:3002/users/userlogin", { email, password });
        console.log("Employee login response:", userResponse.data);

        if (userResponse.data.loginStatus) {
          console.log("Employee login successful with role:", userResponse.data.role);
          localStorage.setItem("token", userResponse.data.accessToken || "employee-token");
          localStorage.setItem("role", userResponse.data.role);

          // Store individual items first for backward compatibility
          if (userResponse.data.userName) {
            localStorage.setItem("userName", userResponse.data.userName);
          }

          if (userResponse.data.userId) {
            localStorage.setItem("userId", userResponse.data.userId.toString());
          }

          if (userResponse.data.branchName) {
            localStorage.setItem("branchName", userResponse.data.branchName);
          }

          if (userResponse.data.branchId) {
            localStorage.setItem("branchId", userResponse.data.branchId.toString());
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
          }

          // Store all user info in a single object for easier access
          const userInfo = {
            role: userResponse.data.role,
            userName: userResponse.data.userName || '',
            userId: userResponse.data.userId,
            branch_id: userResponse.data.branchId,
            branchName: userResponse.data.branchName || localStorage.getItem("branchName") || ''
          };

          localStorage.setItem("userInfo", JSON.stringify(userInfo));

          // Redirect based on role
          switch (userResponse.data.role.toLowerCase()) {
            case 'admin':
              window.location.href = '/DashView/admin';
              break;
            case 'store manager':
              window.location.href = '/DashView/storeManager';
              break;
            case 'sales associate':
              window.location.href = '/DashView/salesAssociate';
              break;
            case 'cashier':
              window.location.href = '/DashView/cashier';
              break;
            default:
              window.location.href = '/DashView/user';
          }
          return;
        }
      } catch (userError) {
        console.error("Employee login error:", userError);
      }

      // If we get here, both login attempts failed
      // But still try the test accounts as a fallback
      if (email === 'admin@test.com' && password === 'admin123') {
        const userInfo = {
          role: 'Admin',
          userName: 'Administrator',
          userId: 1,
          branch_id: null,
          branchName: ''
        };

        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        localStorage.setItem('token', 'mock-token-admin');
        localStorage.setItem('role', userInfo.role);

        window.location.href = '/DashView/admin';
        return;
      }

      if (email === 'manager@test.com' && password === 'manager123') {
        // Set individual items first
        localStorage.setItem('userName', 'Store Manager');
        localStorage.setItem('userId', '2');
        localStorage.setItem('branchId', '1');
        localStorage.setItem('branchName', 'Mahiyanganaya Branch');

        const userInfo = {
          role: 'Store Manager',
          userName: 'Store Manager',
          userId: 2,
          branch_id: 1,
          branchName: 'Mahiyanganaya Branch'
        };

        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        localStorage.setItem('token', 'mock-token-manager');
        localStorage.setItem('role', userInfo.role);

        window.location.href = '/DashView/storeManager';
        return;
      }

      setError(language === 'ta' ? 'தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்' : 'Invalid email or password');
    } catch (err) {
      console.error('Login error:', err);
      setError(language === 'ta' ? 'உள்நுழைவதில் பிழை ஏற்பட்டது' : 'An error occurred during login');
    } finally {
      setIsLoading(false);
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
          {language === 'ta' ? 'உள்நுழைவு' : 'Login'}
        </h2>
        {error && (
          <div className="text-red-500 text-center mb-4 bg-red-100 p-2 rounded">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center bg-gray-200 p-2 sm:p-3 rounded-lg">
            <FaUser className="text-gray-600 mr-2 sm:mr-3" />
            <input
              type="email"
              placeholder={language === 'ta' ? 'மின்னஞ்சல்' : 'Email'}
              className="bg-transparent flex-1 outline-none text-gray-700 text-sm sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="flex items-center bg-gray-200 p-2 sm:p-3 rounded-lg">
            <FaLock className="text-gray-600 mr-2 sm:mr-3" />
            <input
              type="password"
              placeholder={language === 'ta' ? 'கடவுச்சொல்' : 'Password'}
              className="bg-transparent flex-1 outline-none text-gray-700 text-sm sm:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-2 sm:py-3 rounded-lg hover:bg-yellow-500 transition duration-300 flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black mr-2"></div>
                {language === 'ta' ? 'உள்நுழைகிறது...' : 'Signing in...'}
              </>
            ) : (
              language === 'ta' ? 'உள்நுழைக' : 'Login'
            )}
          </button>
          <p className="text-center text-white mt-2 text-xs sm:text-sm cursor-pointer hover:underline">
            {language === 'ta' ? 'கடவுச்சொல்லை மறந்துவிட்டீர்களா?' : 'Forgot Password?'}
          </p>
          <div className="mt-4 pt-4 border-t border-gray-600">
            <p className="text-center text-white text-xs sm:text-sm mb-2">
              {language === 'ta' ? 'நீங்கள் ஒரு சப்ளையரா?' : 'Are you a supplier?'}
            </p>
            <a
              href="/supplier/login"
              className="block w-full text-center bg-yellow-600 text-white font-semibold py-2 sm:py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
            >
              {language === 'ta' ? 'சப்ளையர் உள்நுழைவு' : 'Supplier Login'}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
