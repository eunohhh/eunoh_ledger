import styled from "styled-components";
import Input from "./Input";

const InputSection = styled.section`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    background-color: rgb(222, 222, 222);
    color: rgb(79, 79, 79);
    border-radius: 5px;
    box-sizing: border-box;
    padding: 1rem;
`;

const SubmitForm = styled.form`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 10%;
    height: 100%;

    & > button {
        background: var(--button-bg-color);
        color: var(--button-color);
        margin: 0;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: 400;
        text-align: center;
        text-decoration: none;
        border: none;
        border-radius: 4px;
        display: inline-block;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        cursor: pointer;
        transition: 0.5s;
    }
    button:active,
    button:hover,
    button:focus {
        background: var(--button-hover-bg-color);
        outline: 0;
    }
    button:disabled {
        opacity: 0.5;
    }
`;

function Form() {
    // 폼 서브밋 핸들러
    // 인풋핸들러에서 설정된 투두 객체를 투두스 배열에 추가
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const date = formData.get("date")?.toString();
        const category = formData.get("category")?.toString();
        const costs = formData.get("costs")?.toString();
        const contents = formData.get("contents")?.toString();

        if (!date || !category || !costs || !contents) return;

        if (
            !date?.trim() ||
            !category?.trim() ||
            !costs?.trim() ||
            !contents?.trim()
        ) {
            alert("내용을 입력해 주세요!");
        }
        const newLedger = {
            date,
            category,
            costs,
            contents,
        };

        console.log(newLedger);
        // dispatch(addToDo(newTodo));

        // 추가하고 나면 폼 리셋 시키기!!
        form.reset();
    };

    return (
        <InputSection>
            <SubmitForm onSubmit={handleSubmit}>
                <Input />
                <StyledDiv>
                    <button type="submit">저장</button>
                </StyledDiv>
            </SubmitForm>
        </InputSection>
    );
}

export default Form;
