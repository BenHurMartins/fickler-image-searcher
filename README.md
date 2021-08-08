# Flickr Image Searcher / React Native App

This is an app to search images on flickr with terms.

- First step to run this app is to setup the react-native development environment, available [here](https://reactnative.dev/docs/environment-setup).

- Clone the repository.

- Get an api key on [flickr](https://www.flickr.com/services/api/misc.api_keys.html).

- Create a file called .env and inform your keys in the following format:

```
API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

- Execute:

```
npm i
```

If you are using iOS execute:

```
npx pod-install
```

- Then execute command, depending on the OS:

```
npx react-native run-ios
```

or

```
npx react-native run-android
```

## Stack

- React-Native 0.64.2
- React Hooks: state management and redux
- Axios
- React Redux to manage global states
- AsyncStorage to store history of searched terms

  _This app is not suitable for Expo, it is a bare react-native app._

```

```
