"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiFileOn } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PiMoneyWavy } from "react-icons/pi";

const Sidebar = () => {
     const pathname = usePathname();
  return (
    <div className="flex min-h-full flex-col items-start bg-[#f5e6f5] is-drawer-close:w-14 is-drawer-open:w-64">
      <ul className="menu w-full grow">
        <li>
          <Link
            href="/"
            className="flex items-center gap-3 is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Homepage"
          >
            <FaArrowLeft />
            <span className="is-drawer-close:hidden font-bold">HomePage</span>
          </Link>

          <Link
            href="/dashboard"
            className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${
              pathname === "/dashboard" ? "bg-primary text-primary-content" : ""
            }`}
            data-tip="Dashboard Home"
          >
            <IoHomeOutline
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            />
            <span className="is-drawer-close:hidden">Dashboard Home</span>
          </Link>

          <Link
            className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${
              pathname === "/dashboard/products-management"
                ? "bg-primary text-primary-content"
                : ""
            }`}
            data-tip="Products Management"
            href={"/dashboard/products-management"}
          >
            <AiOutlineProduct

              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            />
            <span className="is-drawer-close:hidden">Products Management</span>
          </Link>

          <Link
            className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${
              pathname === "/dashboard/users-management"
                ? "bg-primary text-primary-content"
                : ""
            }`}
            data-tip="Users Management"
            href={"/dashboard/users-management"}
          >
            <HiOutlineUserGroup
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            />
            <span className="is-drawer-close:hidden">Users Management</span>
          </Link>
          <Link
            className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${
              pathname === "/dashboard/myProfile"
                ? "bg-primary text-primary-content"
                : ""
            }`}
            data-tip="My Profile"
            href={"#"}
          >
            <CgProfile
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            ></CgProfile>
            <span className="is-drawer-close:hidden">My Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
