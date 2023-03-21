import React, { useState } from "react"
import UserTable from "./UserTable"
import Sidebar from "./Sidebar"
import UserNavbar from "./UserNavbar"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft"

const User = () => {
  const [page, setPage] = useState(1)

  const nextPage = () => {
    setPage(page + 1)
  }
  const nextPageDouble = () => {
    setPage(page + 2)
  }

  const prevPage = () => {
    setPage(page - 1)
  }
  const prevPageDouble = () => {
    setPage(page - 2)
  }

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
          <UserTable page={page} />
          <div className="mt-14 flex justify-start items-center gap-x-2">
            <button
              onClick={prevPageDouble}
              disabled={page === 1}
              style={{
                height: "32px",
                width: "32px",
                borderRadius: "8px",
                border: "1px solid #F1F1F1",
                color: "#333",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <KeyboardDoubleArrowLeftIcon
                style={{ width: "16px", height: "16px" }}
              />
            </button>
            <button
              onClick={prevPage}
              disabled={page === 1}
              style={{
                height: "32px",
                width: "32px",
                borderRadius: "8px",
                border: "1px solid #F1F1F1",
                color: "#333",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <KeyboardArrowLeftIcon
                style={{ width: "16px", height: "16px" }}
              />
            </button>
            <button
              style={{
                height: "32px",
                width: "32px",
                borderRadius: "8px",
                border: "1px solid #F1F1F1",
                color: "#333",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="font-semibold text-sm">1</span>
            </button>
            <button
              style={{
                height: "32px",
                width: "32px",
                borderRadius: "8px",
                border: "1px solid #F1F1F1",
                color: "#333",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="font-semibold text-sm">2</span>
            </button>
            <button
              style={{
                height: "32px",
                width: "32px",
                borderRadius: "8px",
                border: "1px solid #F1F1F1",
                color: "#333",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="font-semibold text-sm">3</span>
            </button>
            <button
              style={{
                height: "32px",
                width: "32px",
                borderRadius: "8px",
                border: "1px solid #F1F1F1",
                color: "#333",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="font-semibold text-sm">...</span>
            </button>
            <button
              style={{
                height: "32px",
                width: "32px",
                borderRadius: "8px",
                border: "1px solid #F1F1F1",
                color: "#333",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className="font-semibold text-sm">10</span>
            </button>
            <button
              onClick={nextPage}
              disabled={page >= 10}
              style={{
                height: "32px",
                width: "32px",
                borderRadius: "8px",
                border: "1px solid #F1F1F1",
                color: "#333",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <KeyboardArrowRightIcon
                style={{ width: "16px", height: "16px" }}
              />
            </button>
            <button
              onClick={nextPageDouble}
              disabled={page >= 10}
              style={{
                height: "32px",
                width: "32px",
                borderRadius: "8px",
                border: "1px solid #F1F1F1",
                color: "#333",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <KeyboardDoubleArrowRightIcon
                style={{ width: "16px", height: "16px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
