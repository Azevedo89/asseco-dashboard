import { Chip, Stack, Typography } from '@asseco-web/ui/atomic'

export const ProductType = ({ product }: { product: string }) => {
  return product ? (
    <Stack direction="row" gap={1} alignItems="center">
      <Typography>Crédito</Typography>
      <Chip color="primary" label="Yearly" soft />
    </Stack>
  ) : (
    '-'
  )
}
