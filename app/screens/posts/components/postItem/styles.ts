import {StyleSheet, ViewStyle} from 'react-native';
import {Colors, fontSize, spacing, statusColors} from 'config/Theme';
import {Status} from 'types/post';
import {opacityColor} from 'utils/post';
import {PostDimension} from 'constants/posts';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.white,
    marginTop: spacing.medium,
    paddingTop: spacing.larger,
    paddingHorizontal: spacing.larger,
    paddingBottom: spacing.largerPlus,
  },
  row: {flexDirection: 'row'},
  img: {
    height: PostDimension.height,
    width: PostDimension.width,
    borderRadius: 12,
  },
  info: {alignItems: 'flex-start', marginLeft: spacing.larger},
  title: {fontWeight: '500', fontSize: fontSize.medium, lineHeight: 24},
  date: {
    fontSize: fontSize.small,
    marginVertical: spacing.medium,
  },
  dateLabel: {color: Colors.date},
  description: {
    marginTop: spacing.larger,
    color: Colors.textColor,
    fontSize: fontSize.normal,
  },
});

export const status = (status_val: Status) =>
  ({
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    backgroundColor: opacityColor(statusColors[status_val], 0.1),
    borderRadius: 8,
  } as ViewStyle);

export const statusText = (status_val: Status) =>
  ({
    color: statusColors[status_val],
  } as ViewStyle);
