import React, { useState, useEffect } from "react"
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Dashboard from "./Dashboard"
import User from "./User"
import Sales from "./Sales"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { useSelector } from "react-redux"

function App() {
  const { userInfo } = useSelector(state => state.auth)
  const [authenticated, setAuthenticated] = useState(false)
  useEffect(() => {
    if (userInfo) setAuthenticated(true)
    else setAuthenticated(false)
  }, [userInfo])
  return (
    <Router>
      <div className="App">
        {authenticated ? (
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/" element={<User />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        ) : (
          <Routes>
            <Route index element={<Navigate to={"/signup"} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        )}
      </div>
    </Router>
  )
}

export default App
