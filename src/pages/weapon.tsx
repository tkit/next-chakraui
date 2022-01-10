import axios from 'axios'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { Container } from '../components/atoms/Container'
import { SearchInputContext } from '../components/providers/SearchInputContext'
import { Weapons } from '../components/templates/Weapons'
import { WeaponDetail } from '../interfaces'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

type WeaponProps = {
  weapons: WeaponDetail[]
}

const Weapon = ({ weapons }: WeaponProps) => {
  const router = useRouter()

  const { searchInputText, setSearchInputText } = useContext(SearchInputContext)

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      setSearchInputText('')

      return () => {
        router.events.off('routeChangeComplete', () => {
          setSearchInputText('')
        })
      }
    })
  })

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
