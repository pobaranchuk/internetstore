import {SearchButton, SearchInput, SearchWrapper} from "./SearchBarStyled.tsx";
import {FiSearch} from 'react-icons/fi';
import {useState} from "react";
import {IconWrapper} from "../IconWrapper.tsx";

export const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        alert(`Searching for: ${searchText}`)
    };

    return (
        <SearchWrapper>
            <IconWrapper >
                <FiSearch size={"24px"} color={"#555"}/>
            </IconWrapper>
            <SearchInput
                type="text"
                placeholder="I'm looking for..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <SearchButton onClick={handleSearch}>Find</SearchButton>
        </SearchWrapper>
    );
};
