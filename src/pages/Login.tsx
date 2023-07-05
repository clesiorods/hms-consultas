import { Link } from "react-router-dom";
import styled from "styled-components";
import FullLogo from './../assets/logo-full.png';


const TelaLogin = styled.div`
    background-color: #ffffff;
    height: 100vh;
    width: 100vw;
    display: flex;
    color: #292929;

    header {
        z-index: 10;
        position: fixed;
        padding: 16px 20px;
        display: flex;
        justify-content: start;
        h2.brand-text {
            font-size: 24px;
            font-weight: 600;
            color: rgb(0, 136, 45);
            padding-left: 14px;
        }
        img#logo {
            margin: 0px;
            width: 180px;
        }
    }

    div#login_illustration {
        width: 100vw;
        display: flex;
        flex-direction: column;
        img {
            margin: auto;
            width: 55%;
            opacity: .4;
            filter: blur(8px);
            -webkit-filter: blur(8px);
        }
    }

    div#login_form {
        position: absolute;
        background-color: #f0f0f0a8;
        width: 100%;
        height: 100%;
        display: flex;
        
        form#form_login {
            box-shadow: 1px 1px 15px #14161b22;
            margin: auto;
            width: 400px;
            padding: 60px 30px 80px;
            background-color: #ffffff;
            border-radius: 8px;
            transition: .2s;

            :hover {
                box-shadow: 1px 1px 30px #43465039;
            }

            h2 {
                color: #59595a;
                font-size: 1.72rem;
                text-align: center;
            }
            input {
                background-color: rgba(0,0,0,0.05);
                border-color: #ececec;
                color: #ffffff;
            }
            div.form-group {
                label {
                    margin-top: 20px;
                    margin-bottom: 4px;
                }
                span#span_forget_password {
                    color: #00a816;
                    margin-top: 20px;
                    :hover {
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
            }
            button {
                background: linear-gradient(118deg,#00a824,#009921);
                color: white;
                white-space: nowrap;
            }
        }
    }

    @media screen and (max-width: 800px) {
        div#login_illustration {
            width: 100vw;
            img {
                width: 90%;
            }
        }
        form#form_login {
            max-width: 90vw;
        }
    }
`;

export function Login() {
    return (
        <TelaLogin>
            <header>
                <img id="logo" src={FullLogo} alt="Logo" />
                {/* <h2 className="brand-text mb-0">Solutions</h2> */}
            </header>
            <div id="login_illustration">
                <img src={require('../assets/logo-footer.png')} alt="Medalha" />
            </div>
            <div id="login_form">
                <form id="form_login" action="" className="form">
                    <h2>Bem-Vindo ao <br /> 
                    HMS <span style={{ fontSize: '22px' }}>👋</span>
                    </h2>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input placeholder="exemplo@exemplo.com" className="form-control" type="email" />
                    </div>
                    <div className="form-group">
                        <div className="d-flex justify-content-between">
                            <label htmlFor="">Senha</label>
                            <span id="span_forget_password" >Esqueceu a sua senha?</span>
                        </div>
                        <input placeholder="senha" className="form-control" type="password" />
                    </div>
                    <div className="form-check mb-1 mt-2">
                        <input style={{ width: '18px', height: '18px', marginTop: '1px', marginRight: '6px' }} id="remember-me" type="checkbox" className="form-check-input" />
                        <label htmlFor="remember-me" className="form-check-label form-label">Lembrar minha senha</label>
                    </div>
                    <Link to="/resumo">
                        <button className="btn mt-3 w-100">Entrar</button>
                    </Link>
                </form>
            </div>
        </TelaLogin>
    );
}