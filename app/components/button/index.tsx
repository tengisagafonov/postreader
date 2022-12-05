import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, fontSize, spacing} from 'config/Theme';

interface IButtonProps {
  title: string;
  onPress?: () => void;
}

const Button = (props: IButtonProps) => {
  const {onPress, title} = props;
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.larger,
    borderRadius: 8,
    padding: spacing.medium,
    marginBottom: spacing.small,
  },
  text: {
    fontFamily: 'Lato',
    color: Colors.white,
    fontWeight: '600',
    fontSize: fontSize.normalPlus,
    lineHeight: 20,
  },
});

export default Button;
