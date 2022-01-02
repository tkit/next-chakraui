import { createContext, useState } from 'react'

export type GlobalContent = {
  searchInputText: string
  setSearchInputText: (c: string) => void
}

export const SearchInputStageContext = createContext<GlobalContent | undefined>(
  undefined
)

export const SearchInputStageProvider = (props: { children: JSX.Element }) => {
  const { children } = props
  const [searchInputText, setSearchInputText] = useState<string>('')

  return (
    <SearchInputStageContext.Provider
      value={{ searchInputText, setSearchInputText }}
    >
      {children}
    </SearchInputStageContext.Provider>
  )
}
