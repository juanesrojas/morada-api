import { Fragment } from "react";
import { PropertyOwnerInfoWrapper } from "./styles";
import { FaRegCommentAlt,FaPhoneAlt } from 'react-icons/fa';
import { SubTitle,SecondaryText, Title } from "../../../../globalStyles";
import { SquaredButton } from "../../../../components/Button";


export const PropertyOwnerInfo = ({userName,userPicture,PropertyID}) => (
    <Fragment>
        <PropertyOwnerInfoWrapper>  
            <div className="user-picture"> <img class="picture-box" src={userPicture}/> </div>    
            <div className="user-home-info">
            <SecondaryText>Owner</SecondaryText>
                <SubTitle>{userName}</SubTitle>
            </div>
            <div className="message-container"> <SquaredButton icon={FaRegCommentAlt} link="" /></div>
            <div className="call-container"> <SquaredButton icon={FaPhoneAlt} link="" primaryColor={"white"} primaryBackgroundColor={"green"} hoverColor={"white"} hoverBackgroundColor={"red"}/>  </div>
        </PropertyOwnerInfoWrapper>
    </Fragment>
)