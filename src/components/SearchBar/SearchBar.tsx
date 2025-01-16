import { SearchButton, SearchInput, SearchWrapper } from './SearchBarStyled.ts'
import { FiSearch } from 'react-icons/fi'
import { ChangeEvent, useState } from 'react'
import { IconWrapper } from '../Icons/IconWrapperStyled.ts'
import { ICON_CONFIG } from '@components/Icons/constants.ts'

export const SearchBar = () => {
  const [searchText, setSearchText] = useState('')

  const handleSearch = () => {
    alert(`Searching for: ${searchText}`)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  return (
    <SearchWrapper>
      <IconWrapper>
        <FiSearch {...ICON_CONFIG} />
      </IconWrapper>
      <SearchInput
        type='text'
        placeholder="I'm looking for..."
        value={searchText}
        onChange={onChangeHandler}
      />
      <SearchButton onClick={handleSearch}>Find</SearchButton>
    </SearchWrapper>
  )
}
