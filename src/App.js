import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import PopupCartContainer from './components/Main/PopupCart/PopupCartContainer';


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <PopupCartContainer />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
