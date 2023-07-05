import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterStyled = styled.footer`
    border-top: 1px solid rgba(152, 166, 173, .2);
    bottom: 0;
    padding: 15px 15px 0px 15px;
    right: 0;
    color: #98a6ad;
    left: 260px;
    margin-top: 20px;
    margin-bottom: -8px;

    .link {
        color: #98a6ad;
        text-decoration: none;
    }
    .link:hover {
        text-decoration: underline;
    }
`;

export function Footer() {
    return (
        <FooterStyled className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        {new Date().getFullYear()} © Powered by CorpsTek
                    </div>
                </div>
            </div>
        </FooterStyled>
    );
}