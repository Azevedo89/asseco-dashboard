import { Filter, FilterForm, HiddenFilterForm } from '@asseco-web/ui'
import { Col, Input, Row } from '@asseco-web/ui/atomic'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import type { Dispatch, SetStateAction } from 'react'

export const Filters = ({ setFilters, filters }: { setFilters: Dispatch<SetStateAction<object>>; filters: object }) => {
  const { t } = useTranslation()

  const defaultValues = {
    user: '',
    date: '',
    time: '',
    id: '',
    api: '',
    station: '',
    transaction: '',
    application: '',
    errorcode: '',
    sessionid: '',
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
