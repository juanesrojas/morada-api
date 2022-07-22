import { useState, useEffect } from "react";
import { PropertyTypeBtn } from "./components/PropertyTypeBtn";
import { UserHomeInfo } from "./components/UserHomeInfo";
import { PropertyTypesContainer } from "./styles";
import { FaBuilding,FaIndustry,FaHouseUser,FaWarehouse,  FaTree,  FaTractor } from 'react-icons/fa';
import { HomeMessage } from "./components/MessageBox";
import { PropertyCard } from "./components/PropertyCard";
import { Page } from "../../components/Page";




export const PropertyTypes = [
    {id:1, icon: FaBuilding, label:'Apartamentos'},
    {id:2, icon: FaHouseUser, label:'Casas'},
    {id:3, icon: FaTree, label:'Lotes'},
    {id:4, icon: FaIndustry, label:'Bodegas'},
    {id:5, icon: FaWarehouse, label:'Locales'},
    {id:6, icon: FaTractor, label:'Fincas'}

];



export const Home = () => {

    const [selectedPropertyType, setSelectedProperty] = useState(0);

    const propertyTypeHandler = (propID) =>{
        setSelectedProperty(propID);

    };

    useEffect(()=>{
        //acciones a ejecutar
        console.log('se modificó el tipo de propiedad al id ' + selectedPropertyType);
    }, [selectedPropertyType])

    return(

        <Page>

            

            <UserHomeInfo userName={"Juan Rojas"} userPicture={require("./components/UserHomeInfo/images/profile_picture.png")}/>
            <HomeMessage/>
            <PropertyTypesContainer>
                
                {//código jsx
                    PropertyTypes.map(item => 
                        <PropertyTypeBtn 
                            icon={item.icon} 
                            label={item.label} 
                            id={item.id}
                            selected ={selectedPropertyType === item.id} 
                            onPress={ propertyTypeHandler} 
                        /> )
                }
            </PropertyTypesContainer>

            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            
            


        </Page>
        
    )


}