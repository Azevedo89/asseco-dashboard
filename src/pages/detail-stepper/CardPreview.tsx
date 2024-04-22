import { Typography } from '@asseco-web/ui/atomic'
import { Box } from '@mui/material'

export const CardPreview = ({ product }: { product: string }) => {
  return (
    Boolean(product) && (
      <Box
        width={170}
        height={108}
        bgcolor="#0a4693"
        borderRadius="8px"
        position="relative"
        boxShadow="4px 12px 12px 0 rgba(0, 0, 0, 0.2)"
      >
        <Box width={28} height={24} bgcolor="#dcbf7f" borderRadius="4px" position="absolute" top={30} left={22} />
        <Typography variant="subtitle1" color="common.white" position="absolute" bottom={22} right={24}>
          VISA
        </Typography>
      </Box>
    )
  )
}
