import { Filter, FilterForm, HiddenFilterForm } from '@asseco-web/ui'
import { Col, DatePicker, Input, Row, TimePicker } from '@asseco-web/ui/atomic'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import type { Dispatch, SetStateAction } from 'react'

const filtersSchema = z.object({
  user: z.string().optional(),
  date: z.date().optional(),
  time: z.string().optional(),
  id: z.string().optional(),
  api: z.string().optional(),
  station: z.string().optional(),
  transaction: z.string().optional(),
  application: z.string().optional(),
  errorcode: z.string().optional(),
  sessionid: z.string().optional(),
  timepicker: z.string().optional(),
  datepicker: z.string().optional(),
})

export const Filters = ({ setFilters, filters }: { setFilters: Dispatch<SetStateAction<object>>; filters: object }) => {
  const { t } = useTranslation()

  const defaultValues = filtersSchema.parse({ ...filters })

  const { control, handleSubmit, reset } = useForm({ mode: 'onChange', defaultValues })

  const clearSearch = () => {
    reset(defaultValues)
    setFilters({})
  }

  return (
    <Filter>
      <FilterForm onClear={clearSearch} onSubmit={handleSubmit(setFilters)}>
        <Row>
          <Input control={control} label={t('user')} name="user" />
          <DatePicker control={control} label={t('date')} name="date" />
          <TimePicker control={control} label={t('time')} name="time" />
        </Row>
        <HiddenFilterForm>
          <Row>
            <Col component="form" onSubmit={handleSubmit(setFilters)} alignItems="flex-start">
              <Row>
                <Col>
                  <Input control={control} label={t('station')} name="station" />
                </Col>
                <Col>
                  <Input control={control} label={t('application')} name="application" />
                </Col>
                <Col>
                  <Input control={control} label={t('id')} name="id" />
                </Col>
                <Col>
                  <Input control={control} label={t('api')} name="api" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input control={control} label={t('transaction')} name="transaction" />
                </Col>
                <Col>
                  <Input control={control} label={t('errorcode')} name="errorcode" />
                </Col>
                <Col>
                  <Input control={control} label={t('sessionid')} name="sessionid" />
                </Col>
              </Row>
            </Col>
          </Row>
        </HiddenFilterForm>
      </FilterForm>
    </Filter>
  )
}
