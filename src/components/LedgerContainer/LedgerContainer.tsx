import { Expend } from "../../types/d";
import Calender from "../Calender";
import Form from "../Form";
import Header from "../Header";
import List from "../List";
import Total from "../Total";

type LedgerContainerProps = {
    monthlyExpends: Expend[];
    selectMonth: (arg: number) => void;
    addExpend: (arg: Expend) => void;
    deleteExpend: (arg: string) => void;
    updateExpend: (arg: Expend) => void;
};

function LedgerContainer({
    monthlyExpends,
    selectMonth,
    addExpend,
    deleteExpend,
    updateExpend,
}: LedgerContainerProps) {
    return (
        <>
            <Header />
            <Form addExpend={addExpend} />
            <Calender selectMonth={selectMonth} />
            <Total />
            <List
                monthlyExpends={monthlyExpends}
                deleteExpend={deleteExpend}
                updateExpend={updateExpend}
            />
        </>
    );
}

export default LedgerContainer;
