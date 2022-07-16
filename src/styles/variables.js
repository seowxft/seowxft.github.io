import { css } from 'styled-components';

//dark-navy: loading background
//navy: webpage background
//light-navy: box background
//lightest-navy: links?
//navy-shadow:
//dark-slate: big name font
//slate:  word color
//light-slate:  word color
//lightest-slate:  word color
//white: navigation font colors
//green: small number & logo colour & links
//green-tint-dark: other buttons fill in
//green-tint: resume fill in

const variables = css`
  :root {
    --dark-navy: #303841;
    --navy: #f2f2f2;
    --light-navy: #fafafa;
    --lightest-navy: #000000;
    --navy-shadow: #cccccc;
    --dark-slate: #3a4750;
    --slate: #3a4750;
    --light-slate: #303841;
    --lightest-slate: #303841;
    --white: #ffffff;
    --green: #00adb5;
    --green-tint-dark: #303841;
    --green-tint: #1d2229;
    --header: #303841;

    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
