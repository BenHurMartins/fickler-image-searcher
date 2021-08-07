import React from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import {Mixins} from '../styles';
import {useSelector, useDispatch} from 'react-redux';
import {ListItem} from './';
import {getImages} from '../services/api';
import * as types from '../reducers/actionsTypes';

const FlatListComponent = () => {
  const dispatch = useDispatch();
  const {images, page, searchTerm} = useSelector(state => state.SearchReducer);

  const renderItem = ({item}) => <ListItem item={item} />;

  const getMoreResults = () => {
    getImages(searchTerm.trim(), page + 1).then(images => {
      dispatch({type: types.ADD_IMAGES, payload: images});
      dispatch({type: types.ADD_PAGE});
    });
  };

  return (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      onEndReached={getMoreResults}
      onEndReachedThreshold={0.7}
    />
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  flatListContainer: {
    width: Mixins.DEVICE_WIDTH,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
