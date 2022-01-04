import { createContext, useState } from 'react'

export type GlobalContent = {
  searchInputText: string
  setSearchInputText: (c: string) => void
}

export const SearchInputWeaponContext = createContext<
  GlobalContent | undefined
>(undefined)

export const SearchInputWeaponProvider = (props: { children: JSX.Element }) => {
  const { children } = props
  const [searchInputText, setSearchInputText] = useState<string>('')

  return (
    <SearchInputWeaponContext.Provider
      value={{ searchInputText, setSearchInputText }}
    >
      {children}
    </SearchInputWeaponContext.Provider>
  )
}
