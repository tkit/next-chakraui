import { createContext, useState } from 'react'

export type GlobalContent = {
  searchInputText: string
  setSearchInputText: (c: string) => void
}

export const SearchInputContext = createContext<GlobalContent | undefined>(
  undefined
)

export const SearchInputProvider = (props: { children: JSX.Element }) => {
  const { children } = props
  const [searchInputText, setSearchInputText] = useState<string>('')

  return (
    <SearchInputContext.Provider
      value={{ searchInputText, setSearchInputText }}
    >
      {children}
    </SearchInputContext.Provider>
  )
}
