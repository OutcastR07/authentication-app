import React, { useState } from "react"
import UserTable from "./UserTable"
import Sidebar from "./Sidebar"
import UserNavbar from "./UserNavbar"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft"
import ReactPaginate from "react-paginate"
import "./User.css"

const User = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage)
  }

  const handleDoubleArrowClick = isNext => {
    let newPage = isNext ? currentPage + 2 : currentPage - 2
    setCurrentPage(newPage)
  }

  return (
    <div className="grid grid-cols-6" style={{ height: "100vh" }}>
      <div className="p-4 col-span-1 border-r border-solid border-light-gray flex justify-center">
        <Sidebar />
      </div>
      <div className="p-4 col-span-5 h-full mr-6">
        <div className="mb-12">
          <UserNavbar />
        </div>

        <div className="title ml-10 text-blue-gray font-semibold text-2xl">
          Users List
        </div>
        <div className="ml-10 mt-10">
          <div>
            <UserTable page={currentPage + 1} />
          </div>
          <div className="mt-14 flex items-center justify-start">
            <button
              className={`p-3 mr-3 double-arrow ${
                currentPage === 0 ? "text-gray-500" : "text-button-text-color"
              } font-semibold rounded ${
                currentPage === 0 ? "cursor-not-allowed" : "bg-white"
              }`}
              onClick={() => handleDoubleArrowClick(false)}
              disabled={currentPage === 0}
            >
              <KeyboardDoubleArrowLeftIcon />
            </button>
            <div className="pagination-wrapper cursor-pointer">
              <ReactPaginate
                previousLabel={<KeyboardArrowLeftIcon />}
                nextLabel={<KeyboardArrowRightIcon />}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={10}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
                pageClassName={"page-item"}
                className="flex items-center gap-x-4"
                forcePage={currentPage}
              />
            </div>

            <button
              className={`p-3 ml-3 double-arrow ${
                currentPage === 8 ? "text-gray-500" : "text-button-text-color"
              } font-semibold rounded ${
                currentPage === 8 ? "cursor-not-allowed" : "bg-white"
              }`}
              onClick={() => handleDoubleArrowClick(true)}
              disabled={currentPage === 8}
            >
              <KeyboardDoubleArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
