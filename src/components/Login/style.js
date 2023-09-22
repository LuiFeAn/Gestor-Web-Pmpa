import styled from "styled-components";

export const LoginGeralContainer = styled.section`

    width: 100%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 767px) {

        justify-content: center;

        align-items: center;

        flex-direction: column;

        img{
            display: none;
        }

    }

    

`;

export const LoginContainerInput = styled.div`

    display: flex;
    height: 70vh;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: -30px; 
    gap:20px;

`;

export const Container = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding:100px;
    border-radius: 20px;
    justify-content: center;
    gap:15px;

    input {
        width: 400px;
        margin-top:20px;
        border: 2px solid black;
        font-weight: bold;
    }

    button{
        margin-top:25px;
    }

    p{

        font-weight: bold;

    }

    @media only screen and (max-width: 767px) {

        margin-top: 0px;

        input{
            width: 300px;
        }

    }



`;