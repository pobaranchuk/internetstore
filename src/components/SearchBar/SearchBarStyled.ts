import styled from 'styled-components'

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 25px;
  padding: 5px 15px;
  width: 40%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: ${props => props.theme.colors.primaryBg};
  margin-left: 10px;

  &::placeholder {
    color: ${props => props.theme.colors.placeHolderColor};;
  }
`

export const SearchButton = styled.button`
  background-color: ${props => props.theme.colors.headerPrimary};
  color: ${props => props.theme.colors.white};;
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 14px;
  margin-left: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.headerSecondary};
  }
`
