import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Mixins} from '../styles';

const ViewTermsHistory = props => {
  return <View style={[styles.container, props.styles]}>{props.children}</View>;
};

export default ViewTermsHistory;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: Mixins.DEVICE_WIDTH,
    top: 70,
    alignItems: 'center',
    zIndex: 6,
  },
});
