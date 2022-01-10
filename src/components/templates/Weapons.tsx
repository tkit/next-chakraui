import { WeaponDetail } from '../../interfaces'
import { SearchInput } from '../molecules/SearchInput'
import { WeaponList } from '../organisms/WeaponList'

const baseUrl = process.env.NEXT_PUBLIC_NINTENDO_BASE_URL

export const Weapons = (props: { weapons: WeaponDetail[] }): JSX.Element => {
  const { weapons } = props

  return (
    <>
      <SearchInput placeholder="Search weapon name" />
      <WeaponList baseUrl={baseUrl} data={weapons} />
    </>
  )
}
