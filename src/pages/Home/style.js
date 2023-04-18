import styled from "styled-components";

export const Container = styled.section`

    display: flex;
    height: 100vh;
    padding:50px;
    flex-direction: column;
    align-items: center;

    input{
        border:2px solid black;
        font-size:12px;
        font-weight: bold;
        padding-left: 10px;
    }

    form{

        margin-top:50px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap:20px;

        button {

            width: 180px;

        }

         @media only screen and (max-width: 767px) {

           flex-direction: column;

        }

    }

`;

export const SessionUserContainer = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    height: 200px;
    padding:20px;
    border-radius: 9px;
    gap:20px;

    img{
        width:100px;
        height:100px;
        border-radius: 100%;
    }

    .informations {

        p{
          font-size: 13px;
          font-weight: bold;
        }

    }

`;

export const ContainerUsers = styled.div`

    display: flex;
    align-items: center;
    padding: 150px;
    background-color: aqua;
    justify-content: center;
    margin-top:20px;
    position: relative;
    flex-direction: column;
    gap:20px;

    img{
        width:100px;
    }

`;