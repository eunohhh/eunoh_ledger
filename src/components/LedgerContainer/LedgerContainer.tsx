import { Expend } from "../../types/d";
import Calender from "../Calender";
import Form from "../Form";
import Header from "../Header";
import List from "../List";
import Total from "../Total";

type LedgerContainerProps = {
    monthlyExpends: Expend[];
    month: number;
    selectMonth: (arg: number) => void;
    addExpend: (arg: Expend) => void;
};

function LedgerContainer({
    month,
    monthlyExpends,
    selectMonth,
    addExpend,
}: LedgerContainerProps) {
    return (
        <>
            <Header />
            <Form addExpend={addExpend} />
            <Calender selectMonth={selectMonth} month={month} />
            <Total monthlyExpends={monthlyExpends} month={month} />
            <List monthlyExpends={monthlyExpends} month={month} />
        </>
    );
}

export default LedgerContainer;
