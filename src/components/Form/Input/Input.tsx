import styled from "styled-components";

const inputs = [
    {
        label: "날짜",
        placeholder: "지출 날짜",
        name: "date",
    },
    {
        label: "항목",
        placeholder: "지출 항목",
        name: "category",
    },
    {
        label: "금액",
        placeholder: "지출 금액",
        name: "costs",
    },
    {
        label: "내용",
        placeholder: "지출 내용",
        name: "contents",
    },
];

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
        width: 25%;
    }

    input {
        color: rgb(79, 79, 79);
        font-size: 16px;
        font-size: max(16px, 1em);
        font-family: inherit;
        padding: 0.25em 0.5em;
        background-color: #fff;
        border: 2px solid var(--input-border);
        border-radius: 4px;
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
