import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { StageImage } from './StageImage'

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
          <StageImage src={src} name={name} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
