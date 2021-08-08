import 'react-native';
import React from 'react';
import {render, act} from '@testing-library/react-native';
import ListItem from '../src/components/ListItem';
import renderer from 'react-test-renderer';

const item = {
  farm: '1',
  server: '1',
  id: '1',
  secret: 'a',
};

describe('ListItem component', () => {
  it('ListItem renders correctly', () => {
    renderer.create(<ListItem onPress={() => null} item={item} />);
  });
  it('ListItem snapshot test', () => {
    const tree = renderer
      .create(<ListItem onPress={() => null} item={item} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
