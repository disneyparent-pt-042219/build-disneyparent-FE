import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${styledNormalize}

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
