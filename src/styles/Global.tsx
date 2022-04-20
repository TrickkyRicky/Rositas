import { createGlobalStyle } from "styled-components";

const CreateGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default CreateGlobal;