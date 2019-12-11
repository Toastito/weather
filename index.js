let request = require('request');
const argv = require('yargs').argv;

let apiKey = 'e49ec59cd778aa4dac11de0054a71e97';
let city = argv.c || 'san francisco county';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}, and the min temperature is ${weather.main.temp_min} and the max temperature is ${weather.main.temp_max}!`;
    console.log(message);

  }
});