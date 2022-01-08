import React from 'react'

export const WeatherCard = (params) => {
    const { Date, Temperature, Day, Night } = params.attrs
    const city = params.city

    const imageBaseUrl = `${process.env.REACT_APP_IMAGE_URL}` //number.svg

    function toCelsius(tempFah) {
        return Math.round((tempFah - 32) * (5 / 9))
    }
    return (
        <div>
            <h6 className="">Weather Forecast for {city} </h6>
            <div className="results-container">
            
                <div className="main-result day">
                   
                    <pre className="title">DAY {Date.toString().substr(0,10)}</pre>
                    <div className="contents">
                        <img alt=""
                            className="weather-icon icon"
                            width="128px"
                            height="128px"
                            data-eager=""
                            src={`${imageBaseUrl}${Day.Icon}.svg`}
                        />
                        <div className="temp">{toCelsius(Temperature.Maximum.Value)}°C</div>
                        <div className="hi-lo-label">Hi</div>

                    </div>
                    <p className="phrase">{Day.IconPhrase}</p>

                </div>
                <div className="main-result night">

                    <pre className="title">NIGHT </pre>
                    <div className="contents">

                        <img alt=""
                            className="weather-icon icon"
                            width="128px"
                            height="128px"
                            data-eager=""
                            src={`${imageBaseUrl}${Night.Icon}.svg`}
                        />

                        <div className="temp">{toCelsius(Temperature.Minimum.Value)}°C</div>
                        <div className="hi-lo-label">Lo</div>

                    </div>
                    <p className="phrase">{Night.IconPhrase}</p>
                </div>

            </div>
        </div>
    )
}



