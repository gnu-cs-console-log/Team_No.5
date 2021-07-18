import './App.css';
import Cardview from './cardView';
import Midcontainer from './Midcontainer';
import Nav from './Nav';
import Header from './Header';
function App() {
  return (
    
    <div className="App">
      <Header />
      <Nav />
     <div id="main_container">
        <Cardview />
    </div>
        <Midcontainer />
    </div>
   
  );
}

export default App;
