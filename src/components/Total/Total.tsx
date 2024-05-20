import styled from "styled-components";

const StyledSection = styled.section`
    position: relative;
    display: grid;
    width: 100%;
    height: 20vh;
    background-color: white;
    border-radius: 5px;
`;

function Total() {
    return (
        <StyledSection>
            <div>total</div>
        </StyledSection>
    );
}

export default Total;
