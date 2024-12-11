import {ButtonStyled, ItemNameStyled, MainCardStyled, MainPictureStyled, DetailsStyled} from "./ShopCardStyled.ts";
import mainImg from "./../../assets/images/macBookM4Pro.jpg"

export const ShopCard = () => {
    return (
        <MainCardStyled>
            <MainPictureStyled src={mainImg}/>
            <ItemNameStyled>MacBook M4 Pro</ItemNameStyled>
            <DetailsStyled>6-core Neural Engine
                14-inch Liquid Retina XDR display²
                Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port
                Magic Keyboard with Touch ID
                Force Touch trackpad
                Bla bla lbledf
            </DetailsStyled>
            <ButtonStyled buttonType={"primary"}>Add to Cart</ButtonStyled>
            <ButtonStyled buttonType={"secondary"}>Details</ButtonStyled>
        </MainCardStyled>

    );
};
