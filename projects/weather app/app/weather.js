const container = document.querySelector('.container')
const search = document.querySelector('.search-box button')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')
const error404 = document.querySelector('.not-found')

search.addEventListener('click', () => {

  const APIKey = '39081a08874fe7709061efa987650040'
  const city = document.querySelector('.search-box input').value

  if (city === '')
    return

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&
  units=standard`).then(response => response.json()).then
  (json => {

    if (json.cod === '404') {
      container.style.height = '400px'
      weatherBox.style.display = 'none'
      weatherDetails.style.display = 'none'
      error404.style.display = 'block'
      error404.classList.add('fadeIn')
      return
    }

    error404.style.display = 'none'
    error404.classList.remove('fadeIn')

    const image = document.querySelector('.weather-box img')
    const temperature = document.querySelector('.weather-box .temperature')
    const description = document.querySelector('.weather-box .description')
    const humidity = document.querySelector('.weather-details .humidity span')
    const wind = document.querySelector('.weather-details .wind span')

    switch (json.weather[0].main) {
      case 'Clear':
        image.src = 'images/clear.png'
        break
      case 'Rain':
        image.src = 'images/rain.png'
        break
      case 'Snow':
        image.src = 'images/snow.png'
        break
      case 'Clouds':
        image.src = 'images/clouds.png'
        break
      case 'Haze':
        image.src = 'images/haze.png'
        break
      default:
        image.src = ''
    }

    let kelvin = parseInt(json.main.temp)
    let farenheit = Math.round(((kelvin - 273.15) * 1.8) + 32)
    let celsius = Math.round(kelvin - 273.15)

    temperature.innerHTML = `${kelvin}<span>K</span>`


    description.innerHTML = `${(json.weather[0].description)}`
    humidity.innerHTML = `${(json.main.humidity)}%`
    wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`
    
    weatherBox.style.display = ''
    weatherDetails.style.display = ''
    weatherBox.classList.add('fadeIn')
    weatherDetails.classList.add('fadeIn')
    container.style.height = '590px'

  })
})

function convertC() {
  const APIKey = '39081a08874fe7709061efa987650040'
  const city = document.querySelector('.search-box input').value

  if (city === '')
    return

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&
  units=standard`).then(response => response.json()).then
  (json => {
    const image = document.querySelector('.weather-box img')
    const temperature = document.querySelector('.weather-box .temperature')
    const description = document.querySelector('.weather-box .description')
    const humidity = document.querySelector('.weather-details .humidity span')
    const wind = document.querySelector('.weather-details .wind span')
    
    let kelvin = parseInt(json.main.temp)
    let farenheit = Math.round(((kelvin - 273.15) * 1.8) + 32)
    let celsius = Math.round(kelvin - 273.15)
    
    temperature.innerHTML = `${celsius}<span>C</span>`
  })}
  
function convertF() {
  const APIKey = '39081a08874fe7709061efa987650040'
  const city = document.querySelector('.search-box input').value

  if (city === '')
    return

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&
  units=standard`).then(response => response.json()).then
  (json => {
    const image = document.querySelector('.weather-box img')
    const temperature = document.querySelector('.weather-box .temperature')
    const description = document.querySelector('.weather-box .description')
    const humidity = document.querySelector('.weather-details .humidity span')
    const wind = document.querySelector('.weather-details .wind span')
    
    let kelvin = parseInt(json.main.temp)
    let farenheit = Math.round(((kelvin - 273.15) * 1.8) + 32)
    let celsius = Math.round(kelvin - 273.15)
    
    temperature.innerHTML = `${farenheit}<span>F</span>`
  })}

function convertK() {
  const APIKey = '39081a08874fe7709061efa987650040'
  const city = document.querySelector('.search-box input').value

  if (city === '')
    return

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&
  units=standard`).then(response => response.json()).then
  (json => {
    const image = document.querySelector('.weather-box img')
    const temperature = document.querySelector('.weather-box .temperature')
    const description = document.querySelector('.weather-box .description')
    const humidity = document.querySelector('.weather-details .humidity span')
    const wind = document.querySelector('.weather-details .wind span')
    
    let kelvin = parseInt(json.main.temp)
    let farenheit = Math.round(((kelvin - 273.15) * 1.8) + 32)
    let celsius = Math.round(kelvin - 273.15)
    
    temperature.innerHTML = `${kelvin}<span>K</span>`
  })}

const obj = {
  "coord":{"lon":-3.7396,"lat":5.2038},
  "weather":[{"id":804,
              "main":"Clouds",
              "description":"overcast clouds",
              "icon":"04n"}],
  "base":"stations",
  "main":{"temp":27.99,
          "feels_like":32.23,
          "temp_min":27.99,
          "temp_max":27.99,
          "pressure":1008,
          "humidity":81,
          "sea_level":1008,
          "grnd_level":1008},
  "visibility":10000,
  "wind":{"speed":3.52,
          "deg":201,
          "gust":6.65},
  "clouds":{"all":89},
  "dt":1676494748,
  "sys":{"type":1,
  "id":1162,
  "country":"CI",
  "sunrise":1676442633,
  "sunset":1676485675},
  "timezone":0,
  "id":2288873,
  "name":"France",
  "cod":200}