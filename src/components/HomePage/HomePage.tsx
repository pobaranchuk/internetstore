import { ShopCard } from '@components/shopCards/ShopCard/ShopCard.tsx'
import { ShopCardsStyled } from '@components/shopCards/ShopCardsStyled.ts'
import { Header } from '@components/Header/Header.tsx'
import { BodyStyled } from '@styles/BodyStyled.tsx'
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
