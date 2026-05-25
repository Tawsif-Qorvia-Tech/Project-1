"use client";

import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaBox, FaUser, FaEnvelope, FaChartLine } from "react-icons/fa";

const DashboardClient = ({ leads = [], products = [], users = [] }) => {
  // Process data for charts
  const chartData = useMemo(() => {
    // Leads trend data (last 7 days)
    const leadsByDate = {};
    leads.forEach((lead) => {
      const date = new Date(lead.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      leadsByDate[date] = (leadsByDate[date] || 0) + 1;
    });
    const leadsTrendData = Object.entries(leadsByDate)
      .map(([date, count]) => ({ date, leads: count }))
      .slice(-7);

    // Users by role
    const usersByRole = {};
    users.forEach((user) => {
      const role = user.role || "Unknown";
      usersByRole[role] = (usersByRole[role] || 0) + 1;
    });
    const usersRoleData = Object.entries(usersByRole).map(([name, value]) => ({
      name,
      value,
    }));

    // Products by category
    const productsByCategory = {};
    products.forEach((product) => {
      const category = product.category || "Uncategorized";
      productsByCategory[category] =
        (productsByCategory[category] || 0) + 1;
    });
    const productsCategoryData = Object.entries(productsByCategory).map(
      ([name, value]) => ({ name, value })
    );

    // Recent leads (last 5)
    const recentLeads = leads.slice(-5).reverse();

    // Recent products (last 5)
    const recentProducts = products.slice(-5).reverse();

    return {
      leadsTrendData,
      usersRoleData,
      productsCategoryData,
      recentLeads,
      recentProducts,
    };
  }, [leads, products, users]);

  const COLORS = ["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">
          Monitor your leads, users, and products at a glance
        </p>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Leads Card */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
                Total Leads
              </p>
              <p className="text-4xl font-bold text-gray-800 mt-2">
                {leads.length}
              </p>
            </div>
            <div className="bg-blue-500/20 rounded-full p-4">
              <FaEnvelope className="text-3xl text-blue-600" />
            </div>
          </div>
        </div>

        {/* Total Users Card */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-lg border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wide">
                Total Users
              </p>
              <p className="text-4xl font-bold text-gray-800 mt-2">
                {users.length}
              </p>
            </div>
            <div className="bg-green-500/20 rounded-full p-4">
              <FaUser className="text-3xl text-green-600" />
            </div>
          </div>
        </div>

        {/* Total Products Card */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-lg border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 text-sm font-semibold uppercase tracking-wide">
                Total Products
              </p>
              <p className="text-4xl font-bold text-gray-800 mt-2">
                {products.length}
              </p>
            </div>
            <div className="bg-purple-500/20 rounded-full p-4">
              <FaBox className="text-3xl text-purple-600" />
            </div>
          </div>
        </div>

        {/* Conversion Rate Card */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 shadow-lg border border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-600 text-sm font-semibold uppercase tracking-wide">
                Conversion Rate
              </p>
              <p className="text-4xl font-bold text-gray-800 mt-2">
                {users.length > 0
                  ? ((leads.length / users.length) * 100).toFixed(1)
                  : 0}
                %
              </p>
            </div>
            <div className="bg-orange-500/20 rounded-full p-4">
              <FaChartLine className="text-3xl text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leads Trend Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Leads Trend (Last 7 Days)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData.leadsTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="date" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="leads"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: "#3b82f6", r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Users by Role Pie Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Users by Role
          </h2>
          {chartData.usersRoleData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData.usersRoleData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.usersRoleData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center text-gray-500">
              No user data available
            </div>
          )}
        </div>

        {/* Products by Category Bar Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Products by Category
          </h2>
          {chartData.productsCategoryData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData.productsCategoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f9fafb",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="#8b5cf6"
                  radius={[8, 8, 0, 0]}
                  name="Count"
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center text-gray-500">
              No product data available
            </div>
          )}
        </div>
      </div>

      {/* Recent Data Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Leads</h2>
          {chartData.recentLeads.length > 0 ? (
            <div className="space-y-3">
              {chartData.recentLeads.map((lead, index) => (
                <div
                  key={lead._id}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{lead.name}</p>
                      <p className="text-sm text-gray-600">{lead.email}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Product: {lead.productName}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        lead.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No leads yet</p>
          )}
        </div>

        {/* Recent Products */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Products
          </h2>
          {chartData.recentProducts.length > 0 ? (
            <div className="space-y-3">
              {chartData.recentProducts.map((product) => (
                <div
                  key={product._id}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        ₹{product.price?.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Category: {product.category}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      {product.rating?.average.toFixed(1) || "N/A"} ⭐
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No products yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
