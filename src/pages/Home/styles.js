import styled from "styled-components";
import { PRIMARY_COLOR } from "../../constants/styleConstants";

export const PropertyTypesContainer = styled.section`
    display: flex;
    overflow-x: scroll;
    
    /**********  Scrolbar ****************/   
    &{

        /* width */
        ::-webkit-scrollbar {
        width: 20px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px #BDBDBD; 
        border-radius: 10px;
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #F3E5F5; 
        border-radius: 10px;
        }


        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: ${PRIMARY_COLOR}; 
        }
    };
    /**********  Fin Scrolbar ****************/   
    
`;

