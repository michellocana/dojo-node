#!/usr/bin/env node
const chalk = require('chalk')
const weather = require('openweather-apis')

const API_KEY = 'f7144423490df5ac6546c5b8007cc1c8'
const latitude = -29.7949175
const longitude = -51.1465092

weather.setAPPID(API_KEY)
weather.setCoordinate(latitude, longitude)
weather.setUnits('metric')

console.log('Fetching weather...')

weather.getAllWeather((err, result) => {
 const { wind, main } = result
 const { temp, humidity, temp_min, temp_max } = main

 console.log(`Temp: ${temp}º (min ${temp_min}º / max ${temp_max}º)`)
 console.log(`Wind: ${wind.speed} km/h`)
 console.log(`Humidity: ${humidity}%`)
})
