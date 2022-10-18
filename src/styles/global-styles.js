import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
  }
  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.mainBg};
    `}
  }
`;
