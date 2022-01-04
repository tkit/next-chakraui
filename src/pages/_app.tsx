import { ChakraProvider, Divider, Heading } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Container } from '../components/atoms/Container'
import { DarkModeSwitch } from '../components/atoms/DarkModeSwitch'
import { DrawerMenu } from '../components/organisms/DrawerMenu'
import theme from '../theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container height="7vh" width="100vw">
        <DrawerMenu />
        <Heading mb="0.5rem">Splatoon2 Data</Heading>
        <Divider />
        <DarkModeSwitch />
      </Container>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
