import styled from 'styled-components'

export const ButtonContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 250px;
    margin: 15px;
`

export const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: auto;
    max-width: 100px;
    padding: 10px;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};

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
    background: ${props => props.theme.colors.secondary};
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
    color: ${props => props.theme.colors.textPrimary};
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
    margin: 15px;
`

export const DetailsStyled = styled.p`
    display: block;
    height: 100px;
    max-width: 100%;
    overflow: hidden;
    color: ${props => props.theme.colors.textSecondary};
    font-family: Inter, serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    margin: 15px;
`
