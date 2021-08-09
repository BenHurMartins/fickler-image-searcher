import React from 'react';
import {
  ViewContainer,
  SearchBarComponent,
  FlatListComponent,
  LoadingIndicatorComponent,
} from '../../components';

const Home = () => {
  return (
    <ViewContainer>
      <LoadingIndicatorComponent />
      <SearchBarComponent />
      <FlatListComponent />
    </ViewContainer>
  );
};

export default Home;
