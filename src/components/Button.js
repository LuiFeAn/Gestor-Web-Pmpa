import styled from "styled-components";

export default styled.button`

    width: 300px;
    height: 50px;
    color: white;
    border:none;
    border-radius: 10px;
    background: ${({colorVerification}) => colorVerification ? 'rgb(0, 0, 90)' : 'grey'};
    transition: 1s;
    cursor: ${({colorVerification}) => colorVerification ? 'pointer' : 'not-allowed'};;

`;