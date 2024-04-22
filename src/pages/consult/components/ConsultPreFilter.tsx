import { unformatDate } from '@asseco-web/formatters'
import { getDefaultsFromZodSchema } from '@asseco-web/helpers'
import { Filter, FilterForm, HiddenFilterForm } from '@asseco-web/ui'
import { DatePicker, Input, Radio, RadioGroup, Row } from '@asseco-web/ui/atomic'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import type { Dispatch, SetStateAction } from 'react'
import type { SubmitHandler } from 'react-hook-form'

export const Filters = ({ setFilters, filters }: { setFilters: Dispatch<SetStateAction<object>>; filters: object }) => {
  const { t } = useTranslation()

  const schema = z.object({
    cc_like: z.string().min(1).default(''),
    birthDateOperator: z.string().default(''),
    birthDate: z.date().nullish(),
    email_like: z.string().default(''),
    sex_like: z.string().default(''),
  })

  const formSchema = schema.refine((obj) => !(obj.birthDateOperator && !obj.birthDate), {
    message: t('requiredField'),
    path: ['birthDate'],
  })

  const defaultValues = getDefaultsFromZodSchema(schema)
  type FormValues = z.infer<typeof formSchema>

  const { control, handleSubmit, reset, watch } = useForm<FormValues>({
    mode: 'all',
    defaultValues: { ...defaultValues, ...filters },
    resolver: zodResolver(formSchema),
  })

  const clearSearch = () => {
    reset(defaultValues)
    setFilters({})
  }

  const handleFilters: SubmitHandler<FormValues> = (filters) => {
    const { birthDateOperator, birthDate, ...rest } = filters
    const object: { [key: string]: string } = { ...rest }
    if (birthDateOperator)
      object[`birthDate_${birthDateOperator}`] = unformatDate(birthDate as Date, 'yyyy-MM-dd', 'yyyy-MM-dd')
    setFilters(object)
  }

  return (
    <Filter optional={false}>
      <FilterForm onClear={clearSearch} onSubmit={handleSubmit(handleFilters)}>
        <Row>
          <Input control={control} label="Cartão de Cidadão" name="cc_like" autoFocus />
          <Row>
            <RadioGroup
              control={control}
              label={String.fromCharCode(0x2007)} // blankLabel
              name="birthDateOperator"
              sx={{ justifyContent: 'end' }}
              row
            >
              <Radio value="lte" label={t('before')} disabled={!watch('cc_like')} />
              <Radio value="gte" label={t('after')} disabled={!watch('cc_like')} />
            </RadioGroup>
            <DatePicker
              control={control}
              name="birthDate"
              label={t('birthDate')}
              disabled={!watch('cc_like')}
              w={2 / 4}
            />
          </Row>
        </Row>
        <HiddenFilterForm>
          <Row>
            <Input control={control} label={t('email')} name="email_like" disabled={!watch('cc_like')} />
            <RadioGroup control={control} label={t('sex')} name="sex_like" row>
              <Radio value="male" label={t('sex_.male')} disabled={!watch('cc_like')} />
              <Radio value="female" label={t('sex_.female')} disabled={!watch('cc_like')} />
            </RadioGroup>
          </Row>
        </HiddenFilterForm>
      </FilterForm>
    </Filter>
  )
}
