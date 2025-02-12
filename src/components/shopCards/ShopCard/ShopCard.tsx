import {
  ButtonContainerStyled,
  ButtonStyled,
  DetailsStyled,
  ItemNameStyled,
  MainCardStyled,
  MainPictureStyled,
} from './ShopCardStyled.ts'
import Tilt from 'react-parallax-tilt'
import mainImg from '@assets/images/macBookM4Pro.jpg'
import { LikeButton } from '@components/Icons/LikeButton.tsx'
import { useNavigate } from 'react-router'
import { RoutePath } from '@common/router/Routing.tsx'
import { ShopCardData } from '@components/shopCards/ShopCardsMenu.tsx'

type Props = {
  shopCard: ShopCardData
}

export const ShopCard = ({shopCard}: Props) => {


  let navigate = useNavigate();

  const onClickHandler = () => {
    return navigate(RoutePath.CardPage)
  }

  return (
    <MainCardStyled >
      <Tilt
        className='parallax-effect-img'
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={800}
        transitionSpeed={1300}
        scale={1.01}
        gyroscope={true}
      >
        <>
          <MainPictureStyled src={mainImg} onClick={onClickHandler}/>
          <ItemNameStyled onClick={onClickHandler}>{shopCard.name}</ItemNameStyled>
          <DetailsStyled >
            {shopCard.description}
          </DetailsStyled>
          <ButtonContainerStyled>
            <ButtonStyled >Add to Cart</ButtonStyled>
            <LikeButton />
          </ButtonContainerStyled>
        </>
      </Tilt>
    </MainCardStyled>
  )
}
