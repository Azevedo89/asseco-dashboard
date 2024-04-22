import { Badge, Button, Chip, Col, Dropdown, Row, Surface, Switch, TableRow, useToggle } from '@asseco-web/ui/atomic'
import { AddOutlined, ArrowForward, CachedOutlined, DeleteOutlineOutlined, SaveAltOutlined } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { protectComponent } from 'components/ProtectedComponent'
import { SBLink } from 'pages/rules/components/SBLink'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import type { TableRowProps } from '@asseco-web/ui/atomic'
import type { BadgeProps } from '@mui/material'

const Tables = () => {
  const colors: BadgeProps['color'][] = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
  const rowTypes: TableRowProps['type'][] = ['success', 'info', 'warning', 'error']
  const { t } = useTranslation()
  const [checked, toggle] = useToggle(false)
  return (
    <Surface gap={3}>
      <Col gap={1}>
        <Typography variant="subtitle2">Componente composto</Typography>
        <Typography>
          Sempre que possível deverá ser utilizado o componente composto para as Tabelas:{' '}
          <SBLink story="compostos-table--documentação" />
        </Typography>
        <Switch checked={checked} onChange={toggle} switchLabel={t('showAtomicRules')} />
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Consultas</Typography>
        <Col component="ul" gap={1}>
          {checked && (
            <Typography component="li">
              <Chip color="warning" label={t('atomicRule')} /> A mensagem <b>sem dados</b> na tabela só deve aparecer se
              não forem retornado dados;
            </Typography>
          )}
          <Typography component="li" variant="subtitle1">
            Filtro obrigatório
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              A tabela não deve aparecer até à introdução de pelo menos um campo no filtro para obter os dados - deve
              ser substituída por uma representação com icon e explicação contextualizada:{' '}
              <Button variant="text" component={Link} to="/consult/pre-search">
                Ver exemplo
              </Button>
            </Typography>
          </Col>
          <Typography component="li" variant="subtitle1">
            Filtro facultativo
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              A tabela é mostrada com os dados retornados sem o preenchimento do filtro:{' '}
              <Button variant="text" component={Link} to="/consult/search">
                Ver exemplo
              </Button>
            </Typography>
          </Col>
        </Col>
      </Col>

      {checked && (
        <Col gap={1}>
          <Typography variant="subtitle2">Paginação</Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              <Chip color="warning" label={t('atomicRule')} /> Não mostrar paginação quando a tabela não tem
              dados/resultados para mostrar.
            </Typography>
          </Col>
        </Col>
      )}

      <Col gap={1}>
        <Typography variant="subtitle2">Tamanho e bordas</Typography>
        <Typography>
          Quando a tabela não é o único ou o principal componente do ecrã (ex.: Consultas ou tabela numa tab):{' '}
          <Button variant="text" component={Link} to="/consult/search">
            Ver exemplo
          </Button>
        </Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            Utilizar a prop <b>additionalBorders</b> <SBLink story="atomic-data-display-table--additional-borders" />{' '}
            nas seguintes situações:
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">Detalhes;</Typography>
          </Col>
          <Typography component="li">
            Utilizar as props <b>small</b> e <b>additionalBorders</b>{' '}
            <SBLink story="atomic-data-display-table--small-additional-borders" /> nas seguintes situações:
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">Preview;</Typography>
            <Typography component="li">Expansão de linhas;</Typography>
            <Typography component="li">Grupo de detalhes a 50%;</Typography>
            <Typography component="li">Dialogs;</Typography>
            <Typography component="li">Accordions;</Typography>
            <Typography component="li">Formulários com steps;</Typography>
          </Col>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Left click</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li" variant="subtitle1">
            Expansão
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              Utilizar em situações onde não existe página de detalhe, mas é necessário mostrar mais informação, pode
              ser detalhe (label/valor), texto, tabela (com as props <b>small</b> e <b>additionalBorders</b>), imagem ou
              carousel.
            </Typography>
            <Typography component="li">
              A informação apresentada deve ser apenas informativa (não pode ter funcionalidades, ex.: preview, ações
              rápidas, etc...), nesses casos a informação deve ser apresentada numa página de detalhe.
            </Typography>
            {checked && (
              <Typography component="li">
                <Chip color="warning" label={t('atomicRule')} /> Utilizar os plugins <b>useExpanded</b> e{' '}
                <b>useTableExpandedRow</b>; <SBLink story="atomic-data-display-table--expanded-row" />
              </Typography>
            )}
          </Col>
          <Typography component="li" variant="subtitle1">
            Preview
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">Utilizar sempre que uma linha tenha página de detalhes associada;</Typography>
            {checked && (
              <>
                <Typography component="li">
                  <Chip color="warning" label={t('atomicRule')} /> Deve ter o botão Detalhes que direciona para a
                  respetiva página de detalhes;
                </Typography>
                <Row>
                  <Button endIcon={<ArrowForward />}>Detalhes</Button>
                </Row>
                <Typography component="li">
                  <Chip color="warning" label={t('atomicRule')} /> Utilizar o plugin <b>useTablePreview</b>;{' '}
                  <SBLink story="atomic-data-display-table--with-preview" />
                </Typography>
              </>
            )}
          </Col>
          <Typography component="li" variant="subtitle1">
            Ações rápidas
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              A quantidade de ações rápidas a mostrar na linha é livre, e aparecerão também no menu de contexto;
            </Typography>
            <Typography component="li">
              Configurar as opções do menu de contexto ({' '}
              <b>
                <code>quickAction: true</code>
              </b>{' '}
              ) que sejam ações rápidas; <SBLink story="atomic-data-display-table--menu-de-contexto" />
            </Typography>
            {checked && (
              <Typography component="li">
                <Chip color="warning" label={t('atomicRule')} /> Utilizar o plugin <b>useTableContextMenu</b>
              </Typography>
            )}
          </Col>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Right click</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li" variant="subtitle1">
            Menu de contexto
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              Se tiver apenas uma opção, deverá ser configurada como uma ação rápida;{' '}
              <SBLink story="atomic-data-display-table--menu-de-contexto-1-option" />
            </Typography>
            {checked && (
              <Typography component="li">
                <Chip color="warning" label={t('atomicRule')} /> Utilizar o plugin <b>useTableContextMenu</b>;{' '}
                <SBLink story="atomic-data-display-table--menu-de-contexto" />
              </Typography>
            )}
          </Col>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Divisórias e destaque nas linhas / colunas</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            Utilizar quando for necessário separar um conjunto de linhas ou destacar informações adicionais (mensagens,
            alertas…);
          </Typography>
          <Typography component="li" variant="subtitle1">
            Divisórias
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              Adicionar linhas com a seguinte estrutura: <SBLink story="atomic-data-display-table--row-titles" />
              <pre>
                <code>
                  {'{'} isTitle: true, titleLabel: &quot;mensagem de divisória&quot; {'}'}
                </code>
              </pre>
            </Typography>
          </Col>
          <Typography component="li" variant="subtitle1">
            Destaque
          </Typography>
          <Col component="ul" gap={1}>
            {checked && (
              <Typography component="li">
                <Chip color="warning" label={t('atomicRule')} /> Utilizar os plugins <b>useTableRowConditionalProps</b>{' '}
                e/ou <b>useTableCellConditionalProps</b> e definir a prop <b>type</b>;{' '}
                <SBLink story="atomic-data-display-table--conditional-props" />
              </Typography>
            )}
            <Typography component="li">Devem usar um dos seguintes tipos:</Typography>
            <Row>
              {rowTypes.map((t) => (
                <TableRow type={t}>{t}</TableRow>
              ))}
            </Row>
          </Col>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Seleções</Typography>
        <Col component="ul" gap={1}>
          {checked && (
            <Typography component="li">
              <Chip color="warning" label={t('atomicRule')} /> <b>Seleção singular</b> através do plugin{' '}
              <b>useTableSingleRowSelect</b>; <SBLink story="atomic-data-display-table--singular-selection" />
            </Typography>
          )}
          {checked && (
            <Typography component="li">
              <Chip color="warning" label={t('atomicRule')} /> <b>Seleção múltipla</b> através do plugin{' '}
              <b>useRowSelect</b>; <SBLink story="atomic-data-display-table--multiple-selection" />
            </Typography>
          )}
          <Typography component="li">
            Utilizar o Switch para ativar ou desativar linhas da tabela através de lógica adicional;{' '}
            <SBLink story="atomic-data-display-table--advanced-multiple-selection" />
          </Typography>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Badges</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">Utilizar apenas badges do tipo soft:</Typography>
          <Row>
            {colors.map((c) => (
              <Chip color={c} label={c} soft />
            ))}
          </Row>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Tabela longas / muitas colunas</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            Por defeito as colunas não tem limite de tamanho, se tiverem muitas colunas ou forem longas aparecerá uma
            scroll horizontal;
          </Typography>
          <Typography component="li">
            Para limitar o conteúdo das colunas (aparecendo reticências e tooltips):
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              Utilizar o plugin <b>useFlexLayout</b>; <SBLink story="atomic-data-display-table--flex-layout" />
            </Typography>
            <Typography component="li">
              Definir a largura através da propriedade <b>width</b>, que por defeito é de 150px, não devendo exceder os
              300px;
            </Typography>
          </Col>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Alinhamento</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">Por defeito o alinhamento é à esquerda;</Typography>
          {checked && (
            <Typography component="li">
              <Chip color="warning" label={t('atomicRule')} /> Devem ser alinhados à direita os números quantitativos:
              montantes / valores monetários ({' '}
              <b>
                <code>align: end</code>
              </b>{' '}
              ) <SBLink story="atomic-data-display-table--alignment" />
            </Typography>
          )}
        </Col>
      </Col>

      {checked && (
        <Col gap={1}>
          <Typography variant="subtitle2">Ordenação</Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">
              <Chip color="warning" label={t('atomicRule')} /> Utilizar o plugin <b>useSortBy</b>;
            </Typography>
            <Typography component="li">
              <Chip color="warning" label={t('atomicRule')} /> Ordena apenas os dados presentes na tabela;{' '}
              <SBLink story="atomic-data-display-table--sort" />
            </Typography>
            <Typography component="li">
              <Chip color="warning" label={t('atomicRule')} /> Para obter dados ordenados de uma fonte externa (ex.:
              API), é necessário passar a propriedade <b>manualSortBy</b> a <b>true</b>;{' '}
              <SBLink story="atomic-data-display-table--external-sort" />
            </Typography>
          </Col>
        </Col>
      )}

      <Col gap={1}>
        <Typography variant="subtitle2">Botões</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li" variant="subtitle1">
            Antes da tabela
          </Typography>
          <Col component="ul" gap={1}>
            <Typography component="li">Alinhado a esquerda, seguindo a regra do espaçamento;</Typography>
            <Row>
              <Button startIcon={<AddOutlined />}>Criar item</Button>
              <Button startIcon={<DeleteOutlineOutlined />} color="light">
                Eliminar
              </Button>
            </Row>
            <Typography component="li">Botão default primary com icon, para a ação primária:</Typography>
            <Row>
              <Button startIcon={<AddOutlined />}>Criar entidade</Button>
            </Row>
            <Typography component="li">Botão default light, para restantes ações:</Typography>
            <Row>
              <Badge color="success" badgeContent="+ 99">
                <Button startIcon={<CachedOutlined />} color="light">
                  Apagar cache
                </Button>
              </Badge>
            </Row>
          </Col>
          {checked && (
            <>
              <Typography component="li" variant="subtitle1">
                Depois da tabela
              </Typography>
              <Col component="ul" gap={1}>
                <Typography component="li">
                  <Chip color="warning" label={t('atomicRule')} /> Exportar, alinhado a direita, seguindo a regra do
                  espaçamento;
                </Typography>
                <Typography component="li">
                  <Chip color="warning" label={t('atomicRule')} /> Botão default light com icon para um tipo:
                </Typography>
                <Row>
                  <Button startIcon={<SaveAltOutlined />} color="light">
                    PDF
                  </Button>
                </Row>
                <Typography component="li">
                  <Chip color="warning" label={t('atomicRule')} /> Dropdown default light com icon para vários tipos:
                </Typography>
                <Row>
                  <Dropdown
                    menuProps={{
                      noSort: true,
                      options: [
                        {
                          label: 'CSV',
                        },
                        {
                          label: 'XLSX',
                        },
                        {
                          label: 'PDF',
                        },
                      ],
                    }}
                    menuPosition="top"
                    startIcon={<SaveAltOutlined />}
                    color="light"
                  >
                    Exportar
                  </Dropdown>
                </Row>
              </Col>
            </>
          )}
        </Col>
      </Col>
    </Surface>
  )
}
export default protectComponent(Tables)
