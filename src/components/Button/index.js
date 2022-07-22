import { Fragment } from "react";
import { ButtonStyled, ButtonContainer,StyledLink } from "./styles";
import { FaHome,FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FormControl } from "../../globalStyles";


export const Button = ({label,onPress, linkTo,icon}) => {
    //const navigate = useNavigate();
    return(
        <Fragment>
            {
             onPress ? (<ButtonStyled onClick = {onPress}>{label}</ButtonStyled>   )
                : (<StyledLink to={linkTo}>{label}</StyledLink>)
            }

           
        </Fragment>
    );
}


export const SquaredButton = ({icon:Icon,link,funct,primaryColor,primaryBackgroundColor,hoverColor,hoverBackgroundColor})=> (  //si se requiere usar la propiedad back a través de navigate, no se incorpora el atributo link.
   <Link to={link} onClick={funct}><ButtonContainer  style={{"--myPrimaryColor":primaryColor,"--myPrimaryBackgroundColor":primaryBackgroundColor,"--mySecondaryColor":hoverColor,"--mySecondaryBackgroundColor":hoverBackgroundColor}} ><Icon/></ButtonContainer></Link>
);


