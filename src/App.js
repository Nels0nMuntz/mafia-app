import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import PopupCartContainer from './components/Main/PopupCart/PopupCartContainer';
import MainContainer from './components/Main/MainContainer';


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <PopupCartContainer />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
