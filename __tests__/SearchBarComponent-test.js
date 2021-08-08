import 'react-native';
import React from 'react';
import {render, act, fireEvent} from '@testing-library/react-native';
import SearchBarComponent from '../src/components/SearchBarComponent';
import renderer from 'react-test-renderer';

describe('SearchBarComponent component', () => {
  it('SearchBarComponent renders correctly', () => {
    renderer.create(<SearchBarComponent />);
  });
  it('SearchBarComponent snapshot test', () => {
    const tree = renderer.create(<SearchBarComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should show history terms', () => {
    const {getByText, getByTestId} = render(<SearchBarComponent />);
    const input = getByTestId('input');
    fireEvent.changeText(input, 'test');
    act(() => {
      expect(getByText('test')).not.toBe(null);
    });
  });
});
