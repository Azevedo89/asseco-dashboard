import { Chip, Stack, Typography } from '@asseco-web/ui/atomic'

export const Product = ({ product }: { product: string }) => {
  return product ? (
    <Stack direction="row" gap={1} alignItems="center">
      <Typography>{product}</Typography>
      <Chip color="success" label="Active" />
    </Stack>
  ) : (
    '-'
  )
}
