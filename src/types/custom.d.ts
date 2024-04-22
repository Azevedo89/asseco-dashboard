declare module '*.svg' {
  const content: string
  export default content
}

declare module '@reduxjs/toolkit/query/react' {
  export * from '@reduxjs/toolkit/dist/query/react'
}

declare module '@reduxjs/toolkit/query' {
  export * from '@reduxjs/toolkit/dist/query'
}
