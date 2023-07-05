import styled from "styled-components";

const StyledInput = styled.input`
    background-color: rgba(0, 0, 0, 0.03);
    border-color: #ececec;
    color: #333333;

    ::placeholder {
        color: #c5c5c5;
    }
`;
 
interface InputProps {
    placeholder?: string | undefined;
    type?: string | undefined;
}

export default function TextInput (props: InputProps) {
    return(
        <StyledInput placeholder={props.placeholder ? props.placeholder : ''} className={`form-control ${props.type == 'date' ? 'text-center' : ''}`} type={props.type ? props.type : 'text'} />
    );
}