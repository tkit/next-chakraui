import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { KeyboardEvent, useContext } from 'react'
import { SearchInputContext } from '../providers/SearchInputContext'

export const SearchInput = (props: { placeholder?: string }): JSX.Element => {
  const { placeholder } = props

  const { setSearchInputText } = useContext(SearchInputContext)

  return (
    <Stack spacing={4} mb="2rem">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder={placeholder}
          onKeyUp={(e: KeyboardEvent<HTMLInputElement>) =>
            setSearchInputText(e.currentTarget.value)
          }
        />
      </InputGroup>
    </Stack>
  )
}
