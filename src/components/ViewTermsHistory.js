import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Mixins} from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CardTermHistory} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import * as types from '../reducers/actionsTypes';

const ViewTermsHistory = ({setSearchTerm}) => {
  const dispatch = useDispatch();
  const {termsHistory, searchTerm} = useSelector(state => state.SearchReducer);

  useEffect(() => {
    //Rise the history of terms searched
    getTermsHistory();
  }, []);

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

  const getHintterms = () => {
    //Filter all the terms with the term already used as a search
    let result = termsHistory.filter(str => str.includes(searchTerm)).reverse();
    //Cut the array to show only the 5 newest terms
    result.length = 5;
    return result;
  };
  return (
    <View style={styles.container}>
      {getHintterms().map(element => (
        <CardTermHistory term={element} onPress={setSearchTerm} />
      ))}
    </View>
  );
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
