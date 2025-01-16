import { ShopCard } from '@layout/sections/shopCards/ShopCard/ShopCard.tsx'
import { ShopCardsStyled } from '@layout/sections/shopCards/ShopCardsStyled.ts'
import { Header } from '@components/Header/Header.tsx'
import { BodyStyled } from '@layout/sections/BodyStyled.tsx'
import { Navigation } from '@components/Navigation/Navigation.tsx'

export function HomePage() {
  return (
    <>
      <Header />
      <BodyStyled>
        <Navigation />
        <ShopCardsStyled>
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </ShopCardsStyled>
      </BodyStyled>
    </>
  )
}
