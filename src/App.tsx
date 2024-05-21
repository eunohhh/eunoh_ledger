import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
// import { LedgerProvider } from "./context/LedgerContext";
import store from "./redux/Store";
import Router from "./shared/Router";

function App() {
    return (
        <Provider store={store}>
            {/* <LedgerProvider> */}
            <RouterProvider router={Router} />
            {/* </LedgerProvider> */}
        </Provider>
    );
}

export default App;
