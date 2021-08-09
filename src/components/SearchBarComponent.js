import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Colors} from '../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button, ViewTermsHistory} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import * as types from '../reducers/actionsTypes';
import {getImages} from '../services/api';

MaterialIcons.loadFont();

const SearchBarComponent = () => {
  const dispatch = useDispatch();
  const {termsHistory, searchTerm} = useSelector(state => state.SearchReducer);
  const [startSearch, setStartSearch] = useState(false);

  const searchImages = () => {
    // Always when a search starts here we will define the page as 1
    if (searchTerm.trim().length > 2) {
      setStartSearch(false);
      dispatch({type: types.SET_LOADING, payload: true});
      dispatch({type: types.RESET_PAGE});
      storeTerms(searchTerm.trim());
      getImages(searchTerm.trim(), 1)
        .then(images => {
          setStartSearch(false);
          dispatch({type: types.SET_LOADING, payload: false});
          dispatch({type: types.SET_IMAGES, payload: images});
        })
        .catch(err => {
          dispatch({type: types.SET_LOADING, payload: false});
        });
    }
  };

  const storeTerms = async newTerm => {
    //every time a new search is made a term will be added
    try {
      let newTermsHistory = termsHistory;
      // Filter the terms to not add a duplicate value
      const found = termsHistory.find(element => element === newTerm);
      if (!found) {
        newTermsHistory.push(newTerm);
        const jsonValue = JSON.stringify(newTermsHistory);
        dispatch({type: types.SET_TERMS, payload: newTermsHistory});
        await AsyncStorage.setItem('terms-history', jsonValue);
      }
    } catch (e) {
      console.log(e);
    }
  };

  setSearchTerm = term => {
    setStartSearch(true);
    dispatch({type: types.SET_SEARCH_TERM, payload: term});
  };

  return (
    <View style={styles.viewContainer}>
      <SearchBar
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder={'Search for ...'}
        inputStyle={styles.inputStyle}
        onSubmitEditing={searchImages}
        onFocus={() => {
          setStartSearch(true);
        }}
        blurOnSubmit={true}
        testID="input"
      />
      {startSearch ? <ViewTermsHistory setSearchTerm={setSearchTerm} /> : null}
      <Button
        title={'Go'}
        onPress={searchImages}
        customStyles={{width: '15%'}}
      />
    </View>
  );
};

export default SearchBarComponent;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    width: '80%',
  },
  inputContainerStyle: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderColor: Colors.BLACK,
    borderBottomColor: Colors.BLACK,
    borderWidth: 1,
    borderBottomWidth: 1,
  },
  inputStyle: {
    color: Colors.BLACK,
  },
  viewContainer: {
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
