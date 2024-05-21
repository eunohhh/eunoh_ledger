export interface Expend {
    id: string;
    date: string;
    item: string;
    amount: number;
    description: string;
    day?: number;
}

export interface Ledger {
    expends: Expend[];
    month: number;
    monthlyExpends: Expend[];
    selectMonth: (selectedMonth: number) => void;
    addExpend: (newExpend: Expend) => void;
    deleteExpend: (expendId: string) => void;
    updateExpend: (newExpend: Expend) => void;
}
