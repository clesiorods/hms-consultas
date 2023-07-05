import React from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { TopBar } from "./TopBar";

type ContentProps = {
    children: React.ReactNode;
}

const Div = styled.div`

    background-color: #ececec;
    padding: 18px 26px;
    /* padding-top: 80px; */
    overflow-y: scroll;
    max-height: 100vh;
    width: 100%;
    color: #222222;

    .content {
        max-width: 1500px;
        margin: auto;
    }

`;

export function Content(props: ContentProps) {
    return (
        <Div>
            <div className="content">
                <TopBar />
                {props.children}
                <Footer />
            </div>
        </Div>
    );
}