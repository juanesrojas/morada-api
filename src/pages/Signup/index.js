import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";
import {useState} from "react";

import { FaEye,FaEyeSlash} from 'react-icons/fa';

export const Signup =()=>{
    const [visible, setVisible] = useState(false);
    return(

        <Page hideMenu>
            <ShortMenu/>
    
            <Title>Crear cuenta</Title>
            <br/>
            <form>
    
                <FormControl>
                    <label>Nombre Completo</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>
    
                
                <FormControl>
                    <label>Identificación</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>
    
    
                <FormControl>
                    <label>Teléfono</label>
                    <div class="input">
                        <input type="tel"/>
                    </div>
                </FormControl>
    
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
                            <SquaredButton icon={!visible ? FaEyeSlash:FaEye} color={"#4A148C"}  link="" funct={() =>{ setVisible((visible) => !visible)}}/>
                        </div>
                        
                    </div>                   
                </FormControl> 

                <FormControl>
                    <div class="pswWrapper">                       
                        <div class="pswContainer" >
                            <label>Confirme Contraseña</label>
                            <div class="input">
                                {
                                !visible ? (<input type="password"/>  )
                                    : (<input type="text"/>)
                                }
                                
                            </div>               
                        </div>
                    </div>                   
                </FormControl> 
    
                <br/>
                <Button 
                    label="Crear cuenta" 
                    onPress={()=>{alert('Crear cuenta')}}
                />
    
    
    
            </form>
    
            
        </Page>
    
    )

}


