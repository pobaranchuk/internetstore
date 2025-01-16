import { HomeButton } from '@components/Icons/HomeButton.tsx'
import { LikeButton } from '@components/Icons/LikeButton.tsx'
import { BaskedButton } from '@components/Icons/BaskedButton.tsx'
import { AccountButton } from '@components/Icons/AccountButton.tsx'
import { SearchBar } from '@components/SearchBar/SearchBar.tsx'
import { HeaderStyled } from '@components/Header/HeaderStyled.ts'

export const Header = () => {
  return (
    <HeaderStyled>
        <HomeButton />
        <SearchBar />
        <LikeButton />
        <BaskedButton />
        <AccountButton />
    </HeaderStyled>
  )
}
