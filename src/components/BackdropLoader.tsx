import { Loader } from '@asseco-web/ui/atomic'
import { Backdrop } from '@mui/material'
import { useSelector } from 'react-redux'

import type { RootState } from 'store/store'

const BackdropLoader = () => {
  const open = useSelector((state: RootState) =>
    Object.values(state.api.mutations).some((q) => q?.status === 'pending')
  )
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => Math.max(...Object.values(theme.zIndex)) + 1,
      }}
      open={open}
    >
      <Loader />
    </Backdrop>
  )
}

export default BackdropLoader
