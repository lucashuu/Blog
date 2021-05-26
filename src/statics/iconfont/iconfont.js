import {
  createGlobalStyle
} from 'styled-components';

export const GlobalIcon = createGlobalStyle `
	@font-face {font-family: 'iconfont';
  src: url('./iconfont.woff2?t=1621391890449') format('woff2'),
       url('./iconfont.woff?t=1621391890449') format('woff'),
       url('./iconfont.ttf?t=1621391890449') format('truetype');
}

	.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;