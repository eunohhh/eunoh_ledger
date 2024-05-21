import styled from "styled-components";
import Card from "../Card";

const StyledSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
    padding: 1rem 0;
    height: auto;
    background-color: white;
    border-radius: 5px;
`;

function List() {
    return (
        <StyledSection>
            <Card />
        </StyledSection>
    );
}

export default List;
