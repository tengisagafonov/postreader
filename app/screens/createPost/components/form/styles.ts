import {StyleSheet} from 'react-native';
import {Colors, fontSize, spacing} from 'config/Theme';

export const styles = StyleSheet.create({
  main: {flex: 1},
  form: {
    marginTop: spacing.small,
    backgroundColor: Colors.white,
    paddingVertical: spacing.huge,
    paddingHorizontal: spacing.larger,
  },
  space: {marginTop: spacing.small, marginBottom: spacing.medium},
  input: {
    backgroundColor: Colors.background,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.input,
    borderRadius: 8,
  },
  photoPicker: {
    backgroundColor: Colors.white,
    marginTop: spacing.medium,
    paddingHorizontal: spacing.larger,
    paddingTop: spacing.larger,
    paddingBottom: spacing.huge,
  },
  photoTitle: {marginBottom: spacing.largerPlus, fontSize: fontSize.medium},
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: Colors.imgBackground,
  },
  close: {position: 'absolute', right: 0, top: 0},
  button: {
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.larger,
    borderRadius: 8,
    padding: spacing.medium,
  },
  text: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: fontSize.normalPlus,
    lineHeight: 20,
  },
});
