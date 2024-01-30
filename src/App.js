import './App.css';
import Header from './Header.js';
import String from './String.js'
import Footer from './Footer.js';



function App() {
  return (
    <div className="App">
      <Header className='header'/>
      <div className="app__body">
        <String/>
      </div>
      <Footer className='footer'/>
    </div>
  );
}

export default App;
