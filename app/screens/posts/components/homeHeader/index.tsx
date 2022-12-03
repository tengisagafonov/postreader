import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Icon} from 'assets/icons';
import {Colors, spacing} from 'config/Theme';

const HomeHeader = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.row}>
        <Icon.LogoIcon />
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
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.large,
  },
});

export default HomeHeader;
