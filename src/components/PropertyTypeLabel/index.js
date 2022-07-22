import { PropertyTypeLabelWrapper } from "./styles";



export const PropertyTypeLabel = ({icon:Icon,typeId}) =>(
    <PropertyTypeLabelWrapper>
        <div>
            <Icon/>
            <p>
                {typeId}
            </p>
        </div>
    </PropertyTypeLabelWrapper>

)