import Dashboard from "@/components/dashboard/Dashboard";
import React from "react";

const page = () => {
  return (
    <div className="p-6 min-h-screen bg-[#f5e6f5]">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">My Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here&apos;s an overview of your products and leads.
        </p>
      </div>
      <Dashboard />
    </div>
  );
};

export default page;
