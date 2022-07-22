import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../../../constants/styleConstants';

export const HomeMessageBox = styled.div`
    border: 1px;
    background-color:white;
    border-radius: 10px;
    align-items: center;
    //width:100%;
    margin:10px 0px;
    padding:10px;
    span {
        color: ${PRIMARY_COLOR};
    };

    p {
        font-weight: 700;
        color:#9E9E9E;
        margin: 0.1em;
        font-size: 1.5em;
    }

    h2{
        font-weight: 700;
        color:#212121;
        margin: 0.1em;
    }


`;