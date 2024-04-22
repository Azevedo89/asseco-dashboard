import type { SerializedError } from '@reduxjs/toolkit'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import type { NavigateFunction } from 'react-router-dom'
import type { Client } from 'types/api.types'

export type ErrorToastType = {
  isError: boolean
  error: FetchBaseQueryError | SerializedError | undefined
}

export type ContextMenuProps = {
  editClient: (client: Client) => void
  confirmChange: (id: number) => void
  confirmDelete: (client: Client) => void
  navigate: NavigateFunction
}
