import { useFormatters } from '@asseco-web/formatters'
import { PreviewContainer, PreviewSection, alert } from '@asseco-web/ui'
import { Details } from '@asseco-web/ui/atomic'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import type { Client } from 'types/api.types'

const { AlertButtons } = Details

export const TablePreview = (props: Client) => {
  const { t } = useTranslation()

  const navigate = useNavigate()

  const { formatDate } = useFormatters()

  return (
    <PreviewContainer
      avatarSrc={props.avatar}
      goTo={() => navigate(`/consult/detail/${props.id}`)}
      infoContainer={
        <AlertButtons
          buttons={[
            { type: 'warning', tooltip: t('alerts'), onClick: () => alert.success(t('alerts')) },
            { type: 'error', tooltip: t('blocks'), onClick: () => alert.success(t('blocks')) },
            { type: 'success', tooltip: t('messages'), onClick: () => alert.success(t('messages')) },
          ]}
        />
      }
      headerTitles={[
        { label: t('clientNumber'), value: String(props.id) },
        { label: t('firstName'), value: props.firstName },
        { label: t('lastName'), value: props.lastName },
      ]}
      rows={[
        { label: t('birthDate'), value: props.birthDate && formatDate(props.birthDate, { pattern: 'yyyy-MM-dd' }) },
        { label: t('birthPlace'), value: props.naturality },
      ]}
      tabs={[
        {
          label: t('contacts'),
          render: () => (
            <PreviewSection
              rows={[
                { label: t('address'), value: props.address },
                { label: t('phone'), value: props.phone },
                { label: t('email'), value: props.email },
              ]}
            />
          ),
        },
        {
          label: t('professionalInformation'),
          render: () => (
            <PreviewSection
              rows={[
                { label: t('jobCompany'), value: props.jobCompany },
                {
                  label: t('jobAdmission'),
                  value: props.jobAdmission && formatDate(props.jobAdmission, { pattern: 'yyyy-MM-dd' }),
                },
                { label: t('jobTitle'), value: props.jobTitle },
              ]}
            />
          ),
        },
        {
          label: t('otherData'),
          render: () => (
            <PreviewSection
              rows={[
                { label: t('cc'), value: props.cc },
                { label: t('nif'), value: props.nif },
              ]}
            />
          ),
        },
      ]}
    />
  )
}
