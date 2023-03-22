// authActions.js
import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { backendURL } from "../constants"

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password }, { rejectWithValue }) => {
    console.log("I am here")
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
      await axios.post(`${backendURL}api/register`, { email, password }, config)
    } catch (error) {
      console.log(error)
    }
  }
)

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
      const { data } = await axios.post(
        `${backendURL}api/login`,
        { email, password },
        config
      )
      // store user's token in local storage
      localStorage.setItem("userToken", data.userToken)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
