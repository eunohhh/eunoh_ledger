import { RouterProvider } from "react-router-dom";
import { LedgerProvider } from "./context/LedgerContext";
import GlobalStyle from "./globalStyles";
import Router from "./shared/Router";

function App() {
    return (
        <>
            <GlobalStyle />
            <LedgerProvider>
                <RouterProvider router={Router} />
            </LedgerProvider>
        </>
    );
}

export default App;
