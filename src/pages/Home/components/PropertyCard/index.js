
import { PropertyInfoCard } from "../../../../components/PropertyInfoCard";
import { PropertyCardWrapper, PropertyImageWrapper } from "./styles";
import { Link } from "react-router-dom";



export const PropertyCard = () =>(

        <PropertyCardWrapper>
            <Link to="/propertydetail">
                <PropertyImageWrapper>
                    <img alt="apartamento" src="https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg"/>
                </PropertyImageWrapper>
            <PropertyInfoCard/>
            </Link>
        </PropertyCardWrapper>




)