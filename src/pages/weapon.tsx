import { Container } from '../components/Container'
import { SearchInputWeaponProvider } from '../components/providers/SearchInputWeaponContext'
import { Weapons } from '../components/Weapons'

const Weapon = () => {
  return (
    <SearchInputWeaponProvider>
      <Container height="100vh" width="100vw">
        <Weapons />
      </Container>
    </SearchInputWeaponProvider>
  )
}

export default Weapon
