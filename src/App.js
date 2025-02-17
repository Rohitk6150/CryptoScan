// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import CoinDetails from './components/CoinDetails';
import Exchanges from './components/Exchanges';
import { Container } from '@chakra-ui/react';
function App() {
  return (
    
    <Router>

      <Header/>
      <Container  maxWidth={"full"} padding={"0"}><Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/Coins" element={<Coins/>}/>
        <Route path="/Exchanges" element={<Exchanges/>}/>
        <Route path="/Coin/:id" element={<CoinDetails/>}/>
      </Routes>
      </Container>
      
    </Router>
  );
}

export default App;
