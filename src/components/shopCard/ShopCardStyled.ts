import styled, {css} from "styled-components";

type ButtonStyledPropsType = {
    buttonType: "primary" | "secondary"
}

export const ButtonStyled = styled.button<ButtonStyledPropsType>`
    border-radius: 5px;
    width: 86px;
    height: 30px;
    border: none;
    margin-left: 20px;
    margin-bottom: 22px;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    float: left;

    ${props => props.buttonType === "primary" && css<ButtonStyledPropsType>`
        background-color: rgba(5, 104, 221, 0.91);
        color: #ffffff;

    `}
    ${props => props.buttonType === "secondary" && css<ButtonStyledPropsType>`
        background-color: rgba(255, 255, 255, 0.79);
        color: rgba(5, 104, 221, 0.91);

    `}

    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    &:focus {
        outline: 2px solid rgba(5, 104, 221, 0.5);
    }

    &:active {
        transform: scale(0.98);
    }
`

export const MainCardStyled = styled.div`
    height: 400px;
    max-width: 300px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
`

export const MainPictureStyled = styled.img`
  border-radius: 10px;
  margin: 10px;
  width: 280px;
  height: 170px;
  flex-shrink: 0;
`

export const ItemNameStyled = styled.h1`
  color: #000;
  font-family: Inter,sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 20px;
  text-align: left;
`

export const DetailsStyled = styled.p`
  display: block;
  width: 260px;
  color: #ABB3BA;
  font-family: Inter,serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  margin: 20px;
`