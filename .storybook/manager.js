// .storybook/manager.js

import { addons } from '@storybook/addons';
import paratheme from './paratheme';

addons.setConfig({
  theme: paratheme,
});