import {ShopCard} from "./components/shopCard/ShopCard.tsx";
import {ProductAssortmentStyled} from "./components/productAssortment/ProductAssortmentStyled.tsx";

export function App() {
  return(
      <>
          <ProductAssortmentStyled>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
          </ProductAssortmentStyled>
      </>
  )
}