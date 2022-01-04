import { Center, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { WeaponDetail } from '../../interfaces'
import { Image } from '../atoms/Image'
import { WeaponModal } from './WeaponModal'

type ImageProps = {
  readonly baseUrl: string
  readonly weapon: WeaponDetail
}

export const WeaponSet = (props: ImageProps): JSX.Element => {
  const { baseUrl, weapon } = props
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <VStack
        w="140px"
        onClick={onOpen}
        _hover={{
          background: 'gray.200',
          color: 'teal.500',
          borderRadius: '0.5rem',
        }}
      >
        <Image
          borderRadius="xl"
          boxShadow="md"
          src={baseUrl + weapon.thumbnail}
          alt={weapon.name}
          width="100px"
          height="100px"
        />
        <Center>
          <Text
            isTruncated
            color="gray.500"
            fontSize="sm"
            mb="1rem"
            w="130px"
            align="center"
          >
            {weapon.name}
          </Text>
        </Center>
      </VStack>
      <WeaponModal
        isOpen={isOpen}
        onClose={onClose}
        weapon={weapon}
        baseUrl={baseUrl}
      />
    </>
  )
}
