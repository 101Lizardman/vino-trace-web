import { createGlobalStyle } from 'styled-components';

import Montserrat from './montserrat-v15-latin-regular.woff'
import Montserrat2 from './montserrat-v15-latin-regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(${Montserrat2}) format('woff2'),
        url(${Montserrat}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;