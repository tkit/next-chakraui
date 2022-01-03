import { Image } from './Image'

type ImageProps = {
  name: string
  src: string
}

export const StageImage = (props: ImageProps): JSX.Element => {
  const { name, src } = props

  return (
    <Image
      borderRadius="xl"
      boxShadow="md"
      width="320px"
      height="180px"
      src={src}
      alt={name}
    />
  )
}
