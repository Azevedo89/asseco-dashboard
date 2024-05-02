import rootApi from 'api/root.api';

const consultsApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardData: builder.query({
            query: () => {
                return {
                    url: 'logs/dashboard',
                }
            },
        }),
    }),
});

export const {
    useGetDashboardDataQuery,
} = consultsApi;
