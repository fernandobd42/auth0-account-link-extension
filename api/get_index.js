module.exports = (server) => ({
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    reply(`
<!doctype html>
<html class="auth0-lock-html">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <meta name="author" content="Auth0">
    <meta name="description" content="Easily link two accounts into one">
    <title>Auth0 Account Linking Extension</title>
    <link rel="shortcut icon" href="https://auth0.com/auth0-styleguide/img/favicon.png" />
    <style type="text/css">
      /* normalize.css v3.0.2 | MIT License | git.io/normalize */

      .auth0-lock html {
        font-family: sans-serif;
        /* 1 */

        -ms-text-size-adjust: 100%;
        /* 2 */

        -webkit-text-size-adjust: 100%;
        /* 2 */
      }
      .auth0-lock body {
        margin: 0;
      }
      .auth0-lock article,
      .auth0-lock aside,
      .auth0-lock details,
      .auth0-lock figcaption,
      .auth0-lock figure,
      .auth0-lock footer,
      .auth0-lock header,
      .auth0-lock hgroup,
      .auth0-lock main,
      .auth0-lock menu,
      .auth0-lock nav,
      .auth0-lock section,
      .auth0-lock summary {
        display: block;
      }
      .auth0-lock audio,
      .auth0-lock canvas,
      .auth0-lock progress,
      .auth0-lock video {
        display: inline-block;
        /* 1 */

        vertical-align: baseline;
        /* 2 */
      }
      .auth0-lock audio:not([controls]) {
        display: none;
        height: 0;
      }
      .auth0-lock [hidden],
      .auth0-lock template {
        display: none;
      }
      .auth0-lock a {
        background-color: transparent;
      }
      .auth0-lock a:active,
      .auth0-lock a:hover {
        outline: 0;
      }
      .auth0-lock abbr[title] {
        border-bottom: 1px dotted;
      }
      .auth0-lock b,
      .auth0-lock strong {
        font-weight: bold;
      }
      .auth0-lock dfn {
        font-style: italic;
      }
      .auth0-lock h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      .auth0-lock mark {
        background: #ff0;
        color: #000;
      }
      .auth0-lock small {
        font-size: 80%;
      }
      .auth0-lock sub,
      .auth0-lock sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }
      .auth0-lock sup {
        top: -0.5em;
      }
      .auth0-lock sub {
        bottom: -0.25em;
      }
      .auth0-lock img {
        border: 0;
      }
      .auth0-lock svg:not(:root) {
        overflow: hidden;
      }
      .auth0-lock figure {
        margin: 1em 40px;
      }
      .auth0-lock hr {
        box-sizing: content-box;
        height: 0;
      }
      .auth0-lock pre {
        overflow: auto;
      }
      .auth0-lock code,
      .auth0-lock kbd,
      .auth0-lock pre,
      .auth0-lock samp {
        font-family: monospace, monospace;
        font-size: 1em;
      }
      .auth0-lock button,
      .auth0-lock input,
      .auth0-lock optgroup,
      .auth0-lock select,
      .auth0-lock textarea {
        color: inherit;
        /* 1 */

        font: inherit;
        /* 2 */

        margin: 0;
        /* 3 */
      }
      .auth0-lock button {
        overflow: visible;
      }
      .auth0-lock button,
      .auth0-lock select {
        text-transform: none;
      }
      .auth0-lock button,
      .auth0-lock html input[type="button"],
      .auth0-lock input[type="reset"],
      .auth0-lock input[type="submit"] {
        -webkit-appearance: button;
        /* 2 */

        cursor: pointer;
        /* 3 */
      }
      .auth0-lock button[disabled],
      .auth0-lock html input[disabled] {
        cursor: default;
      }
      .auth0-lock button::-moz-focus-inner,
      .auth0-lock input::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
      .auth0-lock input {
        line-height: normal;
      }
      .auth0-lock input[type="checkbox"],
      .auth0-lock input[type="radio"] {
        box-sizing: border-box;
        /* 1 */

        padding: 0;
        /* 2 */
      }
      .auth0-lock input[type="number"]::-webkit-inner-spin-button,
      .auth0-lock input[type="number"]::-webkit-outer-spin-button {
        height: auto;
      }
      .auth0-lock input[type="search"] {
        -webkit-appearance: textfield;
        /* 1 */
        /* 2 */

        box-sizing: content-box;
      }
      .auth0-lock input[type="search"]::-webkit-search-cancel-button,
      .auth0-lock input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      .auth0-lock fieldset {
        border: 1px solid #c0c0c0;
        margin: 0 2px;
        padding: 0.35em 0.625em 0.75em;
      }
      .auth0-lock legend {
        border: 0;
        /* 1 */

        padding: 0;
        /* 2 */
      }
      .auth0-lock textarea {
        overflow: auto;
      }
      .auth0-lock optgroup {
        font-weight: bold;
      }
      .auth0-lock table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      .auth0-lock td,
      .auth0-lock th {
        padding: 0;
      }
      .auth0-lock-social-button-icon {
        background-repeat: no-repeat;
        background-size: 50%;
        background-position: center center;
      }
      .auth0-lock-social-button[data-provider="amazon"] {
        background-color: #f90;
      }
      .auth0-lock-social-button[data-provider="aol"] {
        background-color: #ff0b00;
      }
      .auth0-lock-social-button[data-provider="baidu"] {
        background-color: #2529d8;
      }
      .auth0-lock-social-button[data-provider="bitbucket"] {
        background-color: #205081;
      }
      .auth0-lock-social-button[data-provider="dropbox"] {
        background-color: #007ee5;
      }
      .auth0-lock-social-button[data-provider="ebay"] {
        background-color: #0064d2;
      }
      .auth0-lock-social-button[data-provider="facebook"] {
        background-color: #3b5998;
      }
      .auth0-lock-social-button[data-provider^="google"] {
        background-color: #4285f4;
      }
      .auth0-lock-social-button[data-provider="instagram"] {
        background-color: #3f729b;
      }
      .auth0-lock-social-button[data-provider="linkedin"] {
        background-color: #0077b5;
      }
      .auth0-lock-social-button[data-provider="github"] {
        background-color: #333;
      }
      .auth0-lock-social-button[data-provider="oauth2"] {
        background-color: #eb5424;
      }
      .auth0-lock-social-button[data-provider="paypal"] {
        background-color: #009cde;
      }
      .auth0-lock-social-button[data-provider^="salesforce"] {
        background-color: #1798c1;
      }
      .auth0-lock-social-button[data-provider="shopify"] {
        background-color: #96bf48;
      }
      .auth0-lock-social-button[data-provider="soundcloud"] {
        background-color: #f80;
      }
      .auth0-lock-social-button[data-provider="renren"] {
        background-color: #0056b5;
      }
      .auth0-lock-social-button[data-provider="exact"] {
        background-color: #ed1c24;
      }
      .auth0-lock-social-button[data-provider="twitter"] {
        background-color: #55acee;
      }
      .auth0-lock-social-button[data-provider=""] {
        background-color: #c7eaff;
      }
      .auth0-lock-social-button[data-provider="yandex"] {
        background-color: #fc0;
      }
      .auth0-lock-social-button[data-provider^="thecity"] {
        background-color: #767571;
      }
      .auth0-lock-social-button[data-provider="planningcenter"] {
        background-color: #4e4e4e;
      }
      .auth0-lock-social-button[data-provider="thirtysevensignals"] {
        background-color: #6ac071;
      }
      .auth0-lock-social-button[data-provider="fitbit"] {
        background-color: #4cc2c4;
      }
      .auth0-lock-social-button[data-provider="wordpress"] {
        background-color: #21759b;
      }
      .auth0-lock-social-button[data-provider="yahoo"] {
        background-color: #410093;
      }
      .auth0-lock-social-button[data-provider="box"] {
        background-color: #267bb6;
      }
      .auth0-lock-social-button[data-provider="vkontakte"] {
        background-color: #45668e;
      }
      .auth0-lock-social-button[data-provider="dwolla"] {
        background-color: #f5891f;
      }
      .auth0-lock-social-button[data-provider="miicard"] {
        background-color: #3fb7ff;
      }
      .auth0-lock-social-button[data-provider="yammer"] {
        background-color: #0072c6;
      }
      .auth0-lock-social-button[data-provider="weibo"] {
        background-color: #dd4b39;
      }
      .auth0-lock-social-button[data-provider^="windows"],
      .auth0-lock-social-button[data-provider^="microsoft"] {
        background-color: #00a1f1;
      }
      .auth0-lock-social-button[data-provider^=amazon] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDcyIDY1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+YW1hem9uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9ImFtYXpvbiIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjA2Myw1MC4zMTMgQzEsNTAuNDM4IDAuOTM4LDUwLjU2MyAwLjkzOCw1MC42ODggQzAuOTM4LDUwLjg3NiAxLjA2Myw1MS4xMjYgMS4zMTMsNTEuMzEzIEM2LjAwMSw1NS41NjMgMTEuMzEzLDU4LjgxMyAxNy4yNTEsNjEuMTI2IEMyMy4xODksNjMuNDM5IDI5LjUwMSw2NC42MjYgMzYuMTI2LDY0LjYyNiBDNDAuNDM5LDY0LjYyNiA0NC44NzYsNjQuMDAxIDQ5LjM3Niw2Mi44MTMgQzUzLjkzOSw2MS42MjUgNTguMDAxLDU5LjkzOCA2MS42ODksNTcuNzUgQzYyLjg3Nyw1Ny4wNjIgNjMuODc3LDU2LjQzNyA2NC42MjcsNTUuODc1IEM2NS4xOSw1NS40MzcgNjUuMzE1LDU0LjkzNyA2NC45NCw1NC40MzcgQzY0LjYyNyw1My45MzcgNjQuMTI3LDUzLjgxMiA2My40NCw1NC4wNjIgQzYzLjMxNSw1NC4xMjUgNjMuMDAyLDU0LjI1IDYyLjYyNyw1NC40MzcgQzYyLjE4OSw1NC42MjUgNjEuODc3LDU0Ljc1IDYxLjY4OSw1NC44MTIgQzUzLjUwMSw1Ny45MzcgNDUuMjUxLDU5LjUgMzYuODc2LDU5LjUgQzI0LjM3Niw1OS41IDEyLjc1MSw1Ni40MzcgMi4wNjMsNTAuMjUgQzEuNjI1LDQ5LjkzNyAxLjI1LDQ5LjkzNyAxLjA2Myw1MC4zMTMgTDEuMDYzLDUwLjMxMyBaIE0yMC4zMTMsMzIuMDYzIEMyMC4zMTMsMzUuNzUxIDIxLjM3NiwzOC42MjYgMjMuNTAxLDQwLjYyNiBDMjUuNjI2LDQyLjY4OSAyOC4zMTQsNDMuNjg5IDMxLjU2NCw0My42ODkgQzMzLjc1Miw0My42ODkgMzUuNTAyLDQzLjUwMSAzNi45MzksNDMuMDY0IEMzOS4yNTIsNDIuNDM5IDQxLjYyNyw0MC44MTQgNDQuMDAyLDM4LjE4OSBDNDQuMTksMzguMzc3IDQ0LjUwMiwzOC44MTQgNDQuODc3LDM5LjQzOSBDNDUuMzE1LDQwLjA2NCA0NS42MjcsNDAuNTAyIDQ1LjgxNSw0MC42ODkgTDQ2LjgxNSw0MS42ODkgQzQ3LjI1Myw0Mi4xODkgNDcuNzUzLDQyLjY4OSA0OC4zNzgsNDMuMTg5IEM0OS4wNjYsNDMuNTAyIDQ5LjY5MSw0My40MzkgNTAuMTkxLDQzLjA2NCBDNTAuNTA0LDQyLjgxNCA1Mi40NDEsNDEuMTI2IDU2LjAwNCwzOC4wNjQgQzU2LjMxNywzNy44MTQgNTYuNTA0LDM3LjUwMSA1Ni41MDQsMzcuMTg5IEM1Ni41MDQsMzYuODc3IDU2LjM3OSwzNi41MDEgNTYuMTI5LDM2LjEyNiBDNTUuNDQxLDM1LjI1MSA1NC45NDEsMzQuNjI2IDU0LjYyOSwzNC4xODggQzU0LjMxNiwzMy44MTMgNTQuMDA0LDMzLjEyNSA1My42OTEsMzIuMTg4IEM1My4zNzgsMzEuMzEzIDUzLjI1MywzMC4yNSA1My4yNTMsMjkuMTg4IEw1My4yNTMsMTMuNjg4IEM1My4yNTMsMTMuNSA1My4xOSwxMi45MzggNTMuMTksMTIuMDYzIEM1My4xMjcsMTEuMTI1IDUzLjA2NSwxMC41IDUyLjk0LDEwLjI1IEw1Mi41NjUsOC43NSBDNTIuNDQsOCA1Mi4yNTIsNy40MzcgNTIuMDAyLDcuMDYyIEM1MS44MTQsNi42ODcgNTEuNTAyLDYuMjQ5IDUxLjEyNyw1Ljc0OSBDNTAuODE0LDUuMzExIDUwLjM3Nyw0LjgxMSA0OS45MzksNC4zNzQgQzQ3LjI1MSwxLjg3NCA0My40MzksMC42MjQgMzguNTY0LDAuNjI0IEwzNi45MzksMC42MjQgQzMzLjE4OSwwLjgxMiAyOS44NzYsMS44NzQgMjcuMDAxLDMuNjg3IEMyNC4xODgsNS41IDIyLjM3Niw4LjMxMiAyMS42ODgsMTIuMTI1IEMyMS42MjUsMTIuMzEzIDIxLjYyNSwxMi40MzggMjEuNjI1LDEyLjU2MyBDMjEuNjI1LDEzLjE4OCAyMiwxMy41NjMgMjIuNjg4LDEzLjc1MSBMMzAuMDYzLDE0LjYyNiBDMzAuNzUxLDE0LjUwMSAzMS4xODgsMTQuMDAxIDMxLjMxMywxMy4xODggQzMxLjYyNiwxMS44MTMgMzIuMzEzLDEwLjc1IDMzLjMxMyw5LjkzOCBDMzQuMzc2LDkuMTg4IDM1LjU2Myw4Ljc1IDM2LjkzOCw4LjYyNSBMMzcuNTAxLDguNjI1IEMzOS4zNzYsOC42MjUgNDAuODE0LDkuMjUgNDEuNjg5LDEwLjU2MyBDNDIuMzE0LDExLjUwMSA0Mi42MjcsMTMuMzEzIDQyLjYyNywxNi4wNjMgTDQyLjYyNywxNy4xMjYgQzQwLjAwMiwxNy4zNzYgMzguMTI3LDE3LjUwMSAzNi45MzksMTcuNjI2IEMzMy42MjYsMTguMDY0IDMwLjc1MSwxOC43NTEgMjguNDM5LDE5Ljc1MSBDMjUuOTM5LDIwLjgxNCAyMy45MzksMjIuMzc2IDIyLjUwMSwyNC41MDEgQzIxLjA2MywyNi41NjQgMjAuMzEzLDI5LjEyNiAyMC4zMTMsMzIuMDY0IEwyMC4zMTMsMzIuMDYzIFogTTMxLjMxMywzMC43NSBDMzEuMzEzLDI3LjEyNSAzMy4xODgsMjQuNzUgMzYuOTM4LDIzLjY4NyBDMzguMjUxLDIzLjMxMiA0MC4xMjYsMjMuMTI0IDQyLjYyNiwyMy4xMjQgTDQyLjYyNiwyNC43NDkgQzQyLjYyNiwyNi4xMjQgNDIuNTYzLDI3LjEyNCA0Mi41NjMsMjcuNjg3IEM0Mi41NjMsMjguMzEyIDQyLjQzOCwyOS4wNjIgNDIuMTg4LDMwIEM0MS45MzgsMzEgNDEuNjI1LDMxLjg3NSA0MS4xMjUsMzIuNjg4IEM0MC4xMjUsMzQuNTAxIDM4Ljc1LDM1LjY4OCAzNi45MzcsMzYuMTI2IEMzNi44NzQsMzYuMTI2IDM2Ljc0OSwzNi4xODkgMzYuNDk5LDM2LjE4OSBDMzYuMjQ5LDM2LjI1MiAzNi4wNjEsMzYuMjUyIDM1LjkzNiwzNi4yNTIgQzM0LjU2MSwzNi4yNTIgMzMuNDM2LDM1Ljc1MiAzMi41NjEsMzQuNzUyIEMzMS43NDgsMzMuNzUyIDMxLjMxMSwzMi40MzkgMzEuMzExLDMwLjc1MiBMMzEuMzEzLDMwLjc1IFogTTU4LjE4OCw1MS4zNzUgQzU4LjE4OCw1MS40MzggNTguMTI1LDUxLjUgNTguMTI1LDUxLjU2MyBDNTguMTI1LDUxLjYyNiA1OC4xMjUsNTEuNzUxIDU4LjE4OCw1MS44MTMgQzU4LjMxMyw1MS44NzYgNTguNTAxLDUxLjkzOCA1OC43NTEsNTEuOTM4IEM1OS42MjYsNTEuODEzIDYwLjYyNiw1MS42ODggNjEuNjg5LDUxLjU2MyBDNjIuNjI3LDUxLjUgNjMuNTAyLDUxLjQzOCA2NC4yNTIsNTEuNDM4IEM2Ni4xOSw1MS40MzggNjcuMzc3LDUxLjY4OCA2Ny44MTUsNTIuMTg4IEM2OC4wMDMsNTIuNDM4IDY4LjA2NSw1Mi43NTEgNjguMDY1LDUzLjI1MSBDNjguMDY1LDU0LjY4OSA2Ny4zMTUsNTcuMjUxIDY1LjY5LDYxLjAwMSBDNjUuNTY1LDYxLjMxNCA2NS42MjcsNjEuNTY0IDY1Ljg3OCw2MS42ODkgQzY2LjAwMyw2MS43NTIgNjYuMDY2LDYxLjc1MiA2Ni4xMjgsNjEuNzUyIEM2Ni4zMTYsNjEuNzUyIDY2LjUwMyw2MS42MjcgNjYuNzUzLDYxLjUwMiBDNjguMTkxLDYwLjI1MiA2OS4zMTYsNTguNjI3IDcwLjEyOCw1Ni41NjQgQzcwLjk0MSw1NC41NjQgNzEuMzE2LDUyLjgxNCA3MS4zMTYsNTEuMzE0IEw3MS4zMTYsNTAuODc2IEM3MS4zMTYsNTAuMzc2IDcxLjI1Myw0OS45MzggNzEuMDY2LDQ5LjY4OCBDNzAuNjkxLDQ5LjI1IDY5LjU2Niw0OC45MzggNjcuNjI4LDQ4Ljc1IEM2Ny4yNTMsNDguNjg3IDY2LjgxNSw0OC42MjUgNjYuNDQsNDguNjg3IEM2NC44NzcsNDguNzUgNjMuMzE1LDQ4LjkzNyA2MS42OSw0OS4zNzUgQzYwLjY5LDQ5LjYyNSA1OS42OSw1MC4xMjUgNTguNjI3LDUwLjg3NSBDNTguNDM5LDUxIDU4LjMxNCw1MS4xODggNTguMTg5LDUxLjM3NSBMNTguMTg4LDUxLjM3NSBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
      }
      .auth0-lock-social-button[data-provider^=aol] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjkxcHgiIGhlaWdodD0iMzZweCIgdmlld0JveD0iMCAwIDkxIDM2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+YW9sPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9ImFvbCIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00OS45MzgsNy43NSBDNTguMDAxLDcuNzUgNjQuMDYzLDE0IDY0LjA2MywyMS43NSBDNjQuMDYzLDI5Ljg3NSA1Ny43NSwzNS42ODggNDkuOTM4LDM1LjY4OCBDNDIuMTg4LDM1LjY4OCAzNS44NzUsMjkuODc1IDM1Ljg3NSwyMS43NSBDMzUuODc1LDE0IDQxLjkzOCw3Ljc1IDQ5LjkzOCw3Ljc1IEw0OS45MzgsNy43NSBaIE00OS45MzgsMTUuMTg4IEM0Ni41LDE1LjE4OCA0My42MjUsMTguMDYzIDQzLjYyNSwyMS43NTEgQzQzLjYyNSwyNS4zNzYgNDYuNSwyOC4zMTQgNDkuOTM4LDI4LjMxNCBDNTMuNDM4LDI4LjMxNCA1Ni4yNTEsMjUuMzc2IDU2LjI1MSwyMS43NTEgQzU2LjI1MSwxOC4wNjMgNTMuNDM4LDE1LjEyNiA0OS45MzgsMTUuMTg4IEw0OS45MzgsMTUuMTg4IFogTTkwLjEyNSwzMC44MTMgQzkwLjEyNSwyOC4xMjUgODcuOTM3LDI1LjkzOCA4NS4yNSwyNS45MzggQzgyLjU2MywyNS45MzggODAuMzc1LDI4LjEyNiA4MC4zNzUsMzAuODEzIEM4MC4zNzUsMzMuNSA4Mi41NjMsMzUuNjg4IDg1LjI1LDM1LjY4OCBDODcuOTM3LDM1LjY4OCA5MC4xMjUsMzMuNSA5MC4xMjUsMzAuODEzIEw5MC4xMjUsMzAuODEzIFogTTc1LjkzOCwzNC44MTMgTDc1LjkzOCwwLjEyNSBMNjguMjUsMC4xMjUgTDY4LjI1LDM0LjgxMyBMNzUuOTM4LDM0LjgxMyBMNzUuOTM4LDM0LjgxMyBaIE0wLjY4OCwzNC44MTMgTDEwLjUwMSwzNC44MTMgTDEyLjEyNiwyOS44NzUgTDI0LjI1MSwyOS44NzUgTDI1Ljg3NiwzNC44MTMgTDM1LjYyNiwzNC44MTMgTDIxLjg3NiwwLjEyNSBMMTQuNjg4LDAuMTI1IEwwLjY4OCwzNC44MTMgWiBNMjEuODc1LDIyLjY4OCBMMTguMzEyLDExLjA2MyBMMTQuNjg3LDIyLjY4OCBMMjEuODc1LDIyLjY4OCBMMjEuODc1LDIyLjY4OCBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
      }
      .auth0-lock-social-button[data-provider^=baidu] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjU5cHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDU5IDY1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+YmFpZHU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iYmFpZHUiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMC4xMjUsMjQgQzAuMDYyLDI0LjQzOCAwLDI0Ljg3NSAwLDI1LjMxMyBDMCwyNS45MzggMC4wNjMsMjYuNjI2IDAuMjUsMjcuMzc2IEMwLjUsMjguNjI2IDAuOTM4LDI5Ljg3NiAxLjYyNSwzMS4wNjQgQzIuMjUsMzIuMjUyIDMuMTg4LDMzLjE4OSA0LjUsMzMuODE0IEM1LjMxMywzNC4yNTIgNi4yNSwzNC41MDIgNy4yNSwzNC41MDIgQzcuODEzLDM0LjUwMiA4LjMxMywzNC40MzkgOC44NzUsMzQuMzE0IEMxMC41LDMzLjkzOSAxMS43NSwzMy4yNTEgMTIuNjg4LDMyLjE4OSBDMTMuNjg4LDMxLjE4OSAxNC4yNTEsMjkuOTM5IDE0LjUwMSwyOC41MDEgQzE0Ljc1MSwyNy4xMjYgMTQuODc2LDI2LjAwMSAxNC44NzYsMjUuMTI2IEwxNC44NzYsMjQuNzUxIEMxNC44NzYsMjQuMDAxIDE0LjgxMywyMy4zMTMgMTQuNjI2LDIyLjYyNiBDMTQuNTAxLDIxLjAwMSAxMy42MjYsMTkuMzc2IDEyLjA2MywxNy42MjYgQzEwLjU2MywxNi4xMjYgOC45MzgsMTUuMzEzIDcuMTI1LDE1LjMxMyBMNi41NjIsMTUuMzEzIEw1Ljk5OSwxNS40MzggQzUuNjI0LDE1LjUwMSA1LjEyNCwxNS42ODggNC41NjEsMTYuMDYzIEMzLjkzNiwxNi4zNzYgMy4zNzMsMTYuODEzIDIuNzQ4LDE3LjM3NiBDMi4xMjMsMTcuOTM5IDEuNjIzLDE4LjgxNCAxLjEyMywxOS45MzkgQzAuNjIzLDIxLjEyNyAwLjMxLDIyLjQzOSAwLjEyMywyNC4wMDIgTDAuMTI1LDI0IFogTTQuMjUsNTUuMTI1IEw0LjkzOCw1Ny4zMTMgQzUuMzc2LDU4Ljc1MSA2LjM3Niw2MC4yNTEgNy44NzYsNjEuNjg4IEM5LjMxNCw2My4wNjMgMTEuMDAxLDYzLjgxMyAxMy4wMDEsNjMuODEzIEwxMy4xODksNjMuODEzIEMxMy44NzcsNjMuOTM4IDE0LjYyNyw2NC4wMDEgMTUuNTAyLDYzLjkzOCBDMTYuMzE1LDYzLjkzOCAxNy4yNTIsNjMuODc1IDE4LjMxNSw2My44MTMgQzIwLjM3OCw2My41NjMgMjEuNzUzLDYzLjM3NSAyMi41MDMsNjMuMjUgQzIzLjI1Myw2My4xMjUgMjMuODE2LDYzLjA2MiAyNC4yNTMsNjIuOTM3IEwyNS44NzgsNjIuNjg3IEMyNi44MTYsNjIuNDk5IDI3Ljk0MSw2Mi40MzcgMjkuMzc4LDYyLjQzNyBMMzAuMjUzLDYyLjQzNyBDMzIuMTI4LDYyLjUgMzMuODE2LDYyLjc1IDM1LjMxNiw2My4yNSBDMzcuOTQxLDY0LjEyNSA0MC4zMTYsNjQuNTYzIDQyLjUwNCw2NC41NjMgQzQ0LjY5Miw2NC41NjMgNDYuMzc5LDY0LjMxMyA0Ny41NjcsNjMuODEzIEM0OC43NTUsNjMuMzEzIDQ5LjgxNyw2Mi42ODggNTAuNzU1LDYxLjgxMyBDNTEuNjkzLDYwLjkzOCA1Mi4yNTUsNjAuMzEzIDUyLjUwNSw1OS45MzggQzUyLjc1NSw1OS41NjMgNTIuOTQzLDU5LjI1IDUzLjAwNSw1OSBMNTMuMzgsNTggQzUzLjU2OCw1Ny4zNzUgNTMuODE4LDU2LjU2MiA1My45NDMsNTUuNSBDNTQuMTMxLDU0LjQzNyA1NC4xOTMsNTMuMzc1IDU0LjE5Myw1Mi4xODcgQzU0LjE5Myw1MC45OTkgNTMuOTQzLDQ5LjgxMiA1My4zOCw0OC40OTkgQzUyLjc1NSw0Ny4yNDkgNTEuOTQyLDQ2LjE4NiA1MC44MTcsNDUuMzc0IEM0OC41MDQsNDMuNDk5IDQ2LjE5Miw0MS40OTkgNDQuMDY3LDM5LjI0OSBDNDEuODc5LDM2Ljk5OSA0MC40NDIsMzUuNDM2IDM5Ljc1NCwzNC42MjQgQzM5LjEyOSwzMy44MTEgMzguNjI5LDMzLjEyNCAzOC4yNTQsMzIuNjI0IEMzNi43NTQsMzAuMzExIDM1LjA2NiwyOC42ODYgMzMuMTkxLDI3LjY4NiBDMzEuNzUzLDI2LjkzNiAzMC4zMTYsMjYuNTYxIDI5LjAwMywyNi41NjEgQzI4LjYyOCwyNi41NjEgMjguMzE1LDI2LjU2MSAyNy44NzgsMjYuNjI0IEMyNi4yNTMsMjYuODc0IDI0LjY5LDI3LjQzNyAyMy4zMTUsMjguMzc0IEMyMS45NCwyOS4zMTEgMjAuODc3LDMwLjQzNyAyMC4xMjcsMzEuODEyIEMxOS4yNTIsMzMuMzEyIDE4LjE4OSwzNC42ODcgMTYuOTM5LDM2IEMxNS43NTEsMzcuMzEzIDE0LjU2NCwzOC40MzggMTMuNTY0LDM5LjMxMyBDMTIuNTAxLDQwLjE4OCAxMS45MzksNDAuNjg4IDExLjgxNCw0MC43NTEgTDEwLjE4OSw0Mi4wNjQgQzkuMDY0LDQzLjAwMiA4LjA2NCw0My45MzkgNy4wNjQsNDUuMDAyIEM2LjEyNiw0Ni4wMDIgNS4zMTQsNDcuNDQgNC42MjYsNDkuMzE1IEM0LjE4OCw1MC41MDMgMy45MzgsNTEuNjI4IDMuOTM4LDUyLjg3OCBDMy45MzgsNTMuNjI4IDQuMDYzLDU0LjM3OCA0LjI1MSw1NS4xMjggTDQuMjUsNTUuMTI1IFogTTEzLjMxMyw0OC41IEwxMy44MTMsNDcuMTg3IEMxNC4xMjYsNDYuMzEyIDE0Ljc1MSw0NS40MzcgMTUuNzUxLDQ0LjU2MiBDMTYuNzUxLDQzLjY4NyAxNy44NzYsNDMuMjQ5IDE5LjEyNiw0My4yNDkgTDIzLjUwMSw0My4yNDkgTDIzLjUwMSwzNy45MzYgTDI3LjEyNiwzNy45OTkgTDI3LjEyNiw1Ny42MjQgTDE5LjAwMSw1Ny42MjQgQzE2LjU2Myw1Ny4xMjQgMTQuODc2LDU1LjkzNiAxMy45MzgsNTQuMTI0IEMxMy40MzgsNTIuODc0IDEzLjE4OCw1MS41NjEgMTMuMTg4LDUwLjI0OSBDMTMuMTg4LDQ5LjY4NiAxMy4yNTEsNDkuMDYxIDEzLjMxMyw0OC40OTkgTDEzLjMxMyw0OC41IFogTTE0Ljg3NSwxMC41IEMxNC44NzUsMTMuMTg4IDE1LjUsMTUuNTYzIDE2Ljg3NSwxNy40MzggQzE4LjE4OCwxOS4zNzYgMTkuODEzLDIwLjMxMyAyMS43NSwyMC4zMTMgQzIzLjY4NywyMC4zMTMgMjUuMzEzLDE5LjM3NSAyNi42MjUsMTcuNDM4IEMyOCwxNS41NjMgMjguNjg4LDEzLjE4OCAyOC42ODgsMTAuNSBDMjguNjg4LDcuNzUgMjgsNS40MzcgMjYuNjI1LDMuNSBDMjUuMzEyLDEuNTYyIDIzLjY4NywwLjYyNSAyMS43NSwwLjYyNSBDMTkuODEzLDAuNjI1IDE4LjE4NywxLjU2MyAxNi44NzUsMy41IEMxNS41LDUuNDM4IDE0Ljg3NSw3Ljc1IDE0Ljg3NSwxMC41IEwxNC44NzUsMTAuNSBaIE0xNy4xMjUsNTEuNjI1IEwxNy40MzgsNTIuMzEzIEMxNy41NjMsNTIuODEzIDE3LjkzOCw1My4yNTEgMTguMzc2LDUzLjY4OCBDMTguODc2LDU0LjE4OCAxOS41MDEsNTQuMzc2IDIwLjE4OSw1NC4zNzYgTDIzLjQzOSw1NC4zNzYgTDIzLjQzOSw0Ni4zNzYgTDE5Ljg3Niw0Ni4zNzYgQzE4LjY4OCw0Ni43NTEgMTcuODEzLDQ3LjUwMSAxNy40MzgsNDguNjI2IEMxNy4xMjUsNDkuMzc2IDE3LDUwLjAwMSAxNyw1MC42MjYgQzE3LDUwLjkzOSAxNy4wNjMsNTEuMzE0IDE3LjEyNSw1MS42MjYgTDE3LjEyNSw1MS42MjUgWiBNMjkuMTI1LDU0LjA2MyBMMjkuMTI1LDQzLjY4OCBMMzIuOTM4LDQzLjYyNSBMMzIuOTM4LDUyLjkzOCBMMzMuMDAxLDUzLjE4OCBDMzMuMTI2LDUzLjMxMyAzMy4yNTEsNTMuNTAxIDMzLjUwMSw1My43NTEgQzMzLjc1MSw1My45MzkgMzQuMDY0LDU0LjA2NCAzNC40MzksNTQuMTI2IEwzOC4yNTIsNTQuMTI2IEwzOC4yNTIsNDMuNjg4IEw0Mi4zMTUsNDMuNjg4IEw0Mi4zMTUsNTcuNTYzIEwzMi45NCw1Ny41NjMgTDMyLjAwMiw1Ny4yNSBDMzEuMzc3LDU3LjA2MiAzMC43NTIsNTYuNjI1IDMwLjA2NCw1Ni4wNjIgQzI5LjQzOSw1NS40OTkgMjkuMTI2LDU0LjgxMiAyOS4xMjYsNTQuMDYyIEwyOS4xMjUsNTQuMDYzIFogTTMyLjUsMTEuMDYzIEMzMi40MzcsMTEuNzUxIDMyLjM3NSwxMi4zNzYgMzIuMzc1LDEzLjAwMSBDMzIuNDM4LDE0LjgxNCAzMi43NSwxNi40MzkgMzMuNDM4LDE3Ljc1MSBDMzQuMjUxLDE5LjYyNiAzNS44NzYsMjAuNjg5IDM4LjI1MSwyMS4wNjQgQzM4LjU2NCwyMS4wNjQgMzguODc2LDIxLjEyNyAzOS4xODksMjEuMTI3IEM0MS4xMjcsMjEuMDY0IDQyLjgxNCwyMC4xODkgNDQuMzE0LDE4LjU2NCBDNDUuOTM5LDE2LjU2NCA0Ny4wMDIsMTQuNDM5IDQ3LjM3NywxMi4wNjQgQzQ3LjM3NywxMS42ODkgNDcuNDQsMTEuMzE0IDQ3LjQ0LDEwLjkzOSBDNDcuNDQsOS4zMTQgNDYuODc3LDcuNjg5IDQ1LjgxNSw2LjAwMSBDNDQuNTAyLDMuOTM4IDQyLjk0LDIuNjg4IDQxLjA2NSwyLjMxMyBDNDAuODE1LDIuMjUgNDAuNTAyLDIuMjUgNDAuMjUyLDIuMjUgQzM4Ljc1MiwyLjI1IDM3LjI1MiwzLjEyNSAzNS42MjcsNC44NzUgQzMzLjc1Miw2LjkzOCAzMi43NTIsOSAzMi41MDIsMTEuMDYzIEwzMi41LDExLjA2MyBaIE00My44NzUsMjkuNjI1IEM0My44NzUsMzAuODc1IDQzLjkzOCwzMS44NzUgNDQuMTI1LDMyLjY4OCBDNDQuMjUsMzMuNTYzIDQ0LjUsMzQuNTAxIDQ1LDM1LjU2MyBDNDUuNDM4LDM2LjU2MyA0Ni4yNSwzNy4zNzYgNDcuNDM4LDM3Ljg3NiBDNDguNTAxLDM4LjMxNCA0OS44MTMsMzguNTY0IDUxLjQzOCwzOC41NjQgTDUxLjgxMywzOC41NjQgQzUyLjYyNiwzOC41NjQgNTMuMzc2LDM4LjUwMSA1NC4wNjMsMzguMzE0IEM1NC43NTEsMzguMDY0IDU1LjMxMywzNy44MTQgNTUuNzUxLDM3LjQzOSBDNTYuMjUxLDM3LjA2NCA1Ni42MjYsMzYuNjI2IDU3LjAwMSwzNi4yNTEgQzU3LjM3NiwzNS44MTMgNTcuNjI2LDM1LjMxMyA1Ny44MTQsMzQuNzUxIEM1OC4wMDIsMzQuMTI2IDU4LjE4OSwzMy42MjYgNTguMzE0LDMzLjE4OCBDNTguNDM5LDMyLjc1IDU4LjUwMiwzMi4yNSA1OC41NjQsMzEuNTYzIEM1OC42MjYsMzAuODc2IDU4LjYyNywzMC40MzggNTguNjI3LDMwLjEyNSBMNTguNjI3LDI3LjkzNyBDNTguNjI3LDI3LjM3NCA1OC41MDIsMjYuNjI0IDU4LjI1MiwyNS44MTIgQzU4LjAwMiwyNSA1Ny41NjQsMjQuMTg3IDU3LjA2NCwyMy4yNDkgQzU2LjUwMSwyMi4zMTEgNTUuNjg5LDIxLjU2MSA1NC42MjYsMjAuOTM2IEM1My41NjMsMjAuMzExIDUyLjI1MSwxOS45OTggNTAuODEzLDE5Ljk5OCBDNDYuMTg4LDE5Ljk5OCA0My44NzUsMjMuMTg2IDQzLjg3NSwyOS42MjMgTDQzLjg3NSwyOS42MjUgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
      }
      .auth0-lock-social-button[data-provider^=bitbucket] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI5NXB4IiB2aWV3Qm94PSIwIDAgMjU2IDI5NSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjgsNC42MDc0MjQwN2UtMDYgTDEyOCw0LjYwNzQyNDA3ZS0wNiBDNTcuNzMxODgxOCw0LjYwNzQyNDA3ZS0wNiAwLjAxMTYzOTUwNTEsMTguODIxODE1NyAwLjAxMTYzOTUwNTEsNDIuNjYyNzgxOCBDMC4wMTE2Mzk1MDUxLDQ4LjkzNjcyMjcgMTUuMDY5MDkzLDEzOC4wMjY2NjUgMjEuMzQzMDMzOSwxNzMuMTYwNzE1IEMyMy44NTI2MDU2LDE4OS40NzI5NjYgNjUuMjYwNjA4NSwyMTIuMDU5MTQ2IDEyOCwyMTIuMDU5MTQ2IEwxMjgsMjEyLjA1OTE0NiBDMTkwLjczOTM4NiwyMTIuMDU5MTQ2IDIzMC44OTI1OTEsMTg5LjQ3Mjk2NiAyMzQuNjU2OTcyLDE3My4xNjA3MTUgQzI0MC45MzA5MDEsMTM4LjAyNjY2NSAyNTUuOTg4MzU1LDQ4LjkzNjcyMjcgMjU1Ljk4ODM1NSw0Mi42NjI3ODE4IEMyNTQuNzMzNTY5LDE4LjgyMTgxNTcgMTk4LjI2ODExMiw0LjYwNzQyNDA3ZS0wNiAxMjgsNC42MDc0MjQwN2UtMDYgTDEyOCw0LjYwNzQyNDA3ZS0wNiBMMTI4LDQuNjA3NDI0MDdlLTA2IFogTTEyOCwxODMuMTk5MDI1IEMxMDUuNDEzODIsMTgzLjE5OTAyNSA4Ny44NDY3ODg4LDE2NS42MzE5ODggODcuODQ2Nzg4OCwxNDMuMDQ1ODA4IEM4Ny44NDY3ODg4LDEyMC40NTk2MjggMTA1LjQxMzgyLDEwMi44OTI2MDcgMTI4LDEwMi44OTI2MDcgQzE1MC41ODYxNjksMTAyLjg5MjYwNyAxNjguMTUzMjA1LDEyMC40NTk2MjggMTY4LjE1MzIwNSwxNDMuMDQ1ODA4IEMxNjguMTUzMjA1LDE2NC4zNzcyMDMgMTUwLjU4NjE2OSwxODMuMTk5MDI1IDEyOCwxODMuMTk5MDI1IEwxMjgsMTgzLjE5OTAyNSBMMTI4LDE4My4xOTkwMjUgWiBNMTI4LDU1LjIxMDY2MzYgQzgyLjgyNzYzMzcsNTUuMjEwNjYzNiA0Ni40Mzg3ODU5LDQ3LjY4MTkzNjggNDYuNDM4Nzg1OSwzNy42NDM2Mzg0IEM0Ni40Mzg3ODU5LDI3LjYwNTMyODMgODIuODI3NjMzNywyMC4wNzY2MDE2IDEyOCwyMC4wNzY2MDE2IEMxNzMuMTcyMzQ5LDIwLjA3NjYwMTYgMjA5LjU2MTIwOCwyNy42MDUzMjgzIDIwOS41NjEyMDgsMzcuNjQzNjM4NCBDMjA5LjU2MTIwOCw0Ny42ODE5MzY4IDE3My4xNzIzNDksNTUuMjEwNjYzNiAxMjgsNTUuMjEwNjYzNiBMMTI4LDU1LjIxMDY2MzYgTDEyOCw1NS4yMTA2NjM2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjIwLjYwODE3NiwyMDcuMDM5OTkxIEMyMTguMDk4NTkyLDIwNy4wMzk5OTEgMjE2Ljg0MzgwNywyMDguMjk0Nzc3IDIxNi44NDM4MDcsMjA4LjI5NDc3NyBDMjE2Ljg0MzgwNywyMDguMjk0Nzc3IDE4NS40NzQxMTQsMjMzLjM5MDU0MSAxMjkuMDA4NjU3LDIzMy4zOTA1NDEgQzcyLjU0MzIxMTMsMjMzLjM5MDU0MSA0MS4xNzM1MDY5LDIwOC4yOTQ3NzcgNDEuMTczNTA2OSwyMDguMjk0Nzc3IEM0MS4xNzM1MDY5LDIwOC4yOTQ3NzcgMzguNjYzOTM1MSwyMDcuMDM5OTkxIDM3LjQwOTE0OTMsMjA3LjAzOTk5MSBDMzQuODk5NTY2LDIwNy4wMzk5OTEgMzIuMzg5OTk0MywyMDguMjk0Nzc3IDMyLjM4OTk5NDMsMjEyLjA1OTE0NiBMMzIuMzg5OTk0MywyMTMuMzEzOTMyIEMzNy40MDkxNDkzLDIzOS42NjQ0ODIgNDEuMTczNTA2OSwyNTguNDg2MjkzIDQxLjE3MzUwNjksMjYwLjk5NTg2NCBDNDQuOTM3ODc2LDI3OS44MTc2ODcgODIuNTgxNTA5OCwyOTQuODc1MTQxIDEyNy43NTM4NzEsMjk0Ljg3NTE0MSBMMTI3Ljc1Mzg3MSwyOTQuODc1MTQxIEMxNzIuOTI2MjMyLDI5NC44NzUxNDEgMjEwLjU2OTg2NiwyNzkuODE3Njg3IDIxNC4zMzQyMzUsMjYwLjk5NTg2NCBDMjE0LjMzNDIzNSwyNTguNDg2MjkzIDIxOC4wOTg1OTIsMjM5LjY2NDQ4MiAyMjMuMTE3NzQ3LDIxMy4zMTM5MzIgTDIyMy4xMTc3NDcsMjEyLjA1OTE0NiBDMjI0LjM3MjUzMywyMDkuNTQ5NTYzIDIyMy4xMTc3NDcsMjA3LjAzOTk5MSAyMjAuNjA4MTc2LDIwNy4wMzk5OTEgTDIyMC42MDgxNzYsMjA3LjAzOTk5MSBMMjIwLjYwODE3NiwyMDcuMDM5OTkxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBjeD0iMTI4IiBjeT0iMTQxLjc5MTA4IiByPSIyMC4wNzY2MDUiPjwvY2lyY2xlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
        background-size: 45%;
      }
      .auth0-lock-social-button[data-provider^=box] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjY1cHgiIGhlaWdodD0iMzZweCIgdmlld0JveD0iMCAwIDY1IDM2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Ym94PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9ImJveCIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNC41NjMsMTAuODc1IEM0MS40MzgsMTAuODc1IDQ3LjAwMSwxNi40MzggNDcuMDAxLDIzLjI1IEM0Ny4wMDEsMzAuMTI1IDQxLjQzOCwzNS42ODggMzQuNTYzLDM1LjY4OCBDMjkuODEzLDM1LjY4OCAyNS42ODgsMzMgMjMuNTYzLDI5LjA2MyBDMjEuNSwzMy4wMDEgMTcuMzc1LDM1LjY4OCAxMi42MjUsMzUuNjg4IEM1LjgxMiwzNS42ODggMC4zMTIsMzAuMjUgMC4xODcsMjMuNSBMMC4xODcsMjMuNSBMMC4xODcsMi44NzUgQzAuMjUsMS41IDEuMzEyLDAuNDM3IDIuNjg3LDAuNDM3IEM0LjA2MiwwLjQzNyA1LjEyNSwxLjUgNS4xODcsMi44NzUgTDUuMTg3LDIuODc1IEw1LjE4NywxMy4zMTMgQzcuMjUsMTEuNzUgOS44MTIsMTAuODc1IDEyLjYyNSwxMC44NzUgQzE3LjM3NSwxMC44NzUgMjEuNSwxMy41IDIzLjU2MywxNy40MzggQzI1LjY4OCwxMy41IDI5LjgxMywxMC44NzUgMzQuNTYzLDEwLjg3NSBMMzQuNTYzLDEwLjg3NSBaIE0xMi42MjUsMzAuNjg4IEMxNi43NSwzMC42ODggMjAuMDYzLDI3LjM3NSAyMC4wNjMsMjMuMjUgQzIwLjA2MywxOS4xODcgMTYuNzUsMTUuODEyIDEyLjYyNSwxNS44MTIgQzguNSwxNS44MTIgNS4xODcsMTkuMTg3IDUuMTg3LDIzLjI1IEM1LjE4NywyNy4zNzUgOC41LDMwLjY4OCAxMi42MjUsMzAuNjg4IEwxMi42MjUsMzAuNjg4IFogTTM0LjU2MywzMC42ODggQzM4LjY4OCwzMC42ODggNDIuMDAxLDI3LjM3NSA0Mi4wMDEsMjMuMjUgQzQyLjAwMSwxOS4xODcgMzguNjg4LDE1LjgxMiAzNC41NjMsMTUuODEyIEMzMC40MzgsMTUuODEyIDI3LjEyNSwxOS4xODcgMjcuMTI1LDIzLjI1IEMyNy4xMjUsMjcuMzc1IDMwLjQzOCwzMC42ODggMzQuNTYzLDMwLjY4OCBMMzQuNTYzLDMwLjY4OCBaIE02My42ODgsMzEuNzUgTDYzLjY4OCwzMS44MTMgQzY0LjQzOCwzMi44NzYgNjQuMjUxLDM0LjM3NiA2My4xODgsMzUuMTg4IEM2Mi4wNjMsMzYuMDYzIDYwLjU2MywzNS44MTMgNTkuNjg4LDM0Ljc1IEw1NC4yNSwyNy40MzcgTDQ4Ljc1LDM0Ljc1IEM0Ny44NzUsMzUuODEzIDQ2LjM3NSwzNi4wNjMgNDUuMzEyLDM1LjE4OCBDNDQuMTg3LDM0LjM3NSA0My45OTksMzIuODc1IDQ0Ljc0OSwzMS44MTMgTDUxLjEyNCwyMy4yNSBMNDQuNzQ5LDE0Ljc1IEM0My45OTksMTMuNjg3IDQ0LjE4NiwxMi4xMjUgNDUuMzEyLDExLjMxMiBDNDYuMzc1LDEwLjQ5OSA0Ny44NzUsMTAuNzQ5IDQ4Ljc1LDExLjgxMiBMNTQuMjUsMTkuMTI1IEw1OS42ODgsMTEuODEyIEM2MC41NjMsMTAuNzQ5IDYyLjA2MywxMC40OTkgNjMuMTg4LDExLjMxMiBDNjQuMjUxLDEyLjEyNSA2NC40MzgsMTMuNjg3IDYzLjY4OCwxNC43NSBMNTcuMzEzLDIzLjI1IEw2My42ODgsMzEuNzUgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
      }
      .auth0-lock-social-button[data-provider^=dropbox] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjY2cHgiIGhlaWdodD0iNjNweCIgdmlld0JveD0iMCAwIDY2IDYzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+ZHJvcGJveDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJkcm9wYm94IiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTAuMjUsMzMuODEzIEwyMC4xMjUsNDUuNjI2IEwzMy4xMjUsMzUuNjI2IEw0Ni4xMjUsNDUuNjI2IEw2NS43NSwzMy44MTMgTDUzLjEyNSwyMi45MzggTDY1Ljc1LDEyLjM3NSBMNDYuNDM3LDAgTDMzLjEyNCwxMS4xMjUgTDIwLjEyNCwwIEwwLjI0OSwxMyBMMTMuOTM3LDIzLjM3NSBMMC4yNSwzMy44MTMgWiBNMTMuODc1LDQ5Ljg3NSBMMzIuOTM4LDYyLjYyNSBMMzIuOTM4LDM5Ljg3NSBMMzIuODc1LDM5LjgxMiBMMTkuODc1LDQ5Ljc1IEwxMy44NzUsNDYuMTg3IEwxMy44NzUsNDkuODc1IEwxMy44NzUsNDkuODc1IFogTTE0LjE4OCwyMy4yNSBMMzMuMTI2LDExLjY4NyBMNTEuOTM5LDIyLjU2MiBMMzMuMDAxLDM1LjA2MiBMMTQuMTg4LDIzLjI1IFogTTMyLjkzOCw2Mi42MjUgTDUyLjQzOCw0OS45MzcgTDUyLjQzOCw0NS44NzQgTDQ2LjA2Myw0OS43NDkgTDMzLjEyNSwzOS44MTEgTDMzLDM5Ljg3NCBMMzIuOTM4LDYyLjYyNSBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
      }
      .auth0-lock-social-button[data-provider^=dwolla] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQwcHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDQwIDY1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+ZHdvbGxhPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9ImR3b2xsYSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMDAwMDAwLCAwLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMSw1NSBDMSw1OC4zMTMgMiw2MC45MzggNC4wNjMsNjIuODc1IEM2LjEyNiw2NC43NSA4LjkzOCw2NS4yNSAxMi41NjMsNjQuMzc1IEMxMy4zNzYsNjQuMTg3IDE0LjQzOCw2My43NSAxNS44MTMsNjMuMDYyIEwxOC4wNjMsNjEuODc0IEwyMy44MTMsNTkuMzc0IEMyMy45MzgsNTkuMzc0IDI0LjM3Niw1OS4xMjQgMjUuMjUxLDU4Ljc0OSBDMjYuMDY0LDU4LjM3NCAyNi44MTQsNTguMDYxIDI3LjUwMSw1Ny44MTEgQzI5LjEyNiw1Ny4xMjMgMzAuNDM5LDU2LjU2MSAzMS4zNzYsNTYuMDYxIEMzMi4xODksNTUuNjg2IDMzLjMxNCw1NS4wNjEgMzQuODE0LDU0LjEyMyBDMzYuMTI3LDUzLjMxIDM3LjEyNyw1Mi40MzUgMzcuODE0LDUxLjYyMyBDMzguNTY0LDUwLjgxIDM5LjEyNyw0OS42ODUgMzkuNjI3LDQ4LjMxIEM0MC4xOSw0Ny4wNiA0MC41MDIsNDUuNTYgNDAuNTAyLDQzLjk5NyBDNDAuNTAyLDQyLjY4NCA0MC4zMTQsNDEuNDM0IDQwLjAwMiw0MC4yNDcgQzM5LjY4OSwzOC45OTcgMzkuMzc3LDM3Ljk5NyAzOS4wMDIsMzcuMTIyIEMzOC42ODksMzYuMjQ3IDM4LjEyNywzNS4zMDkgMzcuMzc3LDM0LjE4NCBDMzYuNTY0LDMzLjA1OSAzNi4wMDIsMzIuMjQ2IDM1LjU2NCwzMS43NDYgQzM1LjEyNiwzMS4yNDYgMzQuNDM5LDMwLjQzMyAzMy40MzksMjkuMzcxIEMzMi40MzksMjguMjQ2IDMxLjg3NiwyNy41NTggMzEuNTY0LDI3LjI0NiBDMzEuMzc2LDI2Ljk5NiAzMC42ODksMjYuMjQ2IDI5LjU2NCwyNC45MzMgQzI4LjQzOSwyMy42ODMgMjcuNjg5LDIyLjgwOCAyNy4zNzYsMjIuMzcgQzI3LjAwMSwyMS45OTUgMjYuNDM4LDIxLjE4MiAyNS42MjYsMTkuOTk1IEMyNC44MTQsMTguODA4IDI0LjMxMywxNy44NyAyNC4wMDEsMTcuMDU3IEMyMy43NTEsMTYuMjQ0IDIzLjQzOCwxNS4yNDQgMjMuMTg4LDE0LjA1NyBDMjIuOTM4LDEyLjgwNyAyMi44NzUsMTEuNjE5IDIyLjg3NSwxMC4zNjkgQzIzLDcuMTgxIDI0LjM3NSw0Ljc0NCAyNywzLjA1NiBDMjguMTI1LDIuNDkzIDI4LjY4OCwxLjkzMSAyOC42ODgsMS40OTMgQzI4LjUsMC43NDMgMjcuOTM4LDAuNjE4IDI3LjEyNSwxLjA1NSBDMjUuOTM3LDEuNzQzIDI0LjA2MiwyLjU1NSAyMS42MjUsMy42MTggTDE3LjE4Nyw1LjU1NiBMMTQuMTg3LDYuOTMxIEMxMy42ODcsNy4xMTkgMTMuMDYyLDcuMzY5IDEyLjMxMiw3LjY4MSBDMTEuNTYyLDguMDU2IDExLjA2Miw4LjI0NCAxMC44NzQsOC4zMDYgQzEwLjQ5OSw4LjQ5NCA5LjU2MSw4Ljk5NCA3Ljk5OSw5LjkzMSBDNi43NDksMTAuNjgxIDUuODExLDExLjM2OSA1LjMxMSwxMS45OTQgQzMuODExLDEzLjQ5NCAyLjg3MywxNS40MzIgMi42MjMsMTcuODA3IEMxLjkzNSwyMi42ODIgMy45MzYsMjcuOTk1IDguNjIzLDMzLjYyIEM4Ljk5OCwzNC4wNTggMTAuMjQ4LDM1LjU1OCAxMi40MzYsMzguMTIgQzEzLjg3NCwzOS43NDUgMTQuOTk5LDQxLjE4MyAxNS45MzYsNDIuNDk1IEMxNS41NjEsNDIuNjgzIDEyLjkzNiw0My44NyA4LjEyMyw0NS45MzMgQzcuMDYsNDYuMzcxIDUuODczLDQ2Ljk5NiA0LjYyMyw0Ny44MDggQzIuMTg1LDQ5LjM3MSAwLjk5OCw1MS43NDYgMC45OTgsNTQuOTk2IEwxLDU1IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
        background-size: 30%;
      }
      .auth0-lock-social-button[data-provider^=ebay] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjkwcHgiIGhlaWdodD0iMzlweCIgdmlld0JveD0iMCAwIDkwIDM5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+ZWJheTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJlYmF5IiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIDAuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLDIzLjY4OCBDMSwyNS42MjYgMS4xODgsMjcuMTg4IDEuNjI1LDI4LjUwMSBDMiwyOS43NTEgMi44MTMsMzAuOTM5IDQsMzIuMDY0IEM1LjE4NywzMy4xODkgNy4wNjMsMzQuMDAyIDkuNTYzLDM0LjU2NCBDMTIuMDYzLDM1LjA2NCAxNS4zMTMsMzUuMzc3IDE5LjI1MSwzNS4zNzcgQzIyLjc1MSwzNS4zNzcgMjUuOTM5LDM1LjA2NCAyOC44MTQsMzQuMzc3IEMzMC4wNjQsMzQuMTI3IDMxLjI1MiwzMy43NTIgMzIuNDM5LDMzLjE4OSBMMzIuNDM5LDI3LjUwMSBMMjQuNjg5LDI3LjUwMSBDMjQuNjg5LDMwLjA2NCAyMi44NzYsMzEuMzc2IDE5LjI1MSwzMS4zNzYgQzE3LjkzOCwzMS4zNzYgMTYuODc2LDMxLjE4OCAxNi4wNjMsMzAuODEzIEMxNS4yNSwzMC40MzggMTQuNjg4LDI5Ljg3NSAxNC4zNzUsMjkuMDYzIEMxNC4wNjIsMjguMzEzIDEzLjg3NSwyNy42ODggMTMuODEyLDI3LjEyNSBDMTMuNjg3LDI2LjYyNSAxMy42ODcsMjUuODc1IDEzLjY4NywyNSBMMzIuNDM3LDI1IEwzMi40MzcsMTQuNjg3IEMzMS42MjQsMTQuMjQ5IDMwLjM3NCwxMy44NzQgMjguNjg3LDEzLjU2MiBDMjYuMTI0LDEyLjk5OSAyMi45OTksMTIuNjg3IDE5LjI0OSwxMi42ODcgQzE2LjA2MSwxMi42ODcgMTMuMzExLDEyLjg3NSAxMC45OTksMTMuMzEyIEM4Ljc0OSwxMy42ODcgNi45MzYsMTQuMjUgNS42ODYsMTQuODc1IEM0LjM3MywxNS40MzggMy4zNzMsMTYuMzEzIDIuNjg2LDE3LjMxMyBDMS45OTksMTguMzEzIDEuNTYxLDE5LjMxMyAxLjMxMSwyMC4zMTMgQzEuMTIzLDIxLjI1MSAwLjk5OCwyMi4zNzYgMC45OTgsMjMuNjg4IEwxLDIzLjY4OCBaIE0xMy42ODgsMjEuNTYzIEMxMy42ODgsMjAuODc1IDEzLjY4OCwyMC4zMTMgMTMuNzUxLDE5LjkzOCBDMTMuODE0LDE5LjYyNSAxNC4wMDEsMTkuMDYzIDE0LjMxNCwxOC40MzggQzE0LjYyNywxNy43NSAxNS4xODksMTcuMjUgMTYuMDAyLDE2LjkzOCBDMTYuODE1LDE2LjYyNiAxNy45NCwxNi41IDE5LjI1MiwxNi41IEMyMC42MjcsMTYuNSAyMS44MTUsMTYuNjI1IDIyLjY5LDE2LjkzOCBDMjMuNTY1LDE3LjI1MSAyNC4xMjgsMTcuNjg4IDI0LjQ0LDE4LjMxMyBDMjQuNzUzLDE5LjAwMSAyNC44NzgsMTkuNTAxIDI0Ljk0LDE5LjgxMyBDMjUuMDY1LDIwLjE4OCAyNS4wNjUsMjAuNzUxIDI1LjA2NSwyMS41NjMgTDEzLjY5LDIxLjU2MyBMMTMuNjg4LDIxLjU2MyBaIE0zMi40MzgsMzMuMTg4IEMzMi41MDEsMzMuMTg4IDMyLjYyNiwzMy4xMjUgMzIuNjg4LDMzLjA2MyBDMzUuODEzLDMxLjUgMzcuMzc2LDI5LjY4OCAzNy40MzgsMjcuNSBMMzIuNDM4LDI3LjUgTDMyLjQzOCwzMy4xODggTDMyLjQzOCwzMy4xODggWiBNMzIuNDM4LDMzLjE4OCBMMzIuNDM4LDM4LjI1MSBMMzkuMDAxLDM4LjI1MSBMMzkuMDAxLDM1LjU2MyBMMzkuMDY0LDM1LjU2MyBDNDAuMjUyLDM3LjY4OCA0Mi4xODksMzguNzUxIDQ0Ljg3NywzOC43NTEgQzQ2LjI1MiwzOC43NTEgNDcuNDQsMzguNTAxIDQ4LjMxNSwzNy45MzggQzQ5LjI1MywzNy40MzggNDkuOTQsMzYuNjI1IDUwLjQ0LDM1LjYyNSBDNTAuODc4LDM0LjU2MiA1MS4xOSwzMy41NjIgNTEuMzc4LDMyLjYyNSBDNTEuNTY2LDMxLjYyNSA1MS42OTEsMzAuNSA1MS43NTMsMjkuMTI1IEM0OC41MDMsMjguMzc1IDQ2Ljg3OCwyNS43NSA0Ni44NzgsMjEuMzEyIEM0Ni44NzgsMTguMjQ5IDQ3Ljc1MywxNi4wNjIgNDkuNDQxLDE0LjgxMiBDNDguMzE2LDEzLjY4NyA0Ni44NzgsMTMuMTI0IDQ1LjA2NiwxMy4xMjQgQzQyLjYyOCwxMy4xMjQgNDAuNzUzLDE0LjA2MiAzOS4zNzgsMTUuOTM3IEwzOS4yNTMsMTUuOTM3IEwzOS4yNTMsMi45OTkgTDMyLjQ0LDIuOTk5IEwzMi40NCwxNC42ODcgQzM0LjY5LDE1LjY4NyAzNi4xOSwxNyAzNi44MTUsMTguNjI1IEMzNy4zNzgsMjAgMzcuNjksMjEuNjI1IDM3LjY5LDIzLjUgQzM3LjY5LDI0IDM3LjYyNywyNC41IDM3LjYyNywyNSBMMzIuNDM5LDI1IEwzMi40MzksMjcuNSBMMzcuNDM5LDI3LjUgQzM3LjM3NiwyOS42ODggMzUuODE0LDMxLjUgMzIuNjg5LDMzLjA2MyBDMzIuNjI2LDMzLjEyNiAzMi41MDEsMzMuMTg4IDMyLjQzOSwzMy4xODggTDMyLjQzOCwzMy4xODggWiBNMzIuNDM4LDI1IEwzNy42MjYsMjUgQzM3LjYyNiwyNC41IDM3LjY4OSwyNCAzNy42ODksMjMuNSBDMzcuNjg5LDIxLjYyNSAzNy4zNzYsMjAgMzYuODE0LDE4LjYyNSBDMzYuMTg5LDE3IDM0LjY4OSwxNS42ODcgMzIuNDM5LDE0LjY4NyBMMzIuNDM5LDI1IEwzMi40MzgsMjUgWiBNMzkuMjUsMjUuNjg4IEMzOS4yNSwyNC4xMjUgMzkuMzEzLDIyLjkzOCAzOS4zMTMsMjIuMjUgQzM5LjM3NiwyMS41IDM5LjUwMSwyMC42ODcgMzkuNjI2LDE5LjgxMiBDMzkuNzUxLDE4LjkzNyA0MC4wNjQsMTguMjQ5IDQwLjQzOSwxNy45MzcgQzQwLjg3NywxNy41NjIgNDEuMzc3LDE3LjM3NCA0Mi4wNjQsMTcuMzc0IEM0Mi44MTQsMTcuMzc0IDQzLjM3NywxNy41NjIgNDMuODE0LDE3Ljg3NCBDNDQuMTg5LDE4LjI0OSA0NC41MDIsMTguODEyIDQ0LjYyNywxOS42ODcgQzQ0LjgxNSwyMC41NjIgNDQuOTQsMjEuMzc1IDQ0Ljk0LDIyLjA2MiBDNDUuMDAzLDIyLjc1IDQ1LjA2NSwyMy44NzUgNDUuMDY1LDI1LjM3NSBMNDUuMDY1LDI1LjY4OCBDNDUuMDY1LDI5LjAwMSA0NC44MTUsMzEuMjUxIDQ0LjQ0LDMyLjU2MyBDNDQuMDY1LDMzLjg3NSA0My4zMTUsMzQuNTAxIDQyLjA2NSwzNC41MDEgQzQwLjk0LDM0LjUwMSA0MC4xOSwzMy44NzYgMzkuODE1LDMyLjU2MyBDMzkuNDQsMzEuMjUgMzkuMjUyLDI5IDM5LjI1MiwyNS42ODggTDM5LjI1LDI1LjY4OCBaIE00Ni44NzUsMjEuMzEzIEM0Ni44NzUsMjUuNzUxIDQ4LjUsMjguMzc2IDUxLjc1LDI5LjEyNiBMNTEuNzUsMjUuODEzIEM1MS44MTMsMjQgNTEuODEzLDIyLjYyNSA1MS43NSwyMS43NSBDNTEuNjg3LDIwLjg3NSA1MS41LDE5LjY4NyA1MS4xMjUsMTguMTg3IEM1MC43NSwxNi42ODcgNTAuMTg3LDE1LjU2MiA0OS40MzcsMTQuODEyIEM0Ny43NDksMTYuMDYyIDQ2Ljg3NCwxOC4yNSA0Ni44NzQsMjEuMzEyIEw0Ni44NzUsMjEuMzEzIFogTTQ3LjM3NSwxMS4xODggTDU0LjI1LDExLjE4OCBDNTQuMjUsOS45MzggNTQuMzc1LDkgNTQuNjg4LDguMzEzIEM1NS4wMDEsNy42MjYgNTUuNjg4LDcuMzEzIDU2LjgxMyw3LjMxMyBDNTcuOTM4LDcuMzEzIDU4LjY4OCw3LjYyNiA1OS4wNjMsOC4yNTEgQzU5LjQzOCw4LjgxNCA1OS42MjYsOS43NTEgNTkuNjI2LDExLjAwMSBMNTkuNjI2LDEyLjkzOSBMNTguMDYzLDEyLjkzOSBDNTMuOTM4LDEyLjkzOSA1MS4wNjMsMTMuNTY0IDQ5LjQzOCwxNC44MTQgQzUwLjE4OCwxNS41NjQgNTAuNzUxLDE2LjY4OSA1MS4xMjYsMTguMTg5IEM1MS41MDEsMTkuNjg5IDUxLjY4OSwyMC44NzcgNTEuNzUxLDIxLjc1MiBMNTEuNzUxLDI5LjEyNyBDNTIuMDY0LDI5LjE5IDUyLjYyNiwyOS4xOSA1My40MzksMjkuMTkgQzU2LjI1MiwyOS4xOSA1OC40MzksMjguMDAyIDU5LjgxNCwyNS41MDIgTDU5LjkzOSwyNS41MDIgTDYwLjI1MiwyOC44MTUgTDY2LjY5LDI4LjgxNSBDNjYuNjksMjguNDQgNjYuNjI3LDI3Ljc1MiA2Ni41NjUsMjYuNjI3IEM2Ni40NCwyNS41NjQgNjYuNDQsMjQuNzUyIDY2LjQ0LDI0LjE4OSBMNjYuNDQsMTcuNjI2IEw1OS41NjUsMy42ODggQzU3LjYyNywzLjU2MyA1Ni42MjcsMy41IDU2LjQ0LDMuNSBDNTMuNTY1LDMuNSA1MS40NCw0LjA2MyA0OS45NCw1LjEyNSBDNDguMjUyLDYuMTg4IDQ3LjM3Nyw4LjI1IDQ3LjM3NywxMS4xODggTDQ3LjM3NSwxMS4xODggWiBNNTMuNjI1LDIxIEM1My4xODcsMjAuNjI1IDUzLjE4NywyMC4xODcgNTMuNjg4LDE5Ljc1IEM1NC4xODksMTkuMzEzIDU0LjI1MSwxOC45MzcgNTQuMDAxLDE4Ljc1IEM1My42ODgsMTguNTYyIDUzLjg3NiwxOC4zMTIgNTQuNDM5LDE4LjA2MiBDNTQuOTM5LDE3LjgxMiA1NS4xODksMTcuNjI0IDU1LjAwMiwxNy41NjIgQzU0Ljg3NywxNy40MzcgNTUuMDY1LDE3LjMxMiA1NS42OSwxNy4xODcgQzU2LjMxNSwxNy4wNjIgNTYuNTY1LDE2Ljk5OSA1Ni41NjUsMTYuOTk5IEw1Ny41MDMsMTYuODc0IEM1Ny42MjgsMTYuODc0IDU4LjAwMywxNi44NzQgNTguNTY2LDE2LjgxMSBMNTkuNjI5LDE2LjgxMSBMNTkuNjI5LDE4LjA2MSBDNTkuNjkyLDE4Ljc0OSA1OS42OTIsMTkuMjQ5IDU5LjYyOSwxOS42MjQgQzU5LjYyOSwxOS45MzcgNTkuNjI5LDIwLjQzNyA1OS41NjYsMjEuMTI0IEM1OS41MDMsMjEuNzQ5IDU5LjQ0MSwyMi4zMTIgNTkuMjUzLDIyLjYyNCBDNTkuMTI4LDIyLjk5OSA1OC45NCwyMy4zNzQgNTguNjksMjMuODEyIEM1OC40NCwyNC4xODcgNTguMDY1LDI0LjUgNTcuNjksMjQuNjg3IEM1Ny4yNTIsMjQuODc1IDU2LjgxNSwyNSA1Ni4yNTIsMjUgQzU0LjUwMiwyNSA1My42MjcsMjMuNjg3IDUzLjYyNywyMSBMNTMuNjI1LDIxIFogTTU3Ljg3NSwwLjM3NSBMNTkuNTYzLDMuNjg4IEM2Mi4zMTMsNC4wNjMgNjQuMTI2LDQuOTM4IDY1LjA2Myw2LjI1MSBDNjUuOTM4LDcuNjI2IDY2LjQzOCw5LjQzOSA2Ni40MzgsMTEuODE0IEw2Ni40MzgsMTcuNjI3IEw2OS4xODgsMjMuMzE1IEw2OS4xODgsMzUuNTAzIEw3OC4xODgsMzUuNTAzIEw3OC4xODgsMjMuMzE1IEw5MC4yNTEsMC4zNzcgTDgxLjEyNiwwLjM3NyBMNzQuMTI2LDE1LjE5IEw2Ny43NTEsMC4zNzcgTDU3Ljg3NiwwLjM3NyBMNTcuODc1LDAuMzc1IFogTTU5LjU2MywzLjY4OCBMNjYuNDM4LDE3LjYyNiBMNjYuNDM4LDExLjgxMyBDNjYuNDM4LDkuNDM4IDY1LjkzOCw3LjYyNSA2NS4wNjMsNi4yNSBDNjQuMTI1LDQuOTM3IDYyLjMxMyw0LjA2MiA1OS41NjMsMy42ODcgTDU5LjU2MywzLjY4OCBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
        background-size: 70%;
      }
      .auth0-lock-social-button[data-provider^=exact] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQzcHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDQzIDMyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+ZXhhY3Q8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iZXhhY3QiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuMDQ5LDEuMDA4IEMxNC4wMTIsMC44IDI3Ljk3NCwwLjgyOSA0MS45MzcsMC45NzggQzQyLjAyNCwzLjcxOCA0Mi4yMjYsOS4xOTggNDIuMzEzLDExLjkzOSBDMjguNTI0LDEyLjQ0NSAxNC43MDYsMTIuMjA3IDAuODg4LDEyLjI5NyBDMC41OTksOC41NDQgMC4zMSw0Ljc5MSAwLjA1LDEuMDA5IEwwLjA1LDEuMDA5IEwwLjA1LDEuMDA5IEwwLjA0OSwxLjAwOCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjIyMywyMC4yMTkgQzE0LjA0MSwyMC4yNDkgMjcuOTQ2LDE5LjI5NiA0MS43NjQsMjAuNjM2IEM0Mi4xMTEsMjQuMTUxIDQyLjExMSwyNy43MjUgNDIuMTQsMzEuMjY5IEMyOC4yMzUsMzEuMjM5IDE0LjM1OSwzMS4yMzkgMC40NTQsMzEuMjEgQzAuMzY3LDI3LjU0NyAwLjI4MSwyMy44ODMgMC4yMjMsMjAuMjIgTDAuMjIzLDIwLjIyIEwwLjIyMywyMC4yMiBMMC4yMjMsMjAuMjE5IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
        background-size: 30%;
      }
      .auth0-lock-social-button[data-provider^=facebook] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjM2cHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDM2IDY1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+ZmFjZWJvb2s8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iZmFjZWJvb2siIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMC45MzgsMzUgTDEwLjc1MSwzNSBMMTAuNzUxLDY0LjYyNSBMMjMuMDY0LDY0LjYyNSBMMjMuMDY0LDM1IEwzNS4zNzcsMzUgTDM1LjM3NywyMi43NSBMMjMuMDY0LDIyLjc1IEwyMy4wNjQsMTYuNSBDMjMuMDY0LDE1LjQzNyAyMy4zMTQsMTQuNjI1IDIzLjgxNCwxMy44NzUgQzI0LjM3NywxMy4xODcgMjQuOTM5LDEyLjg3NSAyNS41NjQsMTIuODc1IEwzNS4zNzcsMTIuODc1IEwzNS4zNzcsMC42MjUgTDI1LjU2NCwwLjYyNSBDMjEuNDM5LDAuNjI1IDE4LjAwMSwyLjE4OCAxNS4xMjYsNS4zMTMgQzEyLjE4OCw4LjQzOCAxMC43NTEsMTIuMTg4IDEwLjc1MSwxNi42MjYgTDEwLjc1MSwyMi43NTEgTDAuOTM4LDIyLjc1MSBMMC45MzgsMzUuMDAxIEwwLjkzOCwzNSBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
        background-size: 25%;
      }
      .auth0-lock-social-button[data-provider^=fitbit] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjYwcHgiIGhlaWdodD0iNTlweCIgdmlld0JveD0iMCAwIDYwIDU5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Zml0Yml0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9ImZpdGJpdCIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOC4zNzUsNDIgQzM4LjM3NSw0NC40MzggNDAuMzEzLDQ2LjMxMyA0Mi44MTMsNDYuMzEzIEM0NS4yNTEsNDYuMzEzIDQ3LjI1MSw0NC4zNzUgNDcuMzEzLDQyIEM0Ny4zMTMsMzkuNjI1IDQ1LjI1LDM3LjU2MiA0Mi43NSwzNy42MjUgQzQwLjMxMiwzNy42MjUgMzguMzc1LDM5LjUgMzguMzc1LDQyIEwzOC4zNzUsNDIgWiBNNjAsMjkuNSBDNjAsMjYuOTM3IDU4LjE4NywyNS4xMjUgNTUuNjg3LDI1LjEyNSBDNTMuMTg3LDI1LjA2MiA1MS4xMjQsMjcuMDYzIDUxLjEyNCwyOS40MzggQzUxLjE4NywzMS44MTMgNTMuMTg3LDMzLjgxMyA1NS41NjIsMzMuODEzIEM1OC4wNjIsMzMuODc2IDYwLDMxLjkzOCA2MCwyOS41IEw2MCwyOS41IFogTTM4LjM3NSwxNi45MzggQzM4LjM3NSwxOS4zNzYgNDAuMzc1LDIxLjMxMyA0Mi44MTMsMjEuMzEzIEM0NS4yNTEsMjEuMjUgNDcuMjUxLDE5LjI1IDQ3LjMxMywxNi45MzggQzQ3LjMxMywxNC42MjUgNDUuMjUsMTIuNTYzIDQyLjg3NSwxMi41NjMgQzQwLjM3NSwxMi41IDM4LjM3NSwxNC40MzggMzguMzc1LDE2LjkzOCBMMzguMzc1LDE2LjkzOCBaIE0wLDI5LjQzOCBDMCwzMS44NzYgMiwzMy44MTMgNC4zNzUsMzMuODEzIEM2Ljg3NSwzMy44MTMgOC44NzUsMzEuNzUgOC44NzUsMjkuMzc1IEM4LjgxMiwyNyA2LjgxMiwyNS4xMjUgNC4zNzUsMjUuMTI1IEMxLjgxMiwyNS4xMjUgMCwyNi45MzggMCwyOS40MzggTDAsMjkuNDM4IFogTTM4LjM3NSwyOS40MzggQzM4LjM3NSwzMS44MTMgNDAuMzc1LDMzLjgxMyA0Mi44MTMsMzMuODEzIEM0NS4yNTEsMzMuODEzIDQ3LjMxMywzMS43NSA0Ny4zMTMsMjkuMzc1IEM0Ny4yNSwyNyA0NS4yNSwyNS4xMjUgNDIuODEzLDI1LjEyNSBDNDAuMjUsMjUuMTI1IDM4LjM3NSwyNi45MzggMzguMzc1LDI5LjQzOCBMMzguMzc1LDI5LjQzOCBaIE0yMS42MjUsMjkuNSBDMjEuNjI1LDI3IDE5LjgxMiwyNS4xMjUgMTcuMzEyLDI1LjEyNSBDMTQuNzQ5LDI1LjA2MiAxMi43NDksMjYuOTM4IDEyLjY4NywyOS40MzggQzEyLjY4NywzMS43NTEgMTQuODEyLDMzLjgxMyAxNy4yNSwzMy44MTMgQzE5LjYyNSwzMy44MTMgMjEuNTYzLDMxLjg3NSAyMS42MjUsMjkuNSBMMjEuNjI1LDI5LjUgWiBNMjkuOTM4LDI1LjEyNSBDMjcuNSwyNS4xMjUgMjUuNSwyNy4wNjMgMjUuNTYzLDI5LjQzOCBDMjUuNTYzLDMxLjg3NiAyNy41NjMsMzMuODEzIDMwLjAwMSwzMy44MTMgQzMyLjQzOSwzMy44MTMgMzQuNDM5LDMxLjg3NSAzNC40MzksMjkuNSBDMzQuNTAyLDI3IDMyLjUwMSwyNS4xMjUgMjkuOTM5LDI1LjEyNSBMMjkuOTM4LDI1LjEyNSBaIE0zMCw4LjY4OCBDMzIuNSw4LjY4OCAzNC40MzgsNi43NSAzNC40MzgsNC4zMTMgQzM0LjM3NSwyIDMyLjMxMyw4Ljg4MTc4NDJlLTE2IDMwLDAuMDYzIEMyNy42MjUsMC4wNjMgMjUuNTYyLDIuMDYzIDI1LjU2Miw0LjQzOCBDMjUuNjI1LDYuNzUxIDI3LjYyNSw4LjY4OCAzMCw4LjY4OCBMMzAsOC42ODggWiBNMzAsNTguODEzIEMzMi40MzgsNTguODEzIDM0LjQzOCw1Ni44NzUgMzQuNDM4LDU0LjQzOCBDMzQuNDM4LDUyLjEyNSAzMi40MzgsNTAuMTg4IDMwLDUwLjE4OCBDMjcuNjI1LDUwLjEyNSAyNS41NjIsNTIuMTg4IDI1LjU2Miw1NC41MDEgQzI1LjU2Miw1Ni44NzYgMjcuNTYyLDU4Ljc1MSAzMCw1OC44MTQgTDMwLDU4LjgxMyBaIE0zNC40MzgsNDEuOTM4IEMzNC40MzgsMzkuNjI1IDMyLjQzOCwzNy42MjUgMzAsMzcuNjI1IEMyNy42ODcsMzcuNjI1IDI1LjYyNSwzOS42MjUgMjUuNTYyLDQxLjkzOCBDMjUuNTYyLDQ0LjI1MSAyNy42MjUsNDYuMzEzIDMwLjA2Miw0Ni4zMTMgQzMyLjQzNyw0Ni4yNSAzNC40MzcsNDQuMzEzIDM0LjQzNyw0MS45MzggTDM0LjQzOCw0MS45MzggWiBNMTIuODc1LDQyIEMxMi44NzUsNDQuNDM4IDE0Ljc1LDQ2LjMxMyAxNy4xODgsNDYuMzEzIEMxOS42MjYsNDYuMzEzIDIxLjU2Myw0NC4zNzUgMjEuNTYzLDQyIEMyMS41NjMsMzkuNjI1IDE5LjYyNSwzNy42MjUgMTcuMjUsMzcuNjI1IEMxNC42ODcsMzcuNjI1IDEyLjg3NSwzOS41IDEyLjg3NSw0MiBMMTIuODc1LDQyIFogTTMwLDEyLjYyNSBDMjcuNSwxMi42ODggMjUuNjI1LDE0LjUgMjUuNTYyLDE2Ljg3NSBDMjUuNTYyLDE5LjI1IDI3LjUsMjEuMTg4IDI5LjkzNywyMS4xODggQzMyLjUsMjEuMTg4IDM0LjQzNywxOS4zMTMgMzQuNDM3LDE2Ljg3NSBDMzQuMzc0LDE0LjUgMzIuNDM3LDEyLjYyNSAyOS45OTksMTIuNjI1IEwzMCwxMi42MjUgWiBNMTcuMjUsMjEuMTg4IEMxOS43NSwyMS4xODggMjEuNTYzLDE5LjM3NSAyMS41NjMsMTYuODc1IEMyMS41NjMsMTQuNDM3IDE5Ljc1LDEyLjY4NyAxNy4yNSwxMi42MjUgQzE0Ljc1LDEyLjYyNSAxMi42ODcsMTQuNjI1IDEyLjc1LDE2LjkzOCBDMTIuODEzLDE5LjMxMyAxNC44MTMsMjEuMTg4IDE3LjI1LDIxLjE4OCBMMTcuMjUsMjEuMTg4IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
      }
      .auth0-lock-social-button[data-provider^=github] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDY0IDY1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Z2l0aHViPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9ImdpdGh1YiIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik04LjQzNzY5NDk5ZS0xNSwzMi4yNSBDOC40Mzc2OTQ5OWUtMTUsMzYuNTYzIDAuODc1LDQwLjc1IDIuNTYzLDQ0LjYyNSBDNS45MzgsNTIuNjI1IDExLjU2Myw1OC4zMTMgMTkuNTAxLDYxLjc1IEMyMy40MzksNjMuNDM4IDI3LjU2NCw2NC4zMTMgMzEuOTM5LDY0LjMxMyBDMzYuMzE0LDY0LjMxMyA0MC40MzksNjMuNDM4IDQ0LjM3Nyw2MS43NSBDNTIuMTksNTguMzc1IDU3Ljg3Nyw1Mi42ODcgNjEuMzE1LDQ0LjYyNSBDNjMuMDAzLDQwLjYyNSA2My44NzgsMzYuNDM3IDYzLjg3OCwzMi4yNSBDNjMuODc4LDI4IDYzLjAwMywyMy44NzUgNjEuMzE1LDE5LjgxMiBDNTcuODc3LDExLjgxMiA1Mi4xOSw2LjE4NyA0NC4zNzcsMi44NzQgQzQwLjQzOSwxLjEyNCAzNi4zMTQsMC4zMTEgMzEuOTM5LDAuMzExIEMyNy41NjQsMC4zMTEgMjMuNDM5LDEuMTI0IDE5LjUwMSwyLjg3NCBDMTEuNTYzLDYuMjQ5IDUuOTM4LDExLjg3NCAyLjU2MywxOS44MTIgQzAuODc1LDIzLjc1IDAsMjcuODc1IDAsMzIuMjUgTDguNDM3Njk0OTllLTE1LDMyLjI1IFogTTUsMzIuMjUgQzUsMjguNjI1IDUuNjg4LDI1LjEyNSA3LjEyNSwyMS43NSBDOC41NjMsMTguNSAxMC41LDE1LjYyNSAxMi44NzUsMTMuMTg3IEMxNS4zNzUsMTAuNzQ5IDE4LjI1LDguODEyIDIxLjQzOCw3LjQzNyBDMjQuOTM4LDUuOTk5IDI4LjQzOCw1LjMxMiAzMS45MzgsNS4zMTIgQzM1LjUwMSw1LjMxMiAzOC45MzgsNiA0Mi4zNzYsNy40MzcgQzQ1LjY4OSw4Ljg3NSA0OC41NjQsMTAuNzUgNTAuOTM5LDEzLjE4NyBDNTMuNDM5LDE1LjYyNSA1NS4zMTQsMTguNSA1Ni42ODksMjEuNzUgQzU4LjEyNywyNS4xMjUgNTguODE0LDI4LjYyNSA1OC44MTQsMzIuMjUgQzU4LjgxNCwzOC4xODggNTcuMDY0LDQzLjU2MyA1My41NjQsNDguMjUgQzUwLjAwMSw1MyA0NS40MzksNTYuMzEzIDM5LjkzOSw1OC4zMTMgTDM5LjkzOSw1My4xODggQzM5LjkzOSw1MC42ODggMzkuMDY0LDQ4LjgxMyAzNy4zMTQsNDcuNjI1IEMzOS40MzksNDcuNDM3IDQxLjM3Nyw0NyA0My4xMjcsNDYuMzc1IEM0NS4yNTIsNDUuNjI1IDQ2Ljk0LDQ0LjU2MiA0OC4xOSw0My4xODcgQzUwLjU2NSw0MC43NDkgNTEuNjksMzcuMTI0IDUxLjY5LDMyLjM3NCBDNTEuNjksMjkuMTg2IDUwLjYyNywyNi40MzYgNDguNTAyLDI0LjE4NiBDNDkuNDQsMjEuNjIzIDQ5LjM3NywxOC45MzYgNDguMTg5LDE1Ljk5OCBMNDcuNDM5LDE1LjkzNSBDNDYuODE0LDE1LjgxIDQ1Ljg3NiwxNi4wNiA0NC41MDEsMTYuNTYgQzQzLjAwMSwxNy4xMjMgNDEuNTAxLDE3Ljk5OCAzOS44MTMsMTkuMTIzIEMzNy4xODgsMTguNDM1IDM0LjU2MywxOC4wNiAzMi4wNjMsMTguMDYgQzI5LjU2MywxOC4wNiAyNywxOC40MzUgMjQuMzc1LDE5LjEyMyBDMjIuMzEyLDE3Ljc0OCAyMC41LDE2LjgxIDE4LjgxMiwxNi4zMSBDMTguMTg3LDE2LjA2IDE3LjYyNCwxNS45OTcgMTcuMTg3LDE1Ljk5NyBMMTUuOTM3LDE1Ljk5NyBDMTQuNzQ5LDE4LjkzNSAxNC42MjQsMjEuNjIyIDE1LjYyNCwyNC4xODUgQzEzLjQ5OSwyNi40MzUgMTIuNDM2LDI5LjE4NSAxMi40MzYsMzIuMzczIEMxMi40MzYsMzguNDk4IDE0LjM3NCw0Mi43NDggMTguMjQ5LDQ1LjEyMyBDMTkuNzQ5LDQ2LjA2MSAyMS42MjQsNDYuNzQ4IDIzLjgxMiw0Ny4xMjMgQzI0LjkzNyw0Ny4zNzMgMjUuOTM3LDQ3LjU2MSAyNi44MTIsNDcuNjIzIEMyNS4xMjQsNDguNzQ4IDI0LjI0OSw1MC42MjMgMjQuMjQ5LDUzLjE4NiBMMjQuMjQ5LDU4LjMxMSBDMTguNTYxLDU2LjMxMSAxMy45MzYsNTIuOTk4IDEwLjM3NCw0OC4zNzMgQzYuODExLDQzLjYyMyA0Ljk5OSwzOC4yNDggNC45OTksMzIuMjQ4IEw1LDMyLjI1IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
      }
      .auth0-lock-social-button[data-provider^=google] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjU3cHgiIGhlaWdodD0iNThweCIgdmlld0JveD0iMCAwIDU3IDU4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Z29vZ2xlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9Imdvb2dsZSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOS4wMDQsMzQuNDE0IEwyOS4wMDQsMjMuODEyIEw1NS42OCwyMy44MTIgQzU2LjA4LDI1LjYwOCA1Ni4zOTIsMjcuMjg4IDU2LjM5MiwyOS42NTQgQzU2LjM5Miw0NS45MjggNDUuNDc2LDU3LjQ5OCAyOS4wMzIsNTcuNDk4IEMxMy4zLDU3LjQ5OCAwLjUzMiw0NC43MyAwLjUzMiwyOC45OTggQzAuNTMyLDEzLjI2NiAxMy4zLDAuNDk4IDI5LjAzMiwwLjQ5OCBDMzYuNzI4LDAuNDk4IDQzLjE2OCwzLjMyIDQ4LjA5OCw3LjkzNiBMNDAuMDA0LDE1LjgwMiBDMzcuOTUyLDEzLjg2NCAzNC4zNiwxMS41ODQgMjkuMDMyLDExLjU4NCBDMTkuNTk4LDExLjU4NCAxMS45MDQsMTkuNDIyIDExLjkwNCwyOS4wMjYgQzExLjkwNCwzOC42MyAxOS42LDQ2LjQ2OCAyOS4wMzIsNDYuNDY4IEMzOS45NDgsNDYuNDY4IDQzLjk2NiwzOC45MTYgNDQuNzA2LDM0LjQ0IEwyOS4wMDIsMzQuNDQgTDI5LjAwMiwzNC40MTIgTDI5LjAwNCwzNC40MTQgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
      }
      .auth0-lock-social-button[data-provider^=instagram] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDY0IDY1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aW5zdGFncmFtPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9Imluc3RhZ3JhbSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMDAwMDAwLCAwLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNNDYuMDYzLDIzLjY4OCBDNDcuOTM4LDI2LjMxMyA0OS4wNjMsMjkuNTYzIDQ5LjA2MywzMy4xMjYgQzQ5LjA2Myw0Mi4xMjYgNDEuODEzLDQ5LjM3NiAzMi44MTMsNDkuMzc2IEMyMy44MTMsNDkuMzc2IDE2LjUsNDIuMTI2IDE2LjUsMzMuMTI2IEMxNi41LDI5LjU2MyAxNy42MjUsMjYuMzEzIDE5LjUsMjMuNjg4IEwxLDIzLjY4OCBMMSw1Mi4yNTEgQzEsNTkuMTg5IDYuNjI1LDY0LjgxNCAxMy41NjMsNjQuODE0IEw1Mi4wNjMsNjQuODE0IEM1OS4wMDEsNjQuODE0IDY0LjY4OCw1OS4xODkgNjQuNjg4LDUyLjI1MSBMNjQuNjg4LDIzLjY4OCBMNDYuMDYzLDIzLjY4OCBMNDYuMDYzLDIzLjY4OCBaIE02NC42ODgsMTMuMzc1IEM2NC42ODgsNi40MzcgNTksMC44MTIgNTIuMDYzLDAuODEyIEwxNy42ODgsMC44MTIgTDE3LjY4OCwxNi42ODcgTDE1LjA2MywxNi42ODcgTDE1LjA2MywwLjgxMiBMMTMuMzEzLDAuODEyIEwxMy4zMTMsMTYuNjg3IEwxMC43NSwxNi42ODcgTDEwLjc1LDEuMTI0IEMxMC4xMjUsMS4zMTIgOS41LDEuNDk5IDguODc1LDEuNzQ5IEw4Ljg3NSwxNi42ODcgTDYuMzEyLDE2LjY4NyBMNi4zMTIsMy4xMjQgQzMuMTI0LDUuNDM3IDAuOTk5LDkuMTg3IDAuOTk5LDEzLjM3NCBMMC45OTksMjEuNjg3IEwyMS4xODcsMjEuNjg3IEMyNC4xMjUsMTguNjg3IDI4LjI1LDE2LjgxMiAzMi44MTIsMTYuODEyIEMzNy4zMTIsMTYuODEyIDQxLjQzNywxOC42ODcgNDQuMzc1LDIxLjY4NyBMNjQuNjg4LDIxLjY4NyBMNjQuNjg4LDEzLjM3NCBMNjQuNjg4LDEzLjM3NSBaIE01OC45MzgsOC4xMjUgTDU4LjkzOCwxNS4wNjMgQzU4LjkzOCwxNi4xODggNTgsMTcuMDYzIDU2Ljg3NSwxNy4wNjMgTDUwLjA2MiwxNy4wNjMgQzQ4Ljk5OSwxNy4wNjMgNDguMDYyLDE2LjE4OCA0OC4wNjIsMTUuMDYzIEw0OC4wNjIsOC4xMjUgQzQ4LjA2Miw3IDQ5LDYuMDYyIDUwLjA2Miw2LjA2MiBMNTYuODc1LDYuMDYyIEM1OCw2LjA2MiA1OC45MzgsNyA1OC45MzgsOC4xMjUgTDU4LjkzOCw4LjEyNSBaIE0yMC4yNSwzMy4xMjUgQzIwLjI1LDQwIDI1Ljg3NSw0NS42MjUgMzIuODEzLDQ1LjYyNSBDMzkuNjg4LDQ1LjYyNSA0NS4zMTMsNDAgNDUuMzEzLDMzLjEyNSBDNDUuMzEzLDI5LjM3NSA0My42ODgsMjYgNDEuMDYzLDIzLjY4NyBDNDAuMTI1LDIyLjg3NCAzOS4xMjUsMjIuMTg3IDM4LDIxLjY4NyBDMzYuMzc1LDIwLjkzNyAzNC42MjUsMjAuNTYyIDMyLjgxMiwyMC41NjIgQzMwLjkzNywyMC41NjIgMjkuMTg3LDIwLjkzNyAyNy42MjQsMjEuNjg3IEMyNi40OTksMjIuMTg3IDI1LjQzNiwyMi44NzUgMjQuNDk5LDIzLjY4NyBDMjEuODc0LDI2IDIwLjI0OSwyOS4zNzUgMjAuMjQ5LDMzLjEyNSBMMjAuMjUsMzMuMTI1IFogTTIzLjU2MywzMy4xMjUgQzIzLjU2MywyOCAyNy42ODgsMjMuODEyIDMyLjgxMywyMy44MTIgQzM3LjkzOCwyMy44MTIgNDIuMTI2LDI4IDQyLjEyNiwzMy4xMjUgQzQyLjEyNiwzOC4yNSAzNy45MzgsNDIuMzc1IDMyLjgxMyw0Mi4zNzUgQzI3LjY4OCw0Mi4zNzUgMjMuNTYzLDM4LjI1IDIzLjU2MywzMy4xMjUgTDIzLjU2MywzMy4xMjUgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
      }
      .auth0-lock-social-button[data-provider^=linkedin] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjY3cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDY3IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bGlua2VkaW48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0ibGlua2VkaW4iIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMC42ODcsNy4zNzUgQzAuNjg3LDkuNSAxLjM3NSwxMS4yNSAyLjg3NSwxMi42ODggQzQuMzEzLDE0LjA2MyA2LjE4OCwxNC44MTMgOC41NjMsMTQuODEzIEw4LjYyNiwxNC44MTMgQzExLjA2NCwxNC44MTMgMTMuMDAxLDE0LjA2MyAxNC41MDEsMTIuNjg4IEMxNS45MzksMTEuMzEzIDE2LjY4OSw5LjYyNSAxNi42ODksNy41NjMgQzE2LjY4OSw1LjMxMyAxNS45MzksMy40MzggMTQuNDM5LDIuMDYzIEMxMy4wMDEsMC42ODggMTEuMDY0LDguODgxNzg0MmUtMTYgOC43NTEsOC44ODE3ODQyZS0xNiBDNi4zNzYsOC44ODE3ODQyZS0xNiA0LjQzOCwwLjY4OCAyLjkzOCwyLjA2MyBDMS40MzgsMy41MDEgMC42ODgsNS4yNTEgMC42ODgsNy4zNzYgTDAuNjg3LDcuMzc1IFogTTEuNSw2My4zNzUgTDE1Ljc1LDYzLjM3NSBMMTUuNzUsMjAuNjI1IEwxLjUsMjAuNjI1IEwxLjUsNjMuMzc1IEwxLjUsNjMuMzc1IFogTTIzLjU2Myw2My4zNzUgQzIzLjY4OCw1MC41IDIzLjc1MSw0MC41IDIzLjc1MSwzMy4zNzUgQzIzLjc1MSwyNi4yNSAyMy42ODgsMjIgMjMuNTYzLDIwLjYyNSBMMzcuODEzLDIwLjYyNSBMMzcuODEzLDI2LjY4OCBMMzcuNzUsMjYuODEzIEwzNy44MTMsMjYuODEzIEwzNy44MTMsMjYuNjg4IEM0MC44NzYsMjEuOTM4IDQ1LjE4OCwxOS41NjMgNTAuNjg4LDE5LjU2MyBDNTUuNTYzLDE5LjU2MyA1OS41MDEsMjEuMjUxIDYyLjUwMSwyNC41MDEgQzY1LjUwMSwyNy43NTEgNjcuMDAxLDMyLjU2NCA2Ny4wMDEsMzguODc2IEw2Ny4wMDEsNjMuMzc2IEw1Mi43NTEsNjMuMzc2IEw1Mi43NTEsNDAuNTAxIEM1Mi43NTEsMzQuMDYzIDUwLjM3NiwzMC44NzYgNDUuNjI2LDMwLjg3NiBDNDMuNzUxLDMwLjg3NiA0Mi4yNTEsMzEuMzc2IDQxLjA2MywzMi4zNzYgQzM5LjgxMywzMy4zNzYgMzguOTM4LDM0LjU2NCAzOC4zMTMsMzYuMDY0IEMzOCwzNi44NzcgMzcuODEzLDM4LjAwMiAzNy44MTMsMzkuNTAyIEwzNy44MTMsNjMuMzc3IEwyMy41NjMsNjMuMzc3IEwyMy41NjMsNjMuMzc1IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
      }
      .auth0-lock-social-button[data-provider^=miicard] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjkxcHgiIGhlaWdodD0iNjFweCIgdmlld0JveD0iMCAwIDkxIDYxIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bWlpY2FyZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJtaWljYXJkIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTQxLjUsNS42ODggQzY0LjE4OCwyLjU2MyA3NywwLjg3NSA3Ny42MjUsMC44NzUgQzc5LjQzOCwwLjg3NSA4MC44NzUsMS4zMTMgODIuNDM4LDIuMzc1IEM4My44MTMsMy4zNzUgODUuMDAxLDUuMTg4IDg1LjM3Niw2LjgxMyBDODUuNjg5LDguMzc2IDkwLjMxNCw0Mi41NjMgOTAuMzE0LDQzLjUwMSBDOTAuMzE0LDQ3LjE4OSA4Ny40MzksNTAuNTY0IDgzLjgxNCw1MS4xMjYgQzgwLjgxNCw1MS42MjYgMTMuMTg5LDYwLjc1MSAxMi41NjQsNjAuNzUxIEM5LjE4OSw2MC43NTEgNi4zMTQsNTguNjI2IDUuMTg5LDU1LjM3NiBDNS4wMDEsNTQuOTM4IDQuMTI2LDQ4LjYyNiAyLjUwMSwzNi44MTMgQzAuMjUxLDIwLjU2MyAwLjA2MywxOC43NSAwLjA2MywxNy43NSBDMC4xMjYsMTYuNSAwLjQzOCwxNS41NjIgMC45MzgsMTQuNSBDMS45MzgsMTIuNjg3IDMuNzUxLDExLjE4NyA1LjY4OCwxMC42ODcgQzYuMDYzLDEwLjU2MiAyMi4xODgsOC4zMTIgNDEuNTAxLDUuNjg3IEw0MS41LDUuNjg4IFogTTYyLjU2Myw4LjE4OCBDNjEuMzEzLDcuODEzIDYwLjEyNSw4LjA2MyA1OS4xODgsOS4wMDEgQzU4LjMxMyw5Ljg3NiA1OC4wNjMsMTEuMDAxIDU4LjQzOCwxMi4zMTQgQzU4LjY4OCwxMy4xODkgNTkuNTYzLDE0LjA2NCA2MC4zNzYsMTQuMjUyIEM2MS42ODksMTQuNjI3IDYzLjAwMSwxNC4zMTUgNjMuODc2LDEzLjM3NyBDNjUuMzE0LDExLjY4OSA2NC42MjYsOC44NzcgNjIuNTYzLDguMTg5IEw2Mi41NjMsOC4xODggWiBNNzguNjI1LDguMTg4IEM3Ny4zMTIsNy44MTMgNzYuMTI1LDguMDYzIDc1LjI1LDkuMDAxIEM3NC4zMTIsOS44NzYgNzQuMDYyLDExLjAwMSA3NC40MzcsMTIuMzE0IEM3NC42ODcsMTMuMTg5IDc1LjU2MiwxNC4wNjQgNzYuMzc1LDE0LjI1MiBDNzcuNzUsMTQuNjI3IDc5LjA2MywxNC4zMTUgNzkuODc1LDEzLjM3NyBDODEuMzc1LDExLjY4OSA4MC42ODgsOC44NzcgNzguNjI1LDguMTg5IEw3OC42MjUsOC4xODggWiBNMjQuMzEzLDE4LjU2MyBDMjMuOTM4LDE4LjQzOCAyMy4wNjMsMTguMzEzIDIyLjI1LDE4LjMxMyBDMTguNTYyLDE4LjE4OCAxNS42ODcsMTkuNjg4IDEzLjU2MiwyMi45MzggQzEzLjM3NCwyMy4yNTEgMTMuMzc0LDIzLjE4OCAxMy4xODcsMjAuMDYzIEwxMy4xMjQsMTguODEzIEwxMC44MTEsMTguODEzIEM4LjgxMSwxOC44NzYgOC40OTgsMTguODc2IDguNTYxLDE5LjA2MyBDOC42MjQsMTkuMTI2IDguNjI0LDI1LjM3NiA4LjY4NiwzMi44NzYgTDguNzQ5LDQ2LjUwMSBMMTMuODc0LDQ2LjUwMSBMMTMuOTk5LDI4LjA2MyBMMTQuMjQ5LDI3LjQzOCBDMTQuODEyLDI2LjA2MyAxNS4zNzQsMjUuMjUgMTYuMTI0LDI0LjQzOCBDMTguMDYyLDIyLjUgMjAuNjI0LDIyLjA2MyAyMi44MTIsMjMuMTg4IEMyNC4xMjUsMjMuODEzIDI1LjEyNSwyNS4yNTEgMjUuNjg3LDI3LjA2MyBDMjUuODc1LDI3LjkzOCAyNS44NzUsMjguMTI2IDI1LjkzNywzNy4yNTEgTDI2LDQ2LjU2NCBMMzEuMDYzLDQ2LjU2NCBMMzEuMTI2LDM3LjI1MSBDMzEuMTI2LDI4LjAwMSAzMS4xMjYsMjguMDAxIDMxLjM3NiwyNy4yNTEgQzMxLjg3NiwyNS43NTEgMzMuMDY0LDI0LjI1MSAzNC4yNTEsMjMuNTAxIEMzNS40MzksMjIuNjg4IDM3LjEyNiwyMi40MzggMzguNTAxLDIyLjY4OCBDNDAuNjI2LDIzLjEyNiA0Mi4wNjQsMjQuNjI2IDQyLjgxNCwyNy4zMTMgQzQzLjA2NCwyOC4xODggNDMuMDY0LDI4LjMxMyA0My4xMjcsMzcuMzc2IEw0My4xOSw0Ni41MDEgTDQ4LjMxNSw0Ni41MDEgTDQ4LjMxNSwzNy41NjMgQzQ4LjMxNSwyOC4xODggNDguMjUyLDI3LjY4OCA0Ny43NTIsMjUuNjg4IEM0Ni44MTQsMjEuODc1IDQ0LjYyNywxOS40MzggNDEuMzE0LDE4LjUgQzQwLjI1MSwxOC4yNSAzNy41NjQsMTguMjUgMzYuNTAxLDE4LjUgQzM1LjQzOCwxOC44MTMgMzQuMjUxLDE5LjMxMyAzMy4zMTMsMTkuOTM4IEMzMi4zNzUsMjAuNjI2IDMwLjkzOCwyMi4xMjYgMzAuMzEzLDIzLjAwMSBMMjkuODc1LDIzLjY4OSBMMjkuNSwyMi44NzYgQzI4LjQzNywyMC42ODggMjYuNSwxOS4xMjYgMjQuMzEyLDE4LjU2MyBMMjQuMzEzLDE4LjU2MyBaIE02NC4xMjUsMzIuNjg4IEw2NC4xMjUsMTguODc1IEw2MS41LDE4LjgxMiBDNTkuNSwxOC44MTIgNTguOTM3LDE4LjgxMiA1OC44NzUsMTguOTM3IEM1OC44MTMsMTkuMDYyIDU4LjgxMiwyNS4yNSA1OC44MTIsMzIuODEyIEw1OC44NzUsNDYuNSBMNjQuMTI1LDQ2LjUgTDY0LjEyNSwzMi42ODcgTDY0LjEyNSwzMi42ODggWiBNODAuMTI1LDMyLjY4OCBMODAuMTI1LDE4Ljg3NSBMNzcuNTYyLDE4LjgxMiBDNzUuNDk5LDE4LjgxMiA3NC45MzcsMTguODEyIDc0Ljg3NCwxOC45MzcgTDc0Ljg3NCw0Ni41IEw4MC4xMjQsNDYuNSBMODAuMTI0LDMyLjY4NyBMODAuMTI1LDMyLjY4OCBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
      }
      .auth0-lock-social-button[data-provider^=oauth2] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNTAuMSAxNjcuOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTUwLjEgMTY3LjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIzMSwxMzUuOCAzMC45LDEzNS44IDc1LjEsMTY3LjggMTE5LjIsMTM1LjggNzUuMSwxMDMuNyAJIi8+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTMuNyw1MS45TDMuNyw1MS45Qy02LjYsODMuNiw1LjMsMTE3LjIsMzEsMTM1LjhsMCwwbDE2LjktNTEuOUwzLjcsNTEuOWw1NC41LDBMNzUuMSwwbDAsMEgyMC41TDMuNyw1MS45eg0KCQkiLz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTQ2LjUsNTEuOUwxNDYuNSw1MS45TDE0Ni41LDUxLjlMMTI5LjYsMEg3NS4xbDAsMGwxNi45LDUxLjlMMTQ2LjUsNTEuOWwtNDQuMSwzMi4xbDE2LjgsNTEuOQ0KCQlDMTQ2LjIsMTE2LjIsMTU2LjMsODIsMTQ2LjUsNTEuOXoiLz4NCjwvZz4NCjwvc3ZnPg0K");
      }
      .auth0-lock-social-button[data-provider^=paypal] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjYzcHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDYzIDY1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+cGF5cGFsPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9InBheXBhbCIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDU3LjY4OCBMMTYuNDM4LDU3LjY4OCBMMjAuNTAxLDM4Ljc1IEwzMi4xODksMzguNzUgQzM3LjkzOSwzOC43NSA0Mi44NzcsMzcuMTI1IDQ3LjEyNywzMy43NSBDNTEuMzc3LDMwLjQzNyA1NC4xMjcsMjUuODc1IDU1LjM3NywyMC4wNjIgQzU2LjAwMiwxNi43NDkgNTYuMDAyLDEzLjg3NCA1NS4zNzcsMTEuNDM3IEM1NC43NTIsOSA1My42MjcsNi45OTkgNTIuMDY0LDUuMzc0IEM1MC40MzksMy44MTEgNDguNjI2LDIuNjI0IDQ2LjYyNiwxLjgxMSBDNDQuNjI2LDEuMDYxIDQyLjU2MywwLjY4NiA0MC40MzgsMC42ODYgTDEyLjQzOCwwLjY4NiBMMCw1Ny42ODggWiBNNi4zNzUsNjQuNjg4IEw3LjEyNSw2MS41NjMgTDIwLjkzOCw2MS41NjMgTDI0LjkzOCw0Mi42ODggTDM2LjY4OCw0Mi42ODggQzQyLjM3Niw0Mi42ODggNDcuMzc2LDQxIDUxLjYyNiwzNy42ODggQzU1Ljg3NiwzNC4zNzYgNTguNjI2LDI5LjgxMyA1OS44MTQsMjQgQzYwLjc1MiwxOS44NzUgNjAuNTAyLDE2LjI1IDU5LjA2NCwxMy4xMjUgQzYyLjEyNywxNi42ODggNjMuMDAyLDIxLjM3NSA2MS44MTQsMjcuMTI1IEM2MC41NjQsMzIuOTM4IDU3LjgxNCwzNy41IDUzLjU2NCw0MC44MTMgQzQ5LjM3Niw0NC4xMjYgNDQuMzc2LDQ1LjgxMyAzOC42MjYsNDUuODEzIEwyNi44NzYsNDUuODEzIEwyMi44NzYsNjQuNjg4IEw2LjM3Niw2NC42ODggTDYuMzc1LDY0LjY4OCBaIE0yMi44NzUsMjcuODc1IEwyNi4zNzUsMTIuMjUgTDM0LjM3NSwxMi4yNSBDMzUuNzUsMTIuMjUgMzYuOTM4LDEyLjYyNSAzNy45MzgsMTMuMzc1IEMzOC45MzgsMTQuMTI1IDM5LjYyNiwxNS4xMjUgMzkuOTM4LDE2LjM3NSBDMzkuMzEzLDE2LjI1IDM4LjkzOCwxNi4xODcgMzguODc1LDE2LjE4NyBMMzAuODc1LDE2LjE4NyBMMjguMTg3LDI3Ljg3NSBMMjIuODc0LDI3Ljg3NSBMMjIuODc1LDI3Ljg3NSBaIE0zMC44NzUsMjcuODEzIEwzMi43NSwxOS4zMTMgTDQwLjA2MywxOS4zMTMgQzQwLjA2MywxOS4zNzYgNDAuMDYzLDE5LjUwMSA0MCwxOS42ODggQzM5LjkzNywxOS44NzUgMzkuOTM3LDIwLjAwMSAzOS45MzcsMjAuMDYzIEMzOS40MzcsMjIuMTg4IDM4LjM3NCwyMy45MzggMzYuNTYyLDI1LjQzOCBDMzQuODEyLDI2LjkzOCAzMi44NzQsMjcuNzUxIDMwLjg3NCwyNy44MTMgTDMwLjg3NSwyNy44MTMgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
      }
      .auth0-lock-social-button[data-provider^=planningcenter] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjYzcHgiIGhlaWdodD0iNjNweCIgdmlld0JveD0iMCAwIDYzIDYzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+cGxhbm5pbmdjZW50ZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0icGxhbm5pbmdjZW50ZXIiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNNC4zMTMsNjEuNSBMNi4zMTMsNjIuNDM4IEwzMS40MzgsNjIuNDM4IEM1OC43NTEsNjIuNDM4IDU4LjMxMyw2Mi41MDEgNjAuNjg4LDU5LjkzOCBDNjEuMzc2LDU5LjE4OCA2Mi4xMjYsNTcuODEzIDYyLjM3Niw1Ni44MTMgQzYyLjY4OSw1NS42MjUgNjIuODc2LDQ3IDYyLjg3NiwzMS41NjMgQzYyLjg3NiwxMi4yNSA2Mi43NTEsNy43NSA2Mi4xODgsNS44NzUgQzYxLjU2MywzLjYyNSA2MCwxLjgxMiA1OC4wNjMsMC43NSBDNTcuMzc1LDAuMzc1IDQ5LjUsMC4yNSAzMS41NjMsMC4yNSBDNC4xODgsMC4yNSA0Ljg3NSwwLjE4NyAyLjYyNSwyLjYyNSBDMC4xODcsNS4xODggMC4xODcsNS4xMjUgMC4xODcsMzEuNzUgTDAuMTg3LDU2LjM3NSBMMS4yNSw1OC4zNzUgQzIsNTkuODc1IDIuODEzLDYwLjY4OCA0LjMxMyw2MS41IEw0LjMxMyw2MS41IFogTTIwLDU0LjEyNSBDMTkuNzUsNTUuMTg4IDE5LjY4Nyw1NS4xODggMTMuODc1LDU1LjE4OCBDMTAuNjg3LDU1LjE4OCA3LjkzNyw1NS4wNjMgNy44MTIsNTQuODc1IEM3LjYyNCw1NC43NSA3LjQ5OSw0NC4xODcgNy40OTksMzEuNSBMNy40OTksOC40MzcgTDU1LjE4Nyw4LjQzNyBMNTUuMTg3LDU1LjE4NyBMNDMuNDM3LDU1LjE4NyBMNDIuNTYyLDUzLjQ5OSBDNDEuNDM3LDUxLjI0OSA0MC4zNzQsNTAuOTk5IDMwLjM3NCw1MS4xODYgQzIxLjQzNiw1MS4zMTEgMjAuNjI0LDUxLjU2MSAxOS45OTksNTQuMTI0IEwyMCw1NC4xMjUgWiBNMjkuMzc1LDQ1LjM3NSBDMzAuNjI1LDQ2LjI1IDMxLjY4OCw0Ni4zMTMgMzMuMDYzLDQ1LjYyNSBDMzQuNjI2LDQ0LjgxMiAzNC43NTEsNDQuMzc1IDM0Ljc1MSwzOS44NzUgQzM0Ljc1MSwzNy41NjIgMzQuOTM5LDM1LjY4NyAzNS4xMjYsMzUuNjg3IEMzNS4zNzYsMzUuNjg3IDM3LjE4OSwzNi41NjIgMzkuMjUxLDM3LjY4NyBDNDEuMjUxLDM4Ljg3NSA0My40MzksMzkuNzUgNDMuOTM5LDM5Ljc1IEM0NS42MjcsMzkuNzUgNDcuNTY0LDM3LjQzNyA0Ny4zNzcsMzUuNjg3IEM0Ny4yNTIsMzQuMjQ5IDQ2Ljg3NywzMy45OTkgNDMuMDAyLDMxLjg3NCBDMzguMTg5LDI5LjI0OSAzOC4xMjcsMjkuNjI0IDQzLjgxNSwyNi40MzYgQzQ2LjYyOCwyNC45MzYgNDcuMjUzLDI0LjMxMSA0Ny4zNzgsMjMuMzExIEM0Ny41NjYsMjEuODExIDQ1LjM3OCwxOC44NzMgNDQuMTI4LDE4Ljg3MyBDNDMuNjksMTguODczIDQxLjM3OCwxOS45MzYgMzkuMDAzLDIxLjE4NiBMMzQuNzUzLDIzLjQ5OSBMMzQuNzUzLDE5LjI0OSBDMzQuNzUzLDEzLjgxMSAzNC40NCwxMy4zMTEgMzEuMTI4LDEzLjQ5OSBMMjguNjI4LDEzLjYyNCBMMjguMzc4LDE4LjQ5OSBMMjguMTI4LDIzLjQzNyBMMjQuMzc4LDIxLjEyNCBDMTkuNTAzLDE4LjI0OSAxOC41MDMsMTguMTg2IDE2LjY5LDIwLjk5OSBDMTUuMDAyLDIzLjQ5OSAxNS4xOSwyMy45OTkgMTguNTAzLDI1Ljg3NCBDMTkuODE2LDI2LjU2MiAyMS42MjgsMjcuNjI0IDIyLjYyOCwyOC4yNDkgTDI0LjM3OCwyOS4zNzQgTDIwLjMxNSwzMS44MTIgQzE4LjA2NSwzMy4xODcgMTYuMDAyLDM0LjU2MiAxNS43NTIsMzQuODc1IEMxNS4zMTQsMzUuMzc1IDE1LjUwMiwzNiAxNi41NjUsMzcuNjI1IEMxOC4zMTUsNDAuNDM4IDE5LjYyOCw0MC41IDI0LjEyOCwzNy42ODggQzI1Ljk0MSwzNi41NjMgMjcuNjkxLDM1LjY4OCAyNy45NDEsMzUuNjg4IEMyOC4xOTEsMzUuNjg4IDI4LjM3OSwzNy41NjMgMjguMzc5LDQwLjE4OCBDMjguMzc5LDQ0LjM3NiAyOC40NDIsNDQuNzUxIDI5LjM3OSw0NS4zNzYgTDI5LjM3NSw0NS4zNzUgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
      }
      .auth0-lock-social-button[data-provider^=renren] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjYxcHgiIGhlaWdodD0iMzVweCIgdmlld0JveD0iMCAwIDYxIDM1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+cmVucmVuPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9InJlbnJlbiIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC4zNzUsMC40MzggQzIwLjY4OCw3LjEyNiAxOS41LDEzLjAwMSAyMS43NSwxOC41MDEgQzIyLjYyNSwyMC41NjQgMjMuODEzLDIyLjU2NCAyNS4zMTMsMjQuMjUxIEMyOS42ODgsMjkuMjUxIDMyLjE4OCwyOC44NzYgMzYuNDM4LDIzLjU2MyBDNDEuODEzLDE2Ljc1IDQwLjAwMSw5IDQwLjMxMywwLjU2MyBDMzcuNDM4LDIuMTI2IDM0LjkzOCwzLjA2MyAzMi45MzgsNC42ODggQzMwLjkzOCw2LjI1MSAyOS44NzUsNi40MzggMjcuODc1LDQuNjI1IEMyNiwyLjkzNyAyMy4zNzUsMi4wNjIgMjAuMzc1LDAuNDM3IEwyMC4zNzUsMC40MzggWiBNNC4xMjUsMjguMTg4IEMxMy44NzUsMjMuMzEzIDE1LjI1LDEzLjEyNSAxMy42ODgsMS4zNzUgQzEuNjI1LDMuMTg4IC0zLjgxMiwxOC4xODggNC4xMjUsMjguMTg4IEw0LjEyNSwyOC4xODggWiBNNDcuMTg4LDEuMjUgQzQ3LjE4OCw1LjkzOCA0Ni43NSwxMC41NjMgNDcuMzEzLDE1IEM0Ny45MzgsMjAuMTI1IDUwLjYyNiwyNC4zNzUgNTUuMDYzLDI3LjM3NSBDNTYuNDM4LDI4LjMxMyA1Ny4xMjYsMjguMTI1IDU4LjA2MywyNi42ODcgQzY0LjE4OCwxNi44MTIgNTguODc2LDMuODc0IDQ3LjE4OCwxLjI0OSBMNDcuMTg4LDEuMjUgWiBNNDMuNjg4LDI0LjQzOCBDNDEuNjI1LDI3LjAwMSAzOS4yNSwyOS45MzggMzYuNzUsMzMuMDYzIEM0MS41LDM1LjE4OCA0Ni4xODgsMzUuMDYzIDUwLjc1LDMzLjA2MyBDNDguMjUsMzAuMDYzIDQ1Ljg3NSwyNy4xMjUgNDMuNjg3LDI0LjQzOCBMNDMuNjg4LDI0LjQzOCBaIE0yNC4xODgsMzMuMDYzIEMyMS42MjUsMjkuODc1IDE5LjMxMywyNy4wNjMgMTcuMjUsMjQuNSBDMTUuMDYyLDI3LjEyNSAxMi43NSwzMC4wNjMgMTAuMzEyLDMzLjA2MyBDMTUsMzUuMDYzIDE5LjY4NywzNS4xMjYgMjQuMTg3LDMzLjA2MyBMMjQuMTg4LDMzLjA2MyBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
      }
      .auth0-lock-social-button[data-provider^=salesforce] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDY0IDY1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2FsZXNmb3JjZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJzYWxlc2ZvcmNlIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTAsMTUuODc1IEMwLDE2LjEyNSAwLjA2MywxNi41IDAuMTI1LDE3IEwxMC42MjUsNjEgQzEwLjg3NSw2Mi4wNjMgMTEuNDM4LDYyLjkzOCAxMi4zMTMsNjMuNjI1IEMxMy4xODgsNjQuMjUgMTQuMTg4LDY0LjYyNSAxNS4yNTEsNjQuNjI1IEMxNS44NzYsNjQuNjI1IDE2LjU2NCw2NC41NjIgMTcuMjUxLDY0LjM3NSBDMTguMDAxLDY0LjI1IDE4LjgxNCw2NC4wNjIgMTkuNzUxLDYzLjc1IEMyMC42ODksNjMuNSAyMS4zMTQsNjMuMzEyIDIxLjc1MSw2My4xODcgQzE4LjAwMSw2MS45MzcgMTQuOTM4LDYwLjYyNCAxMi41NjMsNTkuMzEyIEwxNy42MjYsNDcuODc0IEMxOS4zNzYsNDkuNDk5IDIxLjYyNiw1MC43NDkgMjQuMzE0LDUxLjc0OSBDMjcuMDAyLDUyLjY4NyAyOS41NjQsNTMuMTg3IDMyLjA2NCw1My4xODcgQzM0LjAwMiw1My4xODcgMzUuNjg5LDUyLjYyNCAzNy4xODksNTEuNjI0IEMzOC42ODksNTAuNjI0IDM5LjQzOSw0OS4xODYgMzkuNDM5LDQ3LjMxMSBDMzkuNDM5LDQ2LjEyMyAzOS4wNjQsNDQuOTM2IDM4LjMxNCw0My44MTEgQzM3LjU2NCw0Mi42ODYgMzYuNTY0LDQxLjY4NiAzNS4zNzYsNDAuODExIEMzNC4xMjYsMzkuOTM2IDMzLjAwMSwzOS4yNDggMzEuODc2LDM4LjY4NiBDMzAuNzUxLDM4LjA2MSAyOS42MjYsMzcuNTYxIDI4LjQzOCwzNy4xMjMgQzE3LjYyNSwzMi45MzUgMTIuMjUsMjYuODczIDEyLjI1LDE4Ljk5OCBDMTIuMjUsMTQuODczIDEzLjU2MywxMS4zMSAxNi4yNSw4LjI0OCBMMy42MjUsMTEuMjQ4IEMyLjU2MiwxMS40OTggMS42ODcsMTIuMDYxIDEsMTIuOTM2IEMwLjMxMywxMy44MTEgMCwxNC44MTEgMCwxNS44NzQgTDAsMTUuODc1IFogTTI2LjgxMywxOC44MTMgQzI2LjgxMywyMi4zMTMgMzAuNDM4LDI1LjMxMyAzNy43NTEsMjcuNzUxIEM0Mi42MjYsMjkuMzc2IDQ2LjU2NCwzMS42ODkgNDkuNTY0LDM0Ljc1MSBDNTIuNTY0LDM3LjgxMyA1NC4wNjQsNDEuNjg5IDU0LjA2NCw0Ni40MzkgQzU0LjA2NCw0OS45MzkgNTMuMDY0LDUzLjE4OSA1MS4wNjQsNTYuMTg5IEw2MC4zNzcsNTQuMDAxIEM2MS40NCw1My43NTEgNjIuMzE1LDUzLjE4OCA2My4wMDIsNTIuMzEzIEM2My42ODksNTEuNDM4IDY0LjAwMiw1MC40MzggNjQuMDAyLDQ5LjM3NSBDNjQuMDAyLDQ5LjEyNSA2My45MzksNDguNzUgNjMuODc3LDQ4LjI1IEw1My4zNzcsNC4yNSBDNTMuMTI3LDMuMTg3IDUyLjU2NCwyLjMxMiA1MS42ODksMS42MjUgQzUwLjgxNCwwLjkzOCA0OS44MTQsMC42MjUgNDguNzUxLDAuNjI1IEM0OC4xODgsMC42MjUgNDcuMjUxLDAuNzUgNDYuMDYzLDEgQzQ0LjgxMywxLjI1IDQzLjMxMywxLjYyNSA0MS41LDIuMTg4IEMzOS42MjUsMi42ODggMzguNjg3LDIuOTM4IDM4LjU2MiwyLjkzOCBDNDIuNjg3LDMuNTYzIDQ2LjYyNSw0LjkzOCA1MC41LDYuOTM4IEw0Ni41NjIsMTcuODEzIEM0NS40MzcsMTYuNjI1IDQzLjU2MiwxNS42MjUgNDAuOTM3LDE0Ljg3NSBDMzguMzc0LDE0LjEyNSAzNS45OTksMTMuNzUgMzMuOTM3LDEzLjc1IEMzMi4xODcsMTMuNzUgMzAuNTYyLDE0LjE4OCAyOS4wNjIsMTUuMDYzIEMyNy41NjIsMTUuOTM4IDI2LjgxMiwxNy4xODggMjYuODEyLDE4LjgxMyBMMjYuODEzLDE4LjgxMyBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
      }
      .auth0-lock-social-button[data-provider^=shopify] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjU1cHgiIGhlaWdodD0iNjNweCIgdmlld0JveD0iMCAwIDU1IDYzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2hvcGlmeTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJzaG9waWZ5IiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTIxLjEyNSwxLjY4OCBDMjQuMTI1LDAuMTg4IDI1LjgxMywwLjEyNSAyNy4zNzUsMS4zNzUgQzI4LDEuODc1IDI5LjE4OCwyLjQzOCAzMC4wNjMsMi41NjMgQzMxLjc1MSwyLjkzOCAzNC4yNTEsNS40MzggMzQuODEzLDcuMTg4IEMzNS4xMjYsOC4xMjYgMzUuMzc2LDguMjUxIDM2LjY4OCw4LjAwMSBDMzcuOTM4LDcuNzUxIDM4LjQzOCw3LjkzOCA0MC4xMjYsOS42MjYgQzQxLjg3NiwxMS4zNzYgNDIuNTAxLDExLjY4OSA0NC45MzksMTEuODc2IEM0Ny4xODksMTIuMTI2IDQ3LjY4OSwxMi4zMTQgNDcuODc3LDEzLjE4OSBDNDguMDAyLDEzLjgxNCA0OC44NzcsMTkuNDM5IDQ5LjgxNSwyNS44MTQgQzUwLjc1MywzMi4xODkgNTIuMTksNDEuNzUyIDUyLjk0LDQ3LjEyNyBDNTMuNzUzLDUyLjQ0IDU0LjM3OCw1Ny4xMjcgNTQuMzc4LDU3LjU2NSBDNTQuMzc4LDU4LjEyOCA1Mi4zMTUsNTguNzUzIDQ1LjAwMyw2MC4zMTUgTDM1LjU2NSw2Mi4zNzggTDE4LjMxNSw1OS4xMjggQzguNzUyLDU3LjM3OCAwLjgxNSw1NS43NTMgMC42MjcsNTUuNTY1IEMwLjM3Nyw1NS4zNzcgMC43NTIsNTEuMDAyIDEuNDQsNDUuODE1IEMyLjEyOCw0MC42OSAzLjEyOCwzMy4wMDIgMy42MjgsMjguNzUyIEM1LjEyOCwxNi43NTIgNC41NjYsMTguMDY0IDguNjkxLDE2LjgxNCBMMTIuMTI5LDE1LjY4OSBMMTMuNTA0LDEyLjAwMSBDMTUuMzE3LDYuODc2IDE3Ljk0MiwzLjMxMyAyMS4xMjksMS42ODggTDIxLjEyNSwxLjY4OCBaIE0yNC4xODgsNC40MzggTDI1LjkzOCwyLjg3NSBMMjQuNTYzLDIuODc1IEMyMi4xODgsMi44NzUgMTkuMzc1LDUuMDYzIDE3LjMxMyw4LjY4OCBDMTYuMTg4LDEwLjYyNiAxNS4wNjMsMTMuOTM4IDE1LjM3NSwxNC4yNTEgQzE1LjU2MywxNC40MzkgMTYuNSwxNC4yNTEgMTcuNjI1LDE0LjAwMSBDMTkuMzc1LDEzLjU2MyAxOS42MjUsMTMuMjUxIDIwLjEyNSwxMS40MzggQzIwLjkzOCw4LjMxMyAyMi4yNSw2LjA2MyAyNC4xODgsNC40MzggTDI0LjE4OCw0LjQzOCBaIE0yOC4zNzUsMjIuNTYzIEMyOC4xMjUsMjIuMzEzIDI2LjUsMjIgMjQuODEyLDIxLjkzOCBDMTcuMzEyLDIxLjUgMTEuOTM3LDI2LjAwMSAxMS44NzQsMzIuODEzIEMxMS44NzQsMzUuOTM4IDEyLjgxMiwzNy44NzYgMTUuNDk5LDM5Ljg3NiBDMjEuMzEyLDQ0LjUwMSAxNy42ODcsNDkuMDY0IDExLjQ5OSw0NS4wMDEgQzEwLjEyNCw0NC4xMjYgMTAuMTI0LDQ0LjE4OCA5LjI0OSw0Ny4wMDEgQzguNTYxLDQ5LjI1MSA4LjU2MSw0OS4yNTEgOS45OTksNTAuNTAxIEMxMC44MTIsNTEuMTg5IDEyLjYyNCw1Mi4wMDEgMTQuMTI0LDUyLjQzOSBDMjAuNDM3LDU0LjMxNCAyNS41NjIsNTEuMDAxIDI2LjI0OSw0NC42MjYgQzI2LjY4Nyw0MC43NTEgMjUuMTI0LDM3LjkzOCAyMC43NDksMzQuNzUxIEMxOC42MjQsMzMuMTg4IDE4LjEyNCwzMi41NjMgMTguMTI0LDMxLjM3NiBDMTguMTI0LDI5LjMxMyAxOS45MzcsMjguMzEzIDIyLjg3NCwyOC42MjYgQzI0LjEyNCwyOC43NTEgMjUuNDk5LDI5LjAwMSAyNS44NzQsMjkuMTg5IEMyNi40MzcsMjkuMzc3IDI2Ljg3NCwyOC43NTEgMjcuNzQ5LDI2LjE4OSBDMjguMzEyLDI0LjMxNCAyOC41NjIsMjIuNzUxIDI4LjM3NCwyMi41NjQgTDI4LjM3NSwyMi41NjMgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
      }
      .auth0-lock-social-button[data-provider^=soundcloud] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9Ijc0cHgiIGhlaWdodD0iMzZweCIgdmlld0JveD0iMCAwIDc0IDM2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c291bmRjbG91ZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJzb3VuZGNsb3VkIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTAsMjYuMjUgQzAsMjkuMTI1IDAuMjUsMzAuNjg4IDAuODEzLDMxIEMxLjA2MywzMC44NzUgMS4zMTMsMzAuMTg3IDEuNTAxLDI5IEMxLjY4OSwyNy43NSAxLjgxNCwyNi44NzUgMS44MTQsMjYuMjUgQzEuODE0LDI1LjY4NyAxLjY4OSwyNC44MTIgMS41MDEsMjMuNTYyIEMxLjMxMywyMi4zMTIgMS4wNjMsMjEuNjI0IDAuODEzLDIxLjQzNyBDMC41NjMsMjEuNjI1IDAuMzc1LDIyLjI1IDAuMjUsMjMuNDM3IEMwLjA2MiwyNC42MjUgMCwyNS41NjIgMCwyNi4yNSBMMCwyNi4yNSBaIE00LjEyNSwyNi4yNSBDNC4xMjUsMjcuMzEzIDQuMTg4LDI4LjgxMyA0LjQzOCwzMC44NzUgQzQuNjI2LDMyLjg3NSA0Ljc1MSwzNC4xMjUgNC44MTMsMzQuNTYzIEM0LjgxMywzNC44NzYgNC45MzgsMzUuMDYzIDUuMTg4LDM1LjA2MyBDNS4zNzYsMzUuMDYzIDUuNTAxLDM0Ljg3NSA1LjU2MywzNC41NjMgQzUuNjI2LDM0LjA2MyA1Ljc1MSwzMi44MTMgNi4wMDEsMzAuODEzIEM2LjE4OSwyOC44MTMgNi4zMTQsMjcuMzEzIDYuMzE0LDI2LjI1IEM2LjMxNCwyNiA2LjA2NCwyMy4xMjUgNS41NjQsMTcuNjI1IEM1LjUwMSwxNy4zNzUgNS4zNzYsMTcuMjUgNS4xODksMTcuMjUgQzQuOTM5LDE3LjI1IDQuODE0LDE3LjM3NSA0LjgxNCwxNy42MjUgQzQuNzUxLDE4LjEyNSA0LjYyNiwxOS40MzggNC40MzksMjEuNTYzIEM0LjE4OSwyMy42MjYgNC4xMjYsMjUuMTg4IDQuMTI2LDI2LjI1MSBMNC4xMjUsMjYuMjUgWiBNOS4yNSwyNi4yNSBDOS4yNSwyNy4zNzUgOS4zNzUsMjkgOS42MjUsMzEuMjUgQzkuODEzLDMzLjQzOCA5LjkzOCwzNC42ODggOS45MzgsMzUgQzkuOTM4LDM1LjMxMiAxMC4wNjMsMzUuNSAxMC4zNzYsMzUuNSBDMTAuNjg5LDM1LjUgMTAuODc2LDM1LjMxMiAxMC44NzYsMzUgQzExLjM3NiwyOS44MTIgMTEuNTY0LDI2LjkzNyAxMS41NjQsMjYuMjUgQzExLjU2NCwyNS42MjUgMTEuMzc2LDIyLjg3NSAxMC44NzYsMTguMDYyIEMxMC44NzYsMTcuNjg3IDEwLjY4OCwxNy40OTkgMTAuMzc2LDE3LjQ5OSBDMTAuMDY0LDE3LjQ5OSA5LjkzOCwxNy42ODcgOS45MzgsMTguMDYyIEM5LjkzOCwxOC4zMTIgOS44MTMsMTkuNDM3IDkuNjI1LDIxLjU2MiBDOS4zNzUsMjMuNjg3IDkuMjUsMjUuMjUgOS4yNSwyNi4yNSBMOS4yNSwyNi4yNSBaIE0xNS4xODgsMjYuMjUgQzE1LjE4OCwyNi4zNzUgMTUuMzc2LDI5LjI1IDE1Ljc1MSwzNC45MzggQzE1Ljc1MSwzNS4zMTMgMTUuOTM5LDM1LjU2MyAxNi4zMTQsMzUuNTYzIEMxNi43NTIsMzUuNTYzIDE2LjkzOSwzNS4zMTMgMTYuOTM5LDM0LjkzOCBDMTYuOTM5LDM0LjYyNSAxNy4wNjQsMzMuMzc1IDE3LjI1MiwzMS4xODggQzE3LjUwMiwyOSAxNy42MjcsMjcuMzc1IDE3LjYyNywyNi4yNSBDMTcuNjI3LDI0LjEyNSAxNy41MDIsMjEgMTcuMzE0LDE2LjkzNyBDMTcuMTI2LDEyLjg3NCAxNy4wMDEsMTAuNDk5IDE2LjkzOSw5LjgxMiBDMTYuOTM5LDkuMzc0IDE2Ljc1MSw5LjE4NyAxNi4zMTQsOS4xODcgQzE1LjkzOSw5LjE4NyAxNS43NTEsOS4zNzUgMTUuNzUxLDkuODEyIEMxNS42ODgsMTEuMDYyIDE1LjYyNiwxMi44MTIgMTUuNTAxLDE1LjA2MiBDMTUuNDM4LDE3LjI1IDE1LjMxMywxOS4zMTIgMTUuMjUxLDIxLjEyNSBDMTUuMTg5LDIyLjkzOCAxNS4xODgsMjQuNjI1IDE1LjE4OCwyNi4yNSBMMTUuMTg4LDI2LjI1IFogTTIxLjE4OCwyNi4yNSBDMjEuMTg4LDI3LjM3NSAyMS4yNTEsMjguOTM4IDIxLjQzOCwzMSBDMjEuNTYzLDMzLjA2MyAyMS42MjYsMzQuMzEzIDIxLjYyNiwzNC43NSBDMjEuNjg5LDM1LjMxMyAyMi4wMDEsMzUuNTYzIDIyLjM3NiwzNS41NjMgQzIyLjgxNCwzNS41NjMgMjMuMDY0LDM1LjMxMyAyMy4xODksMzQuNzUgQzIzLjE4OSwzNC4xODcgMjMuMzE0LDMyLjg3NSAyMy40MzksMzAuODc1IEMyMy42MjcsMjguODc1IDIzLjY4OSwyNy4zMTIgMjMuNjg5LDI2LjI1IEMyMy42ODksMjMuOTM3IDIzLjYyNiwyMC42ODcgMjMuNDM5LDE2LjM3NSBDMjMuMzE0LDEyLjA2MiAyMy4xODksOS4xODcgMjMuMTg5LDcuODEyIEMyMy4wNjQsNy4zMTIgMjIuODE0LDcuMDYyIDIyLjM3Niw3LjA2MiBDMjIuMDAxLDcuMDYyIDIxLjY4OCw3LjMxMiAyMS42MjYsNy44MTIgQzIxLjU2Myw4Ljg3NSAyMS41MDEsMTEuNjI1IDIxLjM3NiwxNi4wNjIgQzIxLjI1MSwyMC40OTkgMjEuMTg4LDIzLjkzNyAyMS4xODgsMjYuMjUgTDIxLjE4OCwyNi4yNSBaIE0yNy4yNSwyNi4yNSBDMjcuMjUsMjYuMzc1IDI3LjM3NSwyOS4xMjUgMjcuNjI1LDM0LjYyNSBDMjcuNzUsMzUuMjUgMjguMDYzLDM1LjU2MyAyOC41NjMsMzUuNTYzIEMyOS4wNjMsMzUuNTYzIDI5LjM3NiwzNS4yNSAyOS40MzgsMzQuNTYzIEwyOS40MzgsMzQuNjI2IEMyOS42ODgsMjkuMTI2IDI5LjgxMywyNi4zNzYgMjkuODEzLDI2LjI1MSBDMjkuODEzLDI0LjU2MyAyOS44MTMsMjIuNzUxIDI5Ljc1LDIwLjgxMyBDMjkuNjg3LDE4LjkzOCAyOS42ODcsMTYuNzUgMjkuNjI1LDE0LjQzOCBDMjkuNTYyLDEyLjA2MyAyOS41LDEwLjI1IDI5LjQzNyw5IEMyOS4zNzQsOC4zNzUgMjkuMDYyLDggMjguNTYyLDggQzI4LjA2Miw4IDI3Ljc0OSw4LjM3NSAyNy42MjQsOSBDMjcuNjI0LDEwLjI1IDI3LjU2MSwxMi4wNjMgMjcuNDk5LDE0LjQzOCBDMjcuNDM2LDE2Ljc1MSAyNy4zNzQsMTguOTM4IDI3LjMxMSwyMC44MTMgQzI3LjMxMSwyMi43NTEgMjcuMjQ4LDI0LjU2MyAyNy4yNDgsMjYuMjUxIEwyNy4yNSwyNi4yNSBaIE0zMy4zNzUsMjYuMzEzIEMzMy4zNzUsMjYuMzc2IDMzLjUsMjkuMDYzIDMzLjc1LDM0LjQzOCBDMzMuODEzLDM1LjE4OCAzNC4xMjUsMzUuNTYzIDM0Ljc1LDM1LjU2MyBDMzUuMzc1LDM1LjU2MyAzNS42ODgsMzUuMTg4IDM1Ljc1LDM0LjQzOCBDMzYuMDYzLDI5LjA2MyAzNi4xODgsMjYuMzc1IDM2LjE4OCwyNi4zMTMgQzM2LjE4OCwyNi4xODggMzYuMDYzLDE4LjY4OCAzNS43NSwzLjg3NSBDMzUuNjg3LDMuMTI1IDM1LjM3NSwyLjY4NyAzNC43NSwyLjY4NyBDMzQuMTI1LDIuNjg3IDMzLjgxMiwzLjEyNSAzMy43NSwzLjg3NSBDMzMuNSwxOC42ODggMzMuMzc1LDI2LjE4OCAzMy4zNzUsMjYuMzEzIEwzMy4zNzUsMjYuMzEzIFogTTM4LjQzOCwxMi43NSBDMzguNDM4LDE2LjI1IDM4LjUwMSwyMC4xODggMzguNTAxLDI0LjQzOCBMMzguNTAxLDM0LjM3NiBDMzguNTAxLDM0LjY4OSAzOC42MjYsMzUuMDAxIDM4LjgxNCwzNS4yNTEgQzM5LjAwMiwzNS41MDEgMzkuMjUyLDM1LjYyNiAzOS41MDIsMzUuNjI2IEw2NC42MjcsMzUuNjI2IEM2Ny4xMjcsMzUuNjI2IDY5LjI1MiwzNC42MjYgNzEuMDY1LDMyLjY4OCBDNzIuODE1LDMwLjc1IDczLjY5LDI4LjM3NSA3My42OSwyNS42MjUgQzczLjY5LDIyLjg3NSA3Mi43NTIsMjAuNSA3MS4wMDIsMTguNTYyIEM2OS4yNTIsMTYuNjI0IDY3LjEyNywxNS42MjQgNjQuNjI3LDE1LjYyNCBDNjMuNTAyLDE1LjYyNCA2Mi4zMTQsMTUuOTM3IDYxLjEyNywxNi40OTkgQzYwLjc1MiwxMS45MzYgNTkuMDY0LDguMTI0IDU2LjAwMiw1LjA2MSBDNTIuOTM5LDEuOTM2IDQ5LjMxNCwwLjQzNiA0NS4xODksMC40MzYgQzQ0LjgxNCwwLjQzNiA0NC4yNTEsMC40MzYgNDMuNjI2LDAuNTYxIEM0Mi45MzgsMC42MjQgNDIuMTg4LDAuNzQ5IDQxLjQzOCwwLjg3NCBDNDAuNjI1LDEuMDYyIDM5Ljg3NSwxLjMxMiAzOS4zMTMsMS42MjQgQzM4Ljc1LDEuOTk5IDM4LjUsMi4zNzQgMzguNSwyLjc0OSBDMzguNSw1Ljg3NCAzOC40MzcsOS4xODcgMzguNDM3LDEyLjc0OSBMMzguNDM4LDEyLjc1IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
        background-size: 60%;
      }
      .auth0-lock-social-button[data-provider^=thecity] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjYxcHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDYxIDY1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dGhlY2l0eTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJ0aGVjaXR5IiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTMuODEzLDMuNDM4IEwzLjgxMywzLjQzOCBDNy4wNjMsMC44MTMgNy4zNzYsMC44MTMgMjkuOTM4LDAuODEzIEM1MS4xODgsMC44MTMgNTMuMDYzLDAuOTM4IDU1LjYyNiwzLjAwMSBDNTkuMjUxLDUuODE0IDYwLjMxNCw5LjUwMSA2MC4xODksMTguMTg5IEM2MC4xODksMjQuNDM5IDYwLjAwMSwyNS4yNTIgNTguMDY0LDI1LjMxNCBDNTYuODE0LDI1LjQzOSA1NC43NTEsMjUuNTY0IDUzLjUwMSwyNS42MjcgQzUwLjAwMSwyNS44NzcgNDQuNjg4LDMwLjg3NyA0MS43NTEsMzYuNjkgQzM5LjkzOCw0MC4zMTUgMzguNTAxLDQxLjgxNSAzNy41NjMsNDEuMzc4IEMzNi4yNSw0MC44MTUgMzYuNjg4LDM5LjYyOCAzOS4yNTEsMzUuMzE1IEM0My42ODksMjguMTI3IDQ0LjM3NiwyMi4wNjUgNDEuMjUxLDE2LjEyNyBDMzUuNTYzLDQuOTM5IDE5LjA2Myw1LjEyNyAxMy43NTEsMTYuMzE1IEMxMS4zMTMsMjEuNDQgMTEuNTAxLDI3LjY5IDE0LjEyNiwzMS45NCBDMTUuODE0LDM0Ljg3OCAyMy44NzYsNDEuMDY1IDI3LjU2NCw0Mi4zNzggQzI4LjEyNyw0Mi41NjYgMjguMTg5LDQzLjMxNiAyNy43NTIsNDQuMTI4IEMyNy4xMjcsNDUuMDY2IDI2LjI1Miw0NC45NDEgMjQuMDY0LDQzLjU2NSBDMTUuNjI2LDM4LjAwMiAxMC41MDEsMzYuODE1IDQuODc2LDM5LjMxNSBDMi42MjYsNDAuMTkgMC42MjYsNDAuOTQgMC4zMTMsNDAuOTQgQzAuMTI1LDQwLjk0IC0yLjUwMDc3NzM2ZS0xNCwzMy4xMjcgMC4xODgsMjMuNTAyIEwwLjU2Myw2LjAwMiBMMy44MTMsMy40MzggWiBNMjQuMDYzLDEzLjkzOCBMMjQuMDYzLDEzLjkzOCBDMjcuNTYzLDEyLjc1IDMyLjE4OCwxMy44MTMgMzQuNjg4LDE2LjU2MyBDMzguMzc2LDIwLjQzOCAzOC41MDEsMjUuMDAxIDM1LjM3NiwzMC44NzYgQzMzLjE4OCwzNC42ODkgMzIuNzUxLDM2LjE4OSAzMy43NTEsMzcuMzc2IEMzNi4zMTQsNDAuMzc2IDMzLjkzOSwzOS42MjYgMjYuNjg4LDM1LjMxMyBDMTkuNDM4LDMwLjg3NSAxNy4zNzUsMjguMTI1IDE3LjM3NSwyMy4xODggQzE3LjM3NSwyMC4xMjUgMjEuMTI1LDE1IDI0LjA2MywxMy45MzggTDI0LjA2MywxMy45MzggWiBNNTMuNTYzLDMxLjc1IEw1My41NjMsMzEuNzUgQzU5LjI1MSwyOS4zMTIgNjAuMzEzLDMwLjc1IDYwLjEyNiw0MS4xODggQzU5Ljg3Niw1Mi4zMTMgNjAuMDAxLDUxLjgxMyA1Ny44MTMsNTEuODEzIEM1Ni4zMTMsNTEuODEzIDQ2LjQzOCw0Ny41NjMgNDMuNSw0NS42MjUgQzQzLjMxMiw0NS41IDQ0LjY4OCw0Mi42ODcgNDYuNjI1LDM5LjMxMiBDNDksMzUuMTg3IDUxLjMxMywzMi42ODcgNTMuNTYzLDMxLjc0OSBMNTMuNTYzLDMxLjc1IFogTTYuOTM4LDQ0LjE4OCBMNi45MzgsNDQuMTg4IEMxMC4wMDEsNDMuMTI1IDEzLjg3Niw0My44NzUgMTguMDAxLDQ2LjUwMSBDMTkuODc2LDQ3LjU2NCAyMi4yNTEsNDguNTY0IDIzLjE4OSw0OC41NjQgQzI2LjM3Nyw0OC41NjQgMTguNzUxLDYxLjQzOSAxNC41NjQsNjMuMzE0IEM3LjUwMSw2Ni4yNTIgMC4wMDEsNjEuMjUxIDAuMDAxLDUzLjYyNiBDMC4wMDEsNTAuNTAxIDMuNjg5LDQ1LjM3NiA2LjkzOSw0NC4xODggTDYuOTM4LDQ0LjE4OCBaIE0zOS4zMTMsNTIgTDM5Ljg3Niw1MS42ODcgTDMyLjEyNiw2My4zMTIgTDU3LjU2NCw2My41NjIgTDU2LjUwMSw1OC40MzcgTDM5LjMxMyw1MiBaIE0yMC4xODgsNjIuODc1IEwxOS4zMTMsNjMuNDM4IEwyNi42MjYsNjMuNjI2IEwzNC41MDEsNTEuMTI2IEwyOC44NzYsNTAuNjg4IEwyMC4xODgsNjIuODc1IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
      }
      .auth0-lock-social-button[data-provider^=thirtysevensignals] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjY1cHgiIGhlaWdodD0iNTVweCIgdmlld0JveD0iMCAwIDY1IDU1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dGhpcnR5c2V2ZW5zaWduYWxzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9InRoaXJ0eXNldmVuc2lnbmFscyIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjUsNDIuMTI1IEMwLjQzNyw0MiAwLjM3NSw0MS45MzcgMC4zMTIsNDEuODEyIEMwLjI0OSw0MS42ODcgMC4yNDksNDEuNjI0IDAuMjQ5LDQxLjQzNyBMMC4yNDksNDAuNDk5IEMwLjI0OSwzOS44NzQgMC4zNzQsMzkuMzExIDAuNDk5LDM4LjY4NiBDMS4yNDksMzQuMDYxIDIuNDM3LDI5LjU2MSA0LjEyNCwyNS4yNDggQzUuNzQ5LDIxLjE4NSA3Ljg3NCwxNy4yNDggMTAuNDk5LDEzLjc0OCBDMTIuOTk5LDEwLjQ5OCAxNS45OTksNy40OTggMTkuMzc0LDUuMTIzIEMyMS4xMjQsMy45MzUgMjIuOTk5LDIuODczIDI0LjkzNywyLjEyMyBDMjUuOTM3LDEuNzQ4IDI2LjkzNywxLjQzNSAyOCwxLjE4NSBDMjguNSwxLjA2IDI5LjA2MywwLjkzNSAyOS41NjMsMC44NzIgQzI5LjgxMywwLjgwOSAzMC4xMjYsMC43NDcgMzAuMzc2LDAuNzQ3IEMzMC42ODksMC42ODQgMzEuMDAxLDAuNjg0IDMxLjMxNCwwLjY4NCBMMzQuMzE0LDAuNjg0IEMzNC41NjQsMC42ODQgMzQuODc3LDAuODA5IDM1LjEyNywwLjgwOSBDMzYuMTksMS4wNTkgMzcuMTksMS4zMDkgMzguMTksMS42MjIgQzQwLjA2NSwyLjE4NSA0MS44NzgsMi45MzUgNDMuNjI4LDMuODcyIEM0Ni44NzgsNS42MjIgNDkuNjkxLDguMDYgNTIuMTI4LDEwLjgxIEM1NC42OTEsMTMuODEgNTYuOTQxLDE3LjEyMyA1OC43NTMsMjAuNjIzIEM2MC45NDEsMjQuNzQ4IDYyLjUwMywyOS4xODYgNjMuNTAzLDMzLjc0OCBDNjMuNjI4LDM0LjEyMyA2My42OTEsMzQuNDk4IDYzLjgxNiwzNC45MzYgQzY0LjA2NiwzNS45MzYgNjQuMzc5LDM2Ljk5OSA2NC41NjYsMzguMDYxIEM2NC43NTQsMzkuMDYxIDY0Ljk0MSw0MC4wNjEgNjQuODE2LDQwLjk5OSBDNjQuNzUzLDQxLjg3NCA2NC4zNzgsNDIuNTYyIDYzLjg3OCw0My4yNDkgQzYzLjMxNSw0NC4wNjIgNjIuNjI4LDQ0Ljc0OSA2MS44NzgsNDUuMzc0IEM1OS4wNjUsNDcuOTM3IDU1LjgxNSw0OS44NzQgNTIuMzE1LDUxLjMxMiBDNDguMzc3LDUyLjg3NSA0NC4xOSw1My43NSAzOS45NCw1NC4xODcgQzM1LjQ0LDU0LjY4NyAzMC44MTUsNTQuNjg3IDI2LjE5LDU0LjMxMiBDMjIuMzE1LDUzLjkzNyAxOC4zNzcsNTMuMzEyIDE0LjU2NSw1Mi4wNjIgQzExLjMxNSw1MC45OTkgOC4xOSw0OS40OTkgNS41MDIsNDcuMzc0IEM0LjE4OSw0Ni4zNzQgMy4wNjQsNDUuMjQ5IDIuMDAyLDQ0LjA2MSBDMS40MzksNDMuNDM2IDEuMDAyLDQyLjc0OCAwLjUwMiw0Mi4xMjMgTDAuNSw0Mi4xMjUgWiBNNC43NSwzOS4yNSBDNC42ODcsMzkuMzc1IDQuNzUsMzkuNDM4IDQuODEzLDM5LjU2MyBDNC44MTMsMzkuNjI2IDQuODc2LDM5Ljc1MSA0LjkzOCwzOS44MTMgQzUuMzEzLDQwLjUwMSA1LjY4OCw0MS4xODggNi4xODgsNDEuODEzIEM4LjI1MSw0NC40MzggMTEuMjUxLDQ2LjE4OCAxNC4zMTMsNDcuMzc2IEMxOC4wNjMsNDguODE0IDIyLjAwMSw0OS41MDEgMjUuOTM4LDQ5Ljg3NiBDMzAuMjUxLDUwLjMxNCAzNC42ODgsNTAuMzE0IDM5LjA2Myw1MC4wMDEgQzQzLjI1MSw0OS43NTEgNDcuNTAxLDQ5LjAwMSA1MS40MzgsNDcuNDM4IEM1NC43NTEsNDYuMTg4IDU4LjA2Myw0NC4yNSA1OS45MzgsNDEuMTI1IEM2MC4wMDEsNDEgNjAuMDYzLDQwLjkzNyA2MC4xMjYsNDAuODEyIEM2MS4xMjYsMzguNjg3IDYwLjA2MywzNi40OTkgNTkuMDYzLDM0LjYyNCBDNTcuODc1LDMyLjYyNCA1Ni44NzUsMzAuNDk5IDU1LjYyNSwyOC40OTkgQzU0LjYyNSwyNi44MTEgNTMuNDM3LDI1LjMxMSA1Mi4yNSwyMy44MTEgQzUxLDIyLjMxMSA0OS42ODcsMjAuODExIDQ4LjMxMiwxOS40MzYgQzQ2Ljc0OSwxNy44MTEgNDUuMDYyLDE2LjI0OCA0My4yNDksMTQuODczIEM0Mi45OTksMTQuNjg1IDQyLjc0OSwxNC41NiA0Mi41NjEsMTQuMzEgQzQyLjM3MywxNC4xMjIgNDIuMTg2LDEzLjk5NyA0MS45MzYsMTMuODcyIEM0MS40OTgsMTMuNjg0IDQwLjk5OCwxMy42MjIgNDAuNTYxLDEzLjgwOSBDMzkuNTYxLDE0LjEyMiAzOC44MTEsMTUuMDU5IDM4LjEyMywxNS44MDkgQzM2LjQzNSwxNy41NTkgMzUuMDYsMTkuNTU5IDMzLjU2LDIxLjU1OSBDMzIuMTg1LDIzLjMwOSAzMC44MSwyNS4xMjIgMjkuMDYsMjYuNTU5IEMyOC40MzUsMjcuMDU5IDI3LjY4NSwyNy42ODQgMjYuODcyLDI3Ljc0NyBDMjYuMjQ3LDI3Ljc0NyAyNS42ODQsMjcuNjIyIDI1LjE4NCwyNy4zNzIgQzIzLjk5NiwyNi44NzIgMjMuMTIxLDI1Ljg3MiAyMi4zMDksMjQuOTk3IEMyMC44MDksMjMuMzcyIDE4LjkzNCwyMC42ODQgMTYuMzcxLDIxLjQ5NyBDMTQuNjIxLDIyLjEyMiAxMy4xODMsMjMuNjg1IDEyLjA1OCwyNS4xMjIgQzExLjM3LDI1Ljk5NyAxMC43NDUsMjYuOTM1IDEwLjE4MywyNy44NzIgQzkuNTU4LDI4LjgxIDguOTk1LDI5Ljc0NyA4LjM3LDMwLjY4NSBDNy4yNDUsMzIuNjIzIDYuMTIsMzQuNTYgNS4zNywzNi42ODUgQzUuMTgyLDM3LjI0OCA1LjA1NywzNy44MSA0LjkzMiwzOC4zNzMgQzQuODY5LDM4LjYyMyA0LjgwNywzOC45MzYgNC43NDQsMzkuMjQ4IEw0Ljc1LDM5LjI1IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
      }
      .auth0-lock-social-button[data-provider^=twitter] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9Ijc5cHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDc5IDY1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dHdpdHRlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJ0d2l0dGVyIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTAsNTcuNDM4IEM3LjYyNSw2Mi4yNTEgMTUuODc1LDY0LjYyNiAyNC43NSw2NC42MjYgQzMwLjUsNjQuNjI2IDM1LjkzOCw2My43NTEgNDAuOTM4LDYxLjkzOCBDNDUuOTM4LDYwLjEyNSA1MC4yNTEsNTcuNjg4IDUzLjgxMyw1NC42MjUgQzU3LjQzOCw1MS41IDYwLjUwMSw0OCA2My4wNjMsNDQuMDYyIEM2NS42MjUsNDAuMTI0IDY3LjU2MywzNS45OTkgNjguODEzLDMxLjYyNCBDNzAuMDYzLDI3LjMxMSA3MC43NTEsMjIuOTk5IDcwLjc1MSwxOC42ODYgTDcwLjc1MSwxNi41NjEgQzc0LjAwMSwxNC4xODYgNzYuNjg5LDExLjM3MyA3OC43NTEsOC4xODYgQzc1LjY4OCw5LjQ5OSA3Mi42MjYsMTAuMzc0IDY5LjUwMSwxMC43NDkgQzczLjAwMSw4LjY4NiA3NS4zNzYsNS42ODYgNzYuNTY0LDEuODExIEM3My40MzksMy42ODYgNzAuMDAxLDQuOTk5IDY2LjMxNCw1Ljc0OSBDNjMuMTI2LDIuMzc0IDU5LjE4OSwwLjYyNCA1NC41MDEsMC42MjQgQzUwLjA2MywwLjYyNCA0Ni4yNTEsMi4yNDkgNDMuMDYzLDUuMzc0IEMzOS45MzgsOC41NjIgMzguMzEzLDEyLjMxMiAzOC4zMTMsMTYuNzQ5IEMzOC4zMTMsMTcuODEyIDM4LjUwMSwxOS4wNjIgMzguODEzLDIwLjQ5OSBDMzIuMTg4LDIwLjEyNCAyNiwxOC40OTkgMjAuMTg4LDE1LjQ5OSBDMTQuNDM4LDEyLjU2MSA5LjUsOC41NjEgNS41LDMuNTYxIEM0LDYuMTI0IDMuMjUsOC44MTEgMy4yNSwxMS42ODYgQzMuMjUsMTQuNDk5IDMuOTM4LDE3LjA2MSA1LjE4OCwxOS40MzYgQzYuNTAxLDIxLjgxMSA4LjI1MSwyMy42ODYgMTAuNTAxLDI1LjE4NiBDNy44NzYsMjUuMTIzIDUuMzc2LDI0LjQzNiAzLjEyNiwyMy4xODYgTDMuMTI2LDIzLjM3NCBDMy4xMjYsMjcuMjQ5IDQuMzc2LDMwLjY4NyA2LjgxNCwzMy42MjQgQzkuMjUyLDM2LjYyNCAxMi4zNzcsMzguNDM3IDE2LjEyNywzOS4xODcgQzE0Ljc1MiwzOS41NjIgMTMuMzE0LDM5Ljc1IDExLjgxNCwzOS43NSBDMTAuNjg5LDM5Ljc1IDkuNjg5LDM5LjY4NyA4LjgxNCwzOS41IEM5Ljg3Nyw0Mi43NSAxMS43NTIsNDUuMzc1IDE0LjUwMiw0Ny41IEMxNy4zMTUsNDkuNTYzIDIwLjQ0LDUwLjYyNSAyMy45NCw1MC42ODggQzE4LjA2NSw1NS4zMTMgMTEuMzc3LDU3LjYyNiAzLjgxNSw1Ny42MjYgQzIuNTY1LDU3LjYyNiAxLjI1Miw1Ny41NjMgMC4wMDIsNTcuNDM4IEwwLDU3LjQzOCBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
      }
      .auth0-lock-social-button[data-provider^=vkontakte] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9Ijc5cHgiIGhlaWdodD0iNDZweCIgdmlld0JveD0iMCAwIDc5IDQ2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dms8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0idmsiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMC40MzcsMy44MTMgQzAuNDM3LDQuMzc2IDAuNSw0LjkzOCAwLjU2Miw1LjUwMSBDMC42ODcsNi4xMjYgMC44NzUsNi42ODkgMS4xMjUsNy4zMTQgQzEuMzEzLDcuOTM5IDEuNTYzLDguNDM5IDEuNjg4LDguODE0IEMxLjg3Niw5LjE4OSAyLjEyNiw5Ljc1MiAyLjUwMSwxMC40MzkgQzIuODE0LDExLjE4OSAzLjA2NCwxMS42MjcgMy4xODksMTEuODc3IEM3LjEyNywxOS45NCAxMS4zNzcsMjYuODE1IDE1LjgxNCwzMi41MDIgQzE3LjY4OSwzNC45NCAxOS4zNzcsMzYuODc3IDIwLjkzOSwzOC40NCBDMjIuNTY0LDM5Ljk0IDI0LjY4OSw0MS4zNzggMjcuMzc3LDQyLjc1MyBDMzAuMTI3LDQ0LjEyOCAzMy4xMjcsNDQuOTQxIDM2LjQ0LDQ1LjMxNiBDMzguMDY1LDQ1LjUwNCAzOS41MDMsNDUuNTY2IDQwLjY5LDQ1LjU2NiBDNDMuNTAzLDQ1LjU2NiA0NS4xOSw0NS4wNjYgNDUuNzUzLDQ0LjAwMyBDNDYuMDY2LDQzLjQ0IDQ2LjI1Myw0Mi4zNzggNDYuMzc4LDQwLjk0IEM0Ni40NDEsMzkuNDQgNDYuNjI4LDM4LjE5IDQ2Ljk0MSwzNy4xMjcgQzQ3LjI1NCwzNi4wNjQgNDcuODc5LDM1LjQzOSA0OC44NzksMzUuMjUyIEM0OS40NDIsMzUuMTg5IDUwLjAwNCwzNS4zMTUgNTAuNjI5LDM1LjYyNyBDNTEuMTkyLDM2LjAwMiA1MS42OTIsMzYuMzE1IDUyLjA2NywzNi43NTIgQzUyLjQ0MiwzNy4xMjcgNTIuOTQyLDM3LjYyNyA1My41MDUsMzguMzc3IEM1NC4wNjgsMzkuMDY1IDU0LjM4LDM5LjUwMiA1NC41NjgsMzkuNjkgQzU3LjY5Myw0My4xOSA2MC42MzEsNDUuMTkgNjMuNDQzLDQ1LjY5IEw2My44ODEsNDUuNjkgQzY0LjY5NCw0NS41MDIgNjUuNjMxLDQ1LjM3NyA2Ni43NTYsNDUuMzc3IEM2Ny40NDQsNDUuMzc3IDY4LjI1Niw0NS40NCA2OS4xMzEsNDUuNTAyIEM3MC4wNjksNDUuNjI3IDcwLjk0NCw0NS42OSA3MS44ODEsNDUuNjkgQzczLjAwNiw0NS42OSA3NC4xMzEsNDUuNjI3IDc1LjI1Niw0NS40NCBDNzcuNDQ0LDQ1LjA2NSA3OC41MDYsNDQuMTkgNzguNTA2LDQyLjgxNSBDNzguNTA2LDQxLjgxNSA3Ny42MzEsNDAuMjUyIDc1Ljk0MywzOC4wMDIgQzc0LjE5MywzNS44MTQgNzEuODE4LDMzLjMxNCA2OC43NTUsMzAuNTAyIEM2OC42OTIsMzAuNDM5IDY4LjQ0MiwzMC4xODkgNjguMDA1LDI5LjgxNCBDNjcuNTY4LDI5LjQzOSA2Ny4zMTcsMjkuMTI2IDY3LjEzLDI5LjAwMSBDNjcuMDA1LDI4LjgxMyA2Ni44MTcsMjguNTYzIDY2LjUwNSwyOC4xODggQzY2LjI1NSwyNy44NzUgNjYuMDA1LDI3LjU2MyA2NS44OCwyNy4yNSBDNjUuNzU1LDI2LjkzNyA2NS42OTIsMjYuNjI1IDY1LjY5MiwyNi4zMTIgQzY1LjY5MiwyNS43NDkgNjUuNzU1LDI1LjE4NyA2Ni4wMDUsMjQuNjI0IEM2Ni4yNTUsMjMuOTk5IDY2LjUwNSwyMy40OTkgNjYuNzU1LDIzLjE4NiBDNjcuMDA1LDIyLjgxMSA2Ny4zOCwyMi4zMTEgNjcuODgsMjEuNjIzIEM2OC4zOCwyMC45MzUgNjguNjkzLDIwLjU2IDY4Ljc1NSwyMC40MzUgQzY5LjE5MywxOS45MzUgNjkuOTQzLDE4LjkzNSA3MS4xMywxNy40OTcgQzcyLjMxOCwxNS45OTcgNzMuMzE4LDE0LjgwOSA3NC4wNjgsMTMuNzQ3IEM3NC44MTgsMTIuNzQ3IDc1LjU2OCwxMS42ODQgNzYuMjU2LDEwLjQzNCBDNzcuNzU2LDcuOTM0IDc4LjUwNiw2LjA1OSA3OC41MDYsNC44NzEgQzc4LjUwNiw0LjU1OCA3OC40NDMsNC4yNDYgNzguMzE4LDMuOTk2IEM3OC4xMywzLjY4MyA3Ny44MTgsMy4zNzEgNzcuNDQzLDMuMTgzIEM3Ny4wMDUsMi45OTUgNzYuNDQzLDIuODcgNzUuODE4LDIuODA4IEM3NS4xMywyLjc0NSA3NC41MDUsMi43NDUgNzMuODgsMi43NDUgQzczLjMxNywyLjgwOCA3Mi42MywyLjgwOCA3MS44MTcsMi44NyBDNzEuMDA0LDIuOTMyIDcwLjQ0MiwyLjkzMyA3MC4wNjcsMi45MzMgQzY5LjQ0MiwyLjkzMyA2OC40NDIsMi44NyA2Ny4wNjcsMi44MDggQzY1Ljk0MiwyLjc0NSA2NC45NDIsMi42ODMgNjQuMTI5LDIuNjgzIEw2My41MDQsMi42ODMgQzYyLjU2NiwyLjY4MyA2MS43NTQsMi44MDggNjEuMTI5LDMuMTIxIEM2MC40NDEsMy45OTYgNjAuMTI5LDQuMzA5IDYwLjEyOSwzLjk5NiBDNjAuMDY2LDMuNjgzIDU5LjgxNiw0LjEyMSA1OS4zMTYsNS4yNDYgQzU4Ljg3OCw2LjM3MSA1OC42MjgsNi45MzQgNTguNjI4LDYuOTM0IEw1OC4wMDMsOC4zNzIgQzU2LjAwMywxMi42ODUgNTQuMDAzLDE2LjE4NSA1Mi4wMDMsMTguODEgQzUxLjk0LDE4Ljg3MyA1MS43NTMsMTkuMTIzIDUxLjMxNSwxOS42ODUgQzUwLjk0LDIwLjI0OCA1MC42OSwyMC42MjMgNTAuNTY1LDIwLjc0OCBMNDkuODE1LDIxLjQ5OCBDNDkuNTAyLDIxLjgxMSA0OS4xOSwyMi4wNjEgNDguODE1LDIyLjE4NiBDNDguNTAyLDIyLjMxMSA0OC4xOSwyMi40MzYgNDcuODE1LDIyLjQzNiBDNDYuNjksMjEuNzQ4IDQ2LjA2NSwyMC40MzYgNDUuODc3LDE4LjU2MSBDNDUuNzUyLDE3LjY4NiA0NS43NTIsMTYuODczIDQ1Ljc1MiwxNi4xMjMgQzQ1Ljc1MiwxNS4xMjMgNDUuODE1LDE0LjEyMyA0NS45NCwxMy4xODUgQzQ1Ljk0LDEyLjc0NyA0Ni4wMDMsMTEuNjIyIDQ2LjE5LDkuODcyIEM0Ni4zMTUsOC40OTcgNDYuMzc4LDcuMzcyIDQ2LjM3OCw2LjQ5NyBDNDYuMzE1LDYuMTg0IDQ2LjMxNSw1LjkzNCA0Ni4zMTUsNS42MjIgQzQ2LjI1Miw0LjYyMiA0Ni4wMDIsMy42ODQgNDUuNjI3LDIuOTM0IEM0NS45NCwyLjc0NiA0NS42MjcsMi40MzQgNDQuODE0LDIuMDU5IEM0NC4wMDEsMS42MjEgNDMuNTY0LDEuNDM0IDQzLjU2NCwxLjQzNCBMNDIuMTI2LDEuMTIxIEM0Mi4xMjYsMC45OTYgNDEuNTYzLDAuOTMzIDQwLjQzOCwwLjkzMyBDMzkuMzEzLDAuODcgMzguNzUsMC44NyAzOC43NSwwLjg3IEwzNS4zNzUsMC44NyBDMzIuNzUsMC44NyAzMC42ODcsMS4wNTggMjkuMTg3LDEuNDMzIEMyNy42ODcsMS44NzEgMjYuNjI0LDIuNjIxIDI1Ljk5OSwzLjgwOCBDMjYuMzc0LDQuMDU4IDI2Ljg3NCw0LjI0NiAyNy40OTksNC40OTYgQzI4LjEyNCw0Ljc0NiAyOC42ODcsNC45OTYgMjkuMDYyLDUuMjQ2IEMyOS41LDUuNTU5IDI5LjgxMiw1LjkzNCAzMC4wNjIsNi4zNzEgQzMwLjY4Nyw3LjU1OSAzMSw5Ljc0NiAzMSwxMi45MzQgQzMxLDEzLjYyMiAzMSwxNC4zNzIgMzAuOTM3LDE1LjE4NCBDMzAuODEyLDE5LjkzNCAzMC4xODcsMjIuNDM0IDI4LjkzNywyMi42MjIgQzI4LjY4NywyMi42ODUgMjguNDM3LDIyLjY4NSAyOC4xODcsMjIuNjIyIEMyNy45MzcsMjIuNjIyIDI3LjY4NywyMi40OTcgMjcuNDM3LDIyLjMwOSBDMjcuMjQ5LDIyLjEyMSAyNi45OTksMjEuOTM0IDI2LjgxMiwyMS43NDYgQzI2LjU2MiwyMS41NTggMjYuMzc0LDIxLjMwOCAyNi4xMjQsMjEuMDU4IEMyNS44NzQsMjAuNzQ1IDI1LjY4NiwyMC40OTUgMjUuNTYxLDIwLjMwOCBDMjUuMzczLDIwLjEyIDI1LjE4NiwxOS44NyAyNC45OTgsMTkuNDk1IEMyNC44MSwxOS4xODIgMjQuNjIzLDE4LjkzMiAyNC41NiwxOC44MDcgQzIyLjE4NSwxNS4zNjkgMjAuMTg1LDExLjg2OSAxOC41Niw4LjM2OSBDMTguNDM1LDguMTgxIDE4LjE4NSw3LjY4MSAxNy44NzIsNi45OTQgQzE3LjYyMiw2LjMwNiAxNy4zNzIsNS43NDQgMTcuMTg0LDUuMzY5IEMxNi45MzQsNC45OTQgMTYuNzQ2LDQuNTU2IDE2LjQzNCw0LjExOSBDMTYuMTIxLDMuNzQ0IDE1Ljg3MSwzLjQzMSAxNS41NTksMy4zMDYgQzE1LjA1OSwzLjA1NiAxNC4zNzEsMi44NjggMTMuNTU5LDIuODA2IEMxMy4xMjEsMi44MDYgMTIuNjIxLDIuODA2IDEyLjA1OSwyLjc0MyBDMTEuNDk2LDIuNzQzIDEwLjg3MSwyLjc0MyAxMC4xODQsMi44MDYgQzguODcxLDIuODY5IDguMDU5LDIuOTMxIDcuODA5LDIuOTMxIEM3LjM3MSwyLjkzMSA2LjY4NCwyLjkzMSA1Ljc0NiwyLjg2OCBDNS4xMjEsMi44MDUgNC42MjEsMi44MDUgNC4xODMsMi44MDUgTDMuNjIsMi44MDUgQzMuMTIsMi44MDUgMi42MiwyLjg2OCAxLjk5NSwzLjA1NSBDMS4zNywzLjI0MiAwLjg3LDMuNDkzIDAuNDMyLDMuODA1IEwwLjQzNywzLjgxMyBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
      }
      .auth0-lock-social-button[data-provider^=windowslive] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDY0IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+d2luZG93czwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJ3aW5kb3dzIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjA0NSwwLjA0NSBMMjguNzQ3LDAuMDQ1IEwyOC43NDcsMjguNzQ3IEwwLjA0NSwyOC43NDcgTDAuMDQ1LDAuMDQ1IEwwLjA0NSwwLjA0NSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNC40MywwLjA0NSBMNjMuMTMyLDAuMDQ1IEw2My4xMzIsMjguNzQ3IEwzNC40MywyOC43NDcgTDM0LjQzLDAuMDQ1IEwzNC40MywwLjA0NSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC43NDgsMzUuMjU0IEwyOC43NDgsNjMuOTU2IEwwLjA0Niw2My45NTYgTDAuMDQ2LDM1LjI1NCBMMjguNzQ4LDM1LjI1NCBMMjguNzQ4LDM1LjI1NCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNC40MywzNS4yNTQgTDYzLjEzMiwzNS4yNTQgTDYzLjEzMiw2My45NTYgTDM0LjQzLDYzLjk1NiBMMzQuNDMsMzUuMjU0IEwzNC40MywzNS4yNTQgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=");
      }
      .auth0-lock-social-button[data-provider^=windows] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDY0IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+d2luZG93czwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJ3aW5kb3dzIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjA0NSwwLjA0NSBMMjguNzQ3LDAuMDQ1IEwyOC43NDcsMjguNzQ3IEwwLjA0NSwyOC43NDcgTDAuMDQ1LDAuMDQ1IEwwLjA0NSwwLjA0NSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNC40MywwLjA0NSBMNjMuMTMyLDAuMDQ1IEw2My4xMzIsMjguNzQ3IEwzNC40MywyOC43NDcgTDM0LjQzLDAuMDQ1IEwzNC40MywwLjA0NSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC43NDgsMzUuMjU0IEwyOC43NDgsNjMuOTU2IEwwLjA0Niw2My45NTYgTDAuMDQ2LDM1LjI1NCBMMjguNzQ4LDM1LjI1NCBMMjguNzQ4LDM1LjI1NCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNC40MywzNS4yNTQgTDYzLjEzMiwzNS4yNTQgTDYzLjEzMiw2My45NTYgTDM0LjQzLDYzLjk1NiBMMzQuNDMsMzUuMjU0IEwzNC40MywzNS4yNTQgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
      }
      .auth0-lock-social-button[data-provider^=wordpress] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDY0IDY1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+d29yZHByZXNzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9IndvcmRwcmVzcyIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik03Ljk5MzYwNTc4ZS0xNSwzMi44MTMgQzcuOTkzNjA1NzhlLTE1LDM4LjYyNiAxLjQzOCw0NC4wMDEgNC4zMTMsNDguODc2IEM3LjEyNiw1My44MTQgMTEuMDAxLDU3LjY4OSAxNS45MzgsNjAuNTAxIEMyMC44MTMsNjMuMzc2IDI2LjE4OCw2NC44MTQgMzIuMDAxLDY0LjgxNCBDMzcuODE0LDY0LjgxNCA0My4xODksNjMuMzc2IDQ4LjA2NCw2MC41MDEgQzUzLjAwMiw1Ny42ODggNTYuODc3LDUzLjgxMyA1OS42ODksNDguODc2IEM2Mi41NjQsNDQuMDAxIDY0LjAwMiwzOC42MjYgNjQuMDAyLDMyLjgxMyBDNjQuMDAyLDI3IDYyLjU2NCwyMS42MjUgNTkuNjg5LDE2Ljc1IEM1Ni44NzYsMTEuODEyIDUzLjAwMSw3LjkzNyA0OC4wNjQsNS4xMjUgQzQzLjE4OSwyLjI1IDM3LjgxNCwwLjgxMiAzMi4wMDEsMC44MTIgQzI2LjE4OCwwLjgxMiAyMC44MTMsMi4yNSAxNS45MzgsNS4xMjUgQzExLDcuOTM4IDcuMTI1LDExLjgxMyA0LjMxMywxNi43NSBDMS40MzgsMjEuNjI1IDAsMjcgMCwzMi44MTMgTDcuOTkzNjA1NzhlLTE1LDMyLjgxMyBaIE0yLjUsMzIuODEzIEMyLjUsMjguNTYzIDMuMzc1LDI0LjU2MyA1LjA2MywyMC43NSBMMTkuMTI2LDU5LjM3NSBDMTQuMTI2LDU3IDEwLjEyNiw1My4zNzUgNy4wNjMsNDguNjI1IEM0LDQzLjgxMiAyLjUsMzguNTYyIDIuNSwzMi44MTIgTDIuNSwzMi44MTMgWiBNNy4zMTMsMTYuNjI1IEMxMC4wMDEsMTIuNSAxMy41MDEsOS4zMTIgMTcuODc2LDYuODc1IEMyMi4xODksNC41IDI2LjkzOSwzLjMxMiAzMi4wMDEsMy4zMTIgQzM5Ljc1MSwzLjMxMiA0Ni4zNzYsNS44NzUgNTEuOTM5LDExLjA2MiBDNTEuOTM5LDExLjA2MiA1MS44NzYsMTEuMDYyIDUxLjc1MSwxMC45OTkgTDUxLjU2MywxMC45OTkgQzUwLjE4OCwxMC45OTkgNDksMTEuNDk5IDQ4LjA2MywxMi41NjIgQzQ3LjA2MywxMy42MjUgNDYuNTYzLDE0LjgxMiA0Ni41NjMsMTYuMjUgQzQ2LjU2MywxNi42ODggNDYuNjI2LDE3LjEyNSA0Ni43NTEsMTcuNTYzIEM0Ni44MTQsMTguMDAxIDQ3LjAwMSwxOC41MDEgNDcuMjUxLDE5LjA2MyBDNDcuNTAxLDE5LjY4OCA0Ny42ODksMjAuMDYzIDQ3LjgxNCwyMC4zMTMgQzQ3LjkzOSwyMC41NjMgNDguMjUyLDIxLjA2MyA0OC42ODksMjEuODEzIEM0OS4xMjYsMjIuNTYzIDQ5LjM3NywyMy4wMDEgNDkuNTAyLDIzLjEyNiBDNTEuMTI3LDI1Ljg3NiA1MS45NCwyOC42MjYgNTEuOTQsMzEuMzE0IEM1MS45NCwzMi42ODkgNTEuMTksMzUuODc3IDQ5LjY5LDQwLjg3NyBMNDYuNzUyLDUwLjc1MiBMMzYuMTI3LDE5LjAwMiBMMzkuNDQsMTguNjg5IEMzOS45NCwxOC42MjYgNDAuMjUzLDE4LjM3NiA0MC40NCwxNy45MzkgQzQwLjYyOCwxNy41NjQgNDAuNTY1LDE3LjEyNiA0MC4zNzcsMTYuNzUxIEM0MC4xMjcsMTYuMzc2IDM5Ljc1MiwxNi4xODggMzkuMjUyLDE2LjI1MSBDMzYuMDY0LDE2LjUwMSAzMy40MzksMTYuNjI2IDMxLjM3NywxNi42MjYgTDIzLjYyNywxNi4yNTEgQzIzLjEyNywxNi4xODggMjIuNzUyLDE2LjM3NiAyMi41MDIsMTYuNzUxIEMyMi4yNTIsMTcuMTI2IDIyLjI1MiwxNy41NjQgMjIuMzc3LDE3LjkzOSBDMjIuNTY1LDE4LjM3NyAyMi45NCwxOC42MjcgMjMuNDQsMTguNjg5IEMyNC40NCwxOC43NTIgMjUuNTAzLDE4Ljg3NyAyNi41MDMsMTkuMDAyIEwzMS4xMjgsMzEuNjI3IEwyNC42MjgsNTAuOTQgTDEzLjg3OCwxOS4wMDIgTDE3LjI1MywxOC42ODkgQzE3LjgxNiwxOC42MjYgMTguMTI4LDE4LjM3NiAxOC4zMTYsMTcuOTM5IEMxOC41MDQsMTcuNTY0IDE4LjQ0MSwxNy4xMjYgMTguMTkxLDE2Ljc1MSBDMTguMDAzLDE2LjM3NiAxNy42MjgsMTYuMTg4IDE3LjA2NiwxNi4yNTEgQzEzLjg3OCwxNi41MDEgMTEuMjUzLDE2LjYyNiA5LjE5MSwxNi42MjYgTDcuMzE2LDE2LjYyNiBMNy4zMTMsMTYuNjI1IFogTTIzLjY4OCw2MS4xODggTDMyLjUwMSwzNS4zNzUgTDQxLjYyNiw2MC4yNSBMNDEuODE0LDYwLjYyNSBDMzguNjg5LDYxLjc1IDM1LjQzOSw2Mi4zMTMgMzIuMDAxLDYyLjMxMyBDMjkuMTI2LDYyLjMxMyAyNi4zMTMsNjEuOTM4IDIzLjY4OCw2MS4xODggTDIzLjY4OCw2MS4xODggWiBNNDYuODc1LDU4LjM3NSBMNTUuODc1LDMyLjI1IEM1Ny4zNzUsMjcuODc1IDU4LjEyNSwyNC4zNzUgNTguMTI1LDIxLjY4NyBDNTguMTI1LDIwLjU2MiA1OC4wNjIsMTkuNTYyIDU3LjkzNywxOC42ODcgQzYwLjMxMiwyMyA2MS41LDI3LjY4NyA2MS41LDMyLjgxMiBDNjEuNSwzOC4xMjUgNjAuMTg3LDQzLjA2MiA1Ny41NjIsNDcuNjI1IEM1NC44NzQsNTIuMTg4IDUxLjMxMiw1NS43NSA0Ni44NzQsNTguMzc1IEw0Ni44NzUsNTguMzc1IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
      }
      .auth0-lock-social-button[data-provider^=yahoo] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9Ijg4cHgiIGhlaWdodD0iNTJweCIgdmlld0JveD0iMCAwIDg4IDUyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+eWFob288L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0ieWFob28iIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMCw3LjY4OCBMMCw3LjE4OCBDMC4wNjMsNi45MzggMC4zMTMsNi43NSAwLjYyNSw2Ljc1IEwzMi4xMjUsNi43NSBDMzIuMTg4LDYuNzUgMzIuMzEzLDYuNzUgMzIuMzc1LDYuODc1IEMzMi41LDYuOTM4IDMyLjUsNy4wNjMgMzIuNSw3LjE4OCBMMzIuNSw4LjA2MyBDMzIuNSw4LjMxMyAzMi40MzcsOC41MDEgMzIuMzc1LDguNjI2IEMzMi4yNSw4LjgxNCAzMi4xMjUsOC45MzkgMzIuMDYyLDguOTM5IEMzMS45OTksOS4wMDIgMzEuOTM3LDkuMDAyIDMxLjg3NCw5LjAwMiBMMjcuNDk5LDEwLjM3NyBDMjcuMTI0LDEwLjU2NSAyNi42ODYsMTAuNjkgMjYuMTI0LDEwLjYyNyBMMjMuNDk5LDEwLjYyNyBMMzguMDYyLDI5LjI1MiBMNTEuMzEyLDE2Ljc1MiBMNDMuOTM3LDE2Ljc1MiBMNDIuODEyLDE2LjMxNCBMNDEuMzc0LDE0Ljg3NiBMNDEuMTg2LDE0LjYyNiBDNDEuMDYxLDE0LjQzOCA0MC45OTgsMTQuMjUxIDQwLjg3MywxNC4wMDEgQzQwLjc0OCwxMy42ODggNDAuNzQ4LDEzLjQzOCA0MC43NDgsMTMuMTg4IEw0MS4xODYsMTIuODEzIEw2OS4yNDksMTIuODEzIEM2OS4zMTIsMTIuODEzIDY5LjM3NCwxMi44MTMgNjkuNDM3LDEyLjg3NiBDNjkuNSwxMi45MzkgNjkuNTYyLDEzLjA2NCA2OS42MjUsMTMuMTg5IEw2OS42MjUsMTQuMDY0IEM2OS42MjUsMTQuNTY0IDY5LjUsMTQuOTM5IDY5LjI1LDE1LjI1MiBMNjguMTg3LDE2LjQ0IEM2Ny43NDksMTYuNzUzIDY3LjM3NCwxNi44NzggNjYuOTk5LDE2Ljg3OCBMNTguNDk5LDE2Ljg3OCBDNDcuNjg2LDI3LjA2NiA0Mi4wNjEsMzIuMzc4IDQxLjYyNCwzMi44MTYgTDQxLjQzNiwzMy4wMDQgQzQxLjI0OCwzMy4xOTIgNDEuMTg2LDMzLjMxNyA0MS4wNjEsMzMuNTA0IEM0MC45MzYsMzMuNjI5IDQwLjkzNiwzMy44MTcgNDAuOTM2LDMzLjk0MiBMNDAuOTM2LDQ2Ljg4IEM0MC45MzYsNDcuNTA1IDQxLjEyNCw0Ny44MTggNDEuNTYxLDQ3LjgxOCBMNTAuODc0LDQ3LjgxOCBDNTAuOTM3LDQ3LjgxOCA1MS4wNjIsNDcuODgxIDUxLjE4Nyw0Ny45NDMgQzUxLjI1LDQ4LjAwNiA1MS4zMTIsNDguMTMxIDUxLjMxMiw0OC4yNTYgTDUxLjMxMiw1MS45NDQgTDE4LjMxMiw1MS45NDQgTDE4LjMxMiw0OC4zODEgQzE4LjMxMiw0OC4wMDYgMTguNSw0Ny44MTggMTguOTM3LDQ3LjgxOCBDMjAuMjUsNDcuNjkzIDIzLjI1LDQ3LjYzIDI4LjA2Miw0Ny42MyBMMjguMjUsNDcuNjMgQzI4LjM3NSw0Ny41NjcgMjguNSw0Ny41MDUgMjguNTYzLDQ3LjMxNyBDMjguNjg4LDQ3LjEyOSAyOC43NTEsNDYuODc5IDI4Ljc1MSw0Ni41NjcgTDI4Ljc1MSwzNC4yNTQgQzI4Ljc1MSwzMy42OTEgMjguNTAxLDMzLjE5MSAyOC4wNjMsMzIuNjI5IEw5LjY4OCwxMC42MjkgTDIuNTYzLDEwLjYyOSBMMS4zNzUsMTAuMDA0IEwxLjE4Nyw5Ljg3OSBMMC44NzQsOS41NjYgQzAuNjg2LDkuMzc4IDAuNTYxLDkuMTkxIDAuMzc0LDguODc4IEwwLDcuNjg4IFogTTc2LjE4OCwwLjY4OCBMNzguODEzLDM3LjI1MSBMODIuNjg4LDM3LjQzOSBMODguMDAxLDEuMTg5IEw3Ni4xODgsMC42ODggWiBNNzcsNDkuNTYzIEw4NC4wNjMsNDkuODEzIEw4NC4zMTMsNDIuNzUgTDc3LjI1LDQyLjUgTDc3LDQ5LjU2MyBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
      }
      .auth0-lock-social-button[data-provider^=yammer] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjYycHgiIGhlaWdodD0iNTNweCIgdmlld0JveD0iMCAwIDYyIDUzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+eWFtbWVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9InlhbW1lciIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjUsMy41IEMwLjM3NSw0LjI1IDAuNSw0LjkzOCAwLjc1LDUuNjI1IEM1LjEyNSwxNi4zMTMgOS41NjMsMjcgMTQsMzcuNzUgQzE0LjEyNSwzOC4wNjMgMTQuMzEzLDM4LjM3NSAxNC4zNzUsMzguNzUgQzE0LjA2MiwzOS41IDEzLjYyNSw0MC4yNSAxMy4zNzUsNDEuMDYzIEMxMi43NSw0Mi42MjYgMTIsNDQuMjUxIDEwLjYyNSw0NS4zNzYgQzkuNDM3LDQ2LjM3NiA3LjgxMiw0Ni43NTEgNi4yNSw0Ni42ODkgQzUuNDM3LDQ2LjY4OSA0LjU2Miw0Ni40MzkgMy43NSw0Ni42ODkgQzIuNjg3LDQ3LjAwMiAxLjg3NSw0Ny45MzkgMS42ODcsNDkuMDAyIEMxLjQzNyw1MC41MDIgMi41LDUyLjA2NSA0LDUyLjMxNSBDNi40MzgsNTIuNjI4IDksNTIuNjI4IDExLjM3NSw1MS44NzcgQzEzLjE4OCw1MS4zMTQgMTQuODEzLDUwLjEyNyAxNiw0OC42MjcgQzE3LjYyNSw0Ni41NjQgMTguNjg4LDQ0LjA2NCAxOS42MjUsNDEuNjg5IEMyNC41LDI5LjU2NCAyOS4zMTMsMTcuNDM5IDM0LjI1LDUuMzc2IEMzNC43NSwzLjgxMyAzMy44NzUsMS45MzggMzIuMzc1LDEuNDM4IEMzMC44NzUsMC44MTMgMjksMS41NjMgMjguMzEyLDMuMDAxIEMyNC45OTksMTIuMDAxIDIxLjQ5OSwyMS4wMDEgMTguMDYyLDI5LjkzOSBDMTguMDYyLDMwLjEyNyAxNy45MzcsMzAuMjUyIDE3LjgxMiwzMC4zNzcgTDYuOTM3LDIuODE0IEM2LjM3NCwxLjU2NCA1LjA2MiwwLjc1MSAzLjc0OSwwLjgxNCBDMi4xODYsMC44MTQgMC43NDksMi4wMDIgMC40OTksMy41MDIgTDAuNSwzLjUgWiBNNTAuNTYzLDcuMjUgQzQ5LjEyNSw4IDQ3Ljg3NSw5IDQ2LjUsOS44NzUgQzQ0LjE4NywxMS41IDQxLjkzNywxMy4xMjUgMzkuNzUsMTQuOTM4IEMzOC41LDE1LjkzOCAzNy4yNSwxNi45MzggMzYuMTg3LDE4LjE4OCBDMzUuOTk5LDE4LjUwMSAzNS42ODcsMTguODEzIDM1LjY4NywxOS4yNTEgQzM1LjY4NywxOS40MzkgMzYsMTkuNTAxIDM2LjE4NywxOS41NjQgQzM3LDE5LjY4OSAzNy44NzUsMTkuNDM5IDM4LjY4NywxOS4yNTEgQzQwLjUsMTguNjg4IDQyLjE4NywxOC4wMDEgNDMuOTM3LDE3LjMxMyBDNDcuMTI1LDE1LjkzOCA1MC4yNSwxNC4zNzUgNTMuMjUsMTIuNzUgQzU0LjUsMTEuOTM3IDU0Ljg3NSwxMC4xODcgNTQuMjUsOC44NzUgQzUzLjYyNSw3LjU2MyA1MS45MzcsNi44MTIgNTAuNTYyLDcuMjUgTDUwLjU2Myw3LjI1IFogTTU2LjM3NSwyNC4yNSBDNTIuODc1LDI0LjU2MyA0OS40MzcsMjUgNDYsMjUuNjI1IEM0NC41LDI1Ljg3NSA0MywyNi4xODggNDEuNTYyLDI2LjY4OCBDNDEuMDYyLDI2Ljg3NiA0MC40OTksMjcuMDAxIDQwLjE4NywyNy41MDEgQzQwLjM3NSwyNy43NTEgNDAuNTYyLDI4LjAwMSA0MC44MTIsMjguMTI2IEM0MS41LDI4LjUwMSA0Mi4xODcsMjguNjg5IDQyLjkzNywyOC44NzYgQzQ0LjgxMiwyOS4zMTQgNDYuNzUsMjkuNTY0IDQ4LjY4NywyOS43NTEgQzUyLDMwLjA2NCA1NS4yNSwzMC4xMjYgNTguNSwzMC4xODkgQzYwLDMwLjI1MiA2MS4zNzUsMjkuMDAxIDYxLjUsMjcuNTAxIEM2MS43NSwyNi4wMDEgNjAuNjg3LDI0LjM3NiA1OS4xMjUsMjQuMDYzIEM1OC4xODcsMjQgNTcuMzEyLDI0LjE4OCA1Ni4zNzUsMjQuMjUxIEw1Ni4zNzUsMjQuMjUgWiBNMzUuOTM4LDM1LjA2MyBDMzUuNjI1LDM1LjE4OCAzNS42MjUsMzUuNjI2IDM1LjgxMywzNS44MTMgQzM2LjEyNiwzNi40MzggMzYuNjI2LDM2Ljg3NiAzNy4xMjYsMzcuMzc2IEMzOS4wMDEsMzkuMTg5IDQxLjA2NCw0MC43NTEgNDMuMTI2LDQyLjMxNCBDNDUuMzc2LDQzLjkzOSA0Ny42ODksNDUuNTY0IDUwLjA2NCw0Ny4wNjQgQzUwLjc1Miw0Ny41NjQgNTEuNjg5LDQ3LjU2NCA1Mi41MDIsNDcuMjUyIEM1My42MjcsNDYuODc3IDU0LjUwMiw0NS43NTIgNTQuNTY1LDQ0LjUwMiBDNTQuNjI4LDQzLjM3NyA1NC4wMDIsNDIuMTI3IDUyLjk0LDQxLjYyNyBDNDkuMzE1LDM5Ljc1MiA0NS42MjcsMzcuOTM5IDQxLjgxNSwzNi40MzkgQzQwLjM3NywzNS44NzYgMzguODc3LDM1LjMxNCAzNy4zMTUsMzUuMDY0IEMzNi44MTUsMzUuMDAxIDM2LjM3NywzNC45MzkgMzUuOTQsMzUuMDY0IEwzNS45MzgsMzUuMDYzIFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
      }
      .auth0-lock-social-button[data-provider^=yandex] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI4cHgiIGhlaWdodD0iNjBweCIgdmlld0JveD0iMCAwIDI4IDYwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+eWFuZGV4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9InlhbmRleCIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMDAwMDAwLCAwLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjcuNSwwLjYyNSBDMjgsMC42MjUgMjguMzEzLDAuODc1IDI4LjMxMywxLjQzOCBMMjguMzEzLDU4Ljc1MSBDMjguMzEzLDU5LjEyNiAyOC4xMjUsNTkuMzc2IDI3LjY4OCw1OS4zNzYgTDIzLDU5LjM3NiBDMjIuNjg3LDU5LjM3NiAyMi40MzcsNTkuMDYzIDIyLjQzNyw1OC44MTMgTDIyLjQzNywzNy42MjUgTDE4LjYyNCwzNy42MjUgTDguMDYxLDU4LjgxMyBDNy45MzYsNTkuMTg4IDcuNjIzLDU5LjM3NiA3LjE4Niw1OS4zNzYgTDEuNzQ4LDU5LjM3NiBDMS4xMjMsNTkuMzc2IDAuNzQ4LDU4LjgxMyAxLjEyMyw1OC4xMjYgTDEyLjgxMSwzNi41MDEgQzYuNTYxLDMzLjY4OCAzLjA2MSwyOC4wMDEgMy4wNjEsMjAuMjUxIEMzLjA2MSw3LjMxMyAxMC4yNDksMC42MjYgMTguODExLDAuNjI2IEwyNy40OTksMC42MjYgTDI3LjUsMC42MjUgWiBNMjIuNDM4LDMyLjU2MyBMMjIuNDM4LDUuNjg4IEwxOC41NjMsNS42ODggQzEzLjkzOCw1LjY4OCA5LjM3NSw5LjYyNiA5LjM3NSwxOS40MzggQzkuMzc1LDI4LjgxMyAxNC4yNSwzMi41NjMgMTkuMjUsMzIuNTYzIEwyMi40MzgsMzIuNTYzIEwyMi40MzgsMzIuNTYzIFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
        background-size: 30%;
      }
      .auth0-lock-social-button[data-provider^=weibo] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjgwcHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDgwIDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy40ICgxNTU4OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+d2VpYnU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0id2VpYnUiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjAwMDAwMCwgMC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEsNDMgQzEsNDcuMTg4IDIuNjI1LDUwLjkzOCA1LjkzOCw1NC4xODggQzkuMTg4LDU3LjQzOCAxMy4zMTMsNTkuODc2IDE4LjMxMyw2MS41NjMgQzIzLjMxMyw2My4xODggMjguNTYzLDY0LjAwMSAzNC4xMjYsNjQuMDAxIEMzOS4zMTQsNjQuMDAxIDQ0LjE4OSw2My4zMTMgNDguNzUxLDYxLjg3NiBDNTMuMzc2LDYwLjUwMSA1Ny4xODksNTguNjg4IDYwLjE4OSw1Ni41MDEgQzYzLjE4OSw1NC4zMTQgNjUuNTY0LDUxLjkzOCA2Ny4zMTQsNDkuMzEzIEM2OS4wNjQsNDYuNjg4IDY5LjkzOSw0NC4xMjUgNjkuOTM5LDQxLjYyNSBDNjkuOTM5LDM4Ljg3NSA2OS4wMDEsMzYuNTYyIDY3LjEyNiwzNC43NSBDNjUuMjUxLDMyLjkzOCA2My4wMDEsMzEuNjI1IDYwLjMxMywzMC44MTIgQzU5Ljg3NSwzMC42ODcgNTkuNTYzLDMwLjU2MiA1OS4zNzUsMzAuNDM3IEM1OS4yNSwzMC4zNzQgNTkuMDYyLDMwLjE4NyA1OC44NzUsMjkuODc0IEM1OC42ODcsMjkuNjI0IDU4Ljc1LDI5LjI0OSA1OS4wNjMsMjguODExIEM1OS43NTEsMjcuMTIzIDYwLjA2MywyNS41NjEgNjAuMDYzLDI0LjI0OCBDNjAuMDYzLDIyLjk5OCA1OS43NSwyMS44NzMgNTkuMTI1LDIwLjkzNSBDNTcuNzUsMTkuMTIyIDU1LjUsMTguMjQ3IDUyLjMxMiwxOC4yNDcgQzQ5LjE4NywxOC4yNDcgNDUuNTYyLDE5LjEyMiA0MS40MzcsMjAuODEgTDQwLjgxMiwyMS4wNiBDNDAuNDM3LDIxLjE4NSA0MC4wNjIsMjEuMTg1IDM5LjgxMiwyMC45OTcgQzM5LjQ5OSwyMC44NzIgMzkuNDM3LDIwLjQ5NyAzOS41NjIsMTkuOTM0IEM0MC4xMjUsMTguMTg0IDQwLjM3NSwxNi42MjEgNDAuMzc1LDE1LjMwOSBDNDAuMzc1LDEzLjMwOSAzOS44MTIsMTEuODA5IDM4LjY4NywxMC42ODQgQzM3LjU2Miw5LjU1OSAzNS45OTksOC45MzQgMzQuMDYyLDguOTM0IEMzMi4zMTIsOC45MzQgMzAuMjQ5LDkuNDM0IDI3Ljg3NCwxMC40MzQgQzIyLjgxMSwxMi4zNzIgMTcuNzQ5LDE1Ljg3MiAxMi43NDksMjAuODA5IEM0LjkzNiwyOC43NDcgMC45OTksMzYuMTIyIDAuOTk5LDQyLjk5NyBMMSw0MyBaIE05LDQ2LjA2MyBDOC45MzcsNDUuNjg4IDguOTM3LDQ1LjMxMyA4LjkzNyw0NC45MzggQzguOTM3LDQyLjU2MyA5Ljc1LDQwLjE4OCAxMS4zNzUsMzcuOTM4IEMxMy4yNSwzNS4zNzUgMTUuOTM4LDMzLjI1IDE5LjQzOCwzMS41IEMyMi45MzgsMjkuNzUgMjYuODEzLDI4LjYyNSAzMS4xMjYsMjguMjUgQzMyLjQzOSwyOC4xMjUgMzMuNjg5LDI4LjA2MiAzNC45MzksMjguMDYyIEMzOS45MzksMjguMDYyIDQ0LjM3NywyOS4wNjIgNDguMzc3LDMxLjE4NyBDNTMuMjUyLDMzLjc1IDU1Ljk0LDM3LjEyNSA1Ni4zNzcsNDEuNDM3IEM1Ni4zNzcsNDEuODEyIDU2LjQ0LDQyLjE4NyA1Ni40NCw0Mi41NjIgQzU2LjQ0LDQ2LjM3NSA1NC40NCw0OS45MzcgNTAuNTY1LDUzLjEyNSBDNDYuMTksNTYuNjI1IDQwLjc1Miw1OC42ODggMzQuMTksNTkuMzEzIEMzMi44NzcsNTkuNDM4IDMxLjYyNyw1OS41MDEgMzAuMzc3LDU5LjUwMSBDMjUuMzc3LDU5LjUwMSAyMC45MzksNTguNTAxIDE3LjAwMiw1Ni4zNzYgQzEyLjA2NCw1My44MTMgOS40MzksNTAuMzc2IDkuMDAyLDQ2LjA2MyBMOSw0Ni4wNjMgWiBNMTkuMjUsNTAuMDYzIEMyMC40MzgsNTIuODEzIDIyLjU2Myw1NC42MjYgMjUuNjg4LDU1LjYyNiBDMjcuMTI2LDU2LjA2NCAyOC41NjMsNTYuMzE0IDMwLjAwMSw1Ni4zMTQgQzMxLjg3Niw1Ni4zMTQgMzMuNzUxLDU1LjkzOSAzNS42MjYsNTUuMTI2IEMzOC45MzksNTMuNjg4IDQxLjI1MSw1MS41MDEgNDIuNjI2LDQ4LjQzOCBDNDMuMjUxLDQ3LjA2MyA0My41NjQsNDUuNjg4IDQzLjU2NCw0NC4zMTMgQzQzLjU2NCw0Mi44MTMgNDMuMTg5LDQxLjQzOCA0Mi41MDEsNDAuMDYzIEM0MS4wNjMsMzcuNDM4IDM4Ljc1MSwzNS42ODggMzUuNTAxLDM0LjgxMyBDMzQuMzc2LDM0LjUgMzMuMTg4LDM0LjM3NSAzMi4wNjMsMzQuMzc1IEMzMC4wNjMsMzQuMzc1IDI4LjEyNSwzNC44MTMgMjYuMTg4LDM1LjYyNSBDMjMuMTI1LDM3IDIwLjg3NSwzOS4wNjMgMTkuNTYzLDQxLjgxMyBDMTguODEzLDQzLjMxMyAxOC40MzgsNDQuODEzIDE4LjQzOCw0Ni4yNTEgQzE4LjQzOCw0Ny41NjQgMTguNjg4LDQ4LjgxNCAxOS4yNTEsNTAuMDY0IEwxOS4yNSw1MC4wNjMgWiBNMjIuODEzLDQ4LjgxMyBDMjIuNzUsNDguNTYzIDIyLjY4OCw0OC4zMTMgMjIuNjg4LDQ4IEMyMi42ODgsNDcuMjUgMjIuOTM4LDQ2LjU2MiAyMy4zNzYsNDUuODc1IEMyNC4wMDEsNDQuOTM3IDI0Ljg3Niw0NC4yNSAyNi4wMDEsNDMuODc1IEMyNi41NjQsNDMuNjg3IDI3LjEyNiw0My41NjIgMjcuNjI2LDQzLjU2MiBDMjguMTg5LDQzLjU2MiAyOC43NTEsNDMuNjg3IDI5LjMxNCw0My45MzcgQzMwLjMxNCw0NC4zMTIgMzAuOTM5LDQ1LjA2MiAzMS4xODksNDYuMDYyIEMzMS4zMTQsNDYuNDM3IDMxLjM3Nyw0Ni43NSAzMS4zNzcsNDcuMDYyIEMzMS4zNzcsNDcuNzUgMzEuMTg5LDQ4LjQzNyAzMC43NTIsNDkuMDYyIEMzMC4xMjcsNTAuMTI1IDI5LjE4OSw1MC44MTIgMjguMDAyLDUxLjE4NyBDMjcuNTAyLDUxLjM3NSAyNy4wMDIsNTEuNDM3IDI2LjUwMiw1MS40MzcgQzI1Ljg3Nyw1MS40MzcgMjUuMzE0LDUxLjMxMiAyNC43NTIsNTEuMDYyIEMyMy43NTIsNTAuNjI0IDIzLjA2NCw0OS44NzQgMjIuODE0LDQ4LjgxMiBMMjIuODEzLDQ4LjgxMyBaIE0zMS44NzUsNDMuNzUgTDMxLjg3NSw0My4zNzUgQzMxLjg3NSw0My4xMjUgMzEuOTM4LDQyLjg3NSAzMi4wNjMsNDIuNjI1IEMzMi4yNTEsNDIuMjUgMzIuNTYzLDQyIDMzLjA2Myw0MS44MTIgQzMzLjUwMSw0MS42ODcgMzMuODc2LDQxLjY4NyAzNC4yNTEsNDEuODEyIEMzNC42ODksNDEuOTM3IDM0LjkzOSw0Mi4yNSAzNS4wNjQsNDIuNjI1IEMzNS4xODksNDMgMzUuMTI3LDQzLjM3NSAzNC45MzksNDMuNzUgQzM0LjY4OSw0NC4xODggMzQuMzc2LDQ0LjQzOCAzMy44NzYsNDQuNjI1IEMzMy42ODgsNDQuNjg4IDMzLjUwMSw0NC43NSAzMy4zMTMsNDQuNzUgQzMzLjEyNSw0NC43NSAzMi44NzUsNDQuNjg3IDMyLjY4OCw0NC42MjUgQzMyLjI1LDQ0LjQzNyAzMiw0NC4xODcgMzEuODc1LDQzLjc1IEwzMS44NzUsNDMuNzUgWiBNNTIuMzc1LDQuMDYzIEM1Mi41NjMsNC44NzYgNTMsNS41MDEgNTMuNjg4LDUuOTM4IEM1NC4xODgsNi4zMTMgNTQuNzUxLDYuNDM4IDU1LjMxMyw2LjQzOCBDNTUuNTYzLDYuNDM4IDU1Ljc1MSw2LjQzOCA1Ni4wMDEsNi4zNzUgQzU3LjA2NCw2LjE4NyA1OC4wNjQsNi4wNjIgNTkuMTI2LDYuMDYyIEM2MC42MjYsNi4wNjIgNjIuMTI2LDYuMzEyIDYzLjU2NCw2Ljc1IEM2Ni4xMjcsNy41NjMgNjguMzE0LDguOTM4IDcwLjEyNywxMC45MzggQzcxLjk0LDEyLjkzOCA3My4xMjcsMTUuMjUxIDczLjY5LDE3LjkzOCBDNzMuODc4LDE5LjAwMSA3My45NCwyMC4wMDEgNzMuOTQsMjEuMDAxIEM3My45NCwyMi41NjQgNzMuNzUyLDI0LjAwMSA3My4yNTIsMjUuNTAxIEw3My4yNTIsMjUuNTY0IEM3My4xODksMjUuODE0IDczLjEyNywyNi4xODkgNzMuMTI3LDI2LjUwMiBDNzMuMTI3LDI2Ljk0IDczLjI1MiwyNy4zNzcgNzMuNDQsMjcuODc3IEM3My44MTUsMjguNTY1IDc0LjM3OCwyOS4wNjUgNzUuMTksMjkuMzE1IEM3NS41MDMsMjkuMzc4IDc1LjgxNSwyOS40NCA3Ni4xMjgsMjkuNDQgQzc2LjYyOCwyOS40NCA3Ny4wNjYsMjkuMzE1IDc3LjU2NiwyOS4xMjcgQzc4LjI1NCwyOC43NTIgNzguNzU0LDI4LjE4OSA3OS4wMDQsMjcuMzc3IEw3OS4wMDQsMjcuMzE0IEM3OS42OTIsMjUuMzE0IDgwLjA2NywyMy4yNTEgODAuMDY3LDIxLjA2NCBDODAuMDY3LDE5LjYyNiA3OS44NzksMTguMTg5IDc5LjU2NywxNi42ODkgQzc4LjgxNywxMy4wMDEgNzcuMTkyLDkuNzUxIDc0LjYyOSw2LjkzOSBDNzIuMDY2LDQuMTI3IDY5LjAwNCwyLjEyNiA2NS40NDEsMC45MzkgQzYzLjM3OCwwLjMxNCA2MS4yNTMsMC4wMDEgNTkuMDY2LDAuMDAxIEM1Ny42MjgsMC4wMDEgNTYuMTI4LDAuMTI2IDU0LjY5MSwwLjQzOSBDNTMuODc4LDAuNjg5IDUzLjI1MywxLjEyNyA1Mi44MTYsMS44MTQgQzUyLjUwMywyLjMxNCA1Mi4zMTYsMi44MTQgNTIuMzE2LDMuMzc3IEM1Mi4zMTYsMy42MjcgNTIuMzc5LDMuODE1IDUyLjM3OSw0LjA2NSBMNTIuMzc1LDQuMDYzIFogTTU0LjkzOCwxNC4wNjMgQzU1LjEyNiwxNC43NTEgNTUuNTAxLDE1LjMxMyA1Ni4xMjYsMTUuNjg4IEM1Ni41MDEsMTYuMDAxIDU3LjAwMSwxNi4xMjYgNTcuNDM5LDE2LjEyNiBDNTcuNjI3LDE2LjEyNiA1Ny44MTQsMTYuMTI2IDU4LjAwMiwxNi4wNjMgQzU4LjQ0LDE2IDU4Ljg3NywxNS45MzggNTkuMzE1LDE1LjkzOCBDNjAuNjksMTUuOTM4IDYxLjgxNSwxNi41MDEgNjIuNzUzLDE3LjYyNiBDNjMuNjI4LDE4LjU2NCA2NC4xMjgsMTkuNjI2IDY0LjEyOCwyMC44MTQgQzY0LjEyOCwyMS4zMTQgNjQuMDAzLDIxLjg3NyA2My44NzgsMjIuNDM5IEM2My43NTMsMjIuNzUyIDYzLjc1MywyMy4wMDIgNjMuNzUzLDIzLjMxNCBDNjMuNzUzLDIzLjY4OSA2My44MTYsMjQuMDY0IDY0LjAwMywyNC40MzkgQzY0LjMxNiwyNS4wNjQgNjQuODE2LDI1LjUwMiA2NS41MDMsMjUuNzUyIEM2NS43NTMsMjUuODE1IDY2LjA2NiwyNS44NzcgNjYuMzc4LDI1Ljg3NyBDNjYuNzUzLDI1Ljg3NyA2Ny4xMjgsMjUuNzUyIDY3LjUwMywyNS41NjQgQzY4LjEyOCwyNS4yNTEgNjguNTY2LDI0Ljc1MSA2OC43NTMsMjQuMDY0IEM2OS4xMjgsMjMuMDY0IDY5LjMxNiwyMi4wMDEgNjkuMzE2LDIxLjAwMSBDNjkuMzE2LDIwLjMxMyA2OS4yNTMsMTkuNjI2IDY5LjEyOCwxOC44NzYgQzY4LjY5LDE3LjA2MyA2Ny44NzgsMTUuNTAxIDY2LjY5LDE0LjA2MyBDNjQuNjI3LDExLjgxMyA2Mi4xOSwxMC42ODggNTkuMzE1LDEwLjY4OCBDNTguNTY1LDEwLjY4OCA1Ny43NTIsMTAuNzUxIDU2Ljk0LDEwLjkzOCBDNTYuMTksMTEuMTI2IDU1LjYyNywxMS41MDEgNTUuMjUyLDEyLjEyNiBDNTUuMDAyLDEyLjU2NCA1NC44NzcsMTMuMDAxIDU0Ljg3NywxMy40MzkgQzU0Ljg3NywxMy42ODkgNTQuOTQsMTMuODc3IDU0Ljk0LDE0LjA2NCBMNTQuOTM4LDE0LjA2MyBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
      }
      @charset "UTF-8";
      /* Animate.css - http://daneden.me/animate Licensed under the MIT license - http://opensource.org/licenses/MIT  Copyright (c) 2015 Daniel Eden */

      .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
      @-webkit-keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .fadeIn {
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
      }
      @-webkit-keyframes fadeInDown {
        0% {
          opacity: 0;
          -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
        }
        100% {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }
      .fadeInDown {
        -webkit-animation-name: fadeInDown;
        animation-name: fadeInDown;
      }
      @-webkit-keyframes fadeInDownBig {
        0% {
          opacity: 0;
          -webkit-transform: translate3d(0, -2000px, 0);
          transform: translate3d(0, -2000px, 0);
        }
        100% {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }
      .fadeInDownBig {
        -webkit-animation-name: fadeInDownBig;
        animation-name: fadeInDownBig;
      }
      @-webkit-keyframes fadeInUp {
        0% {
          opacity: 0;
          -webkit-transform: translate3d(0, 100%, 0);
          transform: translate3d(0, 100%, 0);
        }
        100% {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }
      .fadeInUp {
        -webkit-animation-name: fadeInUp;
        animation-name: fadeInUp;
      }
      @-webkit-keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      .fadeOut {
        -webkit-animation-name: fadeOut;
        animation-name: fadeOut;
      }
      @-webkit-keyframes fadeOutDownBig {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          -webkit-transform: translate3d(0, 2000px, 0);
          transform: translate3d(0, 2000px, 0);
        }
      }
      .fadeOutDownBig {
        -webkit-animation-name: fadeOutDownBig;
        animation-name: fadeOutDownBig;
      }
      @-webkit-keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @-webkit-keyframes fadeInDown {
        0% {
          opacity: 0;
          -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
        }
        100% {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }
      @keyframes fadeInDown {
        0% {
          opacity: 0;
          -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
        }
        100% {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }
      @-webkit-keyframes fadeInDownBig {
        0% {
          opacity: 0;
          -webkit-transform: translate3d(0, -2000px, 0);
          transform: translate3d(0, -2000px, 0);
        }
        100% {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }
      @keyframes fadeInDownBig {
        0% {
          opacity: 0;
          -webkit-transform: translate3d(0, -2000px, 0);
          transform: translate3d(0, -2000px, 0);
        }
        100% {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }
      @-webkit-keyframes fadeInUp {
        0% {
          opacity: 0;
          -webkit-transform: translate3d(0, 100%, 0);
          transform: translate3d(0, 100%, 0);
        }
        100% {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          -webkit-transform: translate3d(0, 100%, 0);
          transform: translate3d(0, 100%, 0);
        }
        100% {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }
      @-webkit-keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @-webkit-keyframes fadeOutDownBig {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          -webkit-transform: translate3d(0, 2000px, 0);
          transform: translate3d(0, 2000px, 0);
        }
      }
      @keyframes fadeOutDownBig {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          -webkit-transform: translate3d(0, 2000px, 0);
          transform: translate3d(0, 2000px, 0);
        }
      }
      .slide-enter {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
      .slide-enter.slide-enter-active {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        -webkit-transition: -webkit-transform 0.3s ease-out;
        transition: -webkit-transform 0.3s ease-out;
        transition: transform 0.3s ease-out;
        transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
      }
      .slide-leave {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
      .slide-leave.slide-leave-active {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        -webkit-transition: -webkit-transform 0.3s ease-in;
        transition: -webkit-transform 0.3s ease-in;
        transition: transform 0.3s ease-in;
        transition: transform 0.3s ease-in, -webkit-transform 0.3s ease-in;
      }
      .vslide-enter {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }
      .vslide-enter.vslide-enter-active {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        -webkit-transition: -webkit-transform 0.35s;
        transition: -webkit-transform 0.35s;
        transition: transform 0.35s;
        transition: transform 0.35s, -webkit-transform 0.35s;
      }
      .reverse-vslide-enter {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
      .reverse-vslide-enter.reverse-vslide-enter-active {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        -webkit-transition: -webkit-transform 0.35s;
        transition: -webkit-transform 0.35s;
        transition: transform 0.35s;
        transition: transform 0.35s, -webkit-transform 0.35s;
      }
      .vslide-leave {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
      .vslide-leave.vslide-leave-active {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        -webkit-transition: -webkit-transform 0.35s;
        transition: -webkit-transform 0.35s;
        transition: transform 0.35s;
        transition: transform 0.35s, -webkit-transform 0.35s;
      }
      .horizontal-fade-enter {
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
      .horizontal-fade-enter.horizontal-fade-enter-active {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.5s;
        transition: -webkit-transform 0.5s;
        transition: transform 0.5s;
        transition: transform 0.5s, -webkit-transform 0.5s;
      }
      .horizontal-fade-leave {
        opacity: 1;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
      }
      .horizontal-fade-leave.horizontal-fade-leave-active {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        -webkit-transition: -webkit-transform 0.5s, opacity 1s linear;
        -webkit-transition: opacity 1s linear, -webkit-transform 0.5s;
        transition: opacity 1s linear, -webkit-transform 0.5s;
        transition: transform 0.5s, opacity 1s linear;
        transition: transform 0.5s, opacity 1s linear, -webkit-transform 0.5s;
      }
      .reverse-horizontal-fade-enter {
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
      .reverse-horizontal-fade-enter.reverse-horizontal-fade-enter-active {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.5s;
        transition: -webkit-transform 0.5s;
        transition: transform 0.5s;
        transition: transform 0.5s, -webkit-transform 0.5s;
      }
      .reverse-horizontal-fade-leave {
        opacity: 1;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
      }
      .reverse-horizontal-fade-leave.reverse-horizontal-fade-leave-active {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        -webkit-transition: -webkit-transform 0.5s, opacity 1s linear;
        -webkit-transition: opacity 1s linear, -webkit-transform 0.5s;
        transition: opacity 1s linear, -webkit-transform 0.5s;
        transition: transform 0.5s, opacity 1s linear;
        transition: transform 0.5s, opacity 1s linear, -webkit-transform 0.5s;
      }
      .fade-enter {
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
      }
      .fade-leave {
        opacity: 1;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        opacity: 1;
      }
      .fade-leave.fade-leave-active {
        opacity: 0;
        -webkit-transition: opacity 0.5s linear;
        transition: opacity 0.5s linear;
      }
      @-webkit-keyframes stroke {
        100% {
          stroke-dashoffset: 0;
        }
      }
      @-webkit-keyframes scale {
        0%, 100% {
          -webkit-transform: none;
        }
        50% {
          -webkit-transform: scale3d(1.1, 1.1, 1);
        }
      }
      @-webkit-keyframes fill {
        100% {
          box-shadow: inset 0px 0px 0px 30px #7ac142;
        }
      }
      @-webkit-keyframes rotate {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes stroke {
        100% {
          stroke-dashoffset: 0;
        }
      }
      @keyframes stroke {
        100% {
          stroke-dashoffset: 0;
        }
      }
      @-webkit-keyframes scale {
        0%, 100% {
          -webkit-transform: none;
          transform: none;
        }
        50% {
          -webkit-transform: scale3d(1.1, 1.1, 1);
          transform: scale3d(1.1, 1.1, 1);
        }
      }
      @keyframes scale {
        0%, 100% {
          -webkit-transform: none;
          transform: none;
        }
        50% {
          -webkit-transform: scale3d(1.1, 1.1, 1);
          transform: scale3d(1.1, 1.1, 1);
        }
      }
      @-webkit-keyframes fill {
        100% {
          box-shadow: inset 0px 0px 0px 30px #7ac142;
        }
      }
      @keyframes fill {
        100% {
          box-shadow: inset 0px 0px 0px 30px #7ac142;
        }
      }
      @-webkit-keyframes rotate {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes rotate {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @media screen and (max-width: 480px) {
        html.auth0-lock-html body > * {
          display: none;
        }
        html.auth0-lock-html body .auth0-lock-container {
          background: #fff;
          display: block !important;
        }
      }
      .auth0-lock.auth0-lock,
      .auth0-lock.auth0-lock * {
        box-sizing: initial;
      }
      .auth0-lock.auth0-lock svg {
        background-color: transparent;
      }
      .auth0-lock.auth0-lock .auth0-global-message {
        color: #fff;
        text-align: center;
        padding: 10px;
        line-height: 1.8;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        display: none;
      }
      .auth0-lock.auth0-lock .auth0-global-message.auth0-global-message-error {
        background: #ff3e00;
      }
      .auth0-lock.auth0-lock .auth0-global-message.auth0-global-message-success {
        background: #7ed321;
      }
      .auth0-lock.auth0-lock .auth0-global-message.global-message-enter {
        height: 0;
        paddingTop: 0;
        paddingBottom: 0;
      }
      .auth0-lock.auth0-lock .auth0-global-message.global-message-enter.global-message-enter-active {
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        height: auto;
        paddingTop: 10px;
        paddingBottom: 10px;
      }
      .auth0-lock.auth0-lock .auth0-global-message.global-message-leave {
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        height: 0;
        paddingTop: 0;
        paddingBottom: 0;
      }
      .auth0-lock.auth0-lock .auth0-global-message span {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }
      .auth0-lock.auth0-lock {
        font-family: "Avenir Next", Avenir, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
        text-rendering: optimizeLegibility;
        pointer-events: none;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        right: 0;
        z-index: 1000000;
      }
      @media (min-width: 481px) {
        .auth0-lock.auth0-lock {
          display: table;
        }
      }
      .auth0-lock.auth0-lock a {
        text-decoration: none;
      }
      .auth0-lock.auth0-lock a:active,
      .auth0-lock.auth0-lock a:focus {
        outline: none;
      }
      .auth0-lock.auth0-lock input:focus,
      .auth0-lock.auth0-lock button:focus {
        outline: none;
      }
      .auth0-lock.auth0-lock .auth0-lock-overlay {
        background: -webkit-radial-gradient(#40404b, #111118) rgba(34, 34, 40, 0.94);
        background: radial-gradient(#40404b, #111118) rgba(34, 34, 40, 0.94);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
        opacity: 0;
        -webkit-transition: opacity 0.2s ease-in 0.4s;
        transition: opacity 0.2s ease-in 0.4s;
      }
      @media (min-width: 481px) {
        .auth0-lock.auth0-lock .auth0-lock-center {
          vertical-align: middle;
          display: table-cell;
          margin: auto;
        }
      }
      .auth0-lock.auth0-lock .auth0-lock-widget {
        width: 300px;
        opacity: 0;
        -webkit-transform: translateY(100%) scale(0.8);
        transform: translateY(100%) scale(0.8);
        -webkit-transition-timing-function: cubic-bezier(0.3, 0, 0, 1.4);
        transition-timing-function: cubic-bezier(0.3, 0, 0, 1.4);
        margin: 0 auto;
        border-radius: 5px;
      }
      @media (min-width: 481px) {
        .auth0-lock.auth0-lock .auth0-lock-widget {
          -webkit-transition: -webkit-transform 0.4s, opacity 0.3s;
          -webkit-transition: opacity 0.3s, -webkit-transform 0.4s;
          transition: opacity 0.3s, -webkit-transform 0.4s;
          transition: transform 0.4s, opacity 0.3s;
          transition: transform 0.4s, opacity 0.3s, -webkit-transform 0.4s;
        }
      }
      .auth0-lock.auth0-lock .auth0-lock-widget-container {
        position: relative;
      }
      .auth0-lock.auth0-lock .auth0-lock-cred-pane {
        height: 100%;
        border-radius: 6px;
        background: #fff;
        position: relative;
      }
      .auth0-lock.auth0-lock .auth0-lock-cred-pane.horizontal-fade-leave .auth0-lock-content,
      .auth0-lock.auth0-lock .auth0-lock-cred-pane.horizontal-fade-leave .auth0-lock-terms {
        opacity: 0.3;
        pointer-events: none;
      }
      .auth0-lock.auth0-lock .auth0-lock-cred-pane.auth0-lock-moving {
        overflow: hidden;
      }
      .auth0-lock.auth0-lock .auth0-lock-header {
        text-align: center;
        padding: 11px;
        height: 118px;
        color: #333;
        position: relative;
        background: #fff;
        border-radius: 5px 5px 0 0;
        overflow: hidden;
        box-sizing: border-box;
      }
      .auth0-lock.auth0-lock .auth0-lock-close-button,
      .auth0-lock.auth0-lock .auth0-lock-back-button {
        background: #fff;
        border-radius: 100px;
        height: 10px;
        width: 10px;
        position: absolute;
        top: 14px;
        right: 14px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        color: #333;
        z-index: 100;
        border: 6px solid #fff;
        cursor: pointer;
        line-height: 0;
      }
      .auth0-lock.auth0-lock .auth0-lock-close-button svg,
      .auth0-lock.auth0-lock .auth0-lock-back-button svg {
        box-sizing: content-box;
      }
      .auth0-lock.auth0-lock .auth0-lock-close-button polygon,
      .auth0-lock.auth0-lock .auth0-lock-back-button polygon {
        fill: #373737;
      }
      .auth0-lock.auth0-lock .auth0-lock-back-button {
        left: 14px;
      }
      .auth0-lock.auth0-lock .auth0-lock-header-avatar {
        height: 80px;
        width: 80px;
        display: block;
        border-radius: 100px;
        margin: -16px auto 0;
        position: absolute;
        left: 0;
        right: 0;
        z-index: 1000;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        -webkit-animation: fadeIn 0.75s both;
        animation: fadeIn 0.75s both;
      }
      @media (min-width: 768px) {
        .auth0-lock.auth0-lock .auth0-lock-header-avatar {
          -webkit-animation: fadeInDown 0.75s both;
          animation: fadeInDown 0.75s both;
        }
      }
      .auth0-lock.auth0-lock .auth0-lock-header-bg {
        position: absolute;
        height: 118px;
        width: 100%;
        overflow: hidden;
        top: 0;
        left: 0;
        pointer-events: none;
      }
      @media (min-width: 481px) {
        .auth0-lock.auth0-lock .auth0-lock-header-bg {
          background: rgba(241, 241, 241, 0.8);
        }
      }
      .auth0-lock.auth0-lock .auth0-lock-header-bg .auth0-lock-header-bg-blur {
        display: none;
        height: 100%;
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        -webkit-filter: blur(40px) grayscale(1);
        -ms-filter: blur(40px) grayscale(1);
        filter: blur(40px) grayscale(1);
        -webkit-backdrop-filter: blur(0);
        background-color: #fff;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 300px;
        opacity: 0;
        -webkit-transition: 0s ease 0s;
        transition: 0s ease 0s;
      }
      .auth0-lock.auth0-lock .auth0-lock-header-bg .auth0-lock-header-bg-blur.auth0-lock-no-grayscale {
        -webkit-filter: blur(30px);
        -ms-filter: blur(30px);
        filter: blur(30px);
        -webkit-backdrop-filter: blur(0);
        background-position: center;
        background-size: 800px;
      }
      @media (min-width: 481px) {
        .auth0-lock.auth0-lock .auth0-lock-header-bg.auth0-lock-blur-support .auth0-lock-header-bg-blur {
          display: block;
        }
      }
      .auth0-lock.auth0-lock .auth0-lock-header-bg .auth0-lock-header-bg-solid {
        height: 100%;
        opacity: 0.08;
        background-color: rgb(234, 83, 35);
      }
      .auth0-lock.auth0-lock .auth0-lock-header-welcome {
        font-size: 18px;
        position: relative;
      }
      .auth0-lock.auth0-lock .auth0-lock-header-logo {
        width: auto;
        height: 58px;
        display: inline-block;
        margin: 0 0 11px;
        vertical-align: middle;
      }
      .auth0-lock.auth0-lock .auth0-lock-firstname {
        font-size: 18px;
        margin-top: 64px;
      }
      .auth0-lock.auth0-lock .auth0-lock-name {
        font-size: 22px;
      }
      .auth0-lock.auth0-lock .auth0-lock-content {
        padding: 20px;
        box-sizing: border-box;
      }
      .auth0-lock.auth0-lock .auth0-lock-form {
        display: block;
        -webkit-animation: fadeIn 0.2s;
        animation: fadeIn 0.2s;
      }
      .auth0-lock.auth0-lock .auth0-lock-form h2 {
        font-size: 22px;
        font-weight: normal;
        text-align: center;
        margin: 0 0 15px;
        color: #000;
      }
      .auth0-lock.auth0-lock .auth0-lock-form p {
        font-size: 13px;
        line-height: 1.8;
        text-align: center;
        margin-top: 0;
        margin-bottom: 15px;
        color: rgba(0, 0, 0, 0.54);
      }
      .auth0-lock.auth0-lock .auth0-lock-form .auth0-lock-alternative {
        margin-top: 20px;
        margin-bottom: 0;
      }
      .auth0-lock.auth0-lock .auth0-lock-form .auth0-lock-alternative .auth0-lock-alternative-link {
        font-size: 13px;
        color: rgba(0, 0, 0, 0.87);
        cursor: pointer;
        margin-bottom: 0;
      }
      .auth0-lock.auth0-lock .auth0-lock-input-block {
        position: relative;
        margin-bottom: 15px;
      }
      @media (min-width: 481px) {
        .auth0-lock.auth0-lock .auth0-lock-input-block {
          margin-bottom: 10px;
        }
      }
      .auth0-lock.auth0-lock .auth0-lock-input-block:last-child {
        margin-bottom: 0;
      }
      .auth0-lock.auth0-lock .auth0-lock-input-wrap {
        border-radius: 3px;
        border: 1px solid #f1f1f1;
        position: relative;
        background: #f1f1f1;
        -webkit-transition: border-color 0.8s;
        transition: border-color 0.8s;
      }
      .auth0-lock.auth0-lock .auth0-lock-input-wrap.auth0-lock-input-wrap-with-icon {
        padding-left: 40px;
      }
      .auth0-lock.auth0-lock .auth0-lock-input-wrap .auth0-lock-icon-arrow {
        position: absolute;
        right: 15px;
        top: 14px;
      }
      .auth0-lock.auth0-lock .auth0-lock-input-wrap .auth0-lock-icon,
      .auth0-lock.auth0-lock .auth0-lock-input-wrap .auth0-lock-custom-icon {
        position: absolute;
        font-size: 12px;
        top: 13px;
        left: 14px;
      }
      .auth0-lock.auth0-lock .auth0-lock-input-wrap .auth0-lock-icon path,
      .auth0-lock.auth0-lock .auth0-lock-input-wrap .auth0-lock-custom-icon path {
        fill: #888;
      }
      .auth0-lock.auth0-lock .auth0-lock-input-wrap .auth0-lock-icon.auth0-lock-icon-mobile,
      .auth0-lock.auth0-lock .auth0-lock-input-wrap .auth0-lock-custom-icon.auth0-lock-icon-mobile {
        width: 9px;
        height: 14px;
        top: 14px;
        left: 16px;
      }
      .auth0-lock.auth0-lock .auth0-lock-input-wrap .auth0-lock-icon.auth0-lock-icon-box,
      .auth0-lock.auth0-lock .auth0-lock-input-wrap .auth0-lock-custom-icon.auth0-lock-icon-box {
        width: 12px;
        height: 14px;
        top: auto;
        bottom: 14px;
        left: 14px;
      }
      .auth0-lock.auth0-lock .auth0-lock-input-wrap.auth0-lock-focused {
        border-color: #a0a0a0;
      }
      .auth0-lock.auth0-lock .auth0-lock-input-wrap .auth0-lock-input {
        border: 0;
        padding: 0 14px;
        right: 0;
        height: 40px;
        font-size: 13px;
        width: 100%;
        border-radius: 0 2px 2px 0;
        box-sizing: border-box;
        position: relative;
        color: rgba(0, 0, 0, 0.87);
      }
      .auth0-lock.auth0-lock .auth0-lock-input-wrap .auth0-lock-input.animated {
        -webkit-animation-duration: 0.5s;
        animation-duration: 0.5s;
      }
      .auth0-lock.auth0-lock .auth0-lock-input-wrap .auth0-lock-input.auth0-lock-input-location {
        background-color: #f9f9f9;
        text-align: left;
      }
      .auth0-lock.auth0-lock .auth0-lock-input-wrap .auth0-lock-input.auth0-lock-input-location.auth0-lock-input-with-placeholder {
        color: rgba(0, 0, 0, 0.54);
      }
      .auth0-lock.auth0-lock .auth0-lock-error .auth0-lock-input-wrap {
        border-color: #f00;
        -webkit-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;
      }
      .auth0-lock.auth0-lock .auth-lock-social-buttons-pane,
      .auth0-lock.auth0-lock .auth0-lock-last-login-pane {
        position: relative;
      }
      .auth0-lock.auth0-lock .auth-lock-social-buttons-pane .auth0-loading-container,
      .auth0-lock.auth0-lock .auth0-lock-last-login-pane .auth0-loading-container {
        -webkit-animation: fadeIn 0.75s ease-in-out !important;
        animation: fadeIn 0.75s ease-in-out !important;
        position: absolute;
        width: 54px;
        height: 54px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      .auth0-lock.auth0-lock .auth-lock-social-buttons-pane .auth0-loading-container .auth0-loading,
      .auth0-lock.auth0-lock .auth0-lock-last-login-pane .auth0-loading-container .auth0-loading {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        top: 0;
        left: 0;
        opacity: 1;
      }
      .auth0-lock.auth0-lock .auth0-lock-social-buttons-container {
        text-align: center;
      }
      .auth0-lock.auth0-lock .auth0-lock-social-button {
        border: 0;
        padding: 0;
        display: inline-block;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: 3px;
        margin: 4px;
        position: relative;
        width: 40px;
        height: 40px;
      }
      .auth0-lock.auth0-lock .auth0-lock-social-button .auth0-lock-social-button-icon {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 0;
        left: 0;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
      }
      .auth0-lock.auth0-lock .auth0-lock-social-button:hover .auth0-lock-social-button-icon,
      .auth0-lock.auth0-lock .auth0-lock-social-button:focus .auth0-lock-social-button-icon {
        background-color: rgba(0, 0, 0, 0.3);
      }
      .auth0-lock.auth0-lock .auth0-lock-social-button .auth0-lock-social-button-text {
        display: none;
      }
      .auth0-lock.auth0-lock .auth0-lock-social-button.auth0-lock-social-big-button {
        display: block;
        margin: 10px 0 0;
        width: 100%;
      }
      .auth0-lock.auth0-lock .auth0-lock-social-button.auth0-lock-social-big-button:first-child {
        margin-top: 0;
      }
      .auth0-lock.auth0-lock .auth0-lock-social-button.auth0-lock-social-big-button[data-provider=""],
      .auth0-lock.auth0-lock .auth0-lock-social-button.auth0-lock-social-big-button[data-provider="auth0"] {
        background-color: #c0c0c0;
      }
      .auth0-lock.auth0-lock .auth0-lock-social-button.auth0-lock-social-big-button[data-provider=""] .auth0-lock-social-button-icon,
      .auth0-lock.auth0-lock .auth0-lock-social-button.auth0-lock-social-big-button[data-provider="auth0"] .auth0-lock-social-button-icon {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iNTNweCIgaGVpZ2h0PSI2NXB4IiB2aWV3Qm94PSIwIDAgNTMgNjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSI2NHB4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE1My4wMDAwMDAsIC02MDMzLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMTYxLjEyNSw2MDk4IEMxMTU2LjYzNzk3LDYwOTggMTE1Myw2MDk0LjM2MTg2IDExNTMsNjA4OS44NzU2MyBMMTE1Myw2MDY1LjQ5OTQ5IEMxMTUzLDYwNjEuMDEyMjUgMTE1Ni42Mzc5Nyw2MDU3LjM3MzEgMTE2MS4xMjUsNjA1Ny4zNzMxIEwxMTYxLjEyNSw2MDUxLjI4MjExIEMxMTYxLjEyNSw2MDQxLjE4NjMyIDExNjkuMzA5OTIsNjAzMyAxMTc5LjQwNjI1LDYwMzMgQzExODkuNTAyNTgsNjAzMyAxMTk3LjY4NzUsNjA0MS4xODYzMiAxMTk3LjY4NzUsNjA1MS4yODIxMSBMMTE5Ny42ODc1LDYwNTcuMzc0MTEgQzEyMDIuMTc0NTMsNjA1Ny4zNzQxMSAxMjA1LjgxMjUsNjA2MS4wMTIyNSAxMjA1LjgxMjUsNjA2NS40OTk0OSBMMTIwNS44MTI1LDYwODkuODc1NjMgQzEyMDUuODEyNSw2MDk0LjM2MTg2IDEyMDIuMTc0NTMsNjA5OCAxMTk3LjY4NzUsNjA5OCBMMTE2MS4xMjUsNjA5OCBaIE0xMTkzLjYyNjAyLDYwNTEuMjgyMTEgQzExOTMuNjI2MDIsNjA0My40Mjk5NCAxMTg3LjI1OTA2LDYwMzcuMDYyNjkgMTE3OS40MDcyNyw2MDM3LjA2MjY5IEMxMTcxLjU1NTQ3LDYwMzcuMDYyNjkgMTE2NS4xODg1Miw2MDQzLjQyOTk0IDExNjUuMTg4NTIsNjA1MS4yODIxMSBMMTE2NS4xODg1Miw2MDU3LjM3MzEgTDExOTMuNjI2MDIsNjA1Ny4zNzMxIEwxMTkzLjYyNjAyLDYwNTEuMjgyMTEgTDExOTMuNjI2MDIsNjA1MS4yODIxMSBaIE0xMjAxLjc1LDYwNjUuNDk5NDkgQzEyMDEuNzUsNjA2My4yNTQ4NiAxMTk5LjkzMTAyLDYwNjEuNDM1NzkgMTE5Ny42ODc1LDYwNjEuNDM1NzkgTDExNjEuMTI1LDYwNjEuNDM1NzkgQzExNTguODgxNDgsNjA2MS40MzU3OSAxMTU3LjA2MjUsNjA2My4yNTQ4NiAxMTU3LjA2MjUsNjA2NS40OTk0OSBMMTE1Ny4wNjI1LDYwODkuODc1NjMgQzExNTcuMDYyNSw2MDkyLjExNjIxIDExNTguODgxNDgsNjA5My45MzUyOCAxMTYxLjEyNSw2MDkzLjkzNTI4IEwxMTk3LjY4NzUsNjA5My45MzUyOCBDMTE5OS45MzEwMiw2MDkzLjkzNTI4IDEyMDEuNzUsNjA5Mi4xMTYyMSAxMjAxLjc1LDYwODkuODc1NjMgTDEyMDEuNzUsNjA2NS40OTk0OSBMMTIwMS43NSw2MDY1LjQ5OTQ5IFogTTExNzcuMzc1LDYwODMuNzgwNTggTDExNzcuMzc1LDYwNzEuNTkyNTEgQzExNzcuMzc1LDYwNzAuNDcxMjEgMTE3OC4yODM5OCw2MDY5LjU2MTE3IDExNzkuNDA2MjUsNjA2OS41NjExNyBDMTE4MC41Mjg1Miw2MDY5LjU2MTE3IDExODEuNDM3NSw2MDcwLjQ3MTIxIDExODEuNDM3NSw2MDcxLjU5MjUxIEwxMTgxLjQzNzUsNjA4My43ODA1OCBDMTE4MS40Mzc1LDYwODQuOTAwODcgMTE4MC41Mjg1Miw2MDg1LjgxMDkxIDExNzkuNDA2MjUsNjA4NS44MTA5MSBDMTE3OC4yODUsNjA4NS44MTA5MSAxMTc3LjM3NSw2MDg0LjkwMDg3IDExNzcuMzc1LDYwODMuNzgwNTggWiIgaWQ9IlNoYXBlIj48L3BhdGg+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=");
        background-size: 38%;
      }
      .auth0-lock.auth0-lock .auth0-lock-social-button.auth0-lock-social-big-button .auth0-lock-social-button-icon {
        background-color: rgba(0, 0, 0, 0.3);
      }
      .auth0-lock.auth0-lock .auth0-lock-social-button.auth0-lock-social-big-button .auth0-lock-social-button-text {
        box-sizing: border-box;
        display: block;
        overflow: hidden;
        width: 100%;
        padding-left: 54px;
        padding-right: 15px;
        line-height: 40px;
        text-align: left;
        text-transform: uppercase;
        text-overflow: ellipsis;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.7px;
        color: #fff;
        white-space: nowrap;
        transition: background 0.3s;
        -webkit-transition: background 0.3s;
      }
      .auth0-lock.auth0-lock .auth0-lock-social-button.auth0-lock-social-big-button:hover .auth0-lock-social-button-icon,
      .auth0-lock.auth0-lock .auth0-lock-social-button.auth0-lock-social-big-button:focus .auth0-lock-social-button-icon {
        background-color: rgba(0, 0, 0, 0.3);
      }
      .auth0-lock.auth0-lock .auth0-lock-social-button.auth0-lock-social-big-button:hover .auth0-lock-social-button-text,
      .auth0-lock.auth0-lock .auth0-lock-social-button.auth0-lock-social-big-button:focus .auth0-lock-social-button-text {
        background-color: rgba(0, 0, 0, 0.3);
      }
      .auth0-lock.auth0-lock .auth0-lock-terms {
        background: #eee;
        text-align: center;
        display: block;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.54);
        line-height: 22px;
        padding: 10px;
        position: relative;
      }
      .auth0-lock.auth0-lock .auth0-lock-terms a {
        color: rgba(0, 0, 0, 0.87);
      }
      .auth0-lock-actions {
        /*display: flex;*/
      }
      .auth0-lock.auth0-lock .auth0-lock-submit {
        border: 0;
        background-color: rgb(234, 83, 35);
        padding: 14px;
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        overflow: hidden;
        border-radius: 0 0 0px 5px;
        -webkit-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;
        color: #fff;
        letter-spacing: 1px;
        font-size: 14px;
        text-transform: uppercase;
        /*submit button animation*/
      }
      .auth0-lock.auth0-lock .auth0-lock-cancel {
        border: 0;
        background-color: #333;
        padding: 14px;
        display: inline-block;
        box-sizing: border-box;
        width: 50%;
        height: 70px;
        overflow: hidden;
        border-radius: 0 0 5px 0px;
        -webkit-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;
        color: #fff;
        letter-spacing: 1px;
        font-size: 14px;
        text-transform: uppercase;
        transition: 0.2s ease-in-out;
      }
      .auth0-lock.auth0-lock .auth0-lock-submit span {
        display: inline-block;
        -webkit-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;
      }
      .auth0-lock.auth0-lock .auth0-lock-submit span svg {
        vertical-align: middle;
      }
      .auth0-lock.auth0-lock .auth0-lock-submit span svg.icon-text {
        margin: -4px 0 0 5px;
      }
      .auth0-lock.auth0-lock .auth0-lock-submit .auth0-label-submit {
        height: 42px;
        line-height: 42px;
      }
      @media (min-width: 481px) {
        .auth0-lock.auth0-lock .auth0-lock-submit:hover:not([disabled]) span {
          -webkit-transform: scale(1.05);
          transform: scale(1.05);
        }
      }
      .auth0-lock.auth0-lock .auth0-lock-submit:focus {
        box-shadow: inset 0 0 100px 20px rgba(0, 0, 0, 0.2);
      }
      .auth0-lock.auth0-lock .auth0-lock-submit[disabled] {
        background-color: #9b9b9b !important;
      }
      .auth0-lock.auth0-lock .auth0-lock-submit[disabled] span svg circle,
      .auth0-lock.auth0-lock .auth0-lock-submit[disabled] span svg path {
        stroke: rgba(255, 255, 255, 0.6);
        -webkit-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;
      }
      .auth0-lock.auth0-lock .auth0-lock-submit[disabled] span svg path {
        fill: rgba(255, 255, 255, 0.6);
      }
      .auth0-lock.auth0-lock .auth0-lock-submit.vslide-enter {
        opacity: 0;
      }
      .auth0-lock.auth0-lock .auth0-lock-submit.vslide-enter.vslide-enter-active {
        opacity: 1;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
      }
      .auth0-lock.auth0-lock .auth0-loading-container {
        position: relative;
        display: none;
      }
      .auth0-lock.auth0-lock .auth0-loading-container .auth0-loading {
        position: absolute;
        top: 4px;
        left: 44%;
        width: 30px;
        height: 30px;
        border-width: 2px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2);
        opacity: 0.9;
        border-radius: 20px;
        -webkit-animation: rotate 1s linear infinite;
        animation: rotate 1s linear infinite;
      }
      .auth0-lock.auth0-lock.auth0-lock-mode-loading .auth0-lock-content,
      .auth0-lock.auth0-lock.auth0-lock-mode-loading .auth0-lock-terms {
        opacity: 0.3;
        pointer-events: none;
      }
      .auth0-lock.auth0-lock.auth0-lock-mode-loading .auth0-lock-submit {
        background-color: #eee !important;
        -webkit-transition: background 0.5s ease;
        transition: background 0.5s ease;
        cursor: initial;
        pointer-events: none;
      }
      .auth0-lock.auth0-lock.auth0-lock-mode-loading .auth0-lock-submit span {
        -webkit-animation: fadeOutDownBig 1s both;
        animation: fadeOutDownBig 1s both;
      }
      .auth0-lock.auth0-lock.auth0-lock-mode-loading .auth0-loading-container {
        -webkit-animation: fadeInDownBig 1s both;
        animation: fadeInDownBig 1s both;
        display: block;
      }
      .auth0-lock.auth0-lock.auth0-lock-mode-loading .auth0-lock-back-button {
        opacity: 0;
        visibility: hidden;
        -webkit-transition: 0.25s;
        transition: 0.25s;
      }
      .auth0-lock.auth0-lock.auth0-lock-auxiliary .auth0-lock-header-avatar {
        -webkit-animation: fadeOut 0.3s both;
        animation: fadeOut 0.3s both;
      }
      .auth0-lock.auth0-lock.auth0-lock-auxiliary .auth0-lock-content,
      .auth0-lock.auth0-lock.auth0-lock-auxiliary .auth0-lock-terms,
      .auth0-lock.auth0-lock.auth0-lock-auxiliary .auth0-lock-submit {
        opacity: 0.3;
        pointer-events: none;
      }
      .auth0-lock.auth0-lock.auth0-lock-auxiliary .auth0-lock-back-button {
        opacity: 0;
        visibility: hidden;
        -webkit-transition: 0.25s;
        transition: 0.25s;
      }
      .auth0-lock.auth0-lock .auth0-lock-select-country {
        background-color: #fff;
        position: absolute;
        padding: 0;
        font-size: 14px;
        color: #666;
        bottom: 0;
        top: 0;
        right: 0;
        left: 0;
        border-radius: 5px;
        overflow: hidden;
        z-index: 200;
      }
      .auth0-lock.auth0-lock .auth0-lock-select-country .auth0-lock-back-button {
        opacity: 1;
        visibility: visible;
        top: 19px;
      }
      .auth0-lock.auth0-lock .auth0-lock-select-country .auth0-lock-search {
        background-color: #e3e5e9;
        padding: 10px;
      }
      .auth0-lock.auth0-lock .auth0-lock-select-country .auth0-lock-input-wrap {
        margin: 0;
        border: none;
        margin-left: 40px;
        overflow: hidden;
      }
      .auth0-lock.auth0-lock .auth0-lock-select-country .auth0-lock-icon {
        width: 16px;
        height: 16px;
        top: 12px;
        left: 9px;
        z-index: 1;
      }
      .auth0-lock.auth0-lock .auth0-lock-select-country .auth0-lock-input-search {
        border: none;
      }
      .auth0-lock.auth0-lock .auth0-lock-select-country .auth0-lock-list-code {
        position: relative;
        height: calc(100% - 60px);
        overflow-y: scroll;
      }
      .auth0-lock.auth0-lock .auth0-lock-select-country .auth0-lock-list-code ul {
        margin: 0;
        padding: 0;
      }
      .auth0-lock.auth0-lock .auth0-lock-select-country .auth0-lock-list-code li {
        list-style: none;
        text-align: left;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        color: #000;
        font-size: 14px;
        padding: 15px 20px;
        margin: 0;
        text-overflow: ellipsis;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        box-sizing: border-box;
      }
      @media (min-width: 481px) {
        .auth0-lock.auth0-lock .auth0-lock-select-country .auth0-lock-list-code li {
          padding: 10px 20px;
        }
      }
      .auth0-lock.auth0-lock .auth0-lock-select-country .auth0-lock-list-code li.auth0-lock-list-code-highlighted {
        background-color: #2eb5ff;
        color: #fff;
      }
      .auth0-lock.auth0-lock .auth0-lock-confirmation {
        background-color: #fff;
        position: absolute;
        text-align: center;
        line-height: 2;
        font-size: 14px;
        color: #666;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 200;
        border-radius: 5px;
      }
      .auth0-lock.auth0-lock .auth0-lock-confirmation .auth0-lock-confirmation-content {
        width: 100%;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        position: absolute;
      }
      .auth0-lock.auth0-lock .auth0-lock-confirmation p {
        padding: 0 14px;
        margin-bottom: 6px;
      }
      .auth0-lock.auth0-lock .auth0-lock-confirmation a {
        display: block;
        font-weight: 500;
        color: #09c;
      }
      .auth0-lock.auth0-lock .auth0-lock-confirmation a svg {
        width: 15px;
        height: 16px;
        margin-bottom: -4px;
        margin-left: 0px;
        display: inline-block;
        -webkit-transition: -webkit-transform 1s ease;
        transition: -webkit-transform 1s ease;
        transition: transform 1s ease;
        transition: transform 1s ease, -webkit-transform 1s ease;
        -webkit-transform: rotate(120deg);
        transform: rotate(120deg);
      }
      .auth0-lock.auth0-lock .auth0-lock-confirmation a svg path {
        fill: #09c;
      }
      .auth0-lock.auth0-lock .auth0-lock-confirmation a:hover svg {
        -webkit-transform: rotate(490deg);
        transform: rotate(490deg);
      }
      .auth0-lock.auth0-lock .auth0-lock-confirmation .auth0-lock-sent-label {
        color: #008000;
        -webkit-animation: fadeIn 1s both;
        animation: fadeIn 1s both;
        font-weight: 600;
      }
      .auth0-lock.auth0-lock .auth0-lock-confirmation .auth0-lock-sent-failed-label {
        color: #f00;
        -webkit-animation: fadeIn 1s both;
        animation: fadeIn 1s both;
        font-weight: 600;
      }
      .auth0-lock.auth0-lock .auth0-lock-confirmation .checkmark__circle {
        stroke-dasharray: 166;
        stroke-dashoffset: 166;
        stroke-width: 2;
        stroke-miterlimit: 10;
        stroke: #7ac142;
        fill: none;
        -webkit-animation: stroke 0.6s 0.4s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        animation: stroke 0.6s 0.4s cubic-bezier(0.65, 0, 0.45, 1) forwards;
      }
      .auth0-lock.auth0-lock .auth0-lock-confirmation .checkmark {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: block;
        stroke-width: 2;
        stroke: #fff;
        stroke-miterlimit: 10;
        margin: 0 auto;
        box-shadow: inset 0px 0px 0px #7ac142;
        -webkit-animation: fill 0.4s ease-in-out 0.7s forwards, scale 0.3s ease-in-out 1.1s both;
        animation: fill 0.4s ease-in-out 0.7s forwards, scale 0.3s ease-in-out 1.1s both;
      }
      .auth0-lock.auth0-lock .auth0-lock-confirmation .checkmark__check {
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
      }
      .auth0-lock.auth0-lock .auth0-lock-confirmation .auth0-lock-back-button {
        opacity: 1;
        visibility: visible;
      }
      .auth0-lock.auth0-lock .auth0-lock-forgot-link {
        font-size: 12px;
        display: block;
        text-align: center;
        margin: 30px 0 0 0;
        color: #5c666f;
      }
      .auth0-lock.auth0-lock .auth0-lock-badge-bottom {
        position: absolute;
        bottom: 15px;
        left: 15px;
        z-index: -1;
        text-align: center;
        padding: 6px 10px;
        border-radius: 3px;
        background: rgba(255, 255, 255, 0.1);
      }
      .auth0-lock.auth0-lock .auth0-lock-badge-bottom .auth0-lock-badge {
        display: inline-block;
        color: rgba(255, 255, 255, 0.7);
        font-size: 14px;
      }
      .auth0-lock.auth0-lock .auth0-lock-badge-bottom .auth0-lock-badge svg {
        vertical-align: middle;
        margin: 0 4px;
      }
      .auth0-lock.auth0-lock .auth0-lock-badge-bottom .auth0-lock-badge:hover svg g#LogoBadge {
        fill: #eb5424;
        fill-opacity: 1;
      }
      .auth0-lock.auth0-lock.auth0-lock-opened {
        opacity: 1;
        pointer-events: auto;
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened {
          position: absolute;
        }
      }
      .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-overlay {
        opacity: 0.9;
        -webkit-transition: opacity 0.3s ease-in 0s;
        transition: opacity 0.3s ease-in 0s;
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-overlay {
          display: none;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-header {
          border-radius: 0;
        }
      }
      .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-header-bg .auth0-lock-header-bg-blur {
        opacity: 0.4;
        -webkit-transition: 1s ease 1s;
        transition: 1s ease 1s;
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-header-avatar {
          width: 70px;
          height: 70px;
          margin: 10px auto 0;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-firstname {
          margin-top: 72px;
        }
      }
      .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-widget {
        opacity: 1;
        -webkit-transform: translateY(0%) scale(1);
        transform: translateY(0%) scale(1);
      }
      @media (min-width: 481px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-widget {
          -webkit-transition: -webkit-transform 0.6s, opacity 0.6s;
          -webkit-transition: opacity 0.6s, -webkit-transform 0.6s;
          transition: opacity 0.6s, -webkit-transform 0.6s;
          transition: transform 0.6s, opacity 0.6s;
          transition: transform 0.6s, opacity 0.6s, -webkit-transform 0.6s;
          -webkit-transition-delay: 0.5s;
          transition-delay: 0.5s;
          box-shadow: 0 0 40px 4px #111118;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-widget {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          border-radius: 0;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-widget-container {
          height: 100%;
          overflow-y: scroll;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-cred-pane {
          border-radius: 0;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-body-content {
          background: #fff;
          min-height: calc(100vh - 188px);
          display: table;
          width: 100%;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-content {
          width: 100%;
          display: table-cell;
          vertical-align: middle;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-content .auth0-lock-form p {
          font-size: 14px;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-tabs-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          margin: 0;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-terms {
          position: absolute;
          bottom: -42px;
          width: 100%;
          left: 0;
          box-sizing: border-box;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-sign-up-terms-agreement label input {
          top: 2px;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-submit {
          border-radius: 0;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-badge-bottom {
          display: none;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-confirmation {
          border-radius: 0;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened.auth0-lock-iphone .auth0-lock-body-content {
          min-height: calc(100vh - 256px);
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened.auth0-lock-no-submit .auth0-lock-body-content {
          min-height: calc(100vh - 118px);
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened.auth0-lock-no-submit.auth0-lock-iphone .auth0-lock-body-content {
          min-height: calc(100vh - 186px);
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened.auth0-lock-with-terms .auth0-lock-body-content {
          margin-bottom: 42px;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened.auth0-lock-with-tabs .auth0-lock-body-content {
          min-height: calc(100vh - 228px);
          padding-top: 40px;
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened.auth0-lock-with-tabs.auth0-lock-with-terms .auth0-lock-body-content {
          min-height: calc(100vh - 228px - 42px);
        }
      }
      @media screen and (max-width: 480px) {
        .auth0-lock.auth0-lock.auth0-lock-opened.auth0-lock-with-tabs.auth0-lock-iphone .auth0-lock-body-content {
          min-height: calc(100vh - 296px);
        }
      }
      .auth0-lock.auth0-lock.auth0-lock-opened-in-frame {
        opacity: 1;
        pointer-events: auto;
        position: relative;
        width: auto;
        margin-left: auto;
        margin-right: auto;
      }
      .auth0-lock.auth0-lock.auth0-lock-opened-in-frame .auth0-lock-header-bg .auth0-lock-header-bg-blur {
        opacity: 0.4;
        -webkit-transition: 1s ease 1s;
        transition: 1s ease 1s;
      }
      .auth0-lock.auth0-lock.auth0-lock-opened-in-frame .auth0-lock-header-bg .auth0-lock-header-bg-blur.auth0-lock-no-grayscale {
        opacity: 0.5;
      }
      .auth0-lock.auth0-lock.auth0-lock-opened-in-frame .auth0-lock-widget {
        opacity: 1;
        -webkit-transform: translateY(0%) scale(1);
        transform: translateY(0%) scale(1);
        -webkit-transition: -webkit-transform 0.6s, opacity 0.6s;
        -webkit-transition: opacity 0.6s, -webkit-transform 0.6s;
        transition: opacity 0.6s, -webkit-transform 0.6s;
        transition: transform 0.6s, opacity 0.6s;
        transition: transform 0.6s, opacity 0.6s, -webkit-transform 0.6s;
        -webkit-transition-delay: 0.5s;
        transition-delay: 0.5s;
        margin: auto;
      }
      .auth0-lock.auth0-lock.auth0-lock-opened-in-frame .global-error {
        position: absolute;
        display: none;
      }
      .auth0-lock .auth0-lock-form div.auth0-lock-pane-separator {
        padding-top: 15px;
      }
      #social-container.lock-container .auth0-lock-mode-loading .auth0-lock-content {
        opacity: 1;
      }
      #social-container.lock-container .auth0-lock-mode-loading .auth0-lock-content .auth0-lock-social-buttons-container {
        opacity: 0.3;
      }
      .auth0-lock.auth0-lock .auth0-lock-tabs-container {
        margin: -20px -20px 20px;
        height: 40px;
      }
      .auth0-lock.auth0-lock .auth0-lock-tabs {
        background: #fff;
        padding: 0;
        margin: 0;
        font-size: 13px;
        letter-spacing: 0.7px;
        box-shadow: 0 1px 0 0 rgba(92, 102, 111, 0.2);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
      }
      .auth0-lock.auth0-lock .auth0-lock-tabs:after {
        content: "";
        display: table;
        clear: both;
      }
      .auth0-lock.auth0-lock .auth0-lock-tabs li {
        width: 100%;
        display: block;
        list-style: none;
        float: left;
        padding: 0;
        margin: 0;
        text-align: center;
        cursor: pointer;
      }
      .auth0-lock.auth0-lock .auth0-lock-tabs li a {
        padding: 11px 10px;
        display: block;
        text-decoration: none;
        color: rgba(92, 102, 111, 0.6);
        font-weight: 500;
      }
      .auth0-lock.auth0-lock .auth0-lock-tabs li.auth0-lock-tabs-current {
        box-shadow: 0 1px 0 0 #5c666f;
        cursor: default;
      }
      .auth0-lock.auth0-lock .auth0-lock-tabs li.auth0-lock-tabs-current a {
        color: #5c666f;
      }
      .auth0-lock-password-strength {
        width: 100%;
        bottom: 41px;
        display: block;
        text-align: left;
        padding-top: 0;
        -webkit-animation-duration: 0.3s;
        animation-duration: 0.3s;
        -webkit-transition: height 0.3s ease;
        transition: height 0.3s ease;
      }
      @media (min-width: 481px) {
        .auth0-lock-password-strength {
          position: absolute;
          background: #1f242e;
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
          -webkit-transition: none;
          transition: none;
          width: 100%;
          border-radius: 3px;
          z-index: 1000;
        }
        .auth0-lock-password-strength:after {
          top: 100%;
          left: 21px;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          border-top-color: #1f242e;
          border-width: 9px;
          margin-left: -9px;
        }
      }
      .auth0-lock-password-strength.fadeOut {
        opacity: 0;
        -webkit-transition: 0.3s 0.3s ease;
        transition: 0.3s 0.3s ease;
        visibility: hidden;
      }
      .auth0-lock-password-strength.fadeIn ul {
        -webkit-animation: fadeIn 0.3s 0.1s both;
        animation: fadeIn 0.3s 0.1s both;
      }
      .auth0-lock-password-strength li,
      .auth0-lock-password-strength ul {
        margin: 0;
        padding: 0;
        list-style: none;
        color: #dd4b39;
      }
      .auth0-lock-password-strength > ul {
        padding: 15px;
        padding-top: 0;
      }
      @media (min-width: 481px) {
        .auth0-lock-password-strength > ul {
          padding-top: 12px;
        }
      }
      .auth0-lock-password-strength li span {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+RXJyb3I8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFzc3dvcmQtUG9saWN5IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJBcnRib2FyZC0xIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAwLjAwMDAwMCwgLTE0OC4wMDAwMDApIj4gICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUwLjAwMDAwMCwgNzUuMDAwMDAwKSI+ICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNS4wMDAwMDAsIDM2LjAwMDAwMCkiPiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkVycm9yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS4wMDAwMDAsIDM3LjAwMDAwMCkiPiAgICAgICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsLTkwIiBmaWxsPSIjQkU0NTI3IiBjeD0iNiIgY3k9IjYiIHJ4PSI2IiByeT0iNiI+PC9lbGxpcHNlPiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LDMuNjA0Mjg1NzEgTDguMzk1NzE0MjksMyBMNiw1LjM5NTcxNDI5IEwzLjYwNDI4NTcxLDMgTDMsMy42MDQyODU3MSBMNS4zOTU3MTQyOSw2IEwzLDguMzk1NzE0MjkgTDMuNjA0Mjg1NzEsOSBMNiw2LjYwNDI4NTcxIEw4LjM5NTcxNDI5LDkgTDksOC4zOTU3MTQyOSBMNi42MDQyODU3MSw2IEw5LDMuNjA0Mjg1NzEgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=");
        background-position: left center;
        background-repeat: no-repeat;
        padding-left: 20px;
      }
      .auth0-lock-password-strength ul li ul {
        margin-left: 20px;
      }
      .auth0-lock-password-strength ul li ul li {
        color: #000;
      }
      @media (min-width: 481px) {
        .auth0-lock-password-strength ul li ul li {
          color: #fff;
        }
      }
      .auth0-lock-password-strength ul li ul li span {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTMgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+T3ZhbCAxPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8ZyBpZD0iSXBob25lLTYtLS1OYXRpdmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NC4wMDAwMDAsIC0yMTQuMDAwMDAwKSIgZmlsbD0iI0QwRDJEMyI+ICAgICAgICAgICAgPHBhdGggZD0iTTUwLjExNDk3MzMsMjI2IEM1My40Mjg2ODE4LDIyNiA1Ni4xMTQ5NzMzLDIyMy4zMTM3MDggNTYuMTE0OTczMywyMjAgQzU2LjExNDk3MzMsMjE2LjY4NjI5MiA1My40Mjg2ODE4LDIxNCA1MC4xMTQ5NzMzLDIxNCBDNDYuODAxMjY0OCwyMTQgNDQuMTE0OTczMywyMTYuNjg2MjkyIDQ0LjExNDk3MzMsMjIwIEM0NC4xMTQ5NzMzLDIyMy4zMTM3MDggNDYuODAxMjY0OCwyMjYgNTAuMTE0OTczMywyMjYgWiIgaWQ9Ik92YWwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+");
      }
      .auth0-lock-password-strength li {
        line-height: 1.5;
        margin-top: 5px;
        font-size: 13px;
        -webkit-transition: color 0.3s ease-in;
        transition: color 0.3s ease-in;
        position: relative;
      }
      .auth0-lock-password-strength li.auth0-lock-checked {
        color: #7ed321;
      }
      .auth0-lock-password-strength li.auth0-lock-checked span {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTMgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+R3JvdXAgNDwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IklwaG9uZS02LS0tTmF0aXZlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDQuMDAwMDAwLCAtMjQwLjAwMDAwMCkiPiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NC4xMTQ5NzMsIDI0MC4wMDAwMDApIj4gICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwtOTAiIGZpbGw9IiM4MEQxMzUiIGN4PSI2IiBjeT0iNiIgcng9IjYiIHJ5PSI2Ij48L2VsbGlwc2U+ICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjU0MjM1MzYxLDcuNzMzNzgwNzYgTDIuNjQ1ODIxNDksNS44NjgwMDg5NSBMMiw2LjQ5ODg4MTQzIEw0LjU0MjM1MzYxLDkgTDEwLDMuNjMwODcyNDggTDkuMzU4NzI2NTUsMyBMNC41NDIzNTM2MSw3LjczMzc4MDc2IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==");
      }
      .auth0-lock-error-msg {
        color: #f00;
        font-size: 12px;
        margin-top: 5px;
      }
      @media (min-width: 481px) {
        .auth0-lock-error-msg {
          color: #000;
          background: #fff;
          box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);
          margin: 0;
          border-radius: 3px;
          position: absolute;
          left: calc(100% + 7px);
          top: 1px;
          display: inline-table;
        }
        .auth0-lock-error-msg span {
          background: #fff;
          padding: 12px 15px;
          display: block;
          position: relative;
          border-radius: 3px;
          z-index: 1;
        }
        .auth0-lock-error-msg:after {
          content: "";
          background: #fff;
          height: 6px;
          width: 6px;
          position: absolute;
          pointer-events: none;
          box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);
          right: calc(100% - 3px);
          top: 50%;
          -webkit-transform: translateY(-50%) rotate(45deg);
          transform: translateY(-50%) rotate(45deg);
        }
      }
      .auth0-lock .auth0-loading-screen {
        min-height: 42px;
      }
      .auth0-lock .auth0-loading-screen .auth0-loading-container {
        display: block;
      }
      .auth0-lock .auth0-sso-notice-container {
        background: rgba(0, 0, 0, 0.03);
        color: rgba(0, 0, 0, 0.54);
        padding: 10px 0;
        margin: -20px -20px 20px;
        text-align: center;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .auth0-lock .auth0-sso-notice-container .auth0-lock-icon {
        width: 12px;
        height: 14px;
        position: relative;
        top: 2px;
        right: 2px;
      }
      .auth0-lock .auth0-lock-last-login-pane .auth0-lock-social-button.auth0-lock-social-big-button {
        margin-top: 0;
      }
      .auth0-lock .auth0-lock-last-login-pane .auth0-lock-social-button[data-provider="auth0"] .auth0-lock-social-button-text {
        text-transform: none;
        font-size: 12px;
        font-weight: normal;
      }
      .auth0-lock .auth0-lock-sign-up-terms-agreement label input {
        margin-right: 5px;
        position: relative;
      }
      input[type="button"] {
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div id="auth0-lock-container-1" class="auth0-lock-container">
      <div class="auth0-lock auth0-lock-opened auth0-lock-with-tabs">
        <div class="auth0-lock-overlay">
          <span class="auth0-lock-badge-bottom">
            <a href="https://auth0.com/?utm_source=lock&amp;utm_campaign=badge&amp;utm_medium=widget" target="_blank" class="auth0-lock-badge">
              <svg width="58px" height="21px" viewBox="0 0 462 168">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="logo-grey-horizontal">
                    <g id="Group">
                      <g id="LogoText" transform="translate(188.000000, 41.500000)" fill="#D0D2D3">
                        <path d="M246.517,0.11 C238.439,0.11 231.607,3.916 226.759,11.115 C221.94,18.271 219.393,28.26 219.393,40 C219.393,51.74 221.94,61.729 226.759,68.884 C231.607,76.084 238.439,79.889 246.517,79.889 C254.595,79.889 261.427,76.084 266.275,68.884 C271.093,61.729 273.64,51.74 273.64,40 C273.64,28.26 271.093,18.271 266.275,11.115 C261.427,3.916 254.595,0.11 246.517,0.11 L246.517,0.11 Z M246.517,70.005 C242.655,70.005 239.604,67.82 237.187,63.324 C234.268,57.893 232.66,49.61 232.66,40 C232.66,30.39 234.268,22.106 237.187,16.676 C239.604,12.18 242.655,9.994 246.517,9.994 C250.378,9.994 253.43,12.18 255.847,16.676 C258.766,22.106 260.373,30.389 260.373,40 C260.373,49.611 258.766,57.895 255.847,63.324 C253.43,67.82 250.378,70.005 246.517,70.005 L246.517,70.005 Z M71.45,29.172 L71.45,63.484 C71.45,72.53 78.81,79.889 87.856,79.889 C95.746,79.889 101.707,75.975 103.902,74.291 C104.024,74.197 104.184,74.169 104.331,74.216 C104.478,74.263 104.592,74.379 104.637,74.527 L105.961,78.86 L115.737,78.86 L115.737,29.172 L103.175,29.172 L103.175,66.326 C103.175,66.501 103.076,66.662 102.921,66.743 C100.559,67.961 95.899,70.006 91.231,70.006 C87.252,70.006 84.012,66.768 84.012,62.787 L84.012,29.172 L71.45,29.172 L71.45,29.172 Z M197.237,78.859 L209.8,78.859 L209.8,44.547 C209.8,35.501 202.44,28.141 193.394,28.141 C186.735,28.141 181.393,31.004 178.802,32.71 C178.657,32.805 178.473,32.813 178.322,32.731 C178.171,32.649 178.075,32.491 178.075,32.318 L178.075,1.141 L165.513,1.141 L165.513,78.859 L178.075,78.859 L178.075,41.704 C178.075,41.529 178.174,41.368 178.33,41.288 C180.691,40.069 185.352,38.025 190.019,38.025 C191.947,38.025 193.76,38.776 195.123,40.139 C196.486,41.502 197.236,43.316 197.236,45.243 L197.236,78.859 L197.237,78.859 Z M124.792,39.055 L132.438,39.055 C132.697,39.055 132.907,39.265 132.907,39.524 L132.907,66.858 C132.907,74.043 138.753,79.888 145.938,79.888 C148.543,79.888 151.113,79.512 153.585,78.77 L153.585,69.796 C152.143,69.923 150.485,70.005 149.313,70.005 C147.193,70.005 145.469,68.28 145.469,66.161 L145.469,39.523 C145.469,39.264 145.679,39.054 145.938,39.054 L153.585,39.054 L153.585,29.171 L145.938,29.171 C145.679,29.171 145.469,28.961 145.469,28.702 L145.469,12.295 L132.907,12.295 L132.907,28.702 C132.907,28.961 132.697,29.171 132.438,29.171 L124.792,29.171 L124.792,39.055 L124.792,39.055 Z M51.361,78.859 L64.429,78.859 L44.555,9.55 C42.962,3.992 37.811,0.11 32.029,0.11 C26.247,0.11 21.096,3.992 19.502,9.55 L-0.372,78.859 L12.697,78.859 L18.449,58.798 C18.507,58.597 18.691,58.459 18.9,58.459 L45.158,58.459 C45.367,58.459 45.552,58.597 45.609,58.798 L51.361,78.859 L51.361,78.859 Z M42.056,48.576 L22.004,48.576 C21.857,48.576 21.718,48.507 21.629,48.388 C21.541,48.272 21.513,48.119 21.553,47.978 L31.579,13.012 C31.637,12.811 31.821,12.673 32.03,12.673 C32.239,12.673 32.423,12.811 32.48,13.012 L42.507,47.978 C42.547,48.12 42.519,48.272 42.43,48.388 C42.342,48.507 42.203,48.576 42.056,48.576 L42.056,48.576 Z" id="Shape">

                        </path>
                      </g>
                      <g id="LogoBadge" fill-opacity="0.4" fill="#FFFFFF">
                        <path d="M119.555,135.861 L102.705,83.997 L146.813,51.952 L92.291,51.952 L75.44,0.09 L75.435,0.076 L129.965,0.076 L146.82,51.947 L146.821,51.946 L146.835,51.938 C156.623,82.03 146.542,116.256 119.555,135.861 L119.555,135.861 Z M31.321,135.861 L31.307,135.871 L75.426,167.924 L119.555,135.862 L75.44,103.808 L31.321,135.861 L31.321,135.861 Z M4.052,51.939 L4.052,51.939 C-6.252,83.66 5.709,117.272 31.312,135.867 L31.316,135.851 L48.168,83.99 L4.07,51.951 L58.579,51.951 L75.431,0.089 L75.435,0.075 L20.902,0.075 L4.052,51.939 L4.052,51.939 Z" id="Shape">

                        </path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </span>
        </div>
        <div class="auth0-lock-center">
          <form class="auth0-lock-widget">
            <div class="auth0-lock-widget-container">
              <div class="auth0-lock-cred-pane auth0-lock-quiet">
                <div class="auth0-lock-header">
                  <div class="auth0-lock-header-bg auth0-lock-blur-support">
                    <div class="auth0-lock-header-bg-blur"></div>
                    <div class="auth0-lock-header-bg-solid"></div>
                  </div>
                  <div class="auth0-lock-header-welcome">
                    <svg class="auth0-lock-header-logo" width="52.47px" height="58px" viewBox="0 0 151 172">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="logo-grey-horizontal">
                          <g id="Group">
                            <g id="LogoBadge" fill-opacity="1" fill="rgb(234, 83, 35)">
                              <path d="M119.555,135.861 L102.705,83.997 L146.813,51.952 L92.291,51.952 L75.44,0.09 L75.435,0.076 L129.965,0.076 L146.82,51.947 L146.821,51.946 L146.835,51.938 C156.623,82.03 146.542,116.256 119.555,135.861 L119.555,135.861 Z M31.321,135.861 L31.307,135.871 L75.426,167.924 L119.555,135.862 L75.44,103.808 L31.321,135.861 L31.321,135.861 Z M4.052,51.939 L4.052,51.939 C-6.252,83.66 5.709,117.272 31.312,135.867 L31.316,135.851 L48.168,83.99 L4.07,51.951 L58.579,51.951 L75.431,0.089 L75.435,0.075 L20.902,0.075 L4.052,51.939 L4.052,51.939 Z" id="Shape"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div class="auth0-lock-name">Link Accounts</div>
                  </div>
                </div>
                <div id="error-message" class="auth0-global-message auth0-global-message-error"></div>
                <div style="position: relative;">
                  <span>
                    <div class="">
                      <div style="visibility: inherit;">
                        <div class="auth0-lock-view-content">
                          <div style="position: relative;">
                            <div class="auth0-lock-body-content">
                              <div class="auth0-lock-content">
                                <div class="auth0-lock-form" id="content-container">
                                  <div>
                                    <p id="message">
                                      It looks like you have another account
                                      with the same email address. We recommend
                                      you link these accounts.
                                    </p>
                                    <p class="auth0-lock-alternative">
                                      <a class="auth0-lock-alternative-link" id="skip" href="#">
                                        I want to skip this and create a new account. (Not recommended)
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                <div class="auth0-lock-actions">
                  <button class="auth0-lock-submit" type="button" id="link">
                    <span class="auth0-label-submit">
                      <span id="label-value">Continue</span>
                      <span>
                        <svg class="icon-text" width="8px" height="12px" viewBox="0 0 8 12" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Web/Submit/Active" transform="translate(-148.000000, -32.000000)" fill="#FFFFFF"><polygon id="Shape" points="148 33.4 149.4 32 155.4 38 149.4 44 148 42.6 152.6 38"></polygon></g></g></svg>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <script src="https://unpkg.com/jwt-decode@2.2.0/build/jwt-decode.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.5.0/qs.min.js"></script>
    <script type="text/javascript">
      var params = window.Qs.parse(window.location.search, { ignoreQueryPrefix: true });

      try {
        loadLinkPage(window.jwt_decode(params.child_token));
      } catch(e) {
        console.error(e);
        loadInvalidTokenPage();
      }

      function loadLinkPage(token) {
        var linkEl = document.getElementById('link');
        var skipEl = document.getElementById('skip');
        var connections = token.targetUsers.reduce(function(acc, user) {
          return acc.concat(user.connections);
        }, []);

        var authorize = function(domain, qs) {
          var query = Object.keys(qs)
            .filter(function(key) {
              return !!qs[key];
            })
            .map(function (key) {
              return key + '=' + encodeURI(qs[key]);
            }).join('&');

          window.location = domain + 'authorize?' + query;
        };

        var updateContinueUrl = function(linkEl, domain, state) {
          console.log("continue url is", domain + 'continue?state=' + state);
          linkEl.href = domain + 'continue?state=' + state;
        };

        console.log(params);
        console.log(token);
        console.log(connections);
        console.log("States are", params.state, params.original_state);

        linkEl.addEventListener('click', function(e) {
          console.log("Link clicked");
          authorize(token.iss, {
            client_id: params.client_id,
            redirect_uri: params.redirect_uri,
            response_type: params.response_type,
            scope: params.scope,
            state: params.original_state,
            nonce: params.nonce,
            link_account_token: params.child_token,
            connection: connections[0]
          });
        });

        updateContinueUrl(skipEl, token.iss, params.state);

        if (params.errorType === 'accountMismatch') {
          loadAccountMismatchError();
        }
      }

      function loadInvalidTokenPage() {
        var containerEl = document.getElementById('content-container');
        var labelEl = document.getElementById('label-value');
        var linkEl = document.getElementById('link');

        containerEl.innerHTML = '';
        containerEl.appendChild(
          el('div', {}, [
            el('p', {}, [
              text('You seem to have reached this page in error. Please try logging in again')
            ])
          ])
        );

        linkEl.disabled = true;
      };

      function loadAccountMismatchError() {
        var messageEl = document.getElementById('error-message');
        var msg = "Accounts must have matching email addresses. Please try again.";

        messageEl.innerHTML = msg;
        messageEl.style.display = 'block';
      };

      function el(tagName, attrs, childEls) {
        var element = document.createElement(tagName);
        var children = childEls || [];

        for (var i in Object.keys(attrs || {})) {
          element.setAttribute(i, attrs[i]);
        }

        for (var i in children) {
          element.appendChild(children[i]);
        }

        return element;
      }

      function text(content) {
        return document.createTextNode(content);
      }
    </script>
  </body>
</html>
`);
  }
});
