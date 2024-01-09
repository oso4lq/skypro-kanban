import { createGlobalStyle, ThemeProvider } from 'styled-components';

const lightTheme = {
  body: '#EAEEF6',
  text: '#363537',

  header: '#FFF',
  headerUserText: '#565EEF',
  headerPopUserSet: '#FFF',
  headerPopUserSetBorder: '0.7px solid rgba(148, 166, 190, 0.4)',
  headerPopUserSetBoxShadow: '0px 10px 39px 0px rgba(26, 56, 101, 0.21)',
  headerPopUserSetButton: '#565EEF',
  headerPopUserSetCheckbox: '#EAEEF6',
  headerPopUserSetCheckboxBefore: '#94A6BE',

  main: '#EAEEF6',
  card: '#FFFFFF',
  cardtext: '#0000000',
};

const darkTheme = {
  body: '#151419',
  text: '#FFF',

  header: '#20202C',
  headerUserText: '#FFF',
  headerPopUserSet: '#202229',
  headerPopUserSetBorder: '0.7px solid var(--stroke-dark, #4E5566)',
  headerPopUserSetBoxShadow: '0px 10px 39px 0px rgba(148, 166, 190, 0.40)',
  headerPopUserSetButton: '#FFF',
  headerPopUserSetCheckbox: '#FFF',
  headerPopUserSetCheckboxBefore: '#565EEF',

  main: '#151419',
  card: '#20202C',
  cardtext: '#FFF',
};

const GlobalStyle = createGlobalStyle`
//  GENERAL
  html, body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    transition: all 0.25s linear;

    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }
  ul li {
    list-style: none;
  }
  .wrapper {
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    //background-color: #F1F1F1;
  }

  //  HEADER
  .header {
    background-color: ${props => props.theme.header};
    transition: all 0.25s linear;
  }

  //  HEADER POP USER
  .header__user {
    color: ${props => props.theme.headerUserText};
    //transition: all 0.25s linear;
  }
  .header__pop-user-set {
    background-color: ${props => props.theme.headerPopUserSet};

    border: ${props => props.theme.headerPopUserSetBorder};
    box-shadow: ${props => props.theme.headerPopUserSetBoxShadow};

  }
  .pop-user-set__name  {
    color: ${props => props.theme.text};
  }
  .pop-user-set__theme p {
    color: ${props => props.theme.text};
  }
  .pop-user-set button {
    color: ${props => props.theme.headerPopUserSetButton};
    border: 1px solid ${props => props.theme.headerPopUserSetButton};
  }
  .pop-user-set button a {
    color: ${props => props.theme.headerPopUserSetButton};
  }
  .pop-user-set__theme input[type=checkbox] {
    background: ${props => props.theme.headerPopUserSetCheckbox};
  }
  .pop-user-set__theme input[type=checkbox]::before {
    background-color: ${props => props.theme.headerPopUserSetCheckboxBefore};
  }

  //  MAIN
  .main {
    width: 100%;
    background-color: ${props => props.theme.main};
    transition: all 0.25s linear;

  }

  //  CARDS
  .cards__card {
    background-color: ${props => props.theme.card};
    transition: all 0.25s linear;

  }
  .card__title {
    color: ${props => props.theme.cardtext};
    transition: all 0.25s linear;

  }
`;

export { lightTheme, darkTheme, GlobalStyle, ThemeProvider }