import { ShortMenu } from "../../components/ShortMenu";
import { Button } from "../../components/Button";
import { Page } from "../../components/Page";
import { PrimaryText, SecondaryText, SubTitle, Title, FixedFooter } from "../../globalStyles";

export const Account =()=>{

    const isAuth = false;

    const UserInfo = () =>(
        <div>
            <SubTitle>Juan Rojas</SubTitle>
            <PrimaryText>11222254</PrimaryText>
            <SecondaryText>juan@mail.com</SecondaryText>
            <hr/>
            <FixedFooter>
                <Button 
                    label="Cerrar Sesión" 
                    onPress={()=>{alert('cerrar sesión')}}
                />
            </FixedFooter>


        </div>
    )

    const UserUnauthorized = () =>(
        <div>
            <SubTitle>No estás autenticado</SubTitle>
            <PrimaryText>Para acceder a tu perfil de usuario debes iniciar sesión</PrimaryText>
            <hr/>
            <Button 
                label="Iniciar Sesión" 
                linkTo={"/login"}
            />
        </div>
    )
    return(
        <Page>
            <ShortMenu/>

            <Title>   mi cuenta</Title>
            {
                isAuth ? <UserInfo/> : <UserUnauthorized/>
            }

        </Page>

    )

};
