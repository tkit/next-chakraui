import { Stage } from '../interfaces/index'
import { DataTable } from './DataTable'

export const StageTable = (props: { data: Stage[] }): JSX.Element => {
  const { data } = props
  const columns = [
    {
      Header: 'ID',
      accessor: 'ID',
    },
    {
      Header: 'name',
      accessor: 'name',
    },
    {
      Header: 'image',
      accessor: 'image',
    },
  ]

  return <DataTable columns={columns} data={data} />
}
