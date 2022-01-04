import { Image } from './Image'

type ImageProps = {
  name: string
  src: string
}

export const WeaponImage = (props: ImageProps): JSX.Element => {
  const { name, src } = props

  return (
    <Image
      borderRadius="xl"
      boxShadow="md"
      width="256px"
      height="256px"
      src={src}
      alt={name}
    />
  )
}
