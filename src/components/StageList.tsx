import { Wrap, WrapItem } from '@chakra-ui/react'
import { Stage } from '../interfaces/index'
import { StageSet } from './StageSet'

export const StageList = (props: {
  baseUrl: string
  data: Stage[]
}): JSX.Element => {
  const { baseUrl, data } = props

  return (
    <Wrap>
      {data.map((stage) => (
        <WrapItem key={stage.image}>
          <StageSet src={baseUrl + stage.image} name={stage.name} />
        </WrapItem>
      ))}
    </Wrap>
  )
}
