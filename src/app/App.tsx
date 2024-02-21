import LayoutWrapper from 'components/LayoutWrapper';
import Main from 'components/Main';
import MainPage from 'pages/MainPage';
import Footer from 'components/Footer';

function App() {
  return (
    <LayoutWrapper>
      <Main>
        <MainPage />
      </Main>
      <Footer />
    </LayoutWrapper>
  );
}

export default App;
