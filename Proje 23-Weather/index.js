const container = document.querySelector('.container');
const searchBtn = document.querySelector('.search-box button');
const infos = document.querySelector('.information');
const weather = document.querySelector('.weather');
const invalid = document.querySelector('.invalid');

searchBtn.addEventListener("click",() => {
    const APIKey = "f8cefd1ebbe6f16244c709cf169f2bbe";
    const location = document.querySelector('.search-box input').value;

    if(location === ''){
        return
    } 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}`)
    .then(response => response.json())
    .then((data) => {
        if(data.cod === '404'){
            container.style.height = '550px';
            infos.style.display = 'none';
            weather.style.display = 'none';
            invalid.style.display = 'block';
            invalid.classList.add('fadeIn');
            return;
        }
        console.log(data);
        invalid.style.display = 'none';
        invalid.classList.remove('fadeIn');

        const image = document.querySelector('.information i');
        const temperature = document.querySelector('.information .temp');
        const humidty = document.querySelector('.weather .humidty span');
        const wind = document.querySelector('.weather .wind span');
        const description = document.querySelector('.information .description');

        switch(data.weather[0].main){
            case 'Clear':
                image.classList.add('fa-cloud-sun');
                break;
            case 'Rain':
                image.classList.add('fa-cloud-rain');
                break;
            case 'Snow':
                image.classList.add('fa-snowflake');
                break;
            case 'Haze':
                image.classList.add('fa-smog');
                break;
            default:
                image.classList.add('fa-water');
        }

        temperature.innerHTML = `${parseInt(data.main.temp) - 273}<span>C</span>`
        description.innerHTML = `${data.weather[0].description}`;
        humidty.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${parseInt(data.wind.speed)}km/h`;

        infos.style.display = "";
        weather.style.display = '';
        infos.classList.add('fadeIn');
        weather.classList.add('fadeIn');
        container.style.height = '550px'

    })
})