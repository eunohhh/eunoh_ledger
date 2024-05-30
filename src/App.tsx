// import { RouterProvider } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import fakeData from "./data/fakedata";
import GlobalStyle from "./globalStyles";
import Router from "./shared/Router";
import { Expend } from "./types/d";

// 로컬 스토리지에서 선택된 월 값을 가져오는 함수
const getLsMonth = () => {
    const savedMonth = localStorage.getItem("selectedMonth");
    return savedMonth ? parseInt(savedMonth, 10) : 1; // 기본값 1월 임~~
};

function App() {
    // state 두개 :
    // expends => 전체 가계부 배열, fakeData 로 초기화
    // month => 월 구분용, 로컬스토리지로 초기화
    const [expends, setExpends] = useState<Expend[]>(fakeData);
    const [month, setMonth] = useState<number>(getLsMonth);

    // 월 선택 함수
    const selectMonth = (selectedMonth: number) => setMonth(selectedMonth);

    // 가계부 추가 함수
    const addExpend = (newExpend: Expend) =>
        setExpends((prev) => [...prev, newExpend]);

    // 가계부 삭제 함수
    const deleteExpend = (expendId: string) =>
        setExpends((prev) => prev.filter((expend) => expend.id !== expendId));

    // 가계부 수정(업데이트 함수)
    const updateExpend = (newExpend: Expend) =>
        setExpends((prev) =>
            prev.map((expend) =>
                expend.id === newExpend.id ? newExpend : expend
            )
        );

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

    // month가 변경될 때 로컬 스토리지에 저장~~
    useEffect(() => {
        localStorage.setItem("selectedMonth", month.toString());
    }, [month]);

    return (
        <>
            <GlobalStyle />
            <Router
                month={month}
                monthlyExpends={monthlyExpends}
                selectMonth={selectMonth}
                addExpend={addExpend}
                deleteExpend={deleteExpend}
                updateExpend={updateExpend}
            />
        </>
    );
}

export default App;

// function App() {
//     return <RouterProvider router={Router} />;
// }
