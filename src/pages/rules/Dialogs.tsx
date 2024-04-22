import { Col, Surface } from '@asseco-web/ui/atomic'
import { Typography } from '@mui/material'
import { protectComponent } from 'components/ProtectedComponent'
import { SBLink } from './components/SBLink'

const Dialogs = () => {
  return (
    <Surface gap={3}>
      <Col gap={1}>
        <Typography variant="subtitle2">Existem 4 tipos de Dialog</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">Confirmação</Typography>
          <Typography component="li">Alerta</Typography>
          <Typography component="li">Standard</Typography>
          <Typography component="li">Informação</Typography>
          <Typography component="li">
            <b>Exemplos:</b> <SBLink story="compostos-dialog--documentação" />
          </Typography>
          <Typography component="li">
            Este componente deverá ser utilizado juntamente com o seu hook. <b>Documentação:</b>{' '}
            <SBLink story="hooks-usedialog--documentação" />
          </Typography>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Formulários (Manutenções)</Typography>
        <Typography component="li">
          Deve-se usar a dialog quando for preciso mostrar um breve formulário que não tenha continuidade (isto é, que
          não seja um stepper).
        </Typography>
        <Typography component="li">Evitar a sobreposição de diálogos.</Typography>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Tamanhos</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            Nas dialogs existem três tamanhos: <b>large</b>, <b>default</b> e <b>small</b>:{' '}
            <SBLink story="compostos-dialog--sizes" />
          </Typography>
          <Typography component="li">
            Por defeito deve se utilizado o tamanho default e quando não se adequar, utilizar:
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              <b>Large</b> se for necessário mais espaço (ex.: formulários / informações muito extensos / complexos);
            </Typography>
          </Col>
          <Col component="ul" gap={1}>
            <Typography component="li">
              <b>Small</b> se ficar muito espaço vazio;
            </Typography>
          </Col>
        </Col>
      </Col>
    </Surface>
  )
}
export default protectComponent(Dialogs)
