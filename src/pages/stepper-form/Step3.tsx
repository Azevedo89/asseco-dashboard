import { useSelect } from '@asseco-web/ui'
import { Checkbox, Col, Input, Radio, RadioGroup, Row, Select } from '@asseco-web/ui/atomic'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import type { TFunction } from 'i18next'
import type { UseFormReturn } from 'react-hook-form'

export const schema = (t: TFunction) =>
  z.object({
    addressType: z.string().min(1).describe(t('addressType')).default(''),
    address: z.string().min(1).describe(t('address')).default(''),
    phoneCountryCode: z.string().min(1).describe(t('indicative')).default(''),
    phone: z.string().min(1).describe(t('phone')).default(''),
    receiveSMS: z.string().min(1).describe(t('receiveSMS')).default(''),
    phoneCountryCode2: z.string().min(1).describe(t('indicative')).default(''),
    phone2: z.string().min(1).describe(t('secondaryPhone')).default(''),
    receiveSMS2: z.string().min(1).describe(t('receiveSMS')).default(''),
  })

export type Schema = z.infer<ReturnType<typeof schema>>

export const render = ({ form }: { form: UseFormReturn<Schema> }) => {
  const { t } = useTranslation()
  const { control } = form
  const addressType = useSelect({
    name: 'addressType',
    label: t('addressType'),
    data: [
      { value: 'E', label: t('addressType_.E') },
      { value: 'O', label: t('addressType_.O') },
    ],
    handler: form,
  })
  const phoneCountryCode = useSelect({
    name: 'phoneCountryCode',
    data: [
      { value: '+351', label: '+351' },
      { value: '+000', label: '+000' },
    ],
    handler: form,
  })
  const phoneCountryCode2 = useSelect({
    name: 'phoneCountryCode2',
    data: [
      { value: '+351', label: '+351' },
      { value: '+000', label: '+000' },
    ],
    handler: form,
  })
  return (
    <Col>
      <Select {...addressType} w={6 / 8} />
      <Input control={control} name="address" label={t('address')} w={6 / 8} />
      <Typography variant="h5">{t('smsAndEmail')}</Typography>
      <Row>
        <Select {...phoneCountryCode} label={t('indicative')} w={2 / 8} />
        <Input control={control} type="number" name="phone" label={t('phoneToSendSms')} w={2 / 8} />
        <RadioGroup control={control} name="receiveSMS" label={t('receiveSMS')} row w={4 / 8}>
          <Radio value="nao" label={t('no')} />
          <Radio value="sim" label={t('yes')} />
          <Radio value="nim" label={t('excludeUnsolicited')} />
        </RadioGroup>
      </Row>
      <Row>
        <Select {...phoneCountryCode2} label={t('indicative')} w={2 / 8} />
        <Input control={control} type="number" name="phone2" label={t('secondaryPhone')} w={2 / 8} />
        <RadioGroup control={control} name="receiveSMS2" label={t('receiveSMS')} row w={4 / 8}>
          <Radio value="nao" label={t('no')} />
          <Radio value="sim" label={t('yes')} />
          <Radio value="nim" label={t('excludeUnsolicited')} />
        </RadioGroup>
      </Row>
      <Checkbox checkboxLabel={t('addAnotherAddress')} />
    </Col>
  )
}
