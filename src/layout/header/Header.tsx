import { HeaderStyled } from './HeaderStyled.tsx'
import { FlexWrapper } from '../../components/FlexWrapper.ts'
import { HomeButton } from '../../components/icons/HomeButton.tsx'
import { LikeButton } from '../../components/icons/LikeButton.tsx'
import { BaskedButton } from '../../components/icons/BaskedButton.tsx'
import { AccountButton } from '../../components/icons/AccountButton.tsx'
import { SearchBar } from '../../components/searchBar/SearchBar.tsx'

export const Header = () => {
  return (
    <HeaderStyled>
      <FlexWrapper >
        <HomeButton />
        <SearchBar />
        <LikeButton />
        <BaskedButton />
        <AccountButton />
      </FlexWrapper>
    </HeaderStyled>
  )
}
