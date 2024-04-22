import { useSelect } from '@asseco-web/ui'
import { Col, DatePicker, Input, Radio, RadioGroup, Row, Select } from '@asseco-web/ui/atomic'
import { Typography } from '@mui/material'
import type { TFunction } from 'i18next'
import type { UseFormReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

export const schema = (t: TFunction) =>
  z.object({
    sex: z.string().min(1).describe(t('sex')).default(''),
    estadoCivil: z.string().min(1).describe(t('estadoCivil')).default(''),
    nFilhos: z.number().min(0).describe(t('nFilhos')).default(0),
    agregadoFamiliar: z.number().min(1).describe(t('agregadoFamiliar')).default(1),
    habilitacoes: z.string().min(1).describe(t('habilitacoes')).default(''),
    rendimentoAnual: z.string().optional().describe(t('rendimentoAnual')).default(''),
    dataReferenciaSocioeconomica: z.date().nullish().describe(t('referenceDate')),
  })

export type Schema = z.infer<ReturnType<typeof schema>>

export const render = ({ form }: { form: UseFormReturn<Schema> }) => {
  const { t } = useTranslation()
  const { control } = form
  const estadoCivil = useSelect({
    name: 'estadoCivil',
    label: t('estadoCivil'),
    data: [
      { value: 'type1', label: `${t('type')} 1` },
      { value: 'type2', label: `${t('type')} 2` },
      { value: 'type3', label: `${t('type')} 3` },
    ],
    handler: form,
  })
  const habilitacoes = useSelect({
    name: 'habilitacoes',
    label: t('habilitacoes'),
    data: [
      { value: 'type1', label: `${t('type')} 1` },
      { value: 'type2', label: `${t('type')} 2` },
      { value: 'type3', label: `${t('type')} 3` },
    ],
    handler: form,
  })
  return (
    <Col w={6 / 8}>
      <Typography variant="h5">{t('demographicInformation')}</Typography>
      <RadioGroup control={control} name="sex" label={t('sex')} row>
        <Radio value="female" label={t('sex_.female')} />
        <Radio value="male" label={t('sex_.male')} />
      </RadioGroup>
      <Row>
        <Select {...estadoCivil} />
        <Input control={control} type="number" name="nFilhos" label={t('nFilhos')} />
        <Input control={control} type="number" name="agregadoFamiliar" label={t('agregadoFamiliar')} />
      </Row>
      <Row>
        <Select {...habilitacoes} />
      </Row>
      <Typography variant="h5">{t('socioeconomicInformation')}</Typography>
      <Row>
        <Input control={control} type="number" name="rendimentoAnual" label={t('rendimentoAnual')} />
        <DatePicker
          control={control}
          inputFormat="dd/MM/yyyy"
          label={t('referenceDate')}
          name="dataReferenciaSocioeconomica"
          w={2 / 6}
        />
      </Row>
    </Col>
  )
}
