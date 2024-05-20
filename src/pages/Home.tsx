import { useState } from "react";
import LedgerContainer from "../components/LedgerContainer";
import fakeData from "../data/fakedata";
import { Expend } from "../types/d";

function Home() {
    const [expends, setExpends] = useState<Expend[]>(fakeData);

    const addExpend = (newTodo: Expend) =>
        setExpends((prev) => [...prev, newTodo]);

    const deleteExpend = (expendId: string) =>
        setExpends((prev) => prev.filter((expend) => expend.id !== expendId));

    const updateExpend = (expendId: string) => setExpends((prev) => prev);

    const workingToDos = expends.filter((expend) => !expend);

    return <LedgerContainer></LedgerContainer>;
}

export default Home;
// prev.map((todo) =>
//     todo.id === expendId ? { ...todo, isDone: !todo.isDone } : todo
// )
