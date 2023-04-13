import { Container } from './style';
import Header from '../Header';
import defaultTeme from '../../assets/styles/themes/default';
import DefaultRoutes from '../../routes';
import { ThemeProvider } from 'styled-components';
import Global from '../../assets/styles/global';
import SessionProvider from '../../contexts/Session';
import Footer from '../Footer';

export default function App() {

  return (
   <ThemeProvider theme={defaultTeme}>

        <Global/>

        <SessionProvider>

           <Header/>

           <Container>

              <DefaultRoutes/>

           </Container>

           <Footer/>

        </SessionProvider>

   </ThemeProvider>
  )
}

