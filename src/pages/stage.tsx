import { Container } from '../components/atoms/Container'
import { SearchInputStageProvider } from '../components/providers/SearchInputStageContext'
import { Stages } from '../components/templates/Stages'

const Stage = () => {
  return (
    <SearchInputStageProvider>
      <Container height="100vh" width="100vw">
        <Stages />
      </Container>
    </SearchInputStageProvider>
  )
}

export default Stage
