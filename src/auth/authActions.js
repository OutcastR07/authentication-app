// authActions.js
import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { backendURL } from "../constants"

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
      const { data } = await axios.post(
        `${backendURL}api/register`,
        { email, password },
        config
      )
      console.log(data)
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
      console.log(data)
      sessionStorage.setItem("userToken", data.token)
      return data
    } catch (error) {
      // return custom error message from API if any
      console.log(error)
    }
  }
)
