import { Button, Chip, Col, Input, Row, Surface, Switch, useToggle } from '@asseco-web/ui/atomic'
import { Divider, Typography } from '@mui/material'
import { protectComponent } from 'components/ProtectedComponent'
import { SBLink } from 'pages/rules/components/SBLink'
import { useTranslation } from 'react-i18next'

const Filters = () => {
  const { t } = useTranslation()
  const [checked, toggle] = useToggle(false)
  return (
    <Surface gap={3}>
      <Col gap={1}>
        <Typography variant="subtitle2">Componente composto</Typography>
        <Typography>
          Usar o componente composto para os Filtros: <SBLink story="compostos-filters--filters-story" />
        </Typography>
        <Switch checked={checked} onChange={toggle} switchLabel={t('showAtomicRules')} />
      </Col>
      <Col gap={1}>
        <Typography variant="subtitle2">Botões</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            O botão “Limpar” deve apagar toda a filtragem realizada, voltando ao estado inicial, seguindo as regras das
            consultas das tabelas:
          </Typography>
          <Row>
            <Button variant="text">Limpar</Button>
          </Row>
          {checked && (
            <>
              <Typography component="li">
                <Chip color="warning" label={t('atomicRule')} /> O botão “Pesquisar” deve aparecer sempre:
              </Typography>
              <Row>
                <Button type="submit">Pesquisar</Button>
              </Row>
            </>
          )}
        </Col>
      </Col>
      {checked && (
        <Col gap={1}>
          <Typography variant="subtitle2">Filtro opcional</Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              <Chip color="warning" label={t('atomicRule')} /> Por defeito deve estar visível;
            </Typography>
          </Col>
        </Col>
      )}
      <Col gap={1}>
        <Typography variant="subtitle2">Filtro obrigatório</Typography>
        <Col component="ul" gap={1}>
          {checked && (
            <Typography component="li">
              <Chip color="warning" label={t('atomicRule')} /> Deve estar sempre visível;
            </Typography>
          )}
          <Typography component="li">Um dos campos do filtro deve estar com focus ativo;</Typography>
        </Col>
      </Col>
      <Col gap={1}>
        <Typography variant="subtitle2">Filtro principal</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            São os campos que fazem mais sentido ou mais utilizados para a consulta;
          </Typography>
          <Typography component="li">
            Estes e os obrigatórios ficam sempre visíveis, nunca na zona do filtro avançado;
          </Typography>
          {checked && (
            <Typography component="li">
              <Chip color="warning" label={t('atomicRule')} /> Ao abrir o filtro avançado, o filtro principal não deve
              desaparecer;
            </Typography>
          )}
        </Col>
      </Col>
      <Col gap={1}>
        <Typography variant="subtitle2">Linhas separadoras</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            Utilizar linhas separadoras horizontais e verticais sempre que seja necessário separar ou agrupar
            informação;
          </Typography>
          <Typography component="li">
            Utilizar o{' '}
            <b>
              {'<'}Divider{' />'}
            </b>{' '}
            para a separação horizontal:
          </Typography>
          <Col w={1 / 2}>
            <Input label="Label" />
            <Divider />
            <Input label="Label" />
            <Divider />
            <Input label="Label" />
          </Col>
          <Typography component="li">
            Utilizar a prop <b>withDivider</b> no{' '}
            <b>
              {'<'}Row{'>'}
            </b>{' '}
            para a separação vertical:
          </Typography>
          <Row withDivider>
            <Input label="Label" />
            <Input label="Label" />
            <Input label="Label" />
          </Row>
        </Col>
      </Col>
    </Surface>
  )
}
export default protectComponent(Filters)
