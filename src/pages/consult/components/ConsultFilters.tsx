import { Filter, FilterForm, HiddenFilterForm } from '@asseco-web/ui'
import { Input, Radio, RadioGroup, Row } from '@asseco-web/ui/atomic'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import type { Dispatch, SetStateAction } from 'react'

export const Filters = ({ setFilters, filters }: { setFilters: Dispatch<SetStateAction<object>>; filters: object }) => {
  const { t } = useTranslation()

  const defaultValues = {
    cc_like: '',
    firstName_like: '',
    lastName_like: '',
    email_like: '',
    sex_like: '',
  }

  const { control, handleSubmit, reset } = useForm({ mode: 'all', defaultValues: { ...defaultValues, ...filters } })

  const clearSearch = () => {
    reset(defaultValues)
    setFilters({})
  }

  return (
    <Filter>
      <FilterForm onClear={clearSearch} onSubmit={handleSubmit(setFilters)}>
        <Row>
          <Input control={control} label={t('cc')} name="cc_like" />
          <Input control={control} label={t('firstName')} name="firstName_like" />
          <Input control={control} label={t('lastName')} name="lastName_like" />
        </Row>
        <HiddenFilterForm>
          <Row>
            <Input control={control} label={t('email')} name="email_like" />
            <RadioGroup control={control} label={t('sex')} name="sex_like" row>
              <Radio value="male" label={t('sex_.male')} />
              <Radio value="female" label={t('sex_.female')} />
            </RadioGroup>
          </Row>
        </HiddenFilterForm>
      </FilterForm>
    </Filter>
  )
}
