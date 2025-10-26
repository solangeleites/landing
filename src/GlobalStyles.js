import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
        :root{

    }
    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }
    html {
          scroll-behavior: smooth;
    }`;