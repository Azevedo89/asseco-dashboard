import { getDefaultsFromZodSchema } from '@asseco-web/helpers'
import { Col, Input, Surface } from '@asseco-web/ui/atomic'
import { zodResolver } from '@hookform/resolvers/zod'
import { Typography } from '@mui/material'
import { protectComponent } from 'components/ProtectedComponent'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { SBLink } from './components/SBLink'

const Forms = () => {
  const schema = z.object({
    cc_like: z.string().min(1).default(''),
  })

  type Schema = z.infer<typeof schema>
  const { control } = useForm<Schema>({
    mode: 'all',
    defaultValues: getDefaultsFromZodSchema(schema),
    resolver: zodResolver(schema),
  })

  return (
    <Surface gap={3}>
      <Col gap={1}>
        <Typography variant="subtitle2">Tamanho</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            Os formulários com stepper <SBLink story="compostos-stepper--acm" /> ou sem stepper{' '}
            <SBLink story="compostos-forms--forms" />, <b>não devem ocupar, visualmente, mais de 50% da área de ecrã</b>
            :
          </Typography>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Espaçamento</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            <b>24px</b> entre campos:
          </Typography>
          <Col w={1 / 2}>
            <Input label="Primeiro nome" />
            <Input label="Último nome" />
          </Col>
          <Typography component="li">
            <b>32px</b> de quebra identificativa com titulo:
          </Typography>
          <Col gap={4} w={1 / 2}>
            <Col>
              <Input label="Último nome" />
            </Col>
            <Col>
              <Typography variant="h5">Informação profissional</Typography>
              <Input label="Entidade patronal" />
              <Input label="Função ou cargo" />
            </Col>
          </Col>
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Campos obrigatórios</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            Os campos obrigatórios não devem ter à priori qualquer identificação de obrigatoriedade;
          </Typography>
          <Typography component="li">
            Os campos devem ser assinalados como sendo de preenchimento obrigatório no esquema de validação (.min(1) ou
            .refine);
          </Typography>
          <Typography component="li">
            Utilizar o modo <b>all</b> do react-hook-form, para que a validação seja feita tanto no onBlur como no
            onChange event:
          </Typography>
          <Input control={control} label="Cartão de Cidadão" name="cc_like" w={1 / 3} />
        </Col>
      </Col>

      <Col gap={1}>
        <Typography variant="subtitle2">Separadores</Typography>
        <Col component="ul" gap={1}>
          <Typography component="li">
            Se houver necessidade de ter uma divisão num formulário, deve ser utilizado um separador central (prop{' '}
            <b>withDivider</b> no{' '}
            <b>
              {'<'}Row{'>'}
            </b>{' '}
            );
          </Typography>
          <Typography component="li">
            O separador central não deve ser aplicado nos formulários que tenham stepper;
          </Typography>
        </Col>
      </Col>
    </Surface>
  )
}
export default protectComponent(Forms)
