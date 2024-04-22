import { Table as T } from '@asseco-web/ui'
import { TablePreview } from 'pages/consult/components/ConsultTablePreview'
import { useClientMenuOptions } from 'pages/consult/hooks/useClientMenuOptions'
import { useTranslation } from 'react-i18next'

import type { TableProps } from '@asseco-web/ui'
import type { useLazyGetClientsQuery } from 'api/consult.api'
import type { Client } from 'types/api.types'

export const Table = ({
  query,
  actions,
  filter,
}: {
  query: ReturnType<typeof useLazyGetClientsQuery>
  actions?: TableProps<Client>['actions']
  filter?: object
}) => {
  const { t } = useTranslation()

  const { clientMenuOptions, clientMenuDialogs } = useClientMenuOptions()

  const tableCols = [
    {
      accessor: 'cc',
      Header: t('cc'),
    },
    {
      accessor: 'firstName',
      Header: t('firstName'),
    },
    {
      accessor: 'lastName',
      Header: t('lastName'),
    },
    {
      accessor: 'email',
      Header: t('email'),
    },
    {
      accessor: 'sex',
      Header: t('sex'),
    },
  ]

  return (
    <>
      <T
        columns={tableCols}
        actions={actions}
        query={query}
        filter={filter}
        mappings={{ totalElements: 'totalCount', data: 'clients' }}
        contextMenu={clientMenuOptions}
        preview={{ render: TablePreview }}
      />
      {clientMenuDialogs}
    </>
  )
}

Table.defaultProps = {
  actions: [],
  filter: {},
}
