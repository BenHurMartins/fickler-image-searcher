import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Colors} from '../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button, ViewTermsHistory, CardTermHistory} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import * as types from '../reducers/actionsTypes';
import {getImages} from '../services/api';

MaterialIcons.loadFont();

const SearchBarComponent = () => {
  const dispatch = useDispatch();
  const {termsHistory, searchTerm} = useSelector(state => state.SearchReducer);
  const [startSearch, setStartSearch] = useState(false);

  useEffect(() => {
    //Rise the history of terms searched
    getTermsHistory();
  }, []);

  const searchImages = () => {
    // Always when a search starts here we will define the page as 1
    setStartSearch(false);
    if (searchTerm.trim().length > 2) {
      dispatch({type: types.RESET_PAGE});
      storeTerms(searchTerm.trim());
      getImages(searchTerm.trim(), 1).then(images => {
        dispatch({type: types.SET_IMAGES, payload: images});
      });
    }
  };

  const getTermsHistory = async () => {
    //This section get the stored terms in the users phone
    try {
      let terms = await AsyncStorage.getItem('terms-history');
      terms = terms != null ? JSON.parse(terms) : [];
      dispatch({type: types.SET_TERMS, payload: terms});
    } catch (e) {
      console.log(e);
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
      // saving error
    }
  };

  setSearchTerm = term => {
    setStartSearch(true);
    dispatch({type: types.SET_SEARCH_TERM, payload: term});
  };

  const getHintterms = () => {
    //Filter all the terms with the term already used as a search
    let result = termsHistory.filter(str => str.includes(searchTerm)).reverse();
    //Cut the array to show only the 5 newest terms
    result.length = 5;
    return result;
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
      {startSearch ? (
        <ViewTermsHistory>
          {getHintterms().map(element => (
            <CardTermHistory term={element} onPress={setSearchTerm} />
          ))}
        </ViewTermsHistory>
      ) : null}
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
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
