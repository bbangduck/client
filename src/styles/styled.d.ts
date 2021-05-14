import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: {
      mobile: {
        minHeight: string;
        height: string;
      };
      font: string[];
    };
    colors: {
      testBlue: string;
      fontGray: string[];
      bgColor: string[];
    };
  }
}
