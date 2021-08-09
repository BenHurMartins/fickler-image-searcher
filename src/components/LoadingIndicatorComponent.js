import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Colors, Mixins} from '../styles';
import {Overlay} from 'react-native-elements';
import {useSelector} from 'react-redux';

const LoadingIndicatorComponent = () => {
  const {loading} = useSelector(state => state.SearchReducer);
  return (
    <Overlay isVisible={loading}>
      <ActivityIndicator size={'large'} color={Colors.BLACK} />
    </Overlay>
  );
};
export default LoadingIndicatorComponent;

const styles = StyleSheet.create({
  imageContainer: {
    width: Mixins.IMAGE_WIDTH,
    height: Mixins.IMAGE_HEIGHT,
  },
});
