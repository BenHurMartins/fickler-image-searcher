import 'react-native';
import React from 'react';
import {render, act, fireEvent} from '@testing-library/react-native';
import ViewTermsHistory from '../src/components/ViewTermsHistory';
import renderer from 'react-test-renderer';

const setSearchTerm = jest.fn();

describe('ViewTermsHistory component', () => {
  it('ViewTermsHistory renders correctly', () => {
    renderer.create(<ViewTermsHistory setSearchTerm={setSearchTerm} />);
  });
  it('ViewTermsHistory snapshot test', () => {
    const tree = renderer
      .create(<ViewTermsHistory setSearchTerm={setSearchTerm} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should show history terms', () => {
    const {getByText, getByTestId} = render(
      <ViewTermsHistory setSearchTerm={setSearchTerm} />,
    );
    //the test history terms is already in cache by the reducers
    act(() => {
      expect(getByText('test')).not.toBe(null);
    });
  });
});
