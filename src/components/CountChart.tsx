"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

// Define user type
interface User {
  branch_id: number;
  // other properties if necessary
}

const CountChart = () => {
  const [data, setData] = useState([
    { name: "Total", count: 0, fill: "#F7CFD8" },
    { name: "Mahiyangana", count: 0, fill: "#AA60C8" },
    { name: "Mahaoya", count: 0, fill: "#BE5985" },
  ]);

  useEffect(() => {
    const fetchEmployeeCounts = async () => {
      try {
        // Fetch employee data
        const response = await fetch("http://localhost:3002/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const users: User[] = await response.json();

        // Debug: Check the data being returned
        console.log("Fetched users:", users);

        if (users.length === 0) {
          console.warn("No users found for the branches.");
        }

        // Count employees by branch_id
        const mahiyanganaCount = users.filter((user) => user.branch_id === 1).length;
        const mahaoyaCount = users.filter((user) => user.branch_id === 2).length;

        // Debug: Check counts
        console.log("Mahiyangana count:", mahiyanganaCount);
        console.log("Mahaoya count:", mahaoyaCount);

        // Update the data state with the fetched counts
        const totalCount = users.length;
        setData([
          { name: "Total", count: totalCount, fill: "#F7CFD8" },
          { name: "Mahiyangana", count: mahiyanganaCount, fill: "#AA60C8" },
          { name: "Mahaoya", count: mahaoyaCount, fill: "#BE5985" },
        ]);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployeeCounts();
  }, []);

  return (
    <div className="bg-[#FFF6BD] rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Employees</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="chart icon"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#BE5985] rounded-full" />
          <h1 className="font-bold">{data[1]?.count}</h1>
          <h2 className="text-xs text-bold-black">Mahiyangana Branch ({Math.round((data[1]?.count / data[0]?.count) * 100)}%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#AA60C8] rounded-full" />
          <h1 className="font-bold">{data[2]?.count}</h1>
          <h2 className="text-xs text-bold-black">MahaOya Branch({Math.round((data[2]?.count / data[0]?.count) * 100)}%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
