import { Fragment } from "react";
import { HomeMessageBox } from "./styles";
import { FaRegBell } from 'react-icons/fa';
import { Title } from "../../../../globalStyles";


export const HomeMessage = () => (
    <Fragment>
        <HomeMessageBox> 
           <h2>Find</h2>
           <p>best place <span>nearby</span></p>
        </HomeMessageBox>
    </Fragment>
)