import { Flex, Heading } from '@chakra-ui/react'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { SearchInputStageProvider } from '../components/providers/SearchInputStageContext'
import { Stages } from '../components/Stages'

const Index = () => {
  return (
    <SearchInputStageProvider>
      <Flex direction="column">
        <Container height="5vh" width="100vw">
          <Heading>Splatoon2 Data</Heading>
        </Container>
        <Container height="100vh" width="100vw">
          <Stages />
          <DarkModeSwitch />
        </Container>
      </Flex>
    </SearchInputStageProvider>
  )
}

export default Index
