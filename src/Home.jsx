import React from "react"
import Sidebar from "./Sidebar"
import UserNavbar from "./UserNavbar"
import UserTable from "./UserTable"

const Home = () => {
  return (
    <div class="grid grid-cols-6" style={{ height: "100vh" }}>
      <div class="p-4 col-span-1 border-r border-solid border-light-gray flex justify-center">
        <Sidebar />
      </div>
      <div class="p-4 col-span-5 h-full mr-6">
        <div className="mb-12">
          <UserNavbar />
        </div>

        <div className="title ml-10 text-blue-gray font-semibold text-2xl">
          Users List
        </div>
        <div className="ml-10 mt-10">
          <UserTable />
        </div>
      </div>
    </div>
  )
}

export default Home
