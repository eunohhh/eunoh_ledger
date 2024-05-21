// RootState 임포트 자동완성 하지말것.. 이상한애가 됨
import { aExpend, delExpend, setMonth, upExpend } from "@/redux/Slice";
import { AppDispatch, RootState } from "@/redux/Store";
import { Expend } from "@/types/d";
import { useDispatch, useSelector } from "react-redux";

function useLedgerRedux() {
    const dispatch = useDispatch<AppDispatch>();
    const expends = useSelector((state: RootState) => state.ledger.expends);
    const month = useSelector((state: RootState) => state.ledger.month);

    // 아래는 context API 와 패턴 똑같음...
    const selectMonth = (selectedMonth: number) =>
        dispatch(setMonth(selectedMonth));
    const addExpend = (newExpend: Expend) => dispatch(aExpend(newExpend));
    const deleteExpend = (expendId: string) => dispatch(delExpend(expendId));
    const updateExpend = (newExpend: Expend) => dispatch(upExpend(newExpend));

    const monthlyExpends = expends
        .filter((expend) => {
            const dateStr = expend.date;
            const _month = parseInt(dateStr.split("-")[1], 10);
            // const _day = parseInt(dateStr.split("-")[2], 10);
            // expend.day = _day;
            return _month === month;
        })
        // 이게 왜 ?????
        .map((expend) => ({
            ...expend,
            day: parseInt(expend.date.split("-")[2], 10),
        }))
        .sort((a, b) => {
            if (a.day === undefined && b.day === undefined) {
                return 0;
            }
            if (a.day === undefined) {
                return 1; // undefined가 뒤로 오도록 설정
            }
            if (b.day === undefined) {
                return -1; // undefined가 뒤로 오도록 설정
            }
            return a.day - b.day;
        });

    return {
        expends,
        month,
        monthlyExpends,
        selectMonth,
        addExpend,
        deleteExpend,
        updateExpend,
    };
}

export default useLedgerRedux;
