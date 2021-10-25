// .storybook/paratheme.js

import { create } from '@storybook/theming';

export default create({
  //Theme information
  base: 'light',

  colorPrimary: '#FFFFFF',
  colorSecondary: '#FF6C6A',

  // UI
  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appBorderColor: '#CCCCCC',

  // Text colors
  textColor: '#5D6D7E',
  textInverseColor: '#000000',

  // Toolbar default and active colors
  barTextColor: '#FFFFFF',
  barSelectedColor: '#FF6C6A',
  barBg: '#181F2C',

  // Form colors
  mainTextColor: '#FFFFFF',
  inputBg: 'white',
  inputBorder: '#CCCCCC',
  inputTextColor: '#FF6C6A',
  inputBorderRadius: 4,

  // Logo and brand information
  brandTitle: 'Paradigma - From Zero To Cloud - Sotrybook',
  brandUrl: 'https://www.paradigmadigital.com/',
  brandImage: 'https://www.paradigmadigital.com/assets/img/logo/paradigma-logos/horizontal/paradigma_digital_logo_default.svg',
});