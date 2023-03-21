import React from "react"
import paperStack from "./paperStack.png"
import DashboardIcon from "@mui/icons-material/Dashboard"
import PersonIcon from "@mui/icons-material/Person"
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col mt-5">
      <div className="sidebar--logo flex gap-2.5">
        <img src={paperStack} alt="Paper Stack Image" />
        <span className="sidebarLogo--text text-slate-blue font-bold text-2xl">
          Stack
        </span>
      </div>
      <div className="lists flex mt-10">
        <ul>
          <li>
            <span className="font-medium text-cadet-grey text-xs">PAGES</span>
          </li>
          <li className="flex items-center mt-4 hover:bg-alice-blue w-56 h-12 p-4 rounded-xl cursor-pointer">
            <DashboardIcon className="text-cadet-grey h-4 w-4" />
            <span className="ml-4 text-sm font-medium text-grayish-blue">
              Dashboard
            </span>
          </li>
          <li className="flex items-center mt-4 hover:bg-alice-blue w-56 h-12 p-4 rounded-xl cursor-pointer">
            <PersonIcon className="text-cadet-grey h-4 w-4" />
            <span className="ml-4 text-sm font-medium text-grayish-blue">
              Users
            </span>
          </li>
          <li className="flex items-center mt-4 hover:bg-alice-blue w-56 h-12 p-4 rounded-xl cursor-pointer">
            <ReceiptLongIcon className="text-cadet-grey h-4 w-4" />
            <span className="ml-4 text-sm font-medium text-grayish-blue">
              Sales
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
