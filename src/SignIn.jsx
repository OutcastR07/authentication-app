import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import google from "./google.png"
import apple from "./apple.png"
import { InputAdornment, TextField } from "@mui/material"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import LockIcon from "@mui/icons-material/Lock"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "./auth/authActions"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
  const { loading, userInfo, error, success } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    console.log(email, password)
    const data = { email, password }
    dispatch(userLogin(data))
  }

  useEffect(() => {
    if (userInfo) {
      navigate("/")
    }
  }, [navigate, userInfo])

  return (
    <div className="signIn">
      {/* NAVBAR */}
      <Navbar />

      {/* SIGNIN */}
      <div className="signIn--body flex justify-center items-center flex-col pt-32">
        <h1 class="text-blue-gray font-bold text-2xl pb-5">Sign In</h1>
        <p class="text-light-grayish-blue font-medium text-lg pb-6">
          Welcome back, you've been missed!
        </p>
        <div class="signUp-btn flex gap-x-8">
          <button class="flex justify-center items-center gap-x-2.5 bg-alice-blue px-7 py-3 rounded-xl">
            <img src={google} alt="Google Logo" />
            <span class="text-light-grayish-blue font-medium text-sm">
              Sign Up with Google
            </span>
          </button>
          <button class="flex justify-center items-center gap-x-2.5 bg-alice-blue px-6 py-3 rounded-xl">
            <img src={apple} alt="Apple Logo" />
            <span class="text-light-grayish-blue font-medium text-sm">
              Sign Up with Apple ID
            </span>
          </button>
        </div>
        <div class="flex items-center pt-6 pb-6">
          <hr class="w-52" />
          <p class="text-cadet-grey px-6">OR</p>
          <hr class="w-52" />
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          class="flex justify-center items-center flex-col gap-y-6"
        >
          <div className="email">
            <TextField
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon
                      style={{ fontSize: "20px", color: "#B0B7C3" }}
                    />
                  </InputAdornment>
                ),
              }}
              style={{ width: "520px", height: "58px" }}
            />
          </div>
          <div className="password">
            <TextField
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{ fontSize: "20px", color: "#B0B7C3" }} />
                  </InputAdornment>
                ),
              }}
              style={{ width: "520px", height: "58px" }}
            />
          </div>
          <div className="checkbox flex gap-3">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              value="checkbox"
              className="cursor-pointer w-6 h-6"
            />
            <label
              for="checkbox"
              class="flex items-center text-cadet-grey font-medium"
            >
              Remember Me
            </label>
          </div>
          <div className="signUp--btn">
            <button
              type="submit"
              className="bg-dodger-blue flex justify-center items-center rounded-xl text-white"
              style={{ width: "520px", height: "58px" }}
            >
              {loading ? (
                <div
                  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <div className="account-confirmation">
            <span className="text-cadet-grey font-medium text-sm">
              Don't have and account yet?{" "}
            </span>
            <Link to="/signup">
              <span className="text-dodger-blue font-medium text-sm">
                Sign Up
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
