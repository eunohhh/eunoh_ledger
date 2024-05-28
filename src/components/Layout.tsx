import { ReactNode } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
`;

function Layout({ children }: { children: ReactNode }) {
    return <StyledMain>{children}</StyledMain>;
}

export default Layout;
