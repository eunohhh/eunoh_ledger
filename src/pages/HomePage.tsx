import Calender from "@/components/Calender";
import Form from "@/components/Form";
import Header from "@/components/Header";
import List from "@/components/List";
import Total from "@/components/Total";
import { Expend } from "../types/d";

type HomeProps = {
    monthlyExpends: Expend[];
    month: number;
    selectMonth: (arg: number) => void;
    addExpend: (arg: Expend) => void;
};

function HomePage({
    month,
    monthlyExpends,
    selectMonth,
    addExpend,
}: HomeProps) {
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

export default HomePage;
