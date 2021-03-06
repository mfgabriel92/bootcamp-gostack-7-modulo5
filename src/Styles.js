import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    background: #eee;
    min-height: 100%;
    color: #333;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialised !important;
    -moz-font-smoothing: antialised !important;
  }

  button {
    cursor: pointer;
  }
`
