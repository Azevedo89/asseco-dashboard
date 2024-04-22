import { useQueryParams } from '@asseco-web/ui'
import { Surface } from '@asseco-web/ui/atomic'
import { AddOutlined } from '@mui/icons-material'
import { useLazyGetClientsQuery } from 'api/consult.api'
import { protectComponent } from 'components/ProtectedComponent'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Filters } from './components/ConsultFilters'
import { Table } from './components/ConsultTable'

const Search = () => {
  const { getParams } = useQueryParams()
  const { t } = useTranslation()
  const [filters, setFilters] = useState(getParams())
  const navigate = useNavigate()
  const query = useLazyGetClientsQuery()

  return (
    <Surface>
      <Filters setFilters={setFilters} filters={filters} />
      <Table
        query={query}
        actions={[{ startIcon: <AddOutlined />, label: t('createEntity'), onClick: () => navigate('/consult/create') }]}
        filter={filters}
      />
    </Surface>
  )
}
export default protectComponent(Search)
