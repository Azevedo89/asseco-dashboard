import { FilterPrompt, useQueryParams } from '@asseco-web/ui'
import { Surface } from '@asseco-web/ui/atomic'
import { useLazyGetClientsQuery } from 'api/consult.api'
import { protectComponent } from 'components/ProtectedComponent'
import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Filters } from './components/ConsultPreFilter'
import { Table } from './components/ConsultTable'

const PreSearch = () => {
  const { getParams } = useQueryParams()
  const { t } = useTranslation()
  const [filters, setFilters] = useState(getParams())
  const query = useLazyGetClientsQuery()
  const [trigger, status] = query

  useEffect(() => {
    if (!isEmpty(filters) && status.isUninitialized) trigger({ page: 1, pageSize: 20, ...filters })
  }, [filters])

  return (
    <Surface>
      <Filters setFilters={setFilters} filters={filters} />
      {status.isUninitialized ? (
        <FilterPrompt message={t('pleaseSetCCInfo')} />
      ) : (
        <Table query={query} filter={filters} />
      )}
    </Surface>
  )
}
export default protectComponent(PreSearch)
