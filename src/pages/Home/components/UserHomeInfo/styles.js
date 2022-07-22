import styled from 'styled-components';

export const UserHomeInfoWrapper = styled.div`
    border: 1px;
    background-color:white;
    border-radius: 10px;
    align-items: center;
    //width:100%;
    margin:10px 0px;
    padding:10px;
    display:flex;

    div{
        margin:0px 5px;
        padding:10px;
        background-color:white;
    };



    p span{
        font-weight: 300;
        color:#BDBDBD;
    }

    .alerts-container{
        flex:1;
        display:flex;
        justify-content: center;
        align-items: center;

    };

    .alerts-bell{
        display:flex;
        width: 30px;
        height: 30px;
        border:1px solid #6A1B9A;
        border-radius: 10px;
        padding:0;
        color:#6A1B9A;
        justify-content: center;
        align-items: center;
    };
    

    .user-picture{
        flex:1;
        display:flex;
        justify-content: center;
        align-items: center;
    
    };

    .user-home-info{
        flex:20;
    }

    .picture-box{
     
        background-color:#F3E5F5;
        border-radius: 20px;
        padding:auto;
        width: 70px;
        height: 60px;
    

    };
`;