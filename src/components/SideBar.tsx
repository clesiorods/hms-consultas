import { Icon as NavIcon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

import Logo from './../assets/logo-footer.png';
import { useEffect, useState } from 'react';

const Nav = styled.nav`

    transition: .3s all;

    div#sibeBar_content {

        background-color: #ffffff;
        height: 100vh;
        width: 260px;
        transition: .3s all;
        padding: 16px;

        img.main_logo {
            height: 34px;
        }

        div#pin_icon {
            cursor: pointer;
            color: #888888;
            margin-top: 6px;
            font-size: 16px;
        }

        div.nav_header {
            margin: 8px;
        }

        div.div_logo {
            display: grid;
            grid-template-columns: 1fr 1fr ;
            width: 100px;
        }


        h2.brand-text {
            animation: fadein .3s cubic-bezier(.25,.8,.25,1) 0s 1 normal forwards;
            font-size: 24px;
            font-weight: 600;
            color: rgb(0, 175, 79);
            padding-left: 14px;
        }
        

        ul {
            margin-top: 24px;
            list-style: none;
            font-size: 16px;
            padding: 0px;

            li {
                padding: 8px 16px;
                border-radius: 5px;
                margin-top: 4px;
                cursor: pointer;
                transform: .3s all;
            }

            .menu_section {
                font-size: 10px;
                padding-bottom: 0px;
            }

            svg {
                margin-right: 8px;
                margin-top: -5px;
                transition: .2s all;
                font-size: 20px;
            }


            .active {
                li {
                    background: linear-gradient(118deg,#00a11b,rgba(12, 211, 45, 0.7));
                box-shadow: rgba(6, 145, 1, 0.219) 0px 0px 10px 1px;
                }

                span, svg {
                    color: white !important;
                }
            }
        }


        a {
            text-decoration: none;
            color: #494949;
            cursor: pointer;
        }
    }


    /* @media screen and (max-width: 1200px) { */
        div#sibeBar_content.compactedSideBar {
            width: 70px;
            
            div.div_logo {
                margin-left: -6px;
                h2 {
                    opacity: 0;
                }
            }
            div#pin_icon {
                display: none;
            }
            

            .div_menu {
                margin: 0px 0px;
                display: flex;
                justify-content: center;
            }

            .icon {
                margin: 5px 0px !important;
                font-size: 24px !important;
            }

            .nav_text {
                display: none;
            }

            ul {
                margin-top: 0px;
                li {
                    text-align: center;
                    span.menu_section {
                        display: none;
                    }
                }
                .active {
                    li {
                        box-shadow: none;
                    }
                }
            }
        }
    /* } */


    /* @media screen and (max-width: 800px) { */
        div#sibeBar_content.hiddenSideBar {
            width: 0px;
            display: none;
        }
    /* } */
    
`;

export function SideBar() {

    const [sideBarClass, setSideBarClass] = useState("");
    const [fixedSideBar, setFixedSideBar] = useState(false);
    const [hoverSideBar, setHoverSideBar] = useState(false);

    const handleMouseEnter = () => {
        setHoverSideBar(true);
        setSideBarClass('');
    };

    const handleMouseLeave = () => {
        setHoverSideBar(false);
        if (fixedSideBar) {
            setSideBarClass('');
        } else {
            if (window.innerWidth < 800) {
                setSideBarClass('hiddenSideBar');
            } else if (window.innerWidth < 1200) {
                setSideBarClass('compactedSideBar');
            } else {
                setSideBarClass('');
            }
        }
    };

    const handleResize = () => {
        if (fixedSideBar) {
            setSideBarClass('');
        } else {
            if (hoverSideBar) {
                setSideBarClass('');
            } else {
                if (window.innerWidth < 800) {
                    setSideBarClass('hiddenSideBar');
                } else if (window.innerWidth < 1200) {
                    setSideBarClass('compactedSideBar');
                } else {
                    setSideBarClass('');
                }
            }
        }
    };

    useEffect(() => {

        window.addEventListener('resize', handleResize);
        handleMouseLeave();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [fixedSideBar]);


    return (
        <Nav>
            <div id="sibeBar_content" className={`${sideBarClass}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="nav_header navbar-nav flex-row justify-content-between">
                    <div className='div_logo'>
                        <span className="brand-logo">
                            <img className='main_logo' src={Logo} alt="logo" />
                        </span>
                        <h2 className="brand-text mb-0 pt-1">Prefeitura</h2>
                    </div>
                    <div id="pin_icon" onClick={() => { setFixedSideBar(!fixedSideBar) }}>
                        {
                            fixedSideBar
                                ?
                                <NavIcon className="icon" icon="ri:pushpin-fill" />
                                :
                                <NavIcon className="icon" icon="ri:pushpin-line" />
                        }
                    </div>
                </div>

                <div className="div_menu" >
                    <ul className="">

                        <li className='pb-0' >
                            <span className='menu_section'>
                                CADASTROS
                            </span>
                        </li>

                        <NavLink data-bs-toggle="" to="/resumo" aria-expanded="true" aria-controls="sidebarDashboards" className=" ">
                            <li className="">
                                <NavIcon className="icon" icon="uil:home-alt" />
                                <span className=" nav_text"> Resumo </span>
                            </li>
                        </NavLink>

                        <NavLink data-bs-toggle="" to="/financeiro" aria-expanded="false" aria-controls="sidebarCrm" className="">
                            <li className="">
                                <NavIcon className="icon" icon="uil:usd-square" />
                                <span className='nav_text'> Financeiro </span>
                            </li>
                        </NavLink>

                        <NavLink to="/clientes" className="">
                            <li className="">
                                <NavIcon className="icon" icon="uil:users-alt" />
                                <span className='nav_text'> Clientes </span>
                            </li>
                        </NavLink>

                        <li className='pb-0'>
                            <span className='menu_section'>
                                ADMIN
                            </span>
                        </li>

                        <NavLink data-bs-toggle="" to="/sidebarCrm" aria-expanded="false" aria-controls="sidebarCrm" className="">
                            <li className="">
                                <NavIcon className="icon" icon="uil:tachometer-fast" />
                                <span className='nav_text'> CRM </span>
                            </li>
                        </NavLink>

                        <NavLink data-bs-toggle="" to="/sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" className="">
                            <li className="">
                                <NavIcon className="icon" icon="uil:store" />
                                <span className='nav_text'> E-commerce </span>
                            </li>
                        </NavLink>

                    </ul>
                </div>
            </div>
        </Nav>
    );
}