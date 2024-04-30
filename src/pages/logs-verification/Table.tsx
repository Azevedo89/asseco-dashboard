import { DetailsSection, Table as T, useTableExpandedRow } from '@asseco-web/ui';
import { Details } from '@asseco-web/ui/atomic';
import { useTranslation } from 'react-i18next';

import type { TableProps, UseTableRowProps } from '@asseco-web/ui';
import type { useLazyGetLogsVerificationQuery } from 'api/verification-logs.api';
import type { Client } from 'types/api.types';

const { DetailsArea } = Details

// Definir o tipo TableRowType compatível com o tipo Client
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
                  { noLeftSpace: true, label: 'apidata', value: row.apidata },
                ],
                [
                  { noLeftSpace: true, label: 'remoteaddr', value: row.remoteaddr },
                  { noLeftSpace: true, label: 'https', value: row.https },
                  { noLeftSpace: true, label: 'servername', value: row.servername },
                  { noLeftSpace: true, label: 'licencekey', value: row.licencekey },
                ],
                [
                  { noLeftSpace: true, label: 'bankaversion', value: row.bankaversion },
                  { noLeftSpace: true, label: 'errormessage', value: row.errormessage },
                  { noLeftSpace: true, label: 'encryption', value: row.encryption },
                  { noLeftSpace: true, label: 'correlationId', value: row.correlationId },
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
