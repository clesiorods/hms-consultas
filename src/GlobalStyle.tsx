import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
    font-family: 'Montserrat', Helvetica sans-serif;
    font-size: 0.9rem;
    transition: .3s all;
    overflow: hidden;
    -webkit-font-smoothing: antialiased !important;
  }


  ::-webkit-scrollbar {
      width: 14px !important;
      height: 12px !important;
      transition: .5s all !important;
  }

  /* *:hover::-webkit-scrollbar {
      width: 24px !important;
      height: 24px !important;
  } */

  ::-webkit-scrollbar-track {
      background: #f8f8f8 !important;
      /* border-radius: 4px; */
  }

  ::-webkit-scrollbar-thumb {
      background-color: #cecece !important;
      border-radius: 10px !important;
      width: 10px !important;
      border: 3px solid #f8f8f8 !important;
      transition: .5s all !important;
  }

  ::-webkit-scrollbar-thumb:hover {
      background-color: #dadada !important;
  }


  body::-webkit-scrollbar-track {
      background: white !important;
      border-radius: 2px;
  }
  body::-webkit-scrollbar-thumb {
      border: 3px solid white !important;
  }


  li::-webkit-scrollbar {
      display: none;
  }

  li {
    list-style: none;
  }

  .row {
    --bs-gutter-y: 1rem !important;
  }

  .form-group {
    margin-bottom: 18px;
  }

  label {
    margin-bottom: 4px;
  }

  @media screen and (max-width: 800px) {
    ::-webkit-scrollbar {
      width: 4px !important;
      height: 4px !important;
    }
    ::-webkit-scrollbar-track {
      background: #4045543a !important;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #bebebe45 !important;
      border: none !important;
    }
  }

`;

export default GlobalStyle;