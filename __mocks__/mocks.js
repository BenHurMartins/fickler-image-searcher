import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-redux', () => {
  const mockDispatch = jest.fn();
  const ActualReactRedux = jest.requireActual('react-redux');
  const state = {
    images: [
      {farm: 1, server: '1', id: '1', secret: 'a'},
      {farm: 2, server: '2', id: '2', secret: 'b'},
    ],
    page: 1,
    searchTerm: 'test',
    termsHistory: ['test'],
  };
  return {
    ...ActualReactRedux,
    useSelector: () => state,
    useDispatch: () => mockDispatch,
  };
});

jest.mock('../src/services/api.js', () => {
  const getImages = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve([]);
    });
  });

  return {
    getImages,
  };
});
