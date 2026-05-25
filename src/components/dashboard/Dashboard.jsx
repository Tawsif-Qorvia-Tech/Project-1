import { getLeads } from "@/actions/server/Leads";
import { getProducts } from "@/actions/server/Product";
import { getUsers } from "@/actions/server/User";
import React from "react";
import DashboardClient from "./DashboardClient";

const Dashboard = async() => {
  const leads = await getLeads();
  const products = await getProducts();
  const users = await getUsers();

  return (
    <DashboardClient 
      leads={leads} 
      products={products} 
      users={users} 
    />
  );
};

export default Dashboard;