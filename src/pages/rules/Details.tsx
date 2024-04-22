import { Chip, Col, Details as D, Row, Surface } from '@asseco-web/ui/atomic'
import { Typography } from '@mui/material'
import { protectComponent } from 'components/ProtectedComponent'
import { SBLink } from 'pages/rules/components/SBLink'

import type { BadgeProps } from '@mui/material'

const { HeaderArea, HeaderContent, HeaderTitles, BodyGroup, BodyRow, BodySubtitle, BodyDivider, BodyContainer } = D

const Details = () => {
  const colors: BadgeProps['color'][] = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

  return (
    <Surface gap={3}>
      <Col gap={1}>
        <Typography variant="subtitle2">Componente composto</Typography>
        <Typography>
          Sempre que possível deverá ser utilizado o componente composto para os Detalhes:{' '}
          <SBLink story="compostos-details--details-story" />
        </Typography>
      </Col>
      <Col gap={1}>
        <Typography variant="subtitle2">Header</Typography>
        <Col component="ul" gap={3}>
          <Typography component="li" variant="subtitle1">
            Títulos
          </Typography>
          <Col component="ul" gap={3}>
            <HeaderArea avatarSrc="https://mui.com/static/images/avatar/1.jpg">
              <HeaderContent>
                <HeaderTitles
                  titles={[
                    { label: 'Entidade', value: 'José Manuel Alves dos Santos ' },
                    { label: 'Data de nascimento', value: '16-03-1973 | 50 Anos ( M )' },
                  ]}
                />
              </HeaderContent>
            </HeaderArea>
            <Typography component="li">Mínimo 1:</Typography>
            <HeaderContent>
              <HeaderTitles titles={[{ label: 'Cartão', value: '500295******7036' }]} />
            </HeaderContent>
            <Typography component="li">Máximo 3:</Typography>
            <HeaderTitles
              titles={[
                { label: 'Cliente', value: '195' },
                { label: 'Denominação', value: 'Vilhena LDA' },
                { label: 'Balcão', value: '1 - Fundoa' },
              ]}
            />
          </Col>
          <Typography component="li" variant="subtitle1">
            Ações rápidas / menu de opções (canto superior direito)
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              Configurar as opções do menu de contexto ({' '}
              <b>
                <code>quickAction: true</code>
              </b>{' '}
              ) que sejam ações rápidas;
            </Typography>
            <Typography component="li">
              Se tiver apenas uma opção, deverá ser configurada como uma ação rápida;{' '}
            </Typography>
            <Typography component="li">Quando existem várias opções, é possível apresentar até 3;</Typography>
          </Col>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Grupos de detalhes</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            Deverá ter um título definido pela prop <b>header</b>, exceto nos <b>previews</b>;
          </Typography>
          <Typography component="li" variant="subtitle1">
            Ocupar 100% nos seguintes casos:
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">Grupo único;</Typography>
            <Typography component="li">Grupos com muita informação;</Typography>
            <BodyGroup header="Título" sx={{ '.APST-BodyHeader': { marginTop: 0 } }}>
              <BodyRow
                segments={[
                  { label: 'Type something', value: 'Type something' },
                  { label: 'Type something', value: 'Type something' },
                  { label: 'Type something', value: 'Type something' },
                  { label: 'Type something' },
                ]}
              />
            </BodyGroup>
          </Col>
          <Typography component="li" variant="subtitle1">
            Ocupar 50% nos seguintes casos:
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">Grupos com pouca informação;</Typography>
            <BodyContainer>
              <BodyGroup header="Título" sx={{ '.APST-BodyHeader': { marginTop: 0 } }}>
                <BodyRow
                  segments={[
                    { label: 'Type something', value: 'Type something' },
                    { label: 'Type something', value: 'Type something' },
                  ]}
                />
              </BodyGroup>
              <BodyGroup header="Título" sx={{ '.APST-BodyHeader': { marginTop: 0 } }}>
                <BodyRow
                  segments={[
                    { label: 'Type something', value: 'Type something' },
                    { label: 'Type something', value: 'Type something' },
                  ]}
                />
              </BodyGroup>
            </BodyContainer>
          </Col>
          <Typography component="li" variant="subtitle1">
            Com expansão
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">Utilizar quando a informação é secundária;</Typography>
            <Typography component="li">
              Utilizar a prop <b>collapsible</b>;
            </Typography>
            <BodyContainer>
              <BodyGroup header="Título" sx={{ '.APST-BodyHeader': { marginTop: 0 } }} collapsible>
                <BodyRow
                  segments={[
                    { label: 'Type something', value: 'Type something' },
                    { label: 'Type something', value: 'Type something' },
                  ]}
                />
              </BodyGroup>
              <BodyGroup header="Título" sx={{ '.APST-BodyHeader': { marginTop: 0 } }} collapsible>
                <BodyRow
                  segments={[
                    { label: 'Type something', value: 'Type something' },
                    { label: 'Type something', value: 'Type something' },
                  ]}
                />
              </BodyGroup>
            </BodyContainer>
          </Col>
          <Typography component="li" variant="subtitle1">
            Subgrupos
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              Se houver necessidade de agrupar fragmentos, utilizar o subtítulo (<b>BodySubtitle</b>) ou a linha (
              <b>BodyDivider</b>):
            </Typography>
            <BodyContainer>
              <BodyGroup header="Título" sx={{ '.APST-BodyHeader': { marginTop: 0 } }}>
                <BodyRow
                  segments={[
                    { label: 'Type something', value: 'Type something' },
                    { label: 'Type something', value: 'Type something' },
                  ]}
                />
                <BodySubtitle>Subtitle</BodySubtitle>
                <BodyRow
                  segments={[
                    { label: 'Type something', value: 'Type something' },
                    { label: 'Type something', value: 'Type something' },
                  ]}
                />
              </BodyGroup>
              <BodyGroup header="Título" sx={{ '.APST-BodyHeader': { marginTop: 0 } }}>
                <BodyRow
                  segments={[
                    { label: 'Type something', value: 'Type something' },
                    { label: 'Type something', value: 'Type something' },
                  ]}
                />
                <BodyDivider />
                <BodyRow
                  segments={[
                    { label: 'Type something', value: 'Type something' },
                    { label: 'Type something', value: 'Type something' },
                  ]}
                />
              </BodyGroup>
            </BodyContainer>
          </Col>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Badges</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">Utilizar apenas badges do tipo soft</Typography>
          <Row>
            {colors.map((c) => (
              <Chip color={c} label={c} soft />
            ))}
          </Row>
        </Col>
      </Col>
    </Surface>
  )
}
export default protectComponent(Details)
