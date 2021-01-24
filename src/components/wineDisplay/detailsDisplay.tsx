import React from "react";
import styled from "styled-components";
import DisplayHeader from "./displayHeader";

type DetailsDisplayProps = {
    volume: number;
    tankCode: string;
    state: string;
    owner: string;
}

const DetailsWrapper = styled.div``;

const DetailsRow = styled.div`
    display: flex;
    flex: 2;
    height: 2rem;
`;

const DetailName = styled.div`
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.719rem;
`;

const DetailValue = styled.div`
    margin-left: auto;
`;

export const DetailsDisplay = ({volume, tankCode, state, owner}: DetailsDisplayProps) => {

    return (
        <DetailsWrapper>
            <DetailsRow>
                <DetailName>
                    Volume
                </DetailName>
                <DetailValue>
                    {volume}
                </DetailValue>
            </DetailsRow>
            <DetailsRow>
                <DetailName>
                    Tank code
                </DetailName>
                <DetailValue>
                    {tankCode}
                </DetailValue>
            </DetailsRow>
            <DetailsRow>
                <DetailName>
                    Product state
                </DetailName>
                <DetailValue>
                    {state}
                </DetailValue>
            </DetailsRow>
            <DetailsRow>
                <DetailName>
                    Owner
                </DetailName>
                <DetailValue>
                    {owner}
                </DetailValue>
            </DetailsRow>
        </DetailsWrapper>
    );
};

export default DetailsDisplay;