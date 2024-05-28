import Calender from "../../src/components/Calender";
import Form from "../../src/components/Form";
import Header from "../../src/components/Header";
import List from "../../src/components/List";
import Total from "../../src/components/Total";
import { Expend } from "../../src/types/d";

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
