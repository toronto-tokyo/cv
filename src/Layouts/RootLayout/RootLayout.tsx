import React from 'react';
import LayoutWrapper from '../../components/LayoutWrapper';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import MainPage from '../../pages/MainPage';

const RootLayout: React.FC = () => {
  return (
    <LayoutWrapper>
      <Main>
        <MainPage />
      </Main>
      <Footer />
    </LayoutWrapper>
  );
};

export default RootLayout;
