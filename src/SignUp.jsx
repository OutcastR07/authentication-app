import React, { useEffect } from "react"
import Navbar from "./Navbar"
import google from "./google.png"
import apple from "./apple.png"
import { InputAdornment, TextField } from "@mui/material"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt"
import LockIcon from "@mui/icons-material/Lock"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "./auth/authActions"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [passwordStrength, setPasswordStrength] = useState(0)

  const { loading, userInfo, error, success } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  function checkPasswordStrength(password) {
    let strength = 0

    // Checking for at least 8 characters
    if (password.length >= 8) {
      strength++
    }

    // Checking for at least one lowercase letter
    if (/[a-z]/.test(password)) {
      strength++
    }

    // Checking for at least one uppercase letter
    if (/[A-Z]/.test(password)) {
      strength++
    }

    // Checking for at least one number
    if (/[0-9]/.test(password)) {
      strength++
    }

    // Checking for at least one special character
    if (/[$@$!%*?&]/.test(password)) {
      strength++
    }

    return strength
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
    setPasswordStrength(checkPasswordStrength(event.target.value))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(email, name, password)
    const data = { email, name, password }
    dispatch(registerUser(data))
  }

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate("/signin")
  }, [navigate, success])

  return (
    <div class="signUp">
      {/* NAVBAR */}
      <Navbar />

      {/* SIGNUP BODY */}
      <div class="signUp--body flex justify-center items-center flex-col pt-32">
        <h1 class="text-blue-gray font-bold text-2xl pb-5">Getting Started</h1>
        <p class="text-light-grayish-blue font-medium text-lg pb-6">
          Create an account to continue!
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
          class="flex justify-center items-center flex-col gap-y-6"
          onSubmit={handleSubmit}
        >
          <div className="email">
            <TextField
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={event => setEmail(event.target.value)}
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
          <div className="name">
            <TextField
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={event => setName(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SentimentSatisfiedAltIcon
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
              onChange={handlePasswordChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{ fontSize: "20px", color: "#B0B7C3" }} />
                  </InputAdornment>
                ),
              }}
              style={{ width: "520px", height: "58px" }}
            />
            {password.length > 0 && (
              <div className="indicator flex justify-center-between h-1 items-center mx-2 mt-5">
                <span
                  className={`weak h-full w-full ${
                    passwordStrength >= 1 ? "bg-green-lizard" : "bg-gray-200"
                  } rounded-md mx-3`}
                ></span>
                <span
                  className={`fair h-full w-full ${
                    passwordStrength >= 2 ? "bg-green-lizard" : "bg-gray-200"
                  } rounded-md mx-3`}
                ></span>
                <span
                  className={`good h-full w-full ${
                    passwordStrength >= 3 ? "bg-green-lizard" : "bg-gray-200"
                  } rounded-md mx-3`}
                ></span>
                <span
                  className={`strong h-full w-full ${
                    passwordStrength >= 4 ? "bg-green-lizard" : "bg-gray-200"
                  } rounded-md mx-3`}
                ></span>
                <span
                  className={`veryStrong h-full w-full ${
                    passwordStrength === 5 ? "bg-green-lizard" : "bg-gray-200"
                  } rounded-md mx-3`}
                ></span>
              </div>
            )}
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
              I agree to the Terms and Conditions
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
                "Sign Up"
              )}
            </button>
          </div>
          <div className="account-confirmation">
            <span className="text-cadet-grey font-medium text-sm">
              Already have an account?{" "}
            </span>
            <Link to="/signin" className="link">
              <span className="text-dodger-blue font-medium text-sm">
                Sign In
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
