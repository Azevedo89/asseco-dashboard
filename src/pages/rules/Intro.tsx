import { Avatar, Button, Col, Dropdown, Row, Surface } from '@asseco-web/ui/atomic'
import { Add, ArrowForward, ChevronLeft, ChevronRight, SaveAltOutlined } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { protectComponent } from 'components/ProtectedComponent'
import { SBLink } from './components/SBLink'

const Intro = () => {
  return (
    <Surface gap={3}>
      <Typography>
        Nesta página constam as regras de utilização transversais à todos os componentes, nas restantes páginas constam
        as regras especificas do componente em questão.
      </Typography>

      <Typography>
        <b>Nota:</b> para os exemplos que sejam mais complexos e por já existirem no Storybook, será mostrado o botão{' '}
        <SBLink story="atomic-styleguide-palette--palette" /> que abre a página do Storybook que serve de exemplo a
        regra em questão.
      </Typography>

      <Col gap={1}>
        <Typography variant="subtitle2">Ícones</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            Usar os ícones do material com o estilo <b>Outlined</b> sempre que disponível:{' '}
            <Typography component="a" href="https://mui.com/material-ui/material-icons/" target="_blank">
              https://mui.com/material-ui/material-icons/
            </Typography>
          </Typography>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Avatar</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li" variant="subtitle1">
            Circular
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">Fotografia dos utilizadores de aplicação;</Typography>
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" variant="circular" />
          </Col>
          <Typography component="li" variant="subtitle1">
            Quadrado
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">Clientes;</Typography>
            <Typography component="li">Entidades;</Typography>
            <Typography component="li">Produtos;</Typography>
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" variant="rounded" />
          </Col>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Labels</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            A primeira letra deve ser sempre maiúscula, as restantes são minúsculas, com as seguintes exceções:
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              A 1º letra após um separador “ / “ ou hífen “ - “ deve ser maiúscula;
            </Typography>
            <Typography component="li">
              Siglas, tais como EUR, CIRC, etc, as letras devem ser todas maiúsculas;
            </Typography>
            <Typography component="li">
              Nomes próprios, designação de altos cargos, nomes de países, cidades, etc (a 1ª letra deve ser sempre
              maiúscula);
            </Typography>
          </Col>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Cores e ordem dos botões</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li" variant="subtitle1">
            Ação positiva: cor success - à direita
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              Ações principais / finais (<b>Submeter</b>, <b>Enviar</b>, <b>Diferir</b>, <b>Guardar/Gravar</b>);
            </Typography>
            <Row>
              <Button color="success">Submeter</Button>
            </Row>
            <Typography component="li">
              Quando existirem duas ações semelhantes como <b>Submeter</b> e <b>Diferir</b>, utilizar <b>Dropdown</b>{' '}
              com texto da ação com maior peso / importância;
            </Typography>
            <Row>
              <Dropdown
                color="success"
                menuProps={{
                  noSort: true,
                  options: [
                    {
                      label: 'Diferir',
                    },
                    {
                      label: 'Submeter',
                    },
                  ],
                }}
              >
                Submeter
              </Dropdown>
            </Row>
          </Col>
          <Typography component="li" variant="subtitle1">
            Ação negativa: cor light - à esquerda
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              Ações de anulação (<b>Cancelar</b>, <b>Não Gravar</b>);
            </Typography>
            <Row>
              <Button color="light">Cancelar</Button>
            </Row>
          </Col>
          <Typography component="li" variant="subtitle1">
            Ação neutra: cor light - à esquerda
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              Estes botões normalmente terão icons e serão utilizados para ações, tais como: <b>Exportar</b>,{' '}
              <b>Transferir</b>, <b>Guardar</b>…
            </Typography>
            <Row>
              <Button startIcon={<SaveAltOutlined />} color="light">
                PDF
              </Button>
            </Row>
          </Col>
          <Typography component="li" variant="subtitle1">
            Outras ações: cor primary ou secondary
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              Estes botões podem ou não ter icon, serão utilizados para navegação ou ações secundárias / intermédias (
              <b>Pesquisar</b>, <b>Anterior</b>, <b>Seguinte</b>, <b>Criar</b>, <b>Detalhes</b>, <b>Adicionar</b>);
            </Typography>
            <Row>
              <Button>Pesquisar</Button>
              <Button startIcon={<ChevronLeft />}>Anterior</Button>
              <Button endIcon={<ChevronRight />}>Seguinte</Button>
              <Button startIcon={<Add />}>Criar entidade</Button>
              <Button endIcon={<ArrowForward />}>Detalhes</Button>
            </Row>
          </Col>
        </Col>
      </Col>
    </Surface>
  )
}
export default protectComponent(Intro)
