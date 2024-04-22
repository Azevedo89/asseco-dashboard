import { useSelect } from '@asseco-web/ui'
import { Col, DatePicker, Input, Row, Select } from '@asseco-web/ui/atomic'
import { TextSnippetOutlined } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { useGetCountriesQuery } from 'api/consult.api'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import type { TFunction } from 'i18next'
import type { UseFormReturn } from 'react-hook-form'

export const schema = (t: TFunction) =>
  z.object({
    entityType: z.string().min(1).describe(t('entityType')).default(''),
    firstName: z.string().min(1).describe(t('firstName')).default(''),
    lastName: z.string().min(1).describe(t('lastName')).default(''),
    birthDate: z.date().describe(t('birthDate')),
    naturality: z.string().min(1).describe(t('birthPlace')).default(''),
    nationality: z.string().min(1).describe(t('nationality')).default(''),
    paisResidencia: z.string().min(1).describe(t('paisResidencia')).default(''),
    jobCompany: z.string().optional().describe(t('jobCompany')).default(''),
    jobTitle: z.string().optional().describe(t('jobTitle')).default(''),
    jobAdmission: z.date().nullish().describe(t('jobAdmission')),
    codigoResidencia: z.string().min(1).describe(t('codigoResidencia')).default(''),
    setorInsitucional: z.string().min(1).describe(t('setorInstitucional')).default(''),
  })

export type Schema = z.infer<ReturnType<typeof schema>>

export const Form = ({ form, disabled }: { form: UseFormReturn<Schema>; disabled?: boolean }) => {
  const { control, setValue } = form
  const { t } = useTranslation()

  const tipoEntidade = useSelect({
    name: 'entityType',
    label: t('entityType'),
    data: [
      { value: 'GE', label: t('entityType_.GE') },
      { value: 'PA', label: t('entityType_.PA') },
    ],
    handler: form,
  })
  const { data: countries } = useGetCountriesQuery()

  const paisResidencia = useSelect({
    name: 'paisResidencia',
    label: t('paisResidencia'),
    data: countries?.map((c) => ({ value: c.iso, label: c.name })),
    handler: form,
  })

  const codigoResidencia = useSelect({
    name: 'codigoResidencia',
    label: t('codigoResidencia'),
    data: [
      { value: 'RP', label: t('codigoResidencia_.RP') },
      { value: 'O', label: t('codigoResidencia_.O') },
    ],
    handler: form,
  })

  return (
    <Col>
      <Select control={control} {...tipoEntidade} disabled={disabled} />
      <Typography variant="h5">{t('personalInformation')}</Typography>
      <Row>
        <Input control={control} label={t('firstName')} name="firstName" disabled={disabled} />
        <Input control={control} label={t('lastName')} name="lastName" disabled={disabled} />
      </Row>
      <Row>
        <DatePicker
          control={control}
          inputFormat="dd/MM/yyyy"
          label={t('birthDate')}
          name="birthDate"
          disabled={disabled}
          w={2 / 6}
        />
        <Input control={control} label={t('birthPlace')} name="naturality" disabled={disabled} w={4 / 6} />
      </Row>
      <Row>
        <Input control={control} label={t('nationality')} name="nationality" disabled={disabled} />
        <Select {...paisResidencia} disabled={disabled} />
      </Row>
      <Row>
        <Select {...codigoResidencia} disabled={disabled} />
        <Input
          control={control}
          name="setorInsitucional"
          label={t('setorInstitucional')}
          withButton
          leftButtonProps={{
            children: <TextSnippetOutlined />,
            onClick: () => {
              setValue('setorInsitucional', 'S100000')
            },
            disabled,
            tooltip: t('setorInstitucional'),
          }}
          disabled={disabled}
        />
      </Row>
      <Typography variant="h5">{t('professionalInformation')}</Typography>
      <Input control={control} label={t('jobCompany')} name="jobCompany" disabled={disabled} />
      <Row>
        <Input control={control} label={t('jobTitle')} name="jobTitle" disabled={disabled} w={4 / 6} />
        <DatePicker
          control={control}
          inputFormat="dd/MM/yyyy"
          label={t('jobAdmission')}
          name="jobAdmission"
          disabled={disabled}
          w={2 / 6}
        />
      </Row>
    </Col>
  )
}

Form.defaultProps = {
  disabled: false,
}
