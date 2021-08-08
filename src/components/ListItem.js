import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import {Colors, Mixins} from '../styles';
import {ImageOverlay} from './';

const ListItem = ({item}) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const getUrl = () => {
    return `https://farm${item.farm}.static.flickr.com/${item.server}/${item.id}_${item.secret}.jpg`;
  };

  return (
    <TouchableOpacity onPress={toggleOverlay}>
      <ImageOverlay
        visible={visible}
        toggleOverlay={toggleOverlay}
        url={getUrl}
      />
      <Card containerStyle={styles.cardContainer}>
        <Card.Image source={{uri: getUrl()}} resizeMode={'contain'} />
      </Card>
    </TouchableOpacity>
  );
};
export default ListItem;

const styles = StyleSheet.create({
  cardContainer: {
    width: Mixins.IMAGE_CARD_SIZE,
    margin: 10,
    marginBottom: 10,
    marginTop: 10,
    borderColor: Colors.BLACK,
    padding: 3,
  },
});
