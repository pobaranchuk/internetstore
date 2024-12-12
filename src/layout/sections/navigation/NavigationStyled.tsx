import styled from "styled-components";

export const NavigationStyled = styled.nav`
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100vh;
    background-color: rgba(92, 92, 221, 0.72);
    color: #fff;
    padding: 15px;
    margin: 10px;

    ul {
        width: 100%;
    }

    li {
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    a {
        color: #ffffff;
        width: 100%;
    }
`