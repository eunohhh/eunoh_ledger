// RootState 임포트 자동완성 하지말것.. 이상한애가 됨
import { aExpend, delExpend, setMonth, upExpend } from "@/redux/Slice";
import { AppDispatch, RootState } from "@/redux/Store";
import { Expend } from "@/types/d";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

// 여기서 useDispatch, useSelector, actions 를 모두 임포트 하고
// 커스텀 훅으로 만들어 내보내기때문에
// 각 컴포넌트에서는 useLegerRedux() 로 아주 편하게 사용 가능
function useLedgerRedux() {
    const dispatch = useDispatch<AppDispatch>();
    const expends = useSelector((state: RootState) => state.ledger.expends);
    const month = useSelector((state: RootState) => state.ledger.month);

    // 아래는 context API 와 패턴 똑같음...
    // 액션 크리에이터를 보다 구체화
    const selectMonth = (selectedMonth: number) =>
        dispatch(setMonth(selectedMonth));
    const addExpend = (newExpend: Expend) => dispatch(aExpend(newExpend));
    const deleteExpend = (expendId: string) => dispatch(delExpend(expendId));
    const updateExpend = (newExpend: Expend) => dispatch(upExpend(newExpend));

    // 가계부 월별 필터 배열
    // filter 로 데이터 내의 date 의 월 정보와 현재 month state 를 비교하여 같은 애들만 추출
    // 날짜순 정렬을 위해 map 돌려서 day 를 추출하여 Expend 객체에 삽입
    // sort 로 오름차순 정렬
    // 최적화를 위해 useMemo로 처리
    const monthlyExpends = useMemo<Expend[]>(() => {
        return expends
            .filter((expend) => {
                const dateStr = expend.date;
                const _month = parseInt(dateStr.split("-")[1], 10);
                return _month === month;
            })
            .map((expend) => ({
                ...expend,
                day: parseInt(expend.date.split("-")[2], 10),
            }))
            .sort((a, b) => {
                // undefined 일 경우 기본값 세팅
                if (a.day === undefined && b.day === undefined) return 0;
                if (a.day === undefined) return 1;
                if (b.day === undefined) return -1;
                return a.day - b.day;
            });
    }, [expends, month]);

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
