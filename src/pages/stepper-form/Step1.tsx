import { Col, Radio, RadioGroup } from '@asseco-web/ui/atomic'
import * as ClientForm from 'pages/consult/components/ClientForm'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import type { TFunction } from 'i18next'
import type { UseFormReturn } from 'react-hook-form'

export const schema = (t: TFunction) =>
  ClientForm.schema(t).merge(
    z.object({
      entityNature: z.string().min(1).describe(t('entityNature')).default(''),
    })
  )

export type Schema = z.infer<ReturnType<typeof schema>>

export const render = ({ form }: { form: UseFormReturn<Schema> }) => {
  const { t } = useTranslation()
  const { control } = form

  return (
    <Col w={6 / 8}>
      <RadioGroup control={control} name="entityNature" label={t('entityNature')} row>
        <Radio value="P" label={t('entityNature_.P')} />
        <Radio value="E" label={t('entityNature_.E')} />
      </RadioGroup>
      <ClientForm.Form form={form as unknown as UseFormReturn<ClientForm.Schema>} />
    </Col>
  )
}
