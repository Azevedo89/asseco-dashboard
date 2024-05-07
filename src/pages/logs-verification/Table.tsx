import { DetailsSection, Table as T, useTableExpandedRow } from '@asseco-web/ui';
import { Details } from '@asseco-web/ui/atomic';
import { useTranslation } from 'react-i18next';

import type { TableProps, UseTableRowProps } from '@asseco-web/ui';
import type { useLazyGetLogsVerificationQuery } from 'api/verification-logs.api';
import type { Client } from 'types/api.types';

const { DetailsArea } = Details

type TableRowType = Client;

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

  const renderRowDetails = (row: TableRowType) => {
    return (
      <DetailsArea expandedRowSubComponent>
        <DetailsSection
          columns={[
            {
              rows: [
                [
                  { noLeftSpace: true, label: 'remoteaddr', value: row.remoteaddr },
                  { noLeftSpace: true, label: 'https', value: row.https },
                  { noLeftSpace: true, label: 'servername', value: row.servername },
                  { noLeftSpace: true, label: 'licencekey', value: row.licencekey },
                ],
                [
                  { noLeftSpace: true, label: 'bankaversion', value: row.bankaversion },
                  { noLeftSpace: true, label: 'encryption', value: row.encryption },
                  { noLeftSpace: true, label: 'correlationId', value: row.correlationId },
                ],
                [
                  {
                    noLeftSpace: true,
                    label: 'errormessage',
                    value: (
                      <div>
                        <ul>
                          {Object.entries(JSON.parse(row.errormessage || '{}')).map(([key, value]) => (
                            <li key={key}>
                              <strong>{key}:</strong> {String(value)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  },
                ],
                [
                  {
                    noLeftSpace: true,
                    label: 'apidata',
                    value: (
                      <div>
                        <ul>
                          {Object.entries(JSON.parse(row.apidata || '{}')).map(([key, value]) => (
                            <li key={key}>
                              <strong>{key}:</strong> {String(value)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  },
                ],
              ],
            },
          ]}
        />
      </DetailsArea>
    );
  };

  return (
    <div>
      <T
        columns={[
          {
            accessor: 'id',
            Header: t('id'),
          },
          {
            accessor: 'date',
            Header: t('date'),
          },
          {
            accessor: 'time',
            Header: t('time'),
          },
          {
            accessor: 'io',
            Header: t('io'),
          },
          {
            accessor: 'user',
            Header: t('user'),
          },
          {
            accessor: 'station',
            Header: t('station'),
          },
          {
            accessor: 'system',
            Header: t('system'),
          },
          {
            accessor: 'application',
            Header: t('application'),
          },
          {
            accessor: 'sessionid',
            Header: t('sessionid'),
          },
          {
            accessor: 'api',
            Header: t('api'),
          },
          {
            accessor: 'transaction',
            Header: t('transaction'),
          },
          {
            accessor: 'errorcode',
            Header: t('errorcode'),
          },

        ]}
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
            renderRowSubComponent: ({ row }: { row: UseTableRowProps<TableRowType> }) => renderRowDetails(row.original),
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
