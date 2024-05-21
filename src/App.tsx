import { RouterProvider } from "react-router-dom";
import { LedgerProvider } from "./context/LedgerContext";
import Router from "./shared/Router";

function App() {
    return (
        <LedgerProvider>
            <RouterProvider router={Router} />
        </LedgerProvider>
    );
}

export default App;
