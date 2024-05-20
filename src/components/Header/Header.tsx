import styled from "styled-components";

const StyledHeader = styled.header`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 6vh;
    border: 2px solid rgb(222, 222, 222);
    /* background-color: rgb(222, 222, 222); */
    color: rgb(79, 79, 79);
    border-radius: 5px;
    box-sizing: border-box;
    padding: 1rem;
`;

function Header() {
    return (
        <StyledHeader>
            <h3>가계부</h3>
            <p>React</p>
        </StyledHeader>
    );
}

export default Header;
