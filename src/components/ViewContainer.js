import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors, Mixins} from '../styles';

const ViewContainer = props => {
  return (
    <SafeAreaView style={[styles.container, props.styles]}>
      {props.children}
    </SafeAreaView>
  );
};

export default ViewContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    width: Mixins.DEVICE_WIDTH,
  },
});
