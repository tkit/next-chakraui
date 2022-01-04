import { Box, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import { useContext } from 'react'
import useSWR from 'swr'
import { Stage } from '../../interfaces'
import { SearchInput } from '../molecules/SearchInput'
import { StageTable } from '../molecules/StageTable'
import { StageList } from '../organisms/StageList'
import { SearchInputStageContext } from '../providers/SearchInputStageContext'

const baseUrl = process.env.NEXT_PUBLIC_NINTENDO_BASE_URL
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const Stages = (): JSX.Element => {
  const { searchInputText, setSearchInputText } = useContext(
    SearchInputStageContext
  )
  const fetcher = (url: string) =>
    axios.get<Stage[]>(url).then((res) => {
      return res.data
    })

  const { data, error } = useSWR<Stage[], Error>(apiUrl + 'stages', fetcher)
  if (error) return <Box>error.</Box>
  if (!data) return <Spinner />

  const filteredStages = data.filter((x) =>
    x.name.toLowerCase().includes(searchInputText.toLowerCase())
  )

  return (
    <>
      <SearchInput fn={setSearchInputText} placeholder="Search stage name" />
      <StageList baseUrl={baseUrl} data={filteredStages} />
      <StageTable data={filteredStages} />
    </>
  )
}
