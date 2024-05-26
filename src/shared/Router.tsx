import DetailPage from "@/pages/DetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import { Expend } from "../types/d";

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
                            <HomePage
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
                                <DetailPage
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
