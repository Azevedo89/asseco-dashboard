import { Box, Loader } from '@asseco-web/ui/atomic' // import { styled } from '@mui/material'

const Loading = () => (
  <Box
    sx={{
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Loader />
  </Box>
)

export default Loading
