import styled from "styled-components";

export const UserCardContainer = styled.div`

    width: 80%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap:20px;
    position: relative;

    img{
        width: 120px;
        height: 120px;
    }

    input{
        width: 120px;
    }

    button{
        position: absolute;
        right:0px
    }

     @media only screen and (max-width: 767px) {

        width: 100%;
        justify-content: center;

        button{
            position: unset;
        }

    }

    &+&{
        margin-top:20px;
    }

`;