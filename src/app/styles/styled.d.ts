import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      primary: string;
      secondary: string;
      text: string;
      danger: string;
      success: string;
      gray: string;
    };
    fonts: {
      body: string;
    };
    borderRadius: string;
    spacing: (factor: number) => string;
  }
}
