import {DefaultTheme} from '@react-navigation/native';
import {Status} from 'types/post';

export const Colors = {
  white: '#fff',
  background: '#F5F5F5',
  imgBackground: '#F2F3F3',
  textColor: '#151C26',
  date: '#8A8C90',
  draft: '#D91616',
  published: '#10C137',
  blue: '#0071D8',
};

export enum spacing {
  none = 0,
  small = 8,
  medium = 12,
  large = 14,
  larger = 16,
  largerPlus = 18,
  input = 19,
  huge = 20,
}

export enum fontSize {
  small = 12,
  normal = 14,
  normalPlus = 16,
  medium = 18,
}

export const NavigationTheme = {
  ...DefaultTheme,
  ...{colors: {...DefaultTheme.colors, background: Colors.background}},
};

export const statusColors = {
  [Status.Draft]: Colors.draft,
  [Status.Published]: Colors.published,
};
