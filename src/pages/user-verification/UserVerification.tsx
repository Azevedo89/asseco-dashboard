import { FilterPrompt, useQueryParams } from '@asseco-web/ui'
import { Surface } from '@asseco-web/ui/atomic'
import { useLazyGetUserVerificationQuery } from 'api/verification-user.api'
import { protectComponent } from 'components/ProtectedComponent'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Filters } from './Filters'
import { Table } from './Table'

type Filter = {
  user?: string
}

const UserVerification = () => {
  const { getParams } = useQueryParams()
  const { t } = useTranslation()
  const [filters, setFilters] = useState<Filter>(getParams())
  const query = useLazyGetUserVerificationQuery()

  return (
    <Surface>
      <Filters setFilters={setFilters} filters={filters} />
      {!filters.user ? (
        <FilterPrompt message={t('pleaseSetCCInfo')} />
      ) : (
        <Table query={query} filter={filters} />
      )}
    </Surface>
  )
}
export default protectComponent(UserVerification)