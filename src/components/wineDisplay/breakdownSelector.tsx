import styled from "styled-components";
import { BreakdownOptions } from "./wineDisplay";

type BreakdownSelectorProps = {
    selectedBreakdown: BreakdownOptions;
    onBreakdownSelection: (selection: BreakdownOptions) => void;
}

const SelectionBar = styled.div`
    display: flex;
    flex-direction: row;

    height: 2rem;
`;

const BreakdownSelectionOption = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0.5rem 0.5rem 0.5rem 0.5rem;

    :hover {
		cursor: pointer;
	}
`;

const BreakdownSelectionBar = styled.div<{isThisSelected: boolean}>`
    display: flex;
    height: 1px;

    display: ${(props) => props.isThisSelected ? "block" : "none" };
    border: #00ADA8 solid 1px;
`;

export const BreakdownSelector = ({selectedBreakdown, onBreakdownSelection}: BreakdownSelectorProps) => {

    return (
        <SelectionBar>
            <BreakdownSelectionOption onClick={() => onBreakdownSelection(BreakdownOptions.year)}>
                Year
                <BreakdownSelectionBar isThisSelected={selectedBreakdown === BreakdownOptions.year}/>
            </BreakdownSelectionOption>
            <BreakdownSelectionOption onClick={() => onBreakdownSelection(BreakdownOptions.variety)}>
                Variety
                <BreakdownSelectionBar isThisSelected={selectedBreakdown === BreakdownOptions.variety}/>
            </BreakdownSelectionOption>
            <BreakdownSelectionOption onClick={() => onBreakdownSelection(BreakdownOptions.region)}>
                Region
                <BreakdownSelectionBar isThisSelected={selectedBreakdown === BreakdownOptions.region}/>
            </BreakdownSelectionOption>
            <BreakdownSelectionOption onClick={() => onBreakdownSelection(BreakdownOptions["year-variety"])}>
                {"Year & Variety"}
                <BreakdownSelectionBar isThisSelected={selectedBreakdown === BreakdownOptions["year-variety"]}/>
            </BreakdownSelectionOption>
        </SelectionBar>
    );
};

export default BreakdownSelector;