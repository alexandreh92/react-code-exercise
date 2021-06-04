import * as styledComponents from 'styled-components';

import { Theme } from '~/@types';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

type ThemedStyledProps<P> = styledComponents.ThemedStyledProps<P, Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemedStyledProps };
export default styled;
