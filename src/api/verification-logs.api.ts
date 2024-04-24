import rootApi from 'api/root.api'

const consultsApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getLogsVerification: builder.query({
      query: (params) => {
        return {
          url: 'logs',
          params: Object.fromEntries(Object.entries(params).filter(([key, value]) => value !== ''))
        }
      },
    }),
  }),
})

export const {
  useLazyGetLogsVerificationQuery
} = consultsApi