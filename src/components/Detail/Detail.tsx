import { ChangeEvent, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import inputs from "../../data/inputs";
import { Expend } from "../../types/d";

const StyledDiv = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0px auto;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    border-radius: 16px;
`;

const StyledInnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    & > label {
        margin-bottom: 5px;
        font-size: 14px;
        color: rgb(51, 51, 51);
        text-align: left;
    }

    input {
        padding: 10px;
        border: 1px solid rgb(221, 221, 221);
        border-radius: 4px;
        font-size: 14px;
    }
`;

const StyledButtonDiv = styled.div`
    display: flex;
    gap: 10px;

    & > button:nth-child(1) {
        padding: 10px 20px;
        background-color: rgb(0, 123, 255);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out 0s;
    }

    button:nth-child(2) {
        padding: 10px 20px;
        background-color: rgb(255, 77, 77);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out 0s;
    }

    button:nth-child(3) {
        padding: 10px 20px;
        background-color: rgb(108, 117, 125);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out 0s;
    }
`;

type DetailState = {
    deleteExpend: (arg: string) => void;
    updateExpend: (arg: Expend) => void;
};

function Detail({ deleteExpend, updateExpend }: DetailState) {
    const navigate = useNavigate();
    const location = useLocation();
    const { expend }: { expend: Expend } = location.state;
    const [inputValues, setInputValues] = useState<[string, string][]>(
        Object.entries(expend)
    );

    const values = Object.values(expend);

    const inputRef = useRef<HTMLInputElement[]>([]);

    const handleUpdateClick = () => {
        const newExpend = Object.fromEntries(
            inputValues.map(([key, value]) => [key, value])
        );
        updateExpend(newExpend as unknown as Expend);
        navigate("/");
    };

    const handleDeleteClick = () => {
        deleteExpend(expend.id);
        navigate("/");
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        const val = e.currentTarget.value;

        setInputValues((prev) => {
            return prev.map(([key, value]) => {
                if (key === name) {
                    return [key, val];
                }
                return [key, value];
            });
        });
    };

    // console.log(inputValues);

    return (
        <StyledDiv>
            {inputs.map((input, idx) => (
                <StyledInnerDiv key={idx}>
                    <label htmlFor={input.name}>{input.label}</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name={input.name}
                        value={inputValues[idx + 1][1]}
                        placeholder={values[idx + 1]}
                        required
                        ref={(ele) => ele && inputRef.current.push(ele)}
                    ></input>
                </StyledInnerDiv>
            ))}
            <StyledButtonDiv>
                <button onClick={handleUpdateClick}>수정</button>
                <button onClick={handleDeleteClick}>삭제</button>
                <button onClick={() => navigate("/")}>뒤로 가기</button>
            </StyledButtonDiv>
        </StyledDiv>
    );
}

export default Detail;
