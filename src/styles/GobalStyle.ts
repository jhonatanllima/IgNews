import { createGlobalStyle } from 'styled-components';

export default  createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }

  body{
    
  }

  button{
    outline: none;
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }    
`;