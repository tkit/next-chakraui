import {
  Box,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react'
import { WeaponDetail } from '../interfaces'
import { Image } from './Image'
import { WeaponImage } from './WeaponImage'

type WeaponModalProps = {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly weapon: WeaponDetail
  readonly baseUrl: string
}

export const WeaponModal = (props: WeaponModalProps): JSX.Element => {
  const { weapon, baseUrl, isOpen, onClose } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{weapon.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <WeaponImage src={baseUrl + weapon.image} name={weapon.name} />
          <HStack>
            <VStack>
              <Box>{weapon.sub.name}</Box>
              <Image
                width="32"
                height="32px"
                src={baseUrl + weapon.sub.imageA}
                alt={weapon.sub.name}
              />
            </VStack>
            <VStack>
              <Box>{weapon.special.name}</Box>
              <Image
                width="32"
                height="32px"
                src={baseUrl + weapon.special.imageA}
                alt={weapon.special.name}
              />
            </VStack>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
