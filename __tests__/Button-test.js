import 'react-native';
import React from 'react';
import {render, act} from '@testing-library/react-native';
import Button from '../src/components/Button';
import renderer from 'react-test-renderer';

describe('Button component', () => {
  it('Button renders correctly', () => {
    renderer.create(<Button onPress={() => null} title={'Test'} />);
  });
  it('Button snapshot test', () => {
    const tree = renderer
      .create(<Button onPress={() => null} title={'Test'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should set the title', () => {
    const {getByText} = render(<Button onPress={() => null} title={'Test'} />);
    act(() => {
      expect(getByText('Test')).not.toBe(null);
    });
  });
});
