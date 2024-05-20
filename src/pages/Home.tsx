import { useState } from "react";
import LedgerContainer from "../components/LedgerContainer";
import fakeData from "../data/fakedata";
import { Expend } from "../types/d";

function Home() {
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

    const monthlyExpends = expends.filter((expend) => {
        const dateStr = expend.date;
        const _month = parseInt(dateStr.split("-")[1], 10);
        if (_month === month) return expend;
    });

    console.log(month);

    return (
        <LedgerContainer
            monthlyExpends={monthlyExpends}
            selectMonth={selectMonth}
            addExpend={addExpend}
            deleteExpend={deleteExpend}
            updateExpend={updateExpend}
        ></LedgerContainer>
    );
}

export default Home;
// prev.map((todo) =>
//     todo.id === expendId ? { ...todo, isDone: !todo.isDone } : todo
// )
