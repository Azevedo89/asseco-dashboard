import { useSelect } from '@asseco-web/ui'
import { Col, DatePicker, Input, Row, Select } from '@asseco-web/ui/atomic'
import { useGetCountriesQuery } from 'api/consult.api'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

const DocumentForm = () => {
  const { t } = useTranslation()
  const documentForm = useForm({
    mode: 'all',
    defaultValues: {
      type: '',
      referenciaEmissao: '',
      pais: '',
      dataEmissao: '',
      dataValidade: '',
    },
  })
  const { control: documentFormControl } = documentForm

  const type = useSelect({
    name: 'type',
    label: t('documentType'),
    data: [
      { value: 'P', label: t('passport') },
      { value: 'CC', label: t('cc') },
      { value: 'O', label: t('other') },
    ],
    handler: documentForm,
  })

  const referenciaEmissao = useSelect({
    name: 'referenciaEmissao',
    label: t('issueReference'),
    data: [
      { value: '1', label: 'Ref 1' },
      { value: '2', label: 'Ref 2' },
      { value: '3', label: 'Ref 3' },
    ],
    handler: documentForm,
  })

  const { data: countries } = useGetCountriesQuery()

  const pais = useSelect({
    name: 'pais',
    label: t('country'),
    data: countries?.map((c) => ({ value: c.iso, label: c.name })),
    handler: documentForm,
  })

  return (
    <Col>
      <Row>
        <Select {...type} />
        <Input name="number" label={t('identificationNumber')} />
      </Row>
      <Row>
        <Select {...referenciaEmissao} />
        <Select {...pais} />
      </Row>
      <Row>
        <DatePicker
          control={documentFormControl}
          inputFormat="dd/MM/yyyy"
          label={t('issueDate')}
          name="dataEmissao"
          w={2 / 6}
        />
        <DatePicker
          control={documentFormControl}
          inputFormat="dd/MM/yyyy"
          label={t('expirationDate')}
          name="dataValidade"
          w={2 / 6}
        />
      </Row>
    </Col>
  )
}

export default DocumentForm
