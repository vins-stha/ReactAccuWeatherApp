
import {React, useState, useEffect} from 'react'
import { ReactDOM } from 'react-dom';

export default function WeatherCard() {
    const [city, setCity] = useState('');
    const imageBaseUrl = `${process.env.REACT_APP_IMAGE_URL}` //number.svg

    return (
        <div>
        <div className="results-container">
            <div className="main-result day">
                <h6 className="">Current weather in </h6>
                <pre className="title">DAY</pre>
                <div className="contents">
                    <img alt=""
                        className="weather-icon icon"
                        width="128px"
                        height="128px"
                        data-eager=""
                        src={`${imageBaseUrl}4.svg`}
                    />
                    <div className="temp">-8°C</div>
                    <div className="hi-lo-label">Hi</div>

                </div>
                <p className="phrase">dfghfjkhhfgdh</p>

            </div>
            <div className="main-result night">
                <h6 className="">Current weather in </h6>
                <pre className="title">NIGHT</pre>
                <div className="contents">
                    <img alt=""
                        className="weather-icon icon"
                        width="128px"
                        height="128px"
                        data-eager=""
                        src={`${imageBaseUrl}4.svg`}
                    />
                    <div className="temp">-8°C</div>
                    <div className="hi-lo-label">Hi</div>

                </div>
                <p className="phrase">dfghfjkhhfgdh</p>

            </div>
        </div>
    </div>
    )
}
