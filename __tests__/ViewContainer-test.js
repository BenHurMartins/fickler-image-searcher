import 'react-native';
import React from 'react';
import {Text} from 'react-native';
import {render, act, fireEvent} from '@testing-library/react-native';
import ViewContainer from '../src/components/ViewContainer';
import renderer from 'react-test-renderer';

const children = <Text>test</Text>;
describe('ViewContainer component', () => {
  it('ViewContainer renders correctly', () => {
    renderer.create(<ViewContainer>{children}</ViewContainer>);
  });
  it('ViewContainer snapshot test', () => {
    const tree = renderer
      .create(<ViewContainer>{children}</ViewContainer>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should show history terms', () => {
    const {getByText, getByTestId} = render(
      <ViewContainer>{children}</ViewContainer>,
    );
    act(() => {
      expect(getByText('test')).not.toBe(null);
    });
  });
});
