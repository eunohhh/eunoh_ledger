import styled from "styled-components";
import { Expend } from "../../types/d";
import Card from "../Card";

const StyledSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
    padding: 1rem 0;
    height: auto;
    background-color: white;
    border-radius: 5px;
`;

type ListProps = {
    monthlyExpends: Expend[];
    deleteExpend: (arg: string) => void;
    updateExpend: (arg: Expend) => void;
};

function List({ monthlyExpends }: ListProps) {
    console.log(monthlyExpends);

    return (
        <StyledSection>
            {monthlyExpends.map((expend) => (
                <Card key={expend.id} expend={expend} />
            ))}
        </StyledSection>
    );
}

export default List;
