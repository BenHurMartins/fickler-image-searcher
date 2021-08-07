import React from 'react';
import {
  ViewContainer,
  SearchBarComponent,
  FlatListComponent,
} from '../../components';

const Home = () => {
  return (
    <ViewContainer>
      <SearchBarComponent />
      <FlatListComponent />
    </ViewContainer>
  );
};

export default Home;
