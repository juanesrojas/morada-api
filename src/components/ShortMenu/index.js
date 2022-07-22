import { Fragment } from "react";
import { BackButtonWrapper } from "./styles";
import { FaHome,FaArrowLeft,FaAvianex } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { SquaredButton } from "../Button";




export const ShortMenu = () => {
    const navigate = useNavigate();
    return(
        <Fragment>
            <BackButtonWrapper>  
                <div className="icon-container"> <SquaredButton icon={FaHome} link="/" primaryColor={"#4A148C"} primaryBackgroundColor={"white"} hoverColor={"white"} hoverBackgroundColor={"#4A148C"}/>  </div>
                <div className="middle-space"></div>
                <div className="icon-container"> <SquaredButton icon={FaArrowLeft} link=""  funct={() => navigate(-1)}/>   </div>
             </BackButtonWrapper>
        </Fragment>
    );
};


