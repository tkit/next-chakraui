import { Image } from '@chakra-ui/react'

type ImageProps = {
  readonly name: string
  readonly src: string
}

export const StageThumbnail = (props: ImageProps): JSX.Element => {
  const { name, src } = props
  return (
    <Image borderRadius="xl" boxShadow="md" w="150px" src={src} alt={name} />
  )
}
