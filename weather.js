//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1342f8dd595eda677ca40143519800de')
.then((data) => data.json())
  .then((parsedData) => {
const nameOfLocation = parsedData.name;
    
document.getElementsByClassName('location')[0].textContent = nameOfLocation;
    
const dateUnix = parsedData.dt;
const date = new Date(dateUnix * 1000);
console.log(date);
    
date.getDay() +
' ' +
date.getDate() +
' ' +
date.getMonth() +
' ' +
date.getFullYear();


const weather = parsedData.weather[0].main;
document.getElementsByClassName('sky')[0]
document.getElementById('temperature')[0]
textcontent = 
math.floor(avgtemp - 273 ) + 'x/BA' + '' + 'c';
const maxtemp = parsedData.main.temp_max;
const mintemp = parsedData.min.temp_min;
document.getElementsByClassName('range')[0].textContent=
math.floor(maxtemp - 273) + 'x/BA' + ' ' + 'c' + ' ' + '/' + ' ';
math.floor(mintemp - 273) + 'x/BA' + ' ' + 'C';
  });


  
