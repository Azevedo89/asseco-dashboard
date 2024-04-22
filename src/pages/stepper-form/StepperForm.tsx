import { getDefaultsFromZodSchema } from '@asseco-web/helpers'
import {
  Dialog,
  FormButtons,
  ModalType,
  SaveButton,
  Stepper,
  alert,
  useDialog,
  useSchemaHelpers,
  useStepper,
} from '@asseco-web/ui'
import { Col, Input, Surface } from '@asseco-web/ui/atomic'
import { zodResolver } from '@hookform/resolvers/zod'
import { LockOutlined } from '@mui/icons-material'
import { InputAdornment } from '@mui/material'
import { protectComponent } from 'components/ProtectedComponent'
import * as Step1 from 'pages/stepper-form/Step1'
import * as Step2 from 'pages/stepper-form/Step2'
import * as Step3 from 'pages/stepper-form/Step3'
import * as Step4 from 'pages/stepper-form/Step4'
import * as Step5 from 'pages/stepper-form/Step5'
import * as Step6 from 'pages/stepper-form/Step6'
import * as Step8 from 'pages/stepper-form/Step8'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import type { TFunction } from 'i18next'

const schema = (t: TFunction) =>
  z
    .object({
      authorization: z.string().min(1).default(''),
    })
    .merge(Step1.schema(t))
    .merge(Step2.schema(t))
    .merge(Step3.schema(t))
    .merge(Step4.schema(t))

export type StepperFormType = z.infer<ReturnType<typeof schema>>

const StepperForm = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const zodSchema = schema(t)
  const form = useForm<StepperFormType>({
    mode: 'all',
    defaultValues: getDefaultsFromZodSchema(zodSchema),
    resolver: zodResolver(zodSchema),
  })

  const {
    handleSubmit,
    formState: { isDirty },
    control,
  } = form

  const { requiredNotFilled } = useSchemaHelpers({ form })

  const cancelDialog = useDialog({
    type: ModalType.CONFIRMATION,
    noIcon: true,
    title: t('createNewEntity'),
    text: t('processWarningLostData'),
    secondaryButtonProps: {
      children: t('no'),
    },
    primaryButtonProps: {
      children: t('yes'),
      color: 'success',
      onClick: (close) => {
        close()
        navigate(-1)
      },
    },
  })

  const onSubmit = () => {
    alert.success('submitted')
  }

  const onError = () => {
    alert.error(t('formHasErrors'))
  }

  const handleCancel = () => {
    if (isDirty) cancelDialog.open()
    else navigate(-1)
  }

  const stepper = useStepper([
    {
      label: t('setEntity'),
      schema: Step1.schema(t),
      render: Step1.render,
      summarySegments: () => [],
    },
    {
      label: t('socioeconomicDemographic'),
      schema: Step2.schema(t),
      render: Step2.render,
      isDisabled: () => requiredNotFilled(Step1.schema(t)),
      getWarning: () => requiredNotFilled(Step1.schema(t)) && t('fillRequiredFields'),
      summarySegments: () => [],
    },
    {
      label: t('contactsAddress'),
      schema: Step3.schema(t),
      render: Step3.render,
      summarySegments: () => [],
    },
    {
      label: t('characterization'),
      schema: Step4.schema(t),
      render: Step4.render,
      summarySegments: () => [],
    },
    { label: t('documents'), render: Step5.render },
    { label: t('collectImages'), render: Step6.render },
    {
      label: t('summaryPrint'),
      render: () => <>{t('summaryPrint')}</>,
      isDisabled: () => requiredNotFilled(Step1.schema(t)),
      getWarning: () => requiredNotFilled(Step1.schema(t)) && t('fillRequiredFields'),
    },
    { label: t('generateEntity'), render: Step8.render },
  ])

  return (
    <Surface>
      <Col>
        <FormButtons
          cancelProps={{
            children: t('cancel'),
            onClick: () => handleCancel(),
          }}
          submitProps={{
            children: t('submit'),
            onClick: handleSubmit(onSubmit, onError),
          }}
          centerContent={
            <>
              <SaveButton>{t('save')}</SaveButton>
              <Input
                type="password"
                name="authorization"
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                }
                placeholder={t('authorization')}
                control={control}
                w={0}
              />
            </>
          }
        />
        <Stepper form={form} orientation="vertical" {...stepper} />
      </Col>
      <Dialog {...cancelDialog} />
    </Surface>
  )
}

export default protectComponent(StepperForm)
