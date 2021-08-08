module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-ratings|react-native-vector-icons|react-native-elements|react-native-size-matters)/)',
  ],
  globals: {
    __DEV__: true,
  },
  setupFiles: ['<rootDir>/__mocks__/mocks.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
