import { Col, Surface } from '@asseco-web/ui/atomic'
import { Typography } from '@mui/material'
import { protectComponent } from 'components/ProtectedComponent'

const Menu = () => {
  return (
    <Surface gap={3}>
      <Col gap={1}>
        <Typography>
          Foi realizado um desenvolvimento que permite a definição de uma única estrutura de opções de menu, podendo a
          mesma ser utilizada posteriormente no menu de contexto da tabela e no Detalhe do registo.
        </Typography>
        <Typography>
          Ambos os componentes compostos mencionados anteriormente (Table / DetailsContainer), já estão preparados para
          receber uma estrutura de opções de menu do tipo <b>HandleMenuProps</b>
        </Typography>
        <Typography variant="subtitle2" mt={2}>
          Tipos de Opções{' '}
        </Typography>
        <Typography>
          Existem dois tipos de Opções que podem ser apresentados no menu:
          <Col component="ul" gap={1}>
            <Typography component="li">
              Opções Principais
              <Col component="ul" gap={1}>
                <Typography component="li">
                  Estas opções são caracterizadas por <b>terem um ícone associado</b>, sendo que a existência de uma
                  nova opção deste tipo, deverá ser validada / definida pelo design. Estas opções já assumem um
                  comportamento padrão por defeito (EX: ícone associado) e são definidas através do enumerador{' '}
                  <b>StandardMenuOptions</b>. Opções existentes:
                  <Col component="ul" gap={1}>
                    <Typography component="li">Print</Typography>
                    <Typography component="li">Details</Typography>
                    <Typography component="li">Update</Typography>
                    <Typography component="li">Delete</Typography>
                    <Typography component="li">GoTo</Typography>
                    <Typography component="li">Reload</Typography>
                    <Typography component="li">Download</Typography>
                    <Typography component="li">Upload</Typography>
                  </Col>
                </Typography>
              </Col>
            </Typography>
            <Typography component="li">
              Opções secundárias
              <Col component="ul" gap={1}>
                <Typography component="li">
                  Estas opções são caracterizadas por <b>não terem um ícone associado</b>. Estas opções podem ser do
                  enumerador <b>OptionTypes</b>.
                </Typography>
              </Col>
            </Typography>
          </Col>
        </Typography>
      </Col>
      <Typography variant="subtitle2">Aspectos a ter em atenção:</Typography>
      <Col component="ul" gap={1}>
        <Typography component="li">
          Todas as opções de consulta, acedidas através do Menu de Contexto, deverão ser abertas dentro de uma tab do
          Detalhe.
        </Typography>
        <Typography component="li">
          A propriedade <b>defaultRedirectInfo</b>, do tipo HandleMenuProps, é utilizada para definir o percurso por
          defeito para redirecionar para o detalhe. Tendo em conta o ponto anterior, esta informação é utilizada para
          definir a ação das opções:
          <Col component="ul" gap={1}>
            <Typography component="li">StandardMenuOptions.Details</Typography>
            <Typography component="li">OptionTypes.Consultation</Typography>
          </Col>
        </Typography>
        <Typography component="li">
          Em cada opção de Menu pode ser definida a propriedade <b>quickAction</b>.
          <Col component="ul" gap={1}>
            <Typography component="li">
              No contexto de Tabela:
              <Col component="ul" gap={1}>
                <Typography component="li">
                  Somente são apresentados os quickAction de opções que possuam ícone associado (opções principais)
                </Typography>
              </Col>
            </Typography>
            <Typography component="li">
              No contexto de Detalhe:
              <Col component="ul" gap={1}>
                <Typography component="li">
                  As opções que têm ícone associado, o mesmo é apresentado no topo de detalhe. Caso a opção não tenha
                  ícone, é apresentado um botão com o label da opção.
                </Typography>
              </Col>
            </Typography>
          </Col>
        </Typography>
      </Col>
    </Surface>
  )
}
export default protectComponent(Menu)
