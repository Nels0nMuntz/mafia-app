import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';


function App() {
  return (
    <div className="App">
      <Header />
      <Menu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
