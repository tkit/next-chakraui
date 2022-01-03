import { Image } from './Image'

type ImageProps = {
  readonly name: string
  readonly src: string
}

export const StageThumbnail = (props: ImageProps): JSX.Element => {
  const { name, src } = props

  return (
    <Image
      borderRadius="xl"
      boxShadow="md"
      width="160px"
      height="90px"
      src={src}
      alt={name}
    />
  )
}
