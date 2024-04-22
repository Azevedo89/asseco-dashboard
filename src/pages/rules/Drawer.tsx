import { Button, Chip, Col, Row, Surface, Switch, useToggle } from '@asseco-web/ui/atomic'
import { ArrowForward } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { protectComponent } from 'components/ProtectedComponent'
import { SBLink } from 'pages/rules/components/SBLink'
import { useTranslation } from 'react-i18next'

const Drawer = () => {
  const { t } = useTranslation()
  const [checked, toggle] = useToggle(false)
  return (
    <Surface gap={3}>
      <Col gap={1}>
        <Typography variant="subtitle2">Componente composto</Typography>
        <Typography>
          Sempre que possível deverá ser utilizado o componente composto PreviewContainer:{' '}
          <SBLink story="compostos-details--preview-story" />
        </Typography>
        <Switch checked={checked} onChange={toggle} switchLabel={t('showAtomicRules')} />
      </Col>
      <Col gap={1}>
        <Typography variant="subtitle2">Header</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li" variant="subtitle1">
            Títulos
          </Typography>
          <Col component="ul" gap={3}>
            <Typography component="li">Devem ser os mesmos apresentados na página de detalhes;</Typography>
          </Col>
          {checked && (
            <>
              <Typography component="li">
                <Chip color="warning" label={t('atomicRule')} /> Deve ter o botão Detalhes que direciona para a
                respetiva página de detalhes;
              </Typography>
              <Row>
                <Button endIcon={<ArrowForward />}>Detalhes</Button>
              </Row>
            </>
          )}
        </Col>
      </Col>
      {checked && (
        <Col gap={1}>
          <Typography variant="subtitle2">Grupos de detalhes</Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              <Chip color="warning" label={t('atomicRule')} /> Não devem ter um título definido pela prop <b>header</b>;
            </Typography>
            <Typography component="li">
              <Chip color="warning" label={t('atomicRule')} /> Ter apenas uma label/value por linha;
            </Typography>
          </Col>
        </Col>
      )}
    </Surface>
  )
}
export default protectComponent(Drawer)
