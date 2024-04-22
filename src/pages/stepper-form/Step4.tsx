import { Col, TextArea } from '@asseco-web/ui/atomic'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import type { TFunction } from 'i18next'
import type { UseFormReturn } from 'react-hook-form'

export const schema = (t: TFunction) =>
  z.object({
    observations: z.string().optional().describe(t('observations')).default(''),
    observations2: z.string().optional().describe(t('observations')).default(''),
  })

export type Schema = z.infer<ReturnType<typeof schema>>

export const render = ({ form }: { form: UseFormReturn<Schema> }) => {
  const { t } = useTranslation()
  const { control } = form
  return (
    <Col w={6 / 8}>
      <Typography variant="h5">{t('additionalData')}</Typography>
      <TextArea control={control} name="observations" label={t('observations')} resize />
      <TextArea control={control} name="observations2" label={t('observations')} resize rows={3} />
    </Col>
  )
}
