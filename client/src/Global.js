import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }
    header {
        width: 100%;
        background-color: white;
        height: 66px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        margin-bottom: 20px;
        box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.16);

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 900px;
           
        }

        img {
            height: 48px;
            margin-top: -10px;
        }

        a:link {
            font-size: 18px;
            // padding-top: 5px;
        }

        .fas {
            font-size: 24px;
            margin-left: 10px;
            color: lightgray;
        }
        .right-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 500px;
            width: 100%;
            p {
                margin-top: 23px;
            }
        }
        
    }
`;

export default GlobalStyle;
