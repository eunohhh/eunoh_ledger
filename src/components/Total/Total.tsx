import styled from "styled-components";

const StyledSection = styled.section`
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 16px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`;

const StyledGraphDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    height: 40px;
    background-color: rgb(233, 236, 239);
    border-radius: 8px;
    overflow: hidden;

    & > div {
        height: 100%;
        background-color: rgb(0, 123, 255);
        width: 77.83%;
        transition: width 0.2s ease-in-out 0s;
    }
`;

const StyledAnotBoxDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 10px;
`;

const StyledAnotDiv = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: rgb(85, 85, 85);

    & > div {
        width: 20px;
        height: 10px;
        background-color: rgb(0, 123, 255);
        margin-right: 8px;
    }
`;

function Total() {
    return (
        <StyledSection>
            total
            <StyledGraphDiv>
                <div></div>
            </StyledGraphDiv>
            <StyledAnotBoxDiv>
                <StyledAnotDiv>
                    <div></div>
                    {`여행: 1,055,000 원 (77.83%)`}
                </StyledAnotDiv>
            </StyledAnotBoxDiv>
        </StyledSection>
    );
}

export default Total;
