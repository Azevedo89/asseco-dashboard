import { useFormatters } from '@asseco-web/formatters'
import { DetailsSection } from '@asseco-web/ui'
import { Col } from '@asseco-web/ui/atomic'
import { useTranslation } from 'react-i18next'

import type { UseFormReturn } from 'react-hook-form'
import type { StepperFormType } from './StepperForm'

export const render = ({ form }: { form: UseFormReturn<StepperFormType> }) => {
  const { t } = useTranslation()
  const { getValues } = form
  const v = getValues()

  const { formatDate } = useFormatters()

  return (
    <Col noGap>
      <DetailsSection
        columns={[
          {
            rows: [
              [
                {
                  label: t('entityNature'),
                  value: v.entityNature && t(`entityNature_.${v.entityNature}`),
                },
              ],
              [
                {
                  label: t('entityType'),
                  value: v.entityType && t(`entityType_.${v.entityType}`),
                },
              ],
            ],
          },
        ]}
      />
      <DetailsSection
        columns={[
          {
            header: t('personalInformation'),
            rows: [
              [
                { label: t('firstName'), value: v.firstName },
                { label: t('lastName'), value: v.lastName },
              ],
              [
                { label: t('birthDate'), value: v.birthDate && formatDate(v.birthDate, { pattern: 'yyyy-MM-dd' }) },
                { label: t('birthPlace'), value: v.naturality },
              ],
              [
                { label: t('nationality'), value: v.nationality },
                { label: t('paisResidencia'), value: v.paisResidencia },
              ],
              [
                { label: t('codigoResidencia'), value: v.codigoResidencia },
                { label: t('setorInstitucional'), value: v.setorInsitucional },
              ],
            ],
          },
        ]}
      />
      <DetailsSection
        columns={[
          {
            header: t('professionalInformation'),
            rows: [
              [{ label: t('jobCompany'), value: v.jobCompany }],
              [
                { label: t('jobTitle'), value: v.jobTitle },
                {
                  label: t('jobAdmission'),
                  value: v.jobAdmission && formatDate(v.jobAdmission, { pattern: 'yyyy-MM-dd' }),
                },
              ],
            ],
          },
        ]}
      />
      <DetailsSection
        columns={[
          {
            header: t('demographicInformation'),
            rows: [
              [
                {
                  label: t('sex'),
                  value: v.sex && t(`sex_.${v.sex}`),
                },
              ],
              [
                { label: t('estadoCivil'), value: v.estadoCivil },
                { label: t('nFilhos'), value: v.nFilhos },
              ],
              [
                { label: t('habilitacoes'), value: v.habilitacoes },
                { label: t('agregadoFamiliar'), value: v.agregadoFamiliar },
              ],
            ],
          },
        ]}
      />
      <DetailsSection
        columns={[
          {
            header: t('socioeconomicInformation'),
            rows: [
              [
                { label: t('rendimentoAnual'), value: v.rendimentoAnual },
                { label: t('referenceDate'), value: (v.dataReferenciaSocioeconomica || '').toString() },
              ],
            ],
          },
        ]}
      />
    </Col>
  )
}
