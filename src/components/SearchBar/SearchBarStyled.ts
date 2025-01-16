import styled from 'styled-components'

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 25px;
  padding: 5px 15px;
  width: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: #333;
  margin-left: 10px;

  &::placeholder {
    color: #aaa;
  }
`

export const SearchButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 14px;
  margin-left: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #218838;
  }
`
