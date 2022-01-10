import axios from 'axios'
import { GetStaticProps } from 'next'
import { useContext } from 'react'
import { Container } from '../components/atoms/Container'
import { SearchInputContext } from '../components/providers/SearchInputContext'
import { Weapons } from '../components/templates/Weapons'
import { WeaponDetail } from '../interfaces'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

type WeaponProps = {
  weapons: WeaponDetail[]
}

const Weapon = ({ weapons }: WeaponProps) => {
  const { searchInputText } = useContext(SearchInputContext)
  const filteredWeapons = weapons.filter((x) =>
    x.name.toLowerCase().includes(searchInputText.toLowerCase())
  )

  return (
    <Container height="100vh" width="100vw">
      <Weapons weapons={filteredWeapons} />
    </Container>
  )
}

export default Weapon

export const getStaticProps: GetStaticProps<WeaponProps> = async () => {
  const { data } = await axios.get<WeaponDetail[]>(apiUrl + 'weapons')

  return {
    props: {
      weapons: data,
    },
  }
}
