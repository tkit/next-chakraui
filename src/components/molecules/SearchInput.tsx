import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { KeyboardEvent } from 'react'

export const SearchInput = (props: {
  fn: (c: string) => void
}): JSX.Element => {
  const { fn } = props

  return (
    <Stack spacing={4} mb="2rem">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search stage name"
          onKeyUp={(e: KeyboardEvent<HTMLInputElement>) =>
            fn(e.currentTarget.value)
          }
        />
      </InputGroup>
    </Stack>
  )
}
