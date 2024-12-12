import {ShopCard} from "./layout/sections/shopCards/shopCard/ShopCard.tsx";
import {ShopCardsStyled} from "./layout/sections/shopCards/ShopCardsStyled.tsx";
import {Header} from "./layout/header/Header.tsx";
import {BodyStyled} from "./layout/sections/BodyStyled.tsx";
import {Navigation} from "./layout/sections/navigation/Navigation.tsx";

export function App() {
  return(
      <>
          <Header/>
          <BodyStyled>
              <Navigation/>
              <ShopCardsStyled>
                  <ShopCard/>
                  <ShopCard/>
                  <ShopCard/>
                  <ShopCard/>
                  <ShopCard/>
                  <ShopCard/>
                  <ShopCard/>
                  <ShopCard/>
                  <ShopCard/>
                  <ShopCard/>
                  <ShopCard/>
                  <ShopCard/>
                  <ShopCard/>
                  <ShopCard/>
              </ShopCardsStyled>
          </BodyStyled>
      </>
  )
}