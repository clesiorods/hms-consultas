import styled from "styled-components";

const StyledInput = styled.input`
    background-color: rgba(0, 0, 0, 0.023);
    border-color: #ececec;
    color: #333333;
`;
 
interface InputProps {
    placeholder: string;
    type?: string | undefined;
}

export default function TextInput (props: InputProps) {
    return(
        <StyledInput placeholder={props.placeholder} className="form-control" type={props.type ? props.type : 'text'} />
    );
}