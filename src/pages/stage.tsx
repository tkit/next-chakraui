import axios from 'axios'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { Container } from '../components/atoms/Container'
import { SearchInputContext } from '../components/providers/SearchInputContext'
import { Stages } from '../components/templates/Stages'
import { Stage } from '../interfaces'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

type StageProps = {
  stages: Stage[]
}

const Stage = ({ stages }: StageProps) => {
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

  const filteredStages = stages.filter((x) =>
    x.name.toLowerCase().includes(searchInputText.toLowerCase())
  )

  return (
    <Container height="100vh" width="100vw">
      <Stages stages={filteredStages} />
    </Container>
  )
}

export default Stage

export const getStaticProps: GetStaticProps<StageProps> = async () => {
  const { data } = await axios.get<Stage[]>(apiUrl + 'stages')

  return {
    props: {
      stages: data,
    },
  }
}
