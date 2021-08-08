import 'react-native';
import React from 'react';
import FlatListComponent from '../src/components/FlatListComponent';
import renderer from 'react-test-renderer';

describe('FlatListComponent component', () => {
  it('FlatListComponent renders correctly', () => {
    renderer.create(<FlatListComponent />);
  });
  it('FlatListComponent snapshot test', () => {
    const tree = renderer.create(<FlatListComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
