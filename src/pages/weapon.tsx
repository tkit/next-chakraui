import { Container } from '../components/atoms/Container'
import { SearchInputWeaponProvider } from '../components/providers/SearchInputWeaponContext'
import { Weapons } from '../components/templates/Weapons'

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
