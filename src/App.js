import './App.css';
import WeatherCard2 from './components/WeatherCard2';
import Nav from './components/Nav';
import bootstrap  from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container dark-bg">
    <Nav/>
    <WeatherCard2/>
    </div>
  );
}

export default App;
