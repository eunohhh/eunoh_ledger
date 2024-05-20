import styled from "styled-components";
import Card from "../Card";

const StyledSection = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20vh;
    background-color: rgb(222, 222, 222);
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
