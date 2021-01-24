import styled from "styled-components";
import { Icon } from "../../App";
import BackButtonSource from '../../assets/icons/backButton.svg';
import EditButtonSource from '../../assets/icons/editIcon.svg';

type DisplayHeaderProps = {
    title: string;
    subtitle: string;
    onBackClick: () => void;
    onEditClick: () => void;
}

const HeaderWrapper = styled.div`
    display: flex;
    flex: 2;
    flex-direction: row;

    padding-bottom: 1rem;
`;

const HeaderDataColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const EditButtonColumn = styled.div`
    display: flex;
    width: 3rem;
    margin-left: auto;
`;

const BackButtonWrapper = styled.div`
`;

const HeaderTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Avatar = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 1rem;
    margin: 0.5rem;

    background-color: magenta;
    mix-blend-mode: multiply;
    opacity: 0.2;
    border: 1px solid #979797;
    box-sizing: border-box;
`;

const TitleWrapper = styled.div`
    font-size: 2.5rem;
`;

const SubtitleWrapper = styled.div`
    font-size: 1.3125rem
`;

const BackButton =  styled.div`
    :hover {
        cursor: pointer;
    }
`;

const InARow = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: flex-start;
    align-items: flex-start;
`;

const EditButtonWrapper = styled.div`
    display: flex;
    height: 3rem;
    width: 3rem;
    border-radius: 1.5rem;

    justify-content: center;
    align-items: center;

    background-color: #00ADA8;
    box-sizing: border-box;
    box-shadow: 0px 4px 8px rgba(51, 51, 51, 0.24);

    :hover {
        cursor: pointer;
    }
`;

export const DisplayHeader = ({title, subtitle, onBackClick, onEditClick }: DisplayHeaderProps) => {

    return (
        <HeaderWrapper>
            <HeaderDataColumn>
                <BackButtonWrapper>
                    <BackButton onClick={onBackClick} >
                        <Icon src={BackButtonSource} altText={"Back button"} />
                    </BackButton>
                </BackButtonWrapper>
                <HeaderTextWrapper>
                    <InARow>
                        <Avatar />
                        <TitleWrapper>
                            {title}
                        </TitleWrapper>
                    </InARow>
                    <SubtitleWrapper>
                        {subtitle}
                    </SubtitleWrapper>
                </HeaderTextWrapper>
            </HeaderDataColumn>
            <EditButtonColumn>
                <EditButtonWrapper onClick={onEditClick}>
                    <Icon src={EditButtonSource} altText={"Edit button"} />
                </EditButtonWrapper>
            </EditButtonColumn>
        </HeaderWrapper>
    );
};

export default DisplayHeader;