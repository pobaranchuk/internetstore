import styled, {css} from "styled-components";

export const ButtonContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

type ButtonStyledProps = {
    buttonType: "primary" | "secondary"
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 86px;
    height: 30px;
    padding: 0;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    float: left;

    ${props => props.buttonType === "primary" && css<ButtonStyledProps>`
        background-color: rgba(5, 104, 221, 0.91);
        color: #ffffff;

    `}
    ${props => props.buttonType === "secondary" && css<ButtonStyledProps>`
        background-color: rgba(255, 255, 255, 0.79);
        color: rgba(5, 104, 221, 0.91);

    `}
    &:hover {
        opacity: 0.9;
    }

    &:focus {
        outline: 2px solid rgba(5, 104, 221, 0.5);
    }

    &:active {
        transform: scale(0.98);
    }
`


export const MainCardStyled = styled.button`
    display: flex;
    height: 370px;
    width: 270px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    margin: 19px;
    
`

export const MainPictureStyled = styled.img`
    display: flex;
    border-radius: 10px;
    margin: 10px;
    height: 150px;
    width: 250px;
    
`

export const ItemNameStyled = styled.h1`
    color: #000;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 15px;
    text-align: left;
`

export const DetailsStyled = styled.p`
    display: block;
    height: 100px;
    width: 250px;
    color: #ABB3BA;
    font-family: Inter, serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    margin: 15px;
    overflow: hidden;
    text-overflow: ellipsis; 
    padding-right: 3px;
`