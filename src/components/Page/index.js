import { Fragment } from "react"
import { Menu } from "../Menu"
import { PageWrapper } from "./styles"


export const Page =(props)=>(
    <Fragment>
        <PageWrapper>
            <div style={{"display":"flex"}}>
                <img style={{"margin":"auto"}} src={require("./images/Logo.JPG")}/>

            </div>
            {props.children}
        </PageWrapper>
        {
            !props.hideMenu && <Menu/>
        }

    </Fragment>
    
)