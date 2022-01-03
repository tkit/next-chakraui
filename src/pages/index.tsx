import { Flex } from '@chakra-ui/react'
import { Container } from '../components/Container'
import { SearchInputStageProvider } from '../components/providers/SearchInputStageContext'
import { Stages } from '../components/Stages'

const Index = () => {
  return (
    <SearchInputStageProvider>
      <Flex direction="column">
        <Container height="100vh" width="100vw">
          <Stages />
        </Container>
      </Flex>
    </SearchInputStageProvider>
  )
}

export default Index
