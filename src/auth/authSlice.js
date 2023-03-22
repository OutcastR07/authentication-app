// authSlice.js
import { createSlice } from "@reduxjs/toolkit"
import { registerUser, userLogin } from "./authActions"

// initialize userToken from local storage
const userToken = sessionStorage.getItem("userToken")
  ? sessionStorage.getItem("userToken")
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [userLogin.pending]: state => {
      state.loading = true
      //   state.success = false
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      //   state.success = true
      state.userInfo = payload
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      //   state.success = false
      state.error = payload
    },
    // register user
    [registerUser.pending]: state => {
      //   state.success = false
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      //   state.success = false
      state.loading = false
      state.error = payload
    },
  },
})
export default authSlice.reducer
