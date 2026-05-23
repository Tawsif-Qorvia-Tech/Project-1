"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogOut = () => {
  const handleLogout = async () => {
    await signOut();
    Swal.fire({
      title: "Logged Out",
      text: "See you soon!",
      icon: "success",
      confirmButtonColor: "oklch(62% 0.14 230)",
    });
  };
  return (
    <button
      className="bg-primary text-white rounded-[22.4px] py-1.5 px-3"
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
};

export default LogOut;
