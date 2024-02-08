import React from 'react';
import LayoutWrapper from '../../components/LayoutWrapper';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import MainPage from '../../pages/MainPage';

const RootLayout: React.FC = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <MainPage />
      </Main>
      <Footer />
    </LayoutWrapper>
  );
};

export default RootLayout;
