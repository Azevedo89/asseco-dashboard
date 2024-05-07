import { Surface } from '@asseco-web/ui/atomic'
import { useGetDashboardDataQuery } from 'api/dashboard.api'
import { protectComponent } from 'components/ProtectedComponent'
import { useTranslation } from 'react-i18next'

const Dashboard = () => {
    const { t } = useTranslation()

    const { data: dashboardData, isFetching, isError } = useGetDashboardDataQuery({})
    console.log(dashboardData)
    if (isError) return <div>Erro ao carregar os dados do dashboard</div>

    if (isFetching) {
        return <div>Loading...</div>;
    }

    const { logsCount, usersCount, apiTypes, transactionTypes, oldestDate, latestDate } = dashboardData;

    return (
        <Surface>
            <h2>{t('dashboard')}</h2>
            <p>Total de Logs: {logsCount.body}</p>
            <p>Total de Usuários: {usersCount.body}</p>
            <p>Data mais antiga: {oldestDate.body}</p>
            <p>Data mais recente: {latestDate.body}</p>
        </Surface>
    )
}

export default protectComponent(Dashboard)
