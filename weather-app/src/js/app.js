const weatherStats = document.getElementById('weather-stats')
const weatherImage = document.getElementById('weather-image')
const temperature = document.getElementById('temperature')
const getData = () =>{
    const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=00e9979967e8d1dbb4432839e40cb0d8'
    fetch(URL)
     .then(res => res.json())
     .then(res =>{
          console.log(res);
          buildData(res)
      })
}
getData()

const weatherKinds = {
    Clouds: {
        icon: '/src/assets/static/cloudy-day-3.svg',
        image: '/src/assets/cloudy.jpg',
    }
}

const buildData = (data) =>{
    const fragment = document.createDocumentFragment()
    const fragmentImage = document.createDocumentFragment()
    if(data.weather[0].main == 'Clouds'){
        const weatherForcast = document.createElement('div')
        weatherForcast.classList.add('icon-weather__container')
        fragment.appendChild(weatherForcast)

        const bigIcon = document.createElement('img')
        bigIcon.src = weatherKinds.Clouds.icon
        bigIcon.classList.add('big-icon')
        weatherForcast.appendChild(bigIcon)
        
        const descriptionWeather = document.createElement('p')
        descriptionWeather.textContent = data.weather[0].description
        descriptionWeather.classList.add('weather-title')
        weatherForcast.appendChild(descriptionWeather)

        const variablesStats = document.createElement('div')
        variablesStats.classList.add('stat')
        fragment.appendChild(variablesStats)

        const statHumidity = document.createElement('div')
        variablesStats.appendChild(statHumidity)

        const textHumidity = document.createElement('p')
        textHumidity.textContent = 'Humidity: ' + data.main.humidity + '%' 
        statHumidity.appendChild(textHumidity)

        const humidity = document.createElement('img')
        humidity.src = '/src/assets/static/humidity-icon.png'
        statHumidity.appendChild(humidity)

        const statFeelsLike = document.createElement('div')
        variablesStats.appendChild(statFeelsLike)

        const textFeelsLike = document.createElement('p')
        textFeelsLike.textContent = 'Feels Like: ' + Math.round(data.main.feels_like - 273.15) + '°'
        statFeelsLike.appendChild(textFeelsLike)

        const feelsLike = document.createElement('img')
        feelsLike.src = '/src/assets/static/feel-like-icon.png'
        statFeelsLike.appendChild(feelsLike)

        const statWind = document.createElement('div')
        variablesStats.appendChild(statWind)

        const textWind = document.createElement('p')
        textWind.textContent = 'Wind Speed: ' + data.wind.speed
        statWind.appendChild(textWind)

        const wind = document.createElement('img')
        wind.src = '/src/assets/static/wind-icon.png'
        statWind.appendChild(wind)

        const statPressure = document.createElement('div')
        variablesStats.appendChild(statPressure)

        const textPressure = document.createElement('p')
        textPressure.textContent = 'Pressure: ' + data.main.pressure
        statPressure.appendChild(textPressure)

        const pressure = document.createElement('img')
        pressure.src = '/src/assets/static/pressure-icon.png'
        statPressure.appendChild(pressure)
        
        const bigImage = document.createElement('img')
        bigImage.src = weatherKinds.Clouds.image
        bigImage.classList.add('big-image')
        fragmentImage.appendChild(bigImage)

        temperature.textContent = Math.round(data.main.temp - 273.15) + '°'
    }
    weatherStats.appendChild(fragment)
    weatherImage.appendChild(fragmentImage)
}