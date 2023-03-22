import React, { useEffect, useState } from "react"
import axios from "axios"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import "./UserTable.css"

const UserTable = ({ page }) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then(res => {
      console.log(res.data)
      setUsers(res.data.data)
    })
  }, [page])
  return (
    <div class="block w-full overflow-x-auto">
      <table class="items-center w-full border-collapse ">
        <thead class="table-header">
          <tr>
            <th className="table-cell">#ID</th>
            <th className="table-cell">USER</th>
            <th className="table-cell">EMAIL</th>
            <th className="table-cell">OPTIONS</th>
          </tr>
        </thead>
        {users.length > 0 && (
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="table-row">
                <td className="table-cell">{user.id}</td>
                <td className="table-cell">
                  <div className="user-info">
                    <img src={user.avatar} alt="" className="user-avatar" />
                    <div className="user-name">
                      {user.first_name} {user.last_name}
                    </div>
                  </div>
                </td>
                <td className="table-cell">{user.email}</td>
                <td className="table-cell">
                  <div className="options-ui">
                    <MoreHorizIcon />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  )
}

export default UserTable
