import {useState} from "react"; //Recomendación usar los hooks al comienzo
import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";


import { FaEye,FaEyeSlash} from 'react-icons/fa';

export const Login =()=>{
    const [visible, setVisible] = useState(false);
  
    const tooglePasswordVisible = () =>{
        //setVisible((visible) => !visible);
        setVisible(!visible);
        console.log(visible);
    };

    return (

        <Page hideMenu>
            <ShortMenu/>
            <Title>Iniciar Sesión </Title>
            <br/>
            <form>

                <FormControl>
                    <label>Correo electrónico</label>
                    <div class="input">
                        <input type="email"/>
                    </div>
                </FormControl>


                <FormControl>
                    <div class="pswWrapper">                       
                        <div class="pswContainer" >
                            <label>Contraseña</label>
                            <div class="input">
                                <input type={!visible ? "password": "text"} />
                            </div>               
                        </div>
                        <div class="pswViewContainer" style={{"flex":"1","display":"flex","align-items":"center","justify-content":"center"}}>
                            <SquaredButton icon={!visible ? FaEyeSlash:FaEye} color={"#4A148C"}  link="" funct={tooglePasswordVisible}/>
                        </div>
                        
                    </div>                   
                </FormControl> 
                            


           

                
                
                <br/>
                <Button 
                    label="Ingresar" 
                    onPress={()=>{alert('iniciar sesión')}}
                />



            </form>

            <br/>
            <PrimaryText>¿No tienes cuenta?, Crea una</PrimaryText>
            <Button 
                    label="Crear cuenta" 
                    linkTo={"/Signup"}
                />
        </Page>

    );


}
    
