import React from "react"
import Sidebar from "./Sidebar"

const Home = () => {
  return (
    <div class="grid grid-cols-6" style={{ height: "100vh" }}>
      <div class="p-4 col-span-1 border-r border-solid border-light-gray flex justify-center">
        <Sidebar />
      </div>
      <div class="p-4 col-span-5 h-full">Main content</div>
    </div>
  )
}

export default Home
