// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Detail from "../components/Detail";
import Layout from "../components/Layout";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/detail/:detailId",
                element: <Detail />,
                // loader: ({ params }) => postsListPageLoader(params.postId),
            },
        ],
    },
]);

export default router;

// function Router() {
//     return (
//         <BrowserRouter>
//             <Layout>
//                 <Routes>
//                     <Route path="/" element={<Home />}></Route>
//                     <Route path="/detail">
//                         <Route path=":id" element={<Detail />} />
//                     </Route>
//                 </Routes>
//             </Layout>
//         </BrowserRouter>
//     );
// }
