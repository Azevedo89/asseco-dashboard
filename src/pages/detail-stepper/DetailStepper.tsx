import { formatToDateInstance, useFormatters } from '@asseco-web/formatters'
import { getDefaultsFromZodSchema } from '@asseco-web/helpers'
import { DetailsSection, FormButtons, Stepper, alert, useSchemaHelpers, useStepper } from '@asseco-web/ui'
import { Col, Details, Surface } from '@asseco-web/ui/atomic'
import { zodResolver } from '@hookform/resolvers/zod'
import { useGetClientQuery } from 'api/consult.api'
import { protectComponent } from 'components/ProtectedComponent'
import Loading from 'components/loading/Loading'
import { differenceInYears } from 'date-fns'
import ClientError from 'pages/consult/components/ClientError'
import { Product } from 'pages/detail-stepper/Product'
import { ProductType } from 'pages/detail-stepper/ProductType'
import * as Step1 from 'pages/detail-stepper/Step1'
import * as Step2 from 'pages/detail-stepper/Step2'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import type { Client } from 'types/api.types'
import type { z } from 'zod'

const DetailStepper = ({ id: idProps }: Partial<Pick<Client, 'id'>>) => {
  const { id: idParam } = useParams()
  const id = idParam || idProps

  const { t } = useTranslation()

  const { formatDate } = useFormatters()

  const navigate = useNavigate()

  const { data, isFetching, error, isError } = useGetClientQuery(id)

  const step1Schema = Step1.schema(t)
  const step2Schema = Step2.schema(t)
  const schema = step1Schema.merge(step2Schema)
  type Schema = z.infer<typeof schema>
  const form = useForm<Schema>({
    mode: 'all',
    defaultValues: getDefaultsFromZodSchema(schema),
    resolver: zodResolver(schema),
  })

  const { handleSubmit, watch } = form

  const formValues = watch()

  const { requiredNotFilled } = useSchemaHelpers({ form })

  const stepper = useStepper([
    {
      label: t('product'),
      schema: step1Schema,
      render: Step1.render,
      summarySegments: () => [
        {
          label: t('product'),
          value: <Product product={formValues.product} />,
        },
        {
          label: t('productType'),
          value: <ProductType product={formValues.product} />,
        },
      ],
    },
    {
      label: t('cardDetails'),
      schema: step2Schema,
      render: Step2.render,
      isDisabled: () => requiredNotFilled(step1Schema),
    },
    {
      label: t('address'),
      render: () => <>A</>,
      isDisabled: () => requiredNotFilled(step2Schema),
    },
    {
      label: t('accountDetails'),
      render: () => <>A</>,
      isDisabled: () => true,
      getWarning: () => t('fillPreviousStepRequiredFields'),
    },
    {
      label: t('paymentMethods'),
      render: () => <>A</>,
      isDisabled: () => true,
      getWarning: () => t('fillPreviousStepRequiredFields'),
    },
    {
      label: t('addAttachments'),
      render: () => <>A</>,
      isDisabled: () => true,
      getWarning: () => t('fillPreviousStepRequiredFields'),
    },
  ])

  const onValid = () => {
    alert.success(t('successCreated'))
    navigate(-1)
  }

  const onInvalid = () => {
    alert.error(t('formHasErrors'))
  }

  if (isFetching) return <Loading />

  if (isError) return <ClientError status={(error as FetchBaseQueryError)?.status} />

  return (
    <Col>
      <Surface>
        <Details.HeaderTitles
          titles={[
            { label: t('clientNumber'), value: String(id) },
            {
              label: t('age'),
              value: t('age', {
                count:
                  data?.birthDate && differenceInYears(new Date(), formatToDateInstance(data.birthDate, 'yyyy-MM-dd')),
              }),
            },
          ]}
        />
        <DetailsSection
          columns={[
            {
              header: t('clientDetails'),
              collapsible: true,
              rows: [
                [
                  { label: t('firstName'), value: data?.firstName },
                  { label: t('lastName'), value: data?.lastName },
                  { label: t('entityType'), value: data?.entityType && t(`entityType_.${data.entityType}`) },
                  { label: t('phone'), value: data?.phone },
                ],
                [
                  { label: t('nif'), value: data?.nif },
                  {
                    label: t('birthDate'),
                    value: data?.birthDate && formatDate(data.birthDate, { pattern: 'yyyy-MM-dd' }),
                  },
                  { emptyCol: true },
                  { emptyCol: true },
                ],
              ],
            },
          ]}
        />
      </Surface>
      <Surface>
        <Col gap={1} component="form" onSubmit={handleSubmit(onValid, onInvalid)}>
          <FormButtons submitProps={{ children: t('createCard') }} hideCancel />
          <Stepper orientation="vertical" form={form} {...stepper} />
        </Col>
      </Surface>
    </Col>
  )
}

export default protectComponent(DetailStepper)
