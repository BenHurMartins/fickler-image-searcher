import 'react-native';
import React from 'react';
import Home from '../src/scenes/Home';
import renderer from 'react-test-renderer';
describe('rendering test for Home.js', () => {
  it('Home renders correcly', () => {
    renderer.create(<Home />);
  });
  it('Home snapshot test', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
