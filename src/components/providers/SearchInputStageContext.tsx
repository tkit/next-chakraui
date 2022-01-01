import { createContext, useState } from 'react'

export const SearchInputStageContext = createContext<any>({})

export const SearchInputStageProvider = (props: { children: any }) => {
  const { children } = props
  const [searchInputText, setSearchInputText] = useState('')
  return (
    <SearchInputStageContext.Provider
      value={{ searchInputText, setSearchInputText }}
    >
      {children}
    </SearchInputStageContext.Provider>
  )
}
