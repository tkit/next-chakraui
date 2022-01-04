import { Box, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import { useContext } from 'react'
import useSWR from 'swr'
import { WeaponDetail } from '../../interfaces'
import { SearchInput } from '../molecules/SearchInput'
import { WeaponList } from '../organisms/WeaponList'
import { SearchInputWeaponContext } from '../providers/SearchInputWeaponContext'

const baseUrl = process.env.NEXT_PUBLIC_NINTENDO_BASE_URL
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const Weapons = (): JSX.Element => {
  const { searchInputText, setSearchInputText } = useContext(
    SearchInputWeaponContext
  )
  const fetcher = (url: string) =>
    axios.get<WeaponDetail[]>(url).then((res) => {
      return res.data
    })

  const { data, error } = useSWR<WeaponDetail[], Error>(
    apiUrl + 'weapons',
    fetcher
  )
  if (error) return <Box>error.</Box>
  if (!data) return <Spinner />

  const filteredWeapons = data.filter((x) =>
    x.name.toLowerCase().includes(searchInputText.toLowerCase())
  )

  return (
    <>
      <SearchInput fn={setSearchInputText} />
      <WeaponList baseUrl={baseUrl} data={filteredWeapons} />
    </>
  )
}
