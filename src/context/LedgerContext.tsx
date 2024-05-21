import fakeData from "@/data/fakedata";
import { Expend, Ledger } from "@/types/d";
import { ReactNode, createContext, useEffect, useState } from "react";

interface Props {
    children: ReactNode;
}

// 로컬 스토리지에서 선택했던 월 가져오기
const getLsMonth = () => {
    const savedMonth = localStorage.getItem("selectedMonth");
    return savedMonth ? parseInt(savedMonth, 10) : 1; // 기본값 1월 임~~
};

// 콘텍스트 생성
const LedgerContext = createContext<Ledger | null>(null);

// 프로바이더 생성!
export const LedgerProvider = ({ children }: Props) => {
    const [expends, setExpends] = useState<Expend[]>(fakeData);
    const [month, setMonth] = useState<number>(getLsMonth);

    const selectMonth = (selectedMonth: number) => setMonth(selectedMonth);

    const addExpend = (newExpend: Expend) =>
        setExpends((prev) => [...prev, newExpend]);

    const deleteExpend = (expendId: string) =>
        setExpends((prev) => prev.filter((expend) => expend.id !== expendId));

    const updateExpend = (newExpend: Expend) =>
        setExpends((prev) =>
            prev.map((expend) =>
                expend.id === newExpend.id ? newExpend : expend
            )
        );

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

    // month 변할때 마다 로컬스토리지에 저장!!!
    useEffect(() => {
        localStorage.setItem("selectedMonth", month.toString());
    }, [month]);

    return (
        <LedgerContext.Provider
            value={{
                expends,
                month,
                monthlyExpends,
                selectMonth,
                addExpend,
                deleteExpend,
                updateExpend,
            }}
        >
            {children}
        </LedgerContext.Provider>
    );
};

export default LedgerContext;
