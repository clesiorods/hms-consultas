import styled from "styled-components";

const StyledButton = styled.button`
margin-top: 21px;
    background-color: rgb(26, 196, 0);
    border-color: rgb(23, 176, 0);
    color: white;

    :active, :focus {
        background-color: rgb(23, 175, 0);
        border-color: rgb(23, 176, 0);
        color: white;
    }
`;

interface ButtonProps {
    children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
    return (
        <StyledButton className="form-control">{props.children}</StyledButton>
    );
}