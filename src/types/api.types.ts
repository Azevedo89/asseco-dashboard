export type Country = {
  iso: string
  name: string
}

export type CountriesResponse = Country[]

export type Client = {
  address: string
  avatar: string
  birthDate: Date
  cc: number
  codigoResidencia: string
  company: string
  email: string
  entityId: number
  entityType: string
  firstName: string
  id: number
  jobAdmission: Date
  jobCompany: string
  jobTitle: string
  lastName: string
  nationality: string
  naturality: string
  nif: number
  paisResidencia: string
  phone: string
  phone2: string
  setorInsitucional: string
  sex: string
  correlationId: string
  bankaversion: string
  io: number
  apidata: string
  errorcode: number
  errormessage: string
  encryption: string
  licencekey: string
  https: boolean
  remoteaddr: string
  servername: string
}

export type ClientsResponse = { clients: Client[]; totalCount: number }
