import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { KeyboardEvent, useContext } from 'react'
import { SearchInputStageContext } from './providers/SearchInputStageContext'

export const SearchInputStage = (): JSX.Element => {
  const { setSearchInputText } = useContext(SearchInputStageContext)

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
            setSearchInputText(e.currentTarget.value)
          }
        />
      </InputGroup>
    </Stack>
  )
}
