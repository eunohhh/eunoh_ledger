import { ReactNode } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
`;

function Layout({ children }: { children: ReactNode }) {
    return <StyledMain>{children}</StyledMain>;
}

export default Layout;
