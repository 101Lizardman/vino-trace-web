import styled from "styled-components";
import { BreakdownObject } from "../../schema/breakdownObject";

type BreakdownDisplayProps = {
    data: BreakdownObject | null;
    hideOutputs: boolean;
    onSeeMoreClick: (hideOutputs: boolean) => void;
}

const BreakdownRow = styled.div`
    display: flex;
    flex: 2;
    flex-direction: row;

    background-color: white;
    border: 1px solid #dedede;

    font-size: 0.75rem;
    font-color: #242525;

    padding: 0.5rem;
`;

const RightWrapper = styled.div`
    display: flex;
    margin-left: auto;
`;

const SeeMoreRow = styled.div`
    height: 100%;
    width: 100%;

    :hover {
		cursor: pointer;
	}
`;

const CapitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const BreakdownDisplay = ({data, hideOutputs, onSeeMoreClick}: BreakdownDisplayProps) => {

    if (data === null ) return <></>;

    const maxComponentsToDisplayIfHidden = 5;

    return (
        <>
            <BreakdownRow>
                { CapitalizeFirstLetter(data.breakDownType) }
                <RightWrapper>
                    Percentage
                </RightWrapper>
            </BreakdownRow>
            {data.breakdown.map((component, i) => {
                if (hideOutputs && i > maxComponentsToDisplayIfHidden - 1) return;
                return (
                    <BreakdownRow>
                        {component.key}
                        <RightWrapper>
                            {component.percentage + "%"}
                        </RightWrapper>
                    </BreakdownRow>
                );
            })}
            {(data.breakdown.length > maxComponentsToDisplayIfHidden && hideOutputs) &&
            <BreakdownRow onClick={() => onSeeMoreClick(!hideOutputs)}>
                <SeeMoreRow>
                    See more
                </SeeMoreRow>
            </BreakdownRow>
            }
        </>
    );
};

export default BreakdownDisplay;