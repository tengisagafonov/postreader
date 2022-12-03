import {DefaultTheme} from '@react-navigation/native';

export const Colors = {
  white: '#fff',
  background: '#F5F5F5',
  textColor: '#151C26',
};

export enum spacing {
  none = 0,
  tiny = 4,
  small = 6,
  medium = 8,
  large = 14,
  huge = 20,
}

export enum fontSize {
  medium = 18,
}

export const NavigationTheme = {
  ...DefaultTheme,
  ...{colors: {...DefaultTheme.colors, background: Colors.background}},
};
