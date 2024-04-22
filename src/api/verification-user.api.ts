import rootApi from 'api/root.api'

const consultsApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserVerification: builder.query({
      query: (params) => {
        return {
          url: 'logs',
          params,
        }
      },
    }),
  }),
})

export const {
  useLazyGetUserVerificationQuery
} = consultsApi