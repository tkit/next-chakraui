import { Image } from './Image'

type ImageProps = {
  readonly name: string
  readonly src: string
}

export const WeaponThumbnail = (props: ImageProps): JSX.Element => {
  const { name, src } = props

  return (
    <Image
      borderRadius="xl"
      boxShadow="md"
      width="128px"
      height="128px"
      src={src}
      alt={name}
    />
  )
}
