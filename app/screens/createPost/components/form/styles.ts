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
    width: '100%',
    fontFamily: 'Lato',
    fontWeight: '500',
    fontSize: fontSize.normalPlus,
    backgroundColor: Colors.background,
    paddingHorizontal: spacing.medium,
    paddingTop: spacing.input,
    paddingBottom: spacing.input,
    borderRadius: 8,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.input,
    borderRadius: 8,
  },
  photoPicker: {
    alignItems: 'flex-start',
    backgroundColor: Colors.white,
    marginTop: spacing.medium,
    paddingHorizontal: spacing.larger,
    paddingTop: spacing.larger,
    paddingBottom: spacing.huge,
  },
  photoTitle: {
    marginBottom: spacing.largerPlus,
    fontSize: fontSize.medium,
    fontFamily: 'Lato',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: Colors.imgBackground,
  },
  close: {position: 'absolute', right: 0, top: 0},
});
