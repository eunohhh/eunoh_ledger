import DetailPage from "@/pages/DetailPage";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/detail/:detailId",
                element: <DetailPage />,
                // loader: ({ params }) => postsListPageLoader(params.postId),
            },
        ],
    },
]);

export default router;
