import { configureStore } from "@reduxjs/toolkit";
import ledgerReducer from "./Slice";

// 와우 하나로 되네!!
// 스토어에 리듀서 등록
const store = configureStore({
    reducer: {
        ledger: ledgerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
