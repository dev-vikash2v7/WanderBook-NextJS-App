import '../styles/globals.css'
import { ChakraProvider  } from '@chakra-ui/react';
import AuthContextProvider from '../context/AuthContextProvider';
import Footer from '../components/Footer';
import React ,{ useState , useEffect } from "react"
import LoadingScreen from '../components/pre_loader/loadingScreen';
// import {ToastContainer} from 'react-nextjs-toast';
import GuestContextProvider from "../context/GuestContext";
import { theme } from '../theme';

// Custom theme for WanderBook

function MyApp({ Component, pageProps }) {


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    },2000);
  }, []);


  return (
<>
    {loading?
      (<ChakraProvider theme={theme}>
      <AuthContextProvider>
          <GuestContextProvider>
      <Component {...pageProps} />
      {/* <ToastContainer align={"center"} position={"top"} id="toast-comp-3"/> */}
      <Footer />
        </GuestContextProvider>
      </AuthContextProvider>
    </ChakraProvider>):( <LoadingScreen /> )
    }
  </>
  )
}

export default MyApp;
