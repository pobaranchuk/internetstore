import { ShopCardsStyled } from '@components/shopCards/ShopCardsStyled.ts'
import { Header } from '@components/Header/Header.tsx'
import { BodyStyled } from '@styles/BodyStyled.tsx'
import { Navigation } from '@components/Navigation/Navigation.tsx'
import { ShopCardsMenu } from '@components/shopCards/ShopCardsMenu.tsx'




export function HomePage() {
  return (
    <>
      <Header />
      <BodyStyled>
        <Navigation />
        <ShopCardsStyled>
          <ShopCardsMenu/>
        </ShopCardsStyled>
      </BodyStyled>
    </>
  )
}
