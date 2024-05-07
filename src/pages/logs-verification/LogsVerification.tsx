import { useQueryParams } from '@asseco-web/ui'
import { Surface } from '@asseco-web/ui/atomic'
import { useLazyGetLogsVerificationQuery } from 'api/verification-logs.api'
import { protectComponent } from 'components/ProtectedComponent'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Filters } from './Filters'
import { Table } from './Table'

type Filter = {
  user?: string
}

const LogsVerification = () => {
  const { getParams } = useQueryParams()
  const { t } = useTranslation()
  const [filters, setFilters] = useState<Filter>(getParams())
  const query = useLazyGetLogsVerificationQuery()

  return (
    <Surface>
      <Filters setFilters={setFilters} filters={filters} />
      <Table query={query} filter={filters} />
    </Surface>
  )
}
export default protectComponent(LogsVerification)