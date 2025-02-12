import styled from 'styled-components'

export const NavigationStyled = styled.nav`
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: 10px;

    ul {
        margin: 20px;
    }

    li {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 5px;
    }

    a {
        color: #000000;
    }
`
