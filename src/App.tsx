import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import store from "./redux/Store";
import Router from "./shared/Router";

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <RouterProvider router={Router} />
        </Provider>
    );
}

export default App;
