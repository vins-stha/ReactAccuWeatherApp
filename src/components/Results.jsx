import React from 'react'

export const Results = (params) => {
    const { Date, Temperature, Day, Night } = params.attrs

    const imageBaseUrl = `${process.env.REACT_APP_IMAGE_URL}` //number.svg

    function toCelsius(tempFah) {
        return Math.round((tempFah - 32) * (5 / 9))
    }
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
                            src={`${imageBaseUrl}${Day.Icon}.svg`}
                        />
                        <div className="temp">{toCelsius(Temperature.Maximum.Value)}°C</div>
                        <div className="hi-lo-label">Hi</div>

                    </div>
                    <p className="phrase">{Day.IconPhrase}</p>

                </div>
                <div className="main-result night">

                    <h6 className="">Current weather in </h6>
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



