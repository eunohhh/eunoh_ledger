import styled from "styled-components";

const StyledUl = styled.ul`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 3rem;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #d6d6d6;

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div:nth-child(1) {
        flex-direction: column;
    }
    div:nth-child(1) p:nth-child(1) {
        color: gray;
    }
    div:nth-child(1) p:nth-child(2) {
        color: blue;
    }
    div:nth-child(2) p {
        color: blue;
    }
`;

function Card() {
    return (
        <StyledUl>
            <div>
                <p>2024-01-01</p>
                <p>식비-맛있따</p>
            </div>
            <div>
                <p>4,500원</p>
            </div>
        </StyledUl>
    );
}

export default Card;
