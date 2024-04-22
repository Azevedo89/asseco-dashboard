import rootApi from 'api/root.api'

export const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ ...params }) => ({
        url: `/api/v1/auth/authenticate`,
        method: 'POST',
        body: { ...params },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `logout`,
        method: 'POST',
      }),
    }),
  }),
})
export const { useLoginMutation, useLogoutMutation } = authApi
