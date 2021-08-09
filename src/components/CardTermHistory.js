import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Mixins} from '../styles';

const CardTermHistory = ({term, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(term)}
      hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}>
      <Text style={styles.term}>{term}</Text>
    </TouchableOpacity>
  );
};

export default CardTermHistory;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'center',
    backgroundColor: Colors.OFF_WHITE,
    paddingLeft: 10,
    height: 40,
    zIndex: 9999,
  },
  term: {
    fontSize: Mixins.FONT_SIZE_REGULAR,
    color: Colors.BLACK,
  },
});
