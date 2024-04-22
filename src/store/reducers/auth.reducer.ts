import { createSlice } from '@reduxjs/toolkit'
import { authApi } from 'api/auth.api'
import jwtDecode from 'jwt-decode'

import type { DecodedAccessToken } from 'types/accessToken.types'

const initialState = {
  accessToken: '',
  id: '',
  email: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAccessToken: (state) => {
      state.accessToken = ''
      state.id = ''
      state.email = ''
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.accessToken = payload.token
        const decoded = jwtDecode<DecodedAccessToken>(payload.token)
        state.email = decoded.email
        state.id = decoded.sub
      })
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        authSlice.caseReducers.clearAccessToken(state)
      })
  },
})

export default authSlice.reducer

export const { clearAccessToken } = authSlice.actions
