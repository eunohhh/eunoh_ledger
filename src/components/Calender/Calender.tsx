import styled from "styled-components";

const StyledSection = styled.section`
    position: relative;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 20vh;
    background-color: rgb(222, 222, 222);
    border-radius: 5px;

    & > div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 80px;
        height: 50px;
        border-radius: 5px;
        background-color: white;
        cursor: pointer;
    }
`;

const calenderArray = Array.from({ length: 12 }, (_, i) => i + 1);

function Calender() {
    return (
        <StyledSection>
            {calenderArray.map((calender, idx) => (
                <div key={idx} id={String(calender)}>{`${calender}월`}</div>
            ))}
        </StyledSection>
    );
}

export default Calender;
