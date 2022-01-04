import { Image } from '../atoms/Image'

type ImageProps = {
  alt: string
  src: string
  width: string
  height: string
}

export const ModalImage = (props: ImageProps): JSX.Element => {
  return <Image borderRadius="xl" boxShadow="md" alt="default" {...props} />
}
