import Calender from "../../src/components/Calender";
import Form from "../../src/components/Form";
import Header from "../../src/components/Header";
import List from "../../src/components/List";
import Total from "../../src/components/Total";

function LedgerContainer() {
    return (
        <>
            <Header />
            <Form />
            <Calender />
            <Total />
            <List />
        </>
    );
}

export default LedgerContainer;
