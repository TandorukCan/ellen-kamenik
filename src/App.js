import "./App.css";
import MyBackgroundImage from "./assets/bg3.jpg";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <div
          className="App"
          style={{ backgroundImage: `url(${MyBackgroundImage})` }}
        >
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
          <Alert />
        </div>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
