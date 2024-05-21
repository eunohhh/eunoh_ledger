import { Link } from "react-router-dom";
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

const StyledLink = styled(Link)`
    width: 100%;
`;

type ListProps = {
    monthlyExpends: Expend[];
    month: number;
};

function List({ monthlyExpends }: ListProps) {
    return (
        <StyledSection>
            {monthlyExpends.map((expend) => (
                <StyledLink
                    key={expend.id}
                    to={`/detail/${expend.id}`}
                    state={{ expend }}
                >
                    <Card expend={expend} />
                </StyledLink>
            ))}
        </StyledSection>
    );
}

export default List;
