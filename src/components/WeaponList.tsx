import { Wrap, WrapItem } from '@chakra-ui/react'
import { WeaponDetail } from '../interfaces/index'
import { WeaponSet } from './WeaponSet'

export const WeaponList = (props: {
  baseUrl: string
  data: WeaponDetail[]
}): JSX.Element => {
  const { baseUrl, data } = props

  return (
    <Wrap>
      {data.map((weapon) => (
        <WrapItem key={weapon.image}>
          <WeaponSet baseUrl={baseUrl} weapon={weapon} />
        </WrapItem>
      ))}
    </Wrap>
  )
}
