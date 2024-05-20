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
    background-color: white;
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
        background-color: #f5f5f5;
        cursor: pointer;
    }
    div:hover {
        background-color: var(--button-bg-color);
    }
`;

const calenderArray = Array.from({ length: 12 }, (_, i) => i + 1);

type CalenderProps = {
    selectMonth: (arg: number) => void;
};

function Calender({ selectMonth }: CalenderProps) {
    return (
        <StyledSection>
            {calenderArray.map((calender, idx) => (
                <div
                    key={idx}
                    id={String(calender)}
                    onClick={() => selectMonth(calender)}
                >{`${calender}월`}</div>
            ))}
        </StyledSection>
    );
}

export default Calender;
