import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/****
 * 
 * 
 * 
 * {
	"Headline": {
		"EffectiveDate": "2022-01-08T07:00:00+02:00",
		"EffectiveEpochDate": 1641618000,
		"Severity": 4,
		"Text": "Snowfall from Saturday morning into Saturday evening will total 1-2 inches",
		"Category": "snow",
		"EndDate": "2022-01-09T01:00:00+02:00",
		"EndEpochDate": 1641682800,
		"MobileLink": "http://www.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?lang=en-us",
		"Link": "http://www.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?lang=en-us"
	},
	"DailyForecasts": [
		{
			"Date": "2022-01-07T07:00:00+02:00",
			"EpochDate": 1641531600,
			"Temperature": {
				"Minimum": {
					"Value": 9,
					"Unit": "F",
					"UnitType": 18
				},
				"Maximum": {
					"Value": 17,
					"Unit": "F",
					"UnitType": 18
				}
			},
			"Day": {
				"Icon": 4,
				"IconPhrase": "Intermittent clouds",
				"HasPrecipitation": true,
				"PrecipitationType": "Snow",
				"PrecipitationIntensity": "Moderate"
			},
			"Night": {
				"Icon": 38,
				"IconPhrase": "Mostly cloudy",
				"HasPrecipitation": false
			},
			"Sources": [
				"AccuWeather"
			],
			"MobileLink": "http://www.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?day=1&lang=en-us",
			"Link": "http://www.accuweather.com/en/fi/helsinki/133328/daily-weather-forecast/133328?day=1&lang=en-us"
		}
	]
}
 * 
 * 
 * 
 */