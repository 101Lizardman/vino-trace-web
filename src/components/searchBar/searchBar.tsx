import styled from "styled-components";
import { Icon } from "../../App";
import SearchIconSource from '../../assets/icons/searchIcon.svg';
import ClearIconSource from '../../assets/icons/clearIcon.svg'
import React from "react";

type SearchBarProps = {
    searchTerm: string;
    onChange: (input: string) => void;
}

const SearchBlock = styled.div`
    height: 3rem;
    width: 39rem;
    background-color: white;

    border: 1px solid #dedede;
    border-radius: 5px;
`;

const SearchBlockContents = styled.div`
    display: flex;
    flex-direction: row;

    height: 100%;
    width: 100%;
`;

// Todo: Transitions
const SearchBarIconWrapper = styled.div`
    height: 1rem;
    width: 1rem;
    padding: 1rem;
`;

type SearchTermProps = {
    searchTerm: string
}

const SearchField = styled.input<SearchTermProps>`
    display: flex;
    border: none;

    color: #0F1010;
    width: 100%;
    align-items: center;

    font-family: Montserrat;
    font-size: 0.813rem;

    &:focus {
        outline: none;
    }

    &::-webkit-input-placeholder {
        color: #CCCCCC;
      }
`;

const Clickable = styled.div``;

export const SearchBar = ({searchTerm, onChange}: SearchBarProps) => {

    const onClearClick = () => {
        onChange("");
    }
    
    return (
        <SearchBlock>
            <SearchBlockContents>
                <SearchBarIconWrapper>
                    <Icon src={SearchIconSource} altText={"Search icon"} />
                </SearchBarIconWrapper>
                <SearchField 
                    searchTerm={searchTerm} 
                    onChange={(e) => onChange(e.target.value)} 
                    value={searchTerm} 
                    placeholder={"Search by lot code or description..."} 
                />
                {searchTerm !== "" &&
                <Clickable onClick={onClearClick}>
                    <SearchBarIconWrapper>
                        <Icon src={ClearIconSource} altText={"Clear search"}/>
                    </SearchBarIconWrapper>
                </Clickable>}
            </SearchBlockContents>
        </SearchBlock>
    );
}
  
export default SearchBar;