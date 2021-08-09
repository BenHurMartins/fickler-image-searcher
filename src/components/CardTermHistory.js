import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors, Mixins} from '../styles';

const CardTermHistory = ({term, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(term)}>
      <Text style={styles.term}>{term}</Text>
    </TouchableOpacity>
  );
};

export default CardTermHistory;

const styles = StyleSheet.create({
  container: {
    width: Mixins.DEVICE_WIDTH_90,
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
