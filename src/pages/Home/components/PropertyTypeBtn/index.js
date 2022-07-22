import { Fragment } from "react";
import { IconWrapper, PropertyTypeBtnWrapper } from "./styles";


export const PropertyTypeBtn = ({icon:Icon, label, selected, onPress, id}) => (

        <PropertyTypeBtnWrapper selected={selected} onClick={()=> onPress(id)}>           
                <IconWrapper selected={selected}>
                   <Icon />                    
                </IconWrapper>        
                <p>{label}</p>            
        </PropertyTypeBtnWrapper>

)