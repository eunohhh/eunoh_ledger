import Detail from "@/components/Detail";
import { Expend } from "@/types/d";

type DetailProps = {
    deleteExpend: (arg: string) => void;
    updateExpend: (arg: Expend) => void;
};

export default function DetailPage({
    updateExpend,
    deleteExpend,
}: DetailProps) {
    return (
        <Detail
            updateExpend={updateExpend}
            deleteExpend={deleteExpend}
        ></Detail>
    );
}
