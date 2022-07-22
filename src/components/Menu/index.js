import { FaHome,FaUserAlt,FaStar,FaPlusSquare,FaBuilding } from 'react-icons/fa';
import { MenuItem } from './MenuItem';
import { MenuWrapper } from './styles';


const CustomerMenuItems = [
    {
        icon: FaHome,
        label: 'Inicio',
        path: '/'
    },

    {
        icon: FaStar,
        label: 'Favoritos',
        path: '/favorites'
    },

    {
        icon: FaUserAlt,
        label: 'perfil',
        path: '/account'
    }

];

const PropertiesAdminMenuItems = [
    {
        icon: FaHome,
        label: 'Inicio',
        path: '/'
    },

    {
        icon: FaPlusSquare,
        label: 'Agregar',
        path: '/add-property'
    },

    {
        icon: FaBuilding,
        label: 'Mis Propiedades',
        path: '/my-properties'
    },

    {
        icon: FaUserAlt,
        label: 'perfil',
        path: '/account'
    }

];



export const Menu = () =>{
const typeProfile = 2;    
    return(
        <MenuWrapper>
            {
                typeProfile ===1 && CustomerMenuItems.map(item=><MenuItem {...item} />)
            }
            {
                typeProfile ===2 && PropertiesAdminMenuItems.map(item=><MenuItem {...item} />)
            }

        </MenuWrapper>

    );
}
