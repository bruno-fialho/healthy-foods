import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  body {
    min-height: 2048px;
    background: #fff;
    color: #1d164d;
    font-family: muli, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
  }

  a:any-link {
    text-decoration: none;
    color: inherit;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }

  button, input {
    outline: none;
    border: none;
    text-decoration: none;
    color: inherit;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      outline: none;
      border: none;
      text-decoration: none;
    }
  }
`;
