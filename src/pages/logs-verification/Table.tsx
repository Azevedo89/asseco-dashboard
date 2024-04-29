import { DetailsSection, Table as T, useTableExpandedRow } from '@asseco-web/ui';
import { Details } from '@asseco-web/ui/atomic';
import { useTranslation } from 'react-i18next';

import type { TableProps } from '@asseco-web/ui';
import type { useLazyGetLogsVerificationQuery } from 'api/verification-logs.api';
import type { Client } from 'types/api.types';

const { DetailsArea } = Details


export const Table = ({
  query,
  actions,
  filter,
}: {
  query: ReturnType<typeof useLazyGetLogsVerificationQuery>
  actions?: TableProps<Client>['actions']
  filter?: object
}) => {
  const { t } = useTranslation()

  const tableCols = [
    {
      accessor: 'id',
      Header: t('id'),
    },
    {
      accessor: 'system',
      Header: t('system'),
    },
    {
      accessor: 'api',
      Header: t('API'),
    },
    {
      accessor: 'sessionid',
      Header: t('sessionId'),
    },
    {
      accessor: 'transaction',
      Header: t('transaction'),
    },
    {
      accessor: 'errorcode',
      Header: t('errorcode'),
    },
    {
      accessor: 'io',
      Header: t('io'),
    },
  ]


  return (
    <div>
      <T
        columns={tableCols}
        actions={actions}
        query={query}
        filter={filter}
        mappings={{ totalElements: 'totalElements', data: 'content' }}
        /** onRowClick={handleRowClick} */
        useTableOptions={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          expandedRow: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            renderRowSubComponent: ({ row }) => {
              return (
                <DetailsArea expandedRowSubComponent>
                  <DetailsSection
                    columns={[
                      {
                        rows: [
                          [
                            { noLeftSpace: true, label: 'correlationId', value: row.original.correlationId },
                            { noLeftSpace: true, label: 'bankaversion', value: row.original.bankaversion },
                            { noLeftSpace: true, label: 'errormessage', value: row.original.errormessage },
                          ],
                        ],
                      },
                    ]}
                  />
                </DetailsArea>
              )
            },
          },
        }}
        hooks={[useTableExpandedRow]}
      />
    </div>
  )
}

Table.defaultProps = {
  actions: [],
  filter: {},
}