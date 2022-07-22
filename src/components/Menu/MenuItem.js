import { Link } from "react-router-dom";
import { MenuItemWrapper } from "./styles";

export const MenuItem = ({icon: Icon, label, path}) => ( //el Icon va con la primera mayúscula dado que se comporta como un componente

    <Link to={path}>
        <MenuItemWrapper>
            <Icon/>
            <p>{label}</p>
        </MenuItemWrapper>
    </Link>

)