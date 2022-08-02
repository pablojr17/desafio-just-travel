import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Circular';
  src: url('./fonts/Circular-Medium-500.ttf');
}
html{
  .leaflet-container {
  height: 600px;
  width: 100%;
}
}

body{
  background-color: #f6f6f6;
}
`;
