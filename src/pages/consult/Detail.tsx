import { useFormatters } from '@asseco-web/formatters'
import { DetailsContainer, DetailsSection, Table, alert } from '@asseco-web/ui'
import { BarChart, Chip, Col, Details, GaugeChart, Row, Surface } from '@asseco-web/ui/atomic'
import { faker } from '@faker-js/faker'
import { CallMade, Menu } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { useGetAccountsQuery, useGetClientQuery } from 'api/consult.api'
import { protectComponent } from 'components/ProtectedComponent'
import Loading from 'components/loading/Loading'
import { format, startOfMonth, subMonths } from 'date-fns'
import ClientError from 'pages/consult/components/ClientError'
import { useClientMenuOptions } from 'pages/consult/hooks/useClientMenuOptions'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import type { BarChartOptions } from '@asseco-web/ui/atomic'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import type { Client } from 'types/api.types'

const { AlertButtons } = Details

export const ClientAccountsTab = ({ id }: Partial<Client>) => {
  const { data, isFetching } = useGetAccountsQuery({ clientId: id })
  const { t } = useTranslation()

  return (
    <Table
      columns={[
        { Header: t('account'), accessor: 'accountName' },
        { Header: t('number'), accessor: 'accountNumber' },
        { Header: t('amount'), accessor: 'amount' },
        { Header: t('iban'), accessor: 'iban' },
      ]}
      data={data}
      loading={isFetching}
    />
  )
}

const BalanceHistory = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const font = {
    family: theme.typography.fontFamily,
  }

  const chartOptions: BarChartOptions = {
    responsive: true,
    aspectRatio: 3,
    scales: {
      x: {
        ticks: {
          font,
        },
      },
      y: {
        ticks: {
          font,
          callback: (v) => `€ ${v}`,
          stepSize: 100,
        },
      },
    },
    plugins: {
      tooltip: {
        titleFont: font,
        bodyFont: font,
        callbacks: {
          label: ({ dataset, formattedValue }) => `${dataset.label}: € ${formattedValue}`,
        },
      },
      legend: {
        position: 'bottom',
        labels: {
          font,
        },
      },
    },
  }

  const labels = Array(6)
    .fill(startOfMonth(new Date()))
    .map((v, i) => subMonths(v, i))
    .map((v) => format(v, 'MMM yy'))
    .reverse()

  const chartData = {
    labels,
    datasets: [
      {
        label: t('credits'),
        data: labels.map(() => faker.datatype.number({ min: 700, max: 1000 })),
        backgroundColor: theme.palette.primary.main,
      },
      {
        label: t('debits'),
        data: labels.map(() => faker.datatype.number({ min: 300, max: 1000 })),
        backgroundColor: theme.palette.secondary.main,
      },
    ],
  }

  return <BarChart options={chartOptions} data={chartData} />
}

const Gauge = () => {
  const theme = useTheme()
  const chartProps = {
    arcWidth: 0.3,
    arcPadding: 0.05,
    arcsLength: [3, 1],
    colors: [theme.palette.primary.main, theme.palette.secondary.main],
  }
  return (
    <GaugeChart w={6 / 12} {...chartProps}>
      75%
    </GaugeChart>
  )
}

const ClientGeneralInfo = ({ data }: { data: Client }) => {
  const { t } = useTranslation()
  const { formatDate } = useFormatters()

  const onClick = () => {
    alert.success('clicked')
  }

  return (
    <>
      <DetailsSection
        columns={[
          {
            header: t('personalInformation'),
            rows: [
              [
                {
                  label: t('birthDate'),
                  value: data?.birthDate && formatDate(data.birthDate, { pattern: 'yyyy-MM-dd' }),
                },
                { label: t('nif'), value: data?.nif },
              ],
              [
                { label: t('birthPlace'), value: data?.naturality },
                { icon: <Menu />, label: t('address'), value: data?.address },
              ],
              [{ label: t('biTitleResidence'), value: data?.cc }],
            ],
          },
          {
            rows: [
              {
                segments: [
                  { label: t('profileManagerEndDate'), value: 'RPASSALACQ / 15-05-2019' },
                  { icon: <Menu />, label: t('exchangeRate') },
                ],
                subtitle: t('entityProfile'),
              },
              [
                {
                  icon: <CallMade />,
                  label: t('exposeLimit'),
                  value: <Chip color="primary" label={t('negociated')} soft />,
                  onClick,
                },
                { icon: <Menu />, label: t('priceList') },
              ],
              [
                {
                  icon: <Menu />,
                  label: t('riskLimit'),
                  value: <Chip color="primary" label={t('negociated')} soft />,
                  onClick,
                },
              ],
            ],
          },
        ]}
      />
      <DetailsSection
        columns={[
          {
            header: t('sociodemographicInformation'),
            collapsible: true,
            rows: [
              [
                { label: t('sex'), value: data?.sex },
                { label: t('habilitacoes') },
                { label: t('taxCategoryDesc') },
                { label: t('currentMonthlyIncome'), info: t('raw') },
              ],
              [
                { label: t('estadoCivil') },
                { label: t('chidrensNumber') },
                { label: t('annualIncome'), info: t('inThousands') },
                { label: t('monthlyCharges'), info: t('supportedOnReceipts') },
              ],
              [{ label: t('marriageRegime') }, { label: t('agregadoFamiliar') }],
            ],
          },
        ]}
      />
      <DetailsSection
        columns={[
          {
            header: t('professionalInformation'),
            rows: [
              [
                { label: t('jobCompany'), value: data?.jobCompany },
                {
                  label: t('admission'),
                  value: data?.jobAdmission && formatDate(data.jobAdmission, { pattern: 'yyyy-MM-dd' }),
                },
              ],
              [{ label: t('jobTitle'), value: (data?.jobTitle || '').toString() }],
            ],
          },

          {
            header: t('contacts'),
            rows: [
              [
                { label: t('email'), value: data?.email, info: `${t('receiveMail')}: ${t('no')}` },
                { label: t('email'), value: data?.phone, info: `${t('receiveSMS')}: ${t('no')}` },
              ],
              [
                {
                  label: t('phone'),
                  value: (
                    <Col noGap>
                      <Row>{data?.phone}</Row>
                      <Row>{data?.phone2}</Row>
                    </Col>
                  ),
                },
              ],
            ],
          },
        ]}
      />
      <DetailsSection
        columns={[
          {
            header: t('movementsHistoric'),
            collapsible: true,
            rows: [
              <Row justifyContent="center" p={3}>
                <BalanceHistory />
              </Row>,
            ],
          },
          {
            header: t('limits'),
            collapsible: true,
            rows: [
              <Row justifyContent="center" p={3}>
                <Gauge />
              </Row>,
            ],
          },
        ]}
      />
    </>
  )
}

const Detail = (props: Partial<Client>) => {
  const { id: idProps } = props
  const { id: idParam } = useParams()
  const id = (idParam || idProps) as number

  const { t } = useTranslation()

  const { data, isLoading, isFetching, error, isError } = useGetClientQuery(id)

  const { clientMenuOptions, clientMenuDialogs } = useClientMenuOptions()

  const tabs = [{ label: t('details'), render: () => <ClientGeneralInfo data={data} /> }]

  if (isLoading || isFetching) return <Loading />

  if (isError) return <ClientError status={(error as FetchBaseQueryError)?.status} />

  return (
    <Surface>
      <DetailsContainer
        avatarSrc={data?.avatar}
        headerTitles={[
          { label: t('clientNumber'), value: id },
          { label: t('firstName'), value: data?.firstName },
          { label: t('lastName'), value: data?.lastName },
        ]}
        infoContainer={
          <AlertButtons
            buttons={[
              { type: 'warning', tooltip: t('alerts'), onClick: () => alert.success(t('alerts')) },
              { type: 'error', tooltip: t('blocks'), onClick: () => alert.success(t('blocks')) },
              { type: 'success', tooltip: t('messages'), onClick: () => alert.success(t('messages')) },
            ]}
          />
        }
        tabs={tabs}
        rowData={data}
        options={clientMenuOptions}
      />
      {clientMenuDialogs}
    </Surface>
  )
}

export default protectComponent(Detail)
