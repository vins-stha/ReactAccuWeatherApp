import logo from './logo.svg';
import './App.css';
import WeatherCard from './components/WeatherCard';
import Nav from './components/Nav';
// import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import bootstrap  from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Results } from './components/Results';

// RyXbAA7UNoCtgIyXBfGvYGauaRATt2cM
function App() {
  return (
    <div className="container dark-bg">
    <Nav/>
    <WeatherCard/>
    </div>
  );
}

export default App;
