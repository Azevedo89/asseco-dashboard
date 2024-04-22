import { useSelect } from '@asseco-web/ui'
import { Checkbox, Col, Input, Row, Select, Typography } from '@asseco-web/ui/atomic'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import type { TFunction } from 'i18next'
import type { UseFormReturn } from 'react-hook-form'

export const schema = (t: TFunction) =>
  z.object({
    cardName: z.string().min(1).describe(t('cardName')).default(''),
    cardName2: z.string().describe(t('cardName2')).default(''),
    phoneCountry: z.string().min(1).describe(t('phoneCountry')).default(''),
    phoneNumber: z.string().min(1).describe(t('phoneNumber')).default(''),
    waiveFirstYearFee: z.boolean().describe(t('waiveFirstYearFee')).default(false),
    atmActivation: z.boolean().describe(t('atmActivation')).default(false),
    advance: z.boolean().describe(t('advance')).default(false),
    automaticRenovation: z.boolean().describe(t('automaticRenovation')).default(false),
    contactless: z.boolean().describe(t('contactless')).default(false),
    urgent: z.boolean().describe(t('urgent')).default(false),
  })

export type Schema = z.infer<ReturnType<typeof schema>>

export const render = ({ form }: { form: UseFormReturn<Schema> }) => {
  const { t } = useTranslation()

  const { control } = form

  const select = useSelect({
    name: 'phoneCountry',
    label: t('phoneCountry'),
    handler: form,
    data: [
      {
        value: '00351',
        label: '+351 (Portugal)',
      },
    ],
  })

  return (
    <Col w={6 / 8}>
      <Input control={control} name="cardName" label={t('cardName')} />
      <Input control={control} name="cardName2" label={t('cardName2')} />
      <Row>
        <Select {...select} w={2 / 6} />
        <Input control={control} name="phoneNumber" label={t('phoneNumber')} />
      </Row>
      <Typography variant="body2">{t('characteristics')}</Typography>
      <Row>
        <Col>
          <Checkbox control={control} name="waiveFirstYearFee" checkboxLabel={t('waiveFirstYearFee')} />
          <Checkbox control={control} name="atmActivation" checkboxLabel={t('atmActivation')} />
          <Checkbox control={control} name="advance" checkboxLabel={t('advance')} />
        </Col>
        <Col>
          <Checkbox control={control} name="automaticRenovation" checkboxLabel={t('automaticRenovation')} />
          <Checkbox control={control} name="contactless" checkboxLabel={t('contactless')} />
          <Checkbox control={control} name="urgent" checkboxLabel={t('urgent')} />
        </Col>
      </Row>
    </Col>
  )
}
