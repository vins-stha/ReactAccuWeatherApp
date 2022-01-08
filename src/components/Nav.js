import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { wait } from '@testing-library/user-event/dist/utils';
import { Results } from './Results';


export default function Nav() {

    
    const [lat, setLat] = useState(null);
    const [lng, setLong] = useState(null);
    const [status, setStatus] = useState('');
    const [city, setCity] = useState('');
    const [ip, setIP] = useState('');
    const [locationStatus, setLocationStatus] = useState(false);
    const [locationKey, setLocationKey] = useState('');
    const [forecasts, setForecasts] = useState([]);
    const [locationKeys, setLocationKyes] = useState([])

    const imageBaseUrl = `${process.env.REACT_APP_IMAGE_URL}` //number.svg
    const apikey = 'ZbhK4z7IGp4N5IkIsZQyyx54gEsA9JGy'
    // `${process.env.REACT_APP_API_KEY}`
    const baseSearchUrl = `${process.env.REACT_APP_CITY_SEARCH_URL}`

    let searchParam = {}
    let gps = false

    useEffect(() => {
        getIP()       
    }, [])

    function get_location() {
        console.log('clicked')
        getLocation()
    }

    function setUserLocation(position) {  // callback function 

        console.log("In setUserLocation", position)
        // setLat(position.coords.latitude);
        // setLong(position.coords.longitude);     // never executed -- why?

        let laat = position.coords.latitude
        let lnng = position.coords.longitude

        console.log('we got your location', laat, lnng)
    }

    function getLocation() {

        if (!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
        } else {
                navigator.geolocation.getCurrentPosition((position) => {
              
                let lat = position.coords.latitude
                let lng = position.coords.longitude
                let searchWith = {
                    lat,
                    lng
                }
                             
                searchCity(searchWith)             

            }, (error) => {
                console.log(' Error : Location could not be retrieved', error);
            }
            );
        }
    }

    const getIP = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        setIP(res.data.IPv4)
      
    }
  
    function handleSearch(e) {
        e.preventDefault();

        if (city === undefined || city === "") {
            console.log('null city...seraching for ip ', ip)
            searchParam = { ip }
            searchCity(searchParam)
            //   weatherData(data)
        }

        else {
            console.log('searching for ...', city)
            searchParam = {city}
            searchCity(searchParam)
            //   weatherData(city)
        }
    }

    // search city with provided parameter like ip, gps or text
    function searchCity(searchParam)
    {
        let searchUrl
        if (searchParam.city !== undefined) 
        {
            // to get list of locaitonKeys
            console.log('search city = ', searchParam)
            searchLocationKeyWithText(searchParam)
        }
        else if (searchParam.ip !== undefined)
        {
            searchUrl = baseSearchUrl + `ipaddress?apikey=${apikey}&q=${searchParam.ip}`
        }
        else
        {            
            searchUrl = baseSearchUrl + `geoposition/search?apikey=${apikey}&q=${searchParam.lat},${searchParam.lng}`                   
        }
        return getLocationKey(searchUrl)  

    }

    // search with cityname

    function searchLocationKeyWithText(searchParam){

         const searchUrl = baseSearchUrl + `search?apikey=${apikey}&q=${searchParam.city}`
            console.log('serach url ', searchUrl)

            fetch(searchUrl,
                {
                    proxy: 'http://localhost:3000/'// 'https://61d8cd7648a39c60fe746d47--flamboyant-allen-2e2a99.netlify.app/' // 
                })
                .then((response) => {
                    // console.log('resp=>', response);
                    response.json().then((data) => {

                        console.log('data-length =>', data.length,'data =>', data[0].Key);
                        makeAPICall(city[0].Key)                                       
                        
                    });
                })
                .catch(err => console.log('err', err));
                
    }
    // get location/citykey to prceed to make call for forcast
    async function getLocationKey(searchUrl) {
        console.log('search url for location key =>', searchUrl)
        await fetch(searchUrl,
            {
                proxy: 'http://localhost:3000/'//'https://61d8cd7648a39c60fe746d47--flamboyant-allen-2e2a99.netlify.app/'
            })
            .then((response) => {
                response.json().then((data) => {
                    try {
                        setLocationKey(data.Key)
                        makeAPICall(locationKey === undefined ? data.key : locationKey)
                    } catch (error) {
                        console.log('error occured', error)

                    }
                });
            })
            .catch(err => console.log('err', err));

    }

    // finally fetch weather data for the city with locationkey
    const makeAPICall = (locationKey) => {
        let isLoaded = false
        let items = {}
        const url = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${apikey}`

        console.log('KEY=', locationKey, url)

        fetch(url,
            {
                proxy: 'http://localhost:3000/'//'https://61d8cd7648a39c60fe746d47--flamboyant-allen-2e2a99.netlify.app/'//'http://localhost:3000/'
            })
            .then((response) => {
                console.log('resp=>', response);
                response.json().then((data) => {
                    data.DailyForecasts.length > 0 ? setForecasts(data.DailyForecasts) : setForecasts([]);
                   });
            })
            .catch(err => console.log('err', err));
    }

    const weatherData = forecasts.map((forecast,id)=>{
        return <Results key ={forecast.id} attrs = {forecast}/>
    })
   
    return (
        <>
            <div className='head-nav'>
                <div className="nav-logo">
                    <h2>Weather App</h2>
                </div>
                <form className="citybox" onSubmit={handleSearch}>
                    <label htmlFor="weather input">Search for</label>
                    <input
                        type="text"
                        className='searchBox'
                        placeholder="Enter yoru city nema"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <div className='GPS' onClick={getLocation}><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-geo-alt gps" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    </div>
                </form>
            </div>
       
            {weatherData}

        </>

    )
}
