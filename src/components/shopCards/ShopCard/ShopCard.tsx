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

export const ShopCard = () => {
  let navigate = useNavigate();

  const onClickHandler = () => {
    return navigate(RoutePath.CardPage)
  }

  return (
    <MainCardStyled>
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
          <MainPictureStyled src={mainImg} />
          <ItemNameStyled>MacBook M4 Pro</ItemNameStyled>
          <DetailsStyled onClick={onClickHandler}>
            6-core Neural Engine 14-inch Liquid Retina XDR display² Three
            Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack,
            MagSafe 3 port Three Thunderbolt 4 ports, HDMI port, SDXC card slot,
            headphone jack, MagSafe 3 port SDXC card slot, headphone jack,
            MagSafe 3 port Three Thunderbolt 4 ports, HDMI port, SDXC card slot,
            headphone jack, MagSafe 3 port
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
