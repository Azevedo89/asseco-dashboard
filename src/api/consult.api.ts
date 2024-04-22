import rootApi from 'api/root.api'
import type { Client, ClientsResponse, CountriesResponse } from 'types/api.types'

const consultsApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getClients: builder.query<ClientsResponse, { page: number; pageSize: number }>({
      query: (params) => {
        const { page = 1, pageSize = 20, ...rest } = params
        return {
          url: 'clients',
          params: { _page: page, _limit: pageSize, ...rest },
        }
      },
      transformResponse: (apiResponse: Client[], meta) => {
        return { clients: apiResponse, totalCount: Number(meta?.response?.headers.get('X-Total-Count')) }
      },
      providesTags: ['Client'],
    }),
    getClient: builder.query({
      query: (id) => ({
        url: `clients/${id}`,
        // params: { _expand: '' },
      }),
      providesTags: ['Client'],
    }),
    getAccounts: builder.query({
      query: (params) => ({
        url: 'accounts',
        params: { ...params },
      }),
    }),
    createClient: builder.mutation({
      query: ({ ...params }) => ({
        url: `clients`,
        method: 'POST',
        body: { ...params },
      }),
      invalidatesTags: ['Client'],
    }),
    updateClient: builder.mutation({
      query: ({ ...params }) => ({
        url: `clients/${params.id}`,
        method: 'PUT',
        body: { ...params },
      }),
      invalidatesTags: ['Client'],
    }),
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `clients/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Client'],
    }),
    getCountries: builder.query<CountriesResponse, void>({
      query: () => ({
        url: 'countries',
      }),
    }),
  }),
})

export const {
  useGetClientsQuery,
  useLazyGetClientsQuery,
  useGetClientQuery,
  useGetAccountsQuery,
  useCreateClientMutation,
  useUpdateClientMutation,
  useDeleteClientMutation,
  useGetCountriesQuery,
} = consultsApi
