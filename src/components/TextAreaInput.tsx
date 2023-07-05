import styled from "styled-components";

const StyledInput = styled.textarea`
    background-color: rgba(0, 0, 0, 0.03);
    border-color: #ececec;
    color: #333333;
`;
 
interface InputProps {
    placeholder?: string | undefined;
    type?: string | undefined;
}

export default function TextAreaInput (props: InputProps) {
    return(
        <StyledInput placeholder={props.placeholder ? props.placeholder : ''} rows={30} className={`form-control ${props.type == 'date' ? 'text-center' : ''}`} />
    );
}