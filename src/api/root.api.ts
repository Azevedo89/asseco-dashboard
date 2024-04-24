import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { RootState } from 'store/store'

const rootApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: window._env_.API_URL,
    // Headers para todos os pedidos desta api
    prepareHeaders: (headers, { getState, endpoint }) => {
      // THIS IS A FAKE EXAMPLE, CHANGE IT FOR YOUR NEEDS
      const { auth } = getState() as RootState

      if (auth.accessToken && endpoint !== 'login') headers.set('Authorization', `Bearer ${auth.accessToken}`)
      return headers
    },
  }),
  tagTypes: ['Client'],
  endpoints: () => ({}),
})

export default rootApi
