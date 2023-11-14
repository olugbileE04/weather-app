const API_KEY ='54240ba12518c871f846632de46102b1'

const makeIconURL =(iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWeatherData =async (city, units = 'metric') =>{
    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const data = await fetch(URL).then((res)=>res.json())
    .then((data)=>data);

    const{weather, main:{temp, feels_like, temp_min, temp_max, pressure, humidity},
    wind:{speed},
    sys:{country, sunrise, sunset},
    name,
}= data;

const {Descriptions, icon} =weather[0]
return{
    temp,
    iconURL:makeIconURL(icon),
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    sunrise,
    sunset,
    name,
    Descriptions,
    icon
}
}

export default getFormattedWeatherData;