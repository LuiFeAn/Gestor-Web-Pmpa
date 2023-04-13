import styled from "styled-components";

export const Container = styled.div`

    background:rgb(0, 0, 90);
    padding:20px;
    color:white;
    display: flex;
    position: fixed;
    z-index: 9999;
    width: 100%;
    align-items: center;
    justify-content:start;

    h1,h2{
        margin-left: 10px;
        text-align: center;
    }

    img{
        width: 100px;
        cursor: pointer;
    }


`;