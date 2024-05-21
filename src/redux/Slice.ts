import fakeData from "@/data/fakedata";
import { Expend, LedgerState } from "@/types/d";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// 로컬 스토리지에서 선택했던 월 가져오기
const getLsMonth = () => {
    const savedMonth = localStorage.getItem("selectedMonth");
    return savedMonth ? parseInt(savedMonth, 10) : 1; // 기본값 1월 임~~
};

// initialState 밖에서 그냥 만들자
const initialState: LedgerState = {
    expends: fakeData,
    month: getLsMonth(),
};

// 슬라이스 만들자 하나로... 하나로 되네
export const ledgerSlice = createSlice({
    name: "ledger",
    initialState,
    reducers: {
        // 여기서 바로 로컬스토리지 셋 할 수 있음!
        // 훅 만들어야 되서 함수명 다르게
        setMonth: (state, action: PayloadAction<number>) => {
            state.month = action.payload;
            localStorage.setItem("selectedMonth", action.payload.toString());
        },
        aExpend: (state, action: PayloadAction<Expend>) => {
            state.expends.push(action.payload);
        },
        delExpend: (state, action: PayloadAction<string>) => {
            state.expends = state.expends.filter(
                (expend) => expend.id !== action.payload
            );
        },
        upExpend: (state, action: PayloadAction<Expend>) => {
            state.expends = state.expends.map((expend) =>
                expend.id === action.payload.id ? action.payload : expend
            );
        },
    },
});

export const { setMonth, aExpend, delExpend, upExpend } = ledgerSlice.actions;

const ledgerReducer = ledgerSlice.reducer;
export default ledgerReducer;
