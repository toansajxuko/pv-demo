import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import HubDashboard from './components/DeFiPage/HubDashboard';
import Footer from './components/commons/Footer';
import Header from './components/commons/Header';
import NFTBox from './components/NftPage/NftBox';

function App() {
  return (
   <Container>
     {/* <Header /> */}
      <NFTBox />
      {/* <Footer /> */}
   </Container>
  );
}
const Container = styled.div`
  display:flex;
  background-color:#f7f8f9;
  flex-direction:column;
  flex:1;
  height:100vh;
  padding-left:25%;
  padding-right:25%;
`
export default App;
