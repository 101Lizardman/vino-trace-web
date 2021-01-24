import styled from "styled-components";
import { WineDataObject } from "../../schema/wineDataObject";

type SearchResultsProps = {
    data: WineDataObject;
    onClick: (wineDataObject: WineDataObject) => void;
    searchTerm: string;
}

const SearchResultBox = styled.div`
    width: 39rem;
    height: 4rem;

    background-color: #ffffff;

    :hover {
		cursor: pointer;
	}
`;

const SearchResultContentWrapper = styled.div`
    display: flex;
    flex-direction: column;

    max-height: 100%;
    max-width: 100%;

    padding: 0.5rem 1rem 0.5rem 1rem;

    border-bottom-color: #3A3B3B;
    border-bottom-width: 1px;
`;

const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;

    width: 37rem;

    .last-item {
        margin-left: auto;
    }
`;

const LotCodeWrapper = styled.div`
    display: flex;
    flex: 2;
    font-weight: bold;
`;

const DescriptionWrapper = styled.div`
    display: flex;
    flex: 2;
    font-size: 0.813rem;
    font-color: #3A3B3B;
`;

const RightSideWrapper = styled.div`
    display: flex;
    mergin-left: auto;

    color: #0F1010;
    opacity: 0.6;
    font-size: 0.813rem;
`;

const HighlightedText = styled.span`
    color: #30D5C8;
    white-space: pre;
`;

const SearchTermHighlighter = (text: string, searchTerm: string) => {

    let returnElements = [];

    if (!text.includes(searchTerm)) {
        // If the searchTerm has not been found in this text
        returnElements.push(<span>{text}</span>);
    } else {
        // The searchTerm has been found in this text
        // Split the text up into 3 parts:
        //   - Before the term has been found, which will remain normal
        //   - Where the search term is in the text, which will have a different colour
        //   - After the term has been found, which is normal

        let splitString = text.split(searchTerm);
        
        returnElements.push(<span style={{whiteSpace: 'pre'}}>{splitString[0]}</span>)
        returnElements.push(<HighlightedText>{searchTerm}</HighlightedText>);
        returnElements.push(<span style={{whiteSpace: 'pre'}}>{splitString[1]}</span>)

    }
    return returnElements;
};

export const SearchResult = ({data, onClick, searchTerm}: SearchResultsProps) => {

    return (
        <SearchResultBox onClick={() => onClick(data)}>
            <SearchResultContentWrapper>
                <RowWrapper>
                    <LotCodeWrapper>
                        {SearchTermHighlighter(data.lotCode, searchTerm)}
                    </LotCodeWrapper>
                    <RightSideWrapper>
                        {data.volume + " L"}
                    </RightSideWrapper>
                </RowWrapper>
                <RowWrapper>
                    <DescriptionWrapper>
                        {data.description != null && SearchTermHighlighter(data.description, searchTerm)}
                    </DescriptionWrapper>
                    <RightSideWrapper>
                        {data.tankCode}
                    </RightSideWrapper>
                </RowWrapper>
            </SearchResultContentWrapper>
        </SearchResultBox>
    );
}
  
export default SearchResult;