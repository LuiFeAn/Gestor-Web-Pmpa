import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora',sans-serif;

    }

    @media only screen and (max-width: 767px) {

        html,body{
            overflow-x: hidden;
        }

    }
    
`;