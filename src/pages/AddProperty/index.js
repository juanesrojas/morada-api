import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";
import {useState} from "react";

import { FaEye,FaEyeSlash} from 'react-icons/fa';

export const AddProperty =()=>{
    const [visible, setVisible] = useState(false);
    return(

        <Page hideMenu>
            <ShortMenu/>
    
            <Title>Agregar una nueva propiedad</Title>
            <br/>
            <form>
    
                <FormControl>
                    <label>Nombre de la propiedad</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>
    
                
                <FormControl>
                    <label>Barrio/Sector</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Departamento</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>
    
                <FormControl>
                    <label>Ciudad</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Descripción del inmueble</label>
                    <div class="input">                        
                        <textarea rows = "5" cols = "60" name = "description" placeholder="Enter text">
                          
                        </textarea>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Área (m2)</label>
                    <div class="input">
                        <input type="number"/>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Tipo de inmueble</label>
                    <div class="input">
                        <select >
                            <option value="Apto">Apartamento</option>
                            <option value="Casa">Casa</option>
                            <option value="Local">Local</option>
                            <option value="Lote">Lote</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Modalidad</label>
                    <div class="input">
                        <select >
                            <option value="Arriendo">Arriendo</option>
                            <option value="Venta">Venta</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Habitaciones</label>
                    <div class="input">
                        <select >
                            <option value="N.A">N.A.</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="+7">+7</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Baños</label>
                    <div class="input">
                        <select >
                            <option value="N.A">N.A.</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="+7">+7</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Parqueaderos</label>
                    <div class="input">
                        <select >
                            <option value="0">0</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="+3">+3</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Valor ($COP)</label>
                    <div class="input">
                        <input type="number"/>
                    </div>
                </FormControl>
    
                <FormControl>
                    <label>Añadir fotografías</label>
                    <div class="input">
                        <input type="file" multiple />
                    </div>
                </FormControl>
                      
 
    
                <br/>
                <Button 
                    label="Agregar propiedad" 
                    onPress={()=>{alert('agregar propiedad')}}
                />
    
    
    
            </form>
    
            
        </Page>
    
    )

}


