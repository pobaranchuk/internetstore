import styled from "styled-components";

export const NavigationStyled = styled.nav`
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 85vh;
    background-color: rgba(92, 92, 221, 0.72);
    color: #fff;
    padding: 15px;
    margin: 10px;
    

    ul {
        width: 90%;
    }

    li {
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    a {
        color: #ffffff;
    }
`