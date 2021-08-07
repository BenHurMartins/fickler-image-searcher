import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors, Mixins} from '../styles';

const Button = ({customStyles, onPress, title}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {...customStyles}]}
      onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.BLACK,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 5,
  },
  buttonTitle: {
    color: Colors.WHITE,
    fontSize: Mixins.FONT_SIZE_REGULAR,
  },
});
