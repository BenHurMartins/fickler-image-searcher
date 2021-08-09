import * as types from './actionsTypes';

const INITIAL_STATE = {
  termsHistory: [],
  searchTerm: '',
  page: 1,
  images: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_TERMS:
      return {...state, termsHistory: action.payload};
    case types.SET_SEARCH_TERM: {
      return {...state, searchTerm: action.payload};
    }
    case types.ADD_PAGE: {
      return {...state, page: state.page + 1};
    }
    case types.RESET_PAGE: {
      return {...state, page: 1};
    }
    case types.SET_IMAGES: {
      return {...state, images: action.payload};
    }
    case types.SET_LOADING: {
      return {...state, loading: action.payload};
    }
    case types.ADD_IMAGES: {
      let newImages = state.images;
      newImages.push(...action.payload);
      return {...state, images: newImages};
    }
    default:
      return state;
      break;
  }
};
