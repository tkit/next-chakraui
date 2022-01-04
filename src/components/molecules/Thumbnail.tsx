import { Image } from '../atoms/Image'

type ImageProps = {
  readonly alt: string
  readonly src: string
  readonly width: string
  readonly height: string
}

export const Thumbnail = (props: ImageProps): JSX.Element => {
  return <Image borderRadius="xl" boxShadow="md" alt="default" {...props} />
}
