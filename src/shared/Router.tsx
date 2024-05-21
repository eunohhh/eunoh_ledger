import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";
import Detail from "../components/Detail";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import { Expend } from "../types/d";

// const router = createBrowserRouter([
//     {
//         element: <Layout />,
//         children: [
//             {
//                 path: "/",
//                 element: <Home />,
//             },
//             {
//                 path: "/detail/:detailId",
//                 element: <Detail />,
//                 // loader: ({ params }) => postsListPageLoader(params.postId),
//             },
//         ],
//     },
// ]);

// export default router;

type RouterProps = {
    // expends: Expend[];
    monthlyExpends: Expend[];
    month: number;
    selectMonth: (arg: number) => void;
    addExpend: (arg: Expend) => void;
    deleteExpend: (arg: string) => void;
    updateExpend: (arg: Expend) => void;
};

function Router({
    // expends,
    monthlyExpends,
    month,
    selectMonth,
    addExpend,
    deleteExpend,
    updateExpend,
}: RouterProps) {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                // expends={expends}
                                month={month}
                                monthlyExpends={monthlyExpends}
                                selectMonth={selectMonth}
                                addExpend={addExpend}
                            />
                        }
                    ></Route>
                    <Route path="/detail">
                        <Route
                            path=":id"
                            element={
                                <Detail
                                    deleteExpend={deleteExpend}
                                    updateExpend={updateExpend}
                                />
                            }
                        />
                    </Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default Router;
