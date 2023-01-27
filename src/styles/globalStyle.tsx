import "@fontsource/bebas-neue";
import "@fontsource/pt-sans";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
}
body{
    font-family: "pt-sans";
    overflow-x: hidden;
    height: auto;
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}
*{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
*::-webkit-scrollbar {
    width: 0px;
}
@keyframes Orbita2 {
    from { transform: rotate(180deg) rotate(180deg); }
    to   { transform: rotate(540deg) rotate(540deg); }
}
@keyframes Orbita2Child {
    from { transform: rotate(-180deg) rotate(-180deg); }
    to   { transform: rotate(-540deg) rotate(-540deg); }
}
`;

export default GlobalStyles;
