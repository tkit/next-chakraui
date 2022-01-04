import { Center, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { StageModal } from '../molecules/StageModal'
import { Thumbnail } from '../molecules/Thumbnail'

type ImageProps = {
  readonly name: string
  readonly src: string
}

export const StageSet = (props: ImageProps): JSX.Element => {
  const { name, src } = props
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
        <Thumbnail src={src} alt={name} width="160px" height="90px" />
        <Center>
          <Text
            isTruncated
            color="gray.500"
            fontSize="sm"
            mb="1rem"
            w="160px"
            align="center"
          >
            {name}
          </Text>
        </Center>
      </VStack>
      <StageModal isOpen={isOpen} onClose={onClose} src={src} name={name} />
    </>
  )
}
