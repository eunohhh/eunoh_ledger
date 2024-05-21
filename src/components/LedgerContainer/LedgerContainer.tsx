import Calender from "../Calender";
import Form from "../Form";
import Header from "../Header";
import List from "../List";
import Total from "../Total";

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
