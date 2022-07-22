import { PropertyBusinessTypeWrapper } from "./styles";



export const PropertyBusinessType = ({icon:Icon,typeId}) =>(
    <PropertyBusinessTypeWrapper>
        <div>
            <Icon/>
            <p>
                {typeId}
            </p>
        </div>

    </PropertyBusinessTypeWrapper>


)