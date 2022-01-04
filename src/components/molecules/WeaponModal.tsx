import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'
import { WeaponDetail } from '../../interfaces'
import { Image } from '../atoms/Image'

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
          <Image
            borderRadius="xl"
            boxShadow="md"
            src={baseUrl + weapon.image}
            alt={weapon.name}
            width="256px"
            height="256px"
          />
          <HStack>
            <VStack>
              <Text color={{ light: 'gray.500', dark: 'gray.200' }}>
                {weapon.sub.name}
              </Text>
              <Image
                width="32px"
                height="32px"
                src={baseUrl + weapon.sub.imageA}
                alt={weapon.sub.name}
              />
            </VStack>
            <VStack>
              <Text color={{ light: 'gray.500', dark: 'gray.200' }}>
                {weapon.special.name}
              </Text>
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
