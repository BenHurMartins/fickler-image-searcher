import 'react-native';
import React from 'react';
import {render, act} from '@testing-library/react-native';
import CardTermHistory from '../src/components/CardTermHistory';
import renderer from 'react-test-renderer';

describe('CardTermHistory component', () => {
  it('CardTermHistory renders correctly', () => {
    renderer.create(<CardTermHistory onPress={() => null} term={'Test'} />);
  });
  it('CardTermHistory snapshot test', () => {
    const tree = renderer
      .create(<CardTermHistory onPress={() => null} term={'Test'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should set the term', () => {
    const {getByText} = render(
      <CardTermHistory onPress={() => null} term={'Test'} />,
    );
    act(() => {
      expect(getByText('Test')).not.toBe(null);
    });
  });
});
