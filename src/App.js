import { Switch, Route } from "react-router-dom";
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
    <Navbar/>

    
      <div className="container">
                  <div className="row">
                    <CountriesList/>
                    <Switch>
                      {/* <Route exact path="/countries" component={CountriesList}/> */}
                      <Route path="/countries/:cca3" component={CountryDetails} />
                    </Switch>
                    
                  </div>
      </div> 
    </div>
  );
}

export default App;
