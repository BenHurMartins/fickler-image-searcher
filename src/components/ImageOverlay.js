import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Colors, Mixins} from '../styles';
import {Overlay} from 'react-native-elements';

const ImageOverlay = ({url, visible, toggleOverlay}) => {
  return (
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
      <Image
        style={styles.imageContainer}
        source={{uri: url()}}
        width={Mixins.IMAGE_WIDTH}
        height={Mixins.IMAGE_WIDTH}
        resizeMode={'contain'}
      />
    </Overlay>
  );
};
export default ImageOverlay;

const styles = StyleSheet.create({
  imageContainer: {
    width: Mixins.IMAGE_WIDTH,
    height: Mixins.IMAGE_HEIGHT,
  },
});
