import { Center, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { StageModal } from './StageModal'
import { StageThumbnail } from './StageThumbnail'

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
        w="160px"
        onClick={onOpen}
        _hover={{
          background: 'gray.200',
          color: 'teal.500',
          borderRadius: '0.5rem',
        }}
      >
        <StageThumbnail src={src} name={name} />
        <Center>
          <Text
            isTruncated
            color="gray.500"
            fontSize="sm"
            mb="1rem"
            w="150px"
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
