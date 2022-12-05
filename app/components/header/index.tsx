import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'assets/icons';
import {Colors, fontSize, spacing} from 'config/Theme';
import {useNavigation} from '@react-navigation/native';

interface IHeaderProps {
  title: string;
}

const Header = (props: IHeaderProps) => {
  const {title} = props;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.back} onPress={navigation.goBack}>
          <Icon.ArrowLeftIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    fontFamily: 'Lato',
    fontSize: fontSize.medium,
    color: Colors.textColor,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.large,
  },
  back: {
    position: 'absolute',
    left: spacing.medium,
  },
});

export default Header;
