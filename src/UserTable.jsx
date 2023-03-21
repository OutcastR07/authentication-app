import React, { useEffect, useState } from "react"
import axios from "axios"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"

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
        <thead class="bg-light-blue-shade">
          <tr>
            <th class="px-6 text-blue-gray align-middle py-3 text-xs whitespace-nowrap font-semibold text-left">
              #ID
            </th>
            <th class="px-6 text-blue-gray align-middle py-3 text-xs whitespace-nowrap font-semibold text-left">
              USER
            </th>
            <th class="px-6 text-blue-gray align-middle py-3 text-xs whitespace-nowrap font-semibold text-left">
              EMAIL
            </th>
            <th class="px-6 text-blue-gray align-middle py-3 text-xs whitespace-nowrap font-semibold text-left">
              OPTIONS
            </th>
          </tr>
        </thead>
        {users.length > 0 && (
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td class="px-6 align-middle text-sm p-4 text-left text-blue-gray font-semibold">
                  {user.id}
                </td>
                <td class="px-6 align-middle text-sm p-4 text-left text-blue-gray font-semibold flex items-center">
                  <div>
                    <img
                      src={user.avatar}
                      alt=""
                      className="mr-5"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                  <div>
                    {user.first_name} {user.last_name}
                  </div>
                </td>
                <td class="px-6 align-middle text-sm p-4 text-left text-blue-gray font-semibold">
                  {user.email}
                </td>
                <td class="px-6 align-middle text-sm p-4 text-left text-cadet-grey font-semibold">
                  <MoreHorizIcon />
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
