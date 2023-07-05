import styled from "styled-components";
import { MainFrame } from "../components/MainFrame";


const ResumeCard = styled.div`
    h2 {
        font-size: 24px;
        font-weight: 600;
    }
    div.card-header {
        padding: 4px 8px;
    }
    div.card-body {
        margin: -10px 0px;
        padding: 4px 8px 0px 8px;
        p {
            color: #b4b7bd;
        }
        div.wrap_icon {
            margin-top: -26px;
            height: 46px;
            width: 46px;
            border-radius: 26px;
            padding: 11.5px 12.5px;
            background-color: rgba(${(prop) => prop.color}, .15);
            svg {
                color: rgb(${(prop) => prop.color});
            }
        }
    }
`;


export default function Customers() {
    return (
        <MainFrame>

        </MainFrame >
    );
}