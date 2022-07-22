import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../../../constants/styleConstants';

export const PropertyTypeBtnWrapper = styled.div`
    border: 1px;
    //background-color:#F3E5F5;
    background-color:${props => props.selected ? PRIMARY_COLOR : '#F3E5F5'};

    
    border-radius: 10px;
    min-width: 100px;
    margin:10px 5px;
    padding:10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        color:${props => props.selected ? '#F3E5F5' :  PRIMARY_COLOR };
        font-size: 0.8em;
        font-weight: 700;
        margin:0px;
        text-align:center;

    };
    .icon{
        font-size:2.8em;
    };
    a{
       text-decoration:none;
    };

    &:hover{
        background-color:${PRIMARY_COLOR};
        cursor:pointer;      
        p{ color:#F3E5F5;}
        svg{
            color:#F3E5F5;
        }        
    };       
`;

export const IconWrapper = styled.div`
    svg{
        font-size:2.8em;
        color:${props => props.selected ? '#F3E5F5' :  PRIMARY_COLOR };
        font-weight: 700;
        margin:0px;
    }    
`;