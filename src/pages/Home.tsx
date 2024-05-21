import LedgerContainer from "../components/LedgerContainer";
import { Expend } from "../types/d";

type HomeProps = {
    monthlyExpends: Expend[];
    month: number;
    selectMonth: (arg: number) => void;
    addExpend: (arg: Expend) => void;
};

function Home({ month, monthlyExpends, selectMonth, addExpend }: HomeProps) {
    return (
        <LedgerContainer
            // expends={expends}
            month={month}
            monthlyExpends={monthlyExpends}
            selectMonth={selectMonth}
            addExpend={addExpend}
        ></LedgerContainer>
    );
}

export default Home;
