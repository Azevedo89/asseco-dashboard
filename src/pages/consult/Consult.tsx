import { Surface } from '@asseco-web/ui/atomic'
import { useLazyGetClientsQuery } from 'api/consult.api'
import { protectComponent } from 'components/ProtectedComponent'
import { Table } from './components/ConsultTable'

const Consult = () => {
  const query = useLazyGetClientsQuery()

  return (
    <Surface>
      <Table query={query} />
    </Surface>
  )
}
export default protectComponent(Consult)
