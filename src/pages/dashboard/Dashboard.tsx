import { Surface } from '@asseco-web/ui/atomic'
import { protectComponent } from 'components/ProtectedComponent'
import { useTranslation } from 'react-i18next'

const Dashboard = () => {
    const { t } = useTranslation()

    return <Surface>{t('dashboard')}</Surface>
}

export default protectComponent(Dashboard)