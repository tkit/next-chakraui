import { Stage } from '../../interfaces'
import { SearchInput } from '../molecules/SearchInput'
import { StageTable } from '../molecules/StageTable'
import { StageList } from '../organisms/StageList'

const baseUrl = process.env.NEXT_PUBLIC_NINTENDO_BASE_URL

export const Stages = (props: { stages: Stage[] }): JSX.Element => {
  const { stages } = props

  return (
    <>
      <SearchInput placeholder="Search stage name" />
      <StageList baseUrl={baseUrl} data={stages} />
      <StageTable data={stages} />
    </>
  )
}
