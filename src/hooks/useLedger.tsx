import LedgerContext from "@/context/LedgerContext";
import { useContext } from "react";

const useLedger = () => {
    const context = useContext(LedgerContext);
    if (!context) {
        throw new Error("오류 발생??? 이렇게 해줘야 하나?");
    }
    return context;
};

export default useLedger;
