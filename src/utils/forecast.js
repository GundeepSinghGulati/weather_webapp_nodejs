const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=0edd35d872cc0ec42d1810314b85ecca&query="+ latitude + ',' + longitude;
    request({ url, json:true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            const temperature = body.current.temperature;
            const feelslike = body.current.feelslike;
            
            callback(undefined, `It is currently ${temperature} degrees out. It feels like ${feelslike} out`)
        }

    })
} 

module.exports = forecast

