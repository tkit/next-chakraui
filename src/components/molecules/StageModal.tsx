import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { ModalImage } from './ModalImage'

type StageModalProps = {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly name: string
  readonly src: string
}

export const StageModal = (props: StageModalProps): JSX.Element => {
  const { name, src, isOpen, onClose } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ModalImage src={src} alt={name} width="320px" height="180px" />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
