import rootApi from 'api/root.api';

const consultsApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getLogsVerification: builder.query({
      query: (params) => {
        const adjustedParams = {
          ...params,
          page: params.page ? params.page - 1 : -1
        };
        return {
          url: 'logs',
          params: Object.fromEntries(Object.entries(adjustedParams).filter(([key, value]) => value !== '' && value !== -1))
        }
      },
    }),
  }),
})

export const {
  useLazyGetLogsVerificationQuery
} = consultsApi