import { Center, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { WeaponDetail } from '../interfaces'
import { WeaponModal } from './WeaponModal'
import { WeaponThumbnail } from './WeaponThumbnail'

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
        w="170px"
        onClick={onOpen}
        _hover={{
          background: 'gray.200',
          color: 'teal.500',
          borderRadius: '0.5rem',
        }}
      >
        <WeaponThumbnail src={baseUrl + weapon.thumbnail} name={weapon.name} />
        <Center>
          <Text
            isTruncated
            color="gray.500"
            fontSize="sm"
            mb="1rem"
            w="160px"
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
