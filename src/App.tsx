// import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import fakeData from "./data/fakedata";
import Router from "./shared/Router";
import { Expend } from "./types/d";

const getLsMonth = () => {
    // 로컬 스토리지에서 초기 값을 가져옴
    const savedMonth = localStorage.getItem("selectedMonth");
    return savedMonth ? parseInt(savedMonth, 10) : 1; // 기본값 1월 임~~
};

function App() {
    const [expends, setExpends] = useState<Expend[]>(fakeData);
    const [month, setMonth] = useState<number>(getLsMonth);

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

    useEffect(() => {
        // month가 변경될 때 로컬 스토리지에 저장~~
        localStorage.setItem("selectedMonth", month.toString());
    }, [month]);

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
