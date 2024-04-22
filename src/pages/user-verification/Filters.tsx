import { Filter, FilterForm, HiddenFilterForm } from '@asseco-web/ui'
import { Button, Col, DatePicker, Input, Row, TimePicker } from '@asseco-web/ui/atomic'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import type { Dispatch, SetStateAction } from 'react'

export const Filters = ({ setFilters, filters }: { setFilters: Dispatch<SetStateAction<object>>; filters: object }) => {
  const { t } = useTranslation()

  const defaultValues = {
    user: '',
    station: '',
    application: '',
    datepicker: '',
    timepicker: '',
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
          <Input control={control} label={t('station')} name="station" />
          <Input control={control} label={t('application')} name="application" />
        </Row>
        <HiddenFilterForm>
          <Row>
            <Col component="form" onSubmit={handleSubmit(setFilters)} alignItems="flex-start">
              <DatePicker control={control} name="datepicker" label={t('Datepicker')} w={1 / 6} />
              <TimePicker control={control} name="timepicker" label={t('Timepicker')} w={1 / 6} />
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </HiddenFilterForm>
      </FilterForm>
    </Filter>
  )
}
