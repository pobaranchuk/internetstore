import {
    ButtonContainerStyled,
    ButtonStyled,
    DetailsStyled,
    ItemNameStyled,
    MainCardStyled,
    MainPictureStyled
} from "./ShopCardStyled.ts";
import Tilt from 'react-parallax-tilt';
import mainImg from "../../../../assets/images/macBookM4Pro.jpg"
import {LikeButton} from "../../../../components/icons/LikeButton.tsx";


export const ShopCard = () => {
    return (
        <MainCardStyled>
            <Tilt className="parallax-effect-img"
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={800}
                  transitionSpeed={1300}
                  scale={1.01}
                  gyroscope={true}>
                <>
                    <MainPictureStyled src={mainImg}/>
                    <ItemNameStyled>MacBook M4 Pro</ItemNameStyled>
                    <DetailsStyled>6-core Neural Engine
                        14-inch Liquid Retina XDR display²
                        Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port
                        Magic Keyboard with Touch ID
                        Force Touch trackpad
                        Bla bla lbledf
                    </DetailsStyled>
                    <ButtonContainerStyled>
                        <ButtonStyled buttonType={"primary"}>Add to Cart</ButtonStyled>
                        <ButtonStyled buttonType={"secondary"}>Details</ButtonStyled>
                        <LikeButton/>
                    </ButtonContainerStyled>
                </>
            </Tilt>

        </MainCardStyled>

    );
};
