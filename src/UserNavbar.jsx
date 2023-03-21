import React from "react"
import user from "./user1.png"
import SearchIcon from "@mui/icons-material/Search"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"

const UserNavbar = () => {
  return (
    <div className="user--navbar h-12">
      <div className="navbar--container flex items-center justify-between mt-4 ml-10">
        <div className="search flex items-center bg-alice-blue rounded-2xl">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-alice-blue text-sm p-4 rounded-2xl"
            style={{ height: "54px", width: "480px" }}
            id="searchInput"
          />
          <label htmlFor="searchInput" className="cursor-pointer p-4">
            <SearchIcon className="text-cadet-grey hidden sm:block rounded-2xl" />
          </label>
        </div>
        <div className="items flex items-center gap-10">
          <div className="item">
            <NotificationsNoneOutlinedIcon className="text-cadet-grey" />
          </div>
          <div className="item">
            <img
              src={user}
              alt=""
              className="avatar"
              style={{ width: "46px", height: "46px", borderRadius: "23px" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNavbar
