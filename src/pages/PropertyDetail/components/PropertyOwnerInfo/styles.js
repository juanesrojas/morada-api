import styled from 'styled-components';

export const PropertyOwnerInfoWrapper = styled.div`
    border: 1px;
    background-color:white;
    border-radius: 10px;
    align-items: center;
    justify-content:center;
    //width:100%;
    margin:0px 0px;
    padding:0px;
    display:flex;

    div{
        margin:0px 2px;
        padding:0px;
        //background-color:white;
    };



    .message-container{
        flex:1;
        display:flex;
        align-items: center;
        justify-content:center;

    };

   

    .call-container{
        flex:1;
        display:flex;
        align-items: center;
        justify-content:center;

    };   
    

    .user-picture{
        flex:1;
        display:flex;
        align-items: center;
        justify-content:center;
        
    };



    .picture-box{
     
        background-color:#F3E5F5;
        border-radius: 15px;
        padding:0;
        width: 40px;
        height: 40px;
    

    };

    .user-home-info{
        flex:20;
    }

`