import styled from "styled-components";

const StyledSelect = styled.select`
    background-color: rgba(0, 0, 0, 0.023);
    border-color: #ececec;
    color: #333333;
`;

interface OptionInterface {
    id: number;
    text: string;
};

interface SelectProps {
    placeholder: string;
    type?: string | undefined;
    options: OptionInterface[];
}

export default function SelectInput(props: SelectProps) {
    return (
        <StyledSelect defaultValue={''} placeholder={props.placeholder} className="form-control">
            {
                props.options.map((el) => (
                    <option key={el.id} value={el.id}>{el.text}</option>
                ))
            }
        </StyledSelect>
    );
}