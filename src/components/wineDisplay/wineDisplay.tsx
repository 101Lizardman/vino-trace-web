import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { WineDataObject } from "../../schema/wineDataObject";

import configData from '../../config.json'
import BreakdownDisplay from "./breakdownDisplay";
import DetailsDisplay from "./detailsDisplay";
import DisplayHeader from "./displayHeader";
import BreakdownSelector from "./breakdownSelector";
import { BreakdownObject } from "../../schema/breakdownObject";

type SearchResultsProps = {
    data: WineDataObject;
    onBackClick: () => void;
    onEditClick: () => void;
}

const WineDisplayWrapper = styled.div`
    width: 48rem;
`;

export enum BreakdownOptions {
    "year" = 1,
    "variety" = 2,
    "region" = 3,
    "year-variety" = 4
}

export const WineDisplay = ({data, onBackClick, onEditClick }: SearchResultsProps) => {

    const [selectedBreakdown, setSelectedBreakdown] = useState<BreakdownOptions>(BreakdownOptions.year);
    const [breakdownData, setBreakdownData] = useState<BreakdownObject | null>(null);
    const [hideOutputs, setHideOutputs] = useState<boolean>(true);

    const apiHost = configData.API_HOST;
    const apiPort = configData.API_PORT;

    const OnBreakdownSelection = (selection: BreakdownOptions) => {
        setSelectedBreakdown(selection);
    }

    const OnSeeMoreClick = (hideOutputs: boolean) => {
        setHideOutputs(hideOutputs);
    }

    useEffect(() => {
        // Fetch breakdown data from the API
        let endpointUrl = apiHost + ":" + apiPort + "/api/breakdown/" + BreakdownOptions[selectedBreakdown] + "/" + data.lotCode;

        // Hit the API and collect results
        fetch(endpointUrl)
        .then(response => response.json())
        .then(data => setBreakdownData(data));

    }, [selectedBreakdown, data]);

    return (
        <WineDisplayWrapper>
            <DisplayHeader title={data.lotCode} subtitle={data.description} onBackClick={onBackClick} onEditClick={onEditClick} />
            <DetailsDisplay volume={data.volume} tankCode={data.tankCode} state={data.productState} owner={data.ownerName} />
            <BreakdownSelector selectedBreakdown={selectedBreakdown} onBreakdownSelection={OnBreakdownSelection} />
            <BreakdownDisplay data={breakdownData} hideOutputs={hideOutputs} onSeeMoreClick={OnSeeMoreClick}/>
        </WineDisplayWrapper>
    );
};

export default WineDisplay;