import styled from "styled-components";
import inputs from "../../../data/inputs";

const StyledDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    gap: 0.5rem;

    & > div {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        min-width: 120px;
    }

    input {
        color: rgb(79, 79, 79);
        font-size: 16px;
        font-size: max(16px, 1em);
        font-family: inherit;
        padding: 0.25em 0.5em;
        background-color: #fff;
        border: 1px solid rgb(221, 221, 221);
        border-radius: 4px;
    }
    label {
        text-align: left;
    }
`;

function Input() {
    return (
        <StyledDiv>
            {inputs.map((input, idx) => (
                <div key={idx}>
                    <label htmlFor={input.name}>{input.label}</label>
                    <input
                        type="text"
                        name={input.name}
                        placeholder={input.placeholder}
                        required
                    ></input>
                </div>
            ))}
        </StyledDiv>
    );
}

export default Input;
