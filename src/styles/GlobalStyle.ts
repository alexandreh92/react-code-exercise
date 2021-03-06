import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 200ms ease;
    font-family: "Montserrat", sans-serif;
  }
  html, body, #root {
    height: 100%;
    display: flex;
    flex: 1;
  }
  *, button, input {
    border: 0;
    outline: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  :root {
    display: flex;
  }
`;
