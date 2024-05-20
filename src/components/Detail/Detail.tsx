import styled from "styled-components";
import inputs from "../../data/inputs";

const StyledDiv = styled.div`
    max-width: 800px;
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

function Detail() {
    return (
        <StyledDiv>
            {inputs.map((input, idx) => (
                <StyledInnerDiv key={idx}>
                    <label htmlFor={input.name}>{input.label}</label>
                    <input
                        type="text"
                        name={input.name}
                        placeholder={input.placeholder}
                        required
                    ></input>
                </StyledInnerDiv>
            ))}
            <StyledButtonDiv>
                <button>수정</button>
                <button>삭제</button>
                <button>뒤로 가기</button>
            </StyledButtonDiv>
        </StyledDiv>
    );
}

export default Detail;
