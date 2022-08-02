import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import KnowBrazil from '../components/KnowBrazil';
import { Packeges } from '../components/Packages';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Packeges />
        <KnowBrazil />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
