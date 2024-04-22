import { DetailsSection, useSelect } from '@asseco-web/ui'
import { Col, Select } from '@asseco-web/ui/atomic'
import { CardPreview } from 'pages/detail-stepper/CardPreview'
import { Product } from 'pages/detail-stepper/Product'
import { ProductType } from 'pages/detail-stepper/ProductType'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import type { TFunction } from 'i18next'
import type { UseFormReturn } from 'react-hook-form'

export const schema = (t: TFunction) =>
  z.object({
    product: z.string().min(1).describe(t('product')).default(''),
  })

export type Schema = z.infer<ReturnType<typeof schema>>

export const render = ({ form }: { form: UseFormReturn<Schema> }) => {
  const { t } = useTranslation()

  const { watch } = form

  const product = watch('product')

  const select = useSelect({
    name: 'product',
    label: t('product'),
    handler: form,
    data: [
      {
        value: 'CC_VISAGOLD',
        label: 'VISA Gold',
      },
    ],
  })

  return (
    <Col w={6 / 8} noGap>
      <Select {...select} />
      {product && (
        <>
          <DetailsSection
            columns={[
              {
                rows: [[{ value: <CardPreview product={product} />, noLeftSpace: true }]],
              },
              {
                rows: [
                  [
                    {
                      label: t('product'),
                      value: <Product product={product} />,
                      noLeftSpace: true,
                    },
                  ],
                  [
                    {
                      label: t('productType'),
                      value: <ProductType product={product} />,
                      noLeftSpace: true,
                    },
                  ],
                ],
              },
            ]}
          />
          <DetailsSection
            columns={[
              {
                rows: [
                  [
                    { label: t('cardType'), value: 'Visa', noLeftSpace: true },
                    { label: t('bin'), value: '400480', noLeftSpace: true },
                  ],
                  [
                    { label: t('priceList'), value: '1', noLeftSpace: true },
                    { label: t('contract'), value: '00002', noLeftSpace: true },
                  ],
                  [
                    { label: t('instantIssuance'), value: t('no'), noLeftSpace: true },
                    { label: t('waiveFirstYearFee'), value: t('yes'), noLeftSpace: true },
                  ],
                  [
                    { label: t('automaticRenovation'), value: t('yes'), noLeftSpace: true },
                    { label: t('observations'), value: '', noLeftSpace: true },
                  ],
                ],
              },
            ]}
          />
        </>
      )}
    </Col>
  )
}
