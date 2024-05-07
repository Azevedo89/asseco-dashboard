import rootApi from 'api/root.api';

const dashboardApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardData: builder.query({
            query: () => ({
                url: 'logs/dashboard',
            }),
        }),
    }),
});

export const { useGetDashboardDataQuery } = dashboardApi;
