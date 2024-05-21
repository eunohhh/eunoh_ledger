// import { RouterProvider } from "react-router-dom";
import { useState } from "react";
import fakeData from "./data/fakedata";
import Router from "./shared/Router";
import { Expend } from "./types/d";

function App() {
    const [expends, setExpends] = useState<Expend[]>(fakeData);
    const [month, setMonth] = useState(1);

    const selectMonth = (selectedMonth: number) => setMonth(selectedMonth);

    const addExpend = (newExpend: Expend) =>
        setExpends((prev) => [...prev, newExpend]);

    const deleteExpend = (expendId: string) =>
        setExpends((prev) => prev.filter((expend) => expend.id !== expendId));

    const updateExpend = (newExpend: Expend) =>
        setExpends((prev) =>
            prev.map((expend) =>
                expend.id === newExpend.id ? newExpend : expend
            )
        );

    const monthlyExpends = expends
        .filter((expend) => {
            const dateStr = expend.date;
            const _month = parseInt(dateStr.split("-")[1], 10);
            const _day = parseInt(dateStr.split("-")[2], 10);
            expend.day = _day;
            if (_month === month) return { ...expend };
        })
        .sort((a, b) => {
            if (a.day === undefined && b.day === undefined) {
                return 0;
            }
            if (a.day === undefined) {
                return 1; // undefined가 뒤로 오도록 설정
            }
            if (b.day === undefined) {
                return -1; // undefined가 뒤로 오도록 설정
            }
            return a.day - b.day;
        });

    return (
        <Router
            // expends={expends}
            month={month}
            monthlyExpends={monthlyExpends}
            selectMonth={selectMonth}
            addExpend={addExpend}
            deleteExpend={deleteExpend}
            updateExpend={updateExpend}
        />
    );
}

export default App;

// function App() {
//     return <RouterProvider router={Router} />;
// }
