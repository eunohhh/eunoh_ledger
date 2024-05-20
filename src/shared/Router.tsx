import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../components/Detail";
import Layout from "../components/Layout";
import Home from "../pages/Home";

function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/detail">
                        <Route path=":id" element={<Detail />} />
                    </Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default Router;
