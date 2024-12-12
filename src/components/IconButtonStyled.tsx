import styled from "styled-components";

type IconButtonProps = {
    liked?: boolean
}
export const IconButtonStyled = styled.button<IconButtonProps>`
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

    svg {
        transition: fill 0.3s ease;
        fill: ${(props) => (props.liked ? "red" : "pink")};
    }
`;