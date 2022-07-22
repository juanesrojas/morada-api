import styled,{createGlobalStyle} from "styled-components";
import { MENU_HEIGHT } from "./constants/styleConstants";

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0px;
        padding: 0px;
        font-family: "Lato";

    }
        //sirve ára que los elementos queden totalmente contenidos dentro del contenedor padre
    *, ::after, ::before{
         box-sizing: border-box;
    }
`;

export const Title = styled.h1`
        text-transform: capitalize;
        font-weight: 700;
        color:#4A148C;
        margin: 0.1em;
`;

export const SubTitle = styled.h4`  
        text-transform: capitalize;
        font-weight:bold;
        color:#212121; //#4A148C;
        margin: 0.1em;
`;

export const SecondaryText = styled.p`
        font-weight: 300;
        color:#BDBDBD;
        font-size: 1.0em;
        margin: 0.1em;
`;

export const PrimaryText = styled.p`
        font-weight: 400;
        color:#212121;
        font-size: 1.0em;
        margin: 0.1em;
`;

export const FormControl = styled.div`
        width: 100%;
        margin: 5px 0;
        border-radius: 6px;
        background-color: #f2f2f2;
        padding: 5px 10px;

        .input{
                padding: 0px 10px;
        }

        label{
                display: block;
                font-size: 0.95em;
                color: #222;
                font-weight:500;
        }

        input[type="email"], input[type="password"], input[type="text"], input[type="tel"],input[type="number"], textarea, select{ //
                display:block;
                width:100%;
                font-size: 1.1em;
                padding:5px 0px 5px 0px;
                margin:0px;
                background-color: transparent;
                border:none;
                outline: none;
        }

        .pswWrapper{
                display:flex;

                .pswContainer{
                        flex:20;
                }

                .pswViewContainer{
                        flex:1;
                        display:flex;
                        align-items:center;
                        justify-content:center;

                }
        }




`;

export const FixedFooter = styled.footer`
        position: fixed;
        bottom:${MENU_HEIGHT+5}px;
        position: fixed;
        left:0;
        width:100%;
`;
