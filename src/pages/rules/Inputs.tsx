import { useSelect } from '@asseco-web/ui'
import { Col, Input, Select, Surface, TextArea } from '@asseco-web/ui/atomic'
import { Typography } from '@mui/material'
import { protectComponent } from 'components/ProtectedComponent'

const Inputs = () => {
  return (
    <Surface gap={3}>
      <Col gap={1}>
        <Typography variant="subtitle2">Inputs com poucos carateres</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            Devem ocupar, visualmente, 2 colunas da grid base (12 colunas) do ecrã e podem ser de qualquer tipo: input,
            select, date ou hour picker;
          </Typography>
          <Typography component="li">
            Inputs com um número de carateres curto, que tenham no máximo 5 carateres;
          </Typography>
          <Typography component="li">
            <b>Exemplos:</b> Indicativo telefónico do país, Moeda, Data, Hora, Nº de filhos, Idade, Agregado familiar,
            etc:
          </Typography>
          <Input name="text" label="Nº de filhos" type="number" w={2 / 12} />
          <Select
            {...useSelect({
              label: 'Moeda',
              data: [
                { value: 'euro', label: 'Euro' },
                { value: 'akz', label: 'AKZ' },
                { value: 'usd', label: 'USD' },
              ],
            })}
            w={2 / 12}
          />
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Text area</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            Utilizar o <b>TextArea</b>, com ou sem indicação do limite de carateres, para textos longos como{' '}
            <b>Observações</b>, <b>Descrições</b>, etc:
          </Typography>
          <TextArea name="observations" label="Observações" w={1 / 2} />
          <TextArea name="descriptions" label="Descrições" maxChars={150} w={1 / 2} />
        </Col>
      </Col>
    </Surface>
  )
}
export default protectComponent(Inputs)
