import LedgerContext from "@/context/LedgerContext";
import { useContext } from "react";

// 여기서 useContext 를 하고 내보내 줘서
// 각 컴포넌트에서는 useLedger 커스텀 훅만 임포트해서 사용하면 됨
const useLedger = () => {
    const context = useContext(LedgerContext);
    if (!context) {
        throw new Error("오류 발생??? 프로바이더 안에서 사용하세요!");
    }
    return context;
};

export default useLedger;
