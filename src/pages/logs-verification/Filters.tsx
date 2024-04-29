import { Filter, FilterForm, HiddenFilterForm } from '@asseco-web/ui'
import { Col, Input, Row } from '@asseco-web/ui/atomic'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import type { Dispatch, SetStateAction } from 'react'

export const Filters = ({ setFilters, filters }: { setFilters: Dispatch<SetStateAction<object>>; filters: object }) => {
  const { t } = useTranslation()

  const defaultValues = {
    user: '',
    station: '',
    application: '',
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
          <Input control={control} label={t('user')} name="user" />
        </Row>
        <HiddenFilterForm>
          <Row>
            <Col component="form" onSubmit={handleSubmit(setFilters)} alignItems="flex-start">
              <Input control={control} label={t('station')} name="station" w={1 / 6} />
              <Input control={control} label={t('application')} name="application" w={1 / 6} />
            </Col>
          </Row>
        </HiddenFilterForm>
      </FilterForm>
    </Filter>
  )
}
