
import {React, useState} from 'react'

export default function WeatherCard2() {
    const imageBaseUrl = `${process.env.REACT_APP_IMAGE_URL}` 
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
