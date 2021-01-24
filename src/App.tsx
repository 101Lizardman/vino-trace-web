import configData from './config.json'

import React, { useEffect, useState } from 'react';
import WineIconSource from './assets/icons/wineIcon.svg';
import styled from 'styled-components';
import GlobalFonts from './assets/fonts/fonts';
import SearchBar from './components/searchBar/searchBar';
import SearchResults from './components/searchResults/searchResults';
import WineDisplay from './components/wineDisplay/wineDisplay';
import { WineDataObject } from './schema/wineDataObject';

const PageWrapper = styled.div`
  background-color: #F5F5F5;
  height: 100vh;
  width: 100vw;
`;

const FontWrapper = styled.div`
  font-family: Montserrat;
`;

const PageContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
`;

const SearchContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1.5rem;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 1rem;

  font-size: 1.625rem;
  font-weight: 300;
  font-color: #0F1010;
`;

export type IconProps = {
  src: string
  altText: string
}

export const Icon = styled.img<IconProps>`
  src=${props => props.src};
  alt=${props => props.altText};
`;

const WineDisplayContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {

  const apiHost = configData.API_HOST;
  const apiPort = configData.API_PORT;

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchTermResults, setSearchTermResults] = useState(null);
  const [wineSelected, setWineSelected] = useState<WineDataObject | null>(null);

  const OnSearchBarChange = (input: string) => {
    setSearchTerm(input);
  }

  const OnSearchResultClick = (wineObject: WineDataObject) => {
    setWineSelected(wineObject);
  }

  const onWineDisplayBackClick = () => {
    setWineSelected(null);
  }

  const onWineDisplayEditClick = () => {
    console.log('On wine display edit button clicky!')
  }

  useEffect(() => {

    if (searchTerm !== "") {
      // Construct URL in order to hit Search API
      let endpointUrl = apiHost + ":" + apiPort + "/api/search/" + searchTerm;

      // Hit the API and collect results
      fetch(endpointUrl)
      .then(response => response.json())
      .then(data => {
        setSearchTermResults(data);
      });
    } else {
      setSearchTermResults(null);
    }
  }, [searchTerm, apiHost, apiPort]);

  return (
    <div className="App">
      <GlobalFonts />
      <PageWrapper>
        <FontWrapper>
          <PageContentWrapper>
          {wineSelected == null &&
          <SearchContentWrapper>
            <TitleWrapper>
              <Title>
                Wine search
              </Title>
              <Icon src={WineIconSource} altText={"Wine glass icon"}/>
            </TitleWrapper>
            <SearchBar 
              searchTerm={searchTerm} 
              onChange={OnSearchBarChange}/>
            <SearchResults 
              dataObjects={searchTermResults}
              onClick={OnSearchResultClick}
              searchTerm={searchTerm}
            />
          </SearchContentWrapper>}
          {wineSelected && 
          <WineDisplayContentWrapper>
            <WineDisplay data={wineSelected} onBackClick={onWineDisplayBackClick} onEditClick={onWineDisplayEditClick}/>
          </WineDisplayContentWrapper>}
          </PageContentWrapper>
        </FontWrapper>
      </PageWrapper>
    </div>
  );
}

export default App;
