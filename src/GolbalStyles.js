import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    body{
        font-size:14px;
    }
    a{
        color: #000;
        text-decoration: none;
    }
    button{
        border:none;
        cursor:pointer;
        background-color: inherit;
        padding:0;
    }
`;

export const GlobalContainer = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  padding-top: 50px;
`;

export default GlobalStyles;
