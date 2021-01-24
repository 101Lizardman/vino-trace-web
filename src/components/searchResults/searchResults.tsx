import React from 'react';
import styled from "styled-components";
import SearchResult from "./searchResult";
import { WineDataObject } from "../../schema/wineDataObject";

type SearchResultsProps = {
    dataObjects: WineDataObject[] | null;
    onClick: (wineDataObject: WineDataObject) => void;
    searchTerm: string;
}

const SearchResultsWrapper = styled.div`
    display: flex;
    flex-direction:column;
    border: 1px solid #dedede;
    background-color: #ffffff;

    align-items: center;
`;

const HorizontalSpacer = styled.div`
    max-height: 1px;
    border: #dedede solid 1px;
    opacity: 0.6;
    width: 37rem;
`;

export const SearchResults = ({dataObjects, onClick, searchTerm}: SearchResultsProps) => {

    if (dataObjects == null) return <></>;

    var returnObjects = dataObjects.map((dataObject, i) => {
        
        let mappedElements = [];
        mappedElements.push(<SearchResult data={dataObject} key={dataObject.lotCode} onClick={onClick} searchTerm={searchTerm} />);

        if (!(i + 1 === dataObjects.length)) {
            // If this isn't the last item in the mapping, add a horizontal line
            mappedElements.push(<HorizontalSpacer />)
        }

        return mappedElements;
    })

    return (
        <SearchResultsWrapper>
            {returnObjects}
        </SearchResultsWrapper>
    )
}
  
export default SearchResults;