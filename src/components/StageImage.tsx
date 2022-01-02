import { Image } from '@chakra-ui/react'

type ImageProps = {
  name: string
  src: string
}

export const StageImage = (props: ImageProps): JSX.Element => {
  const { name, src } = props

  return (
    <Image borderRadius="xl" boxShadow="md" w="300px" src={src} alt={name} />
  )
}
