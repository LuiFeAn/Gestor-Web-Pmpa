import styled from "styled-components";

export default styled.input`

    width: 270px;
    height: 50px;
    border-radius: 10px;
    border:none;
    padding-left:20px;
    outline: none;
    background: ${({theme})=> theme.colors.defualtColor};

`;