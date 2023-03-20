import React from "react"
import paperStack from "./paperStack.png"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const Navbar = () => {
  return (
    <div class="navbar--container flex justify-between mt-7">
      <div class="navbar--logo flex items-end pl-20">
        <img
          src={paperStack}
          alt="Paper Stack Image"
          class="navbar--image pr-2.5"
        />
        <span class="navbar--text text-slate-blue font-bold text-2xl">
          Stack
        </span>
      </div>
      <div class="btn--container pr-20">
        <button class="navbar--btn bg-light-blue-grey py-2.5 pl-3.5 flex items-center rounded-2xl">
          <span class="navbar--btn-text text-cadet-grey font-medium text-xs pr-6">
            English(UK)
          </span>
          <span class="pr-2">
            <ExpandMoreIcon class="w-6 h-6" style={{ fill: "#B0B7C3" }} />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
