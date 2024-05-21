import useLedgerRedux from "@/hooks/useLedgerRedux";
import styled from "styled-components";

const BLUE = `rgb(0, 123, 255)`;
const GREEN = `rgb(40, 167, 69)`;
const RED = `rgb(220, 53, 69)`;
const YELLOW = `rgb(255, 193, 7)`;
const AQUA = `rgb(23, 162, 184)`;

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

const StyledGraphBoxDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    height: 40px;
    background-color: rgb(233, 236, 239);
    border-radius: 8px;
    overflow: hidden;
`;

const StyledGraphDiv = styled.div<{ $width: number; $index: number }>`
    height: 100%;
    background-color: ${({ $index }) => {
        if ($index === 0) return BLUE;
        if ($index === 1) return GREEN;
        if ($index === 2) return RED;
        if ($index === 3) return YELLOW;
        if ($index === 4) return AQUA;
    }};
    width: ${({ $width }) => `${$width}%`};
    transition: width 0.2s ease-in-out 0s;
`;

const StyledAnotBoxDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 10px;
`;

const StyledAnotBoxInnerDiv = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: rgb(85, 85, 85);
`;

const StyledAnotDiv = styled.div<{ $index: number }>`
    width: 20px;
    height: 10px;
    background-color: ${({ $index }) => {
        if ($index === 0) return BLUE;
        if ($index === 1) return GREEN;
        if ($index === 2) return RED;
        if ($index === 3) return YELLOW;
        if ($index === 4) return AQUA;
    }};
    margin-right: 8px;
`;

function Total() {
    const { monthlyExpends, month } = useLedgerRedux();

    const reduced = monthlyExpends.reduce(
        (acc: { [key: string]: number; total: number }, cur) => {
            if (!acc[cur.item]) {
                acc[cur.item] = 0;
            }
            acc[cur.item] += cur.amount;
            acc.total += cur.amount;

            return acc;
        },
        { total: 0 }
    );

    const graphArray = Object.values(reduced)
        .map((amount, idx, array) =>
            idx > 0 ? Number(((amount / array[0]) * 100).toFixed(2)) : amount
        )
        .sort((a, b) => b - a);

    const anotArray = Object.entries(reduced)
        .filter((_, idx) => idx !== 0)
        .sort((a, b) => b[1] - a[1])
        .map((anot, idx) => {
            return [...anot, graphArray[idx + 1]];
        });

    // console.log(monthlyExpends);
    // console.log(anotArray);

    return (
        <StyledSection>
            {`${month}월 총 지출: ${reduced.total.toLocaleString("ko-KR")}원`}
            <StyledGraphBoxDiv>
                {graphArray.slice(1).map((percent, idx) => (
                    <StyledGraphDiv
                        key={percent}
                        $width={percent}
                        $index={idx}
                    ></StyledGraphDiv>
                ))}
            </StyledGraphBoxDiv>
            <StyledAnotBoxDiv>
                {anotArray.map((anot, idx) => (
                    <StyledAnotBoxInnerDiv key={idx}>
                        <StyledAnotDiv $index={idx}></StyledAnotDiv>
                        {`${anot[0]}: ${anot[1].toLocaleString("ko-KR")} 원 (${
                            anot[2]
                        }%)`}
                    </StyledAnotBoxInnerDiv>
                ))}
            </StyledAnotBoxDiv>
        </StyledSection>
    );
}

export default Total;
