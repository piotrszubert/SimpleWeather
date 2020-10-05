import React from 'react';
import classes from './Conditions.module.css'

// https://stackoverflow.com/a/3291856
// eslint-disable-next-line
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const conditions = (props) => {
    return (
        <div>
            {props.error && <strong className={classes.Strong}>Wpisz poprawne miasto</strong>}
            {props.loading && <div className={classes.Loader}> </div>}

            {props.responseObj.cod === 200 ?
                <div className={classes.Wrapper}>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>Obecnie jest {Math.round(props.responseObj.main.temp)} stopni</p>
                    <p>{(props.responseObj.weather[0].description).capitalize()}</p>
                </div>
                : null
            }
        </div>
    )
}

export default conditions;