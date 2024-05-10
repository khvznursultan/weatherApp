let dayWeek = document.querySelector('.weekDay')
let date = document.querySelector('.date')
let img = document.querySelector('img')
let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let desc = document.querySelector('.desc')
let weather = document.querySelector('.weather')
let btn = document.querySelector('button')
let inp = document.querySelector('input')




let nowDate = new Date()
var daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let week = daysOfWeek[nowDate.getDay()]
let day = nowDate.getDate()
let month = nowDate.getMonth()
let year = nowDate.getFullYear()



btn.addEventListener('click', (e)=>{
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=9ab96eb786ad5f3ac1a2d04d38212cb3&units=metric`)
    .then((res)=>res.json())
    .then((data)=>{
        let back = data.weather[0].icon.slice(2)
        if(back === 'n'){
            weather.style.background = 'url("img/-png.jpg")'
        }
        else if(back === 'n'){
            weather.style.background = 'url("img/sea-landscape-with-digital-art-style_23-2151158369")'
        }
        let GTM = data.timezone/3600;
        const dTimestamp = data.dt
        let dMinutes = Math.floor((dTimestamp/60)%24)
        const dHours = Math.floor((dTimestamp/3600)%24)

        let dHoursGTM = (dHours + GTM) % 24
        
        if(dHoursGTM < 0){
            dHoursGTM += 24;
        }
        else if(dHoursGTM < 14){
            dHoursGTM = `0${dHoursGTM}`
        }
        else if(dMinutes < 10){
            dMinutes=`0${dMinutes}`
        }
        let dTime = `${dHoursGTM}:${dMinutes}`
        
      
        const sunsetTimestamp = data.sys.sunset;
        const sunsetMinutes = Math.floor((sunsetTimestamp/60) %24)
        const sunsetHours = Math.floor((sunsetTimestamp/3600)%24)

    
        let sunsetHoursGTM =(sunsetHours + GTM) % 24

        if(sunsetHoursGTM < 0){
            sunsetHoursGTM += 24;
        }
        if(sunsetHoursGTM < 14){
            sunsetHoursGTM = `0${sunriseHoursGTM}`
        }
        let sunsetTime = `${sunsetHoursGTM}:${sunsetMinutes}`
        console.log(sunsetTime);

        const sunriseTimestamp = data.sys.sunrise;
        const sunriseMinutes = Math.floor((sunriseTimestamp/60) % 60);
        const sunriseHours = Math.floor((sunriseTimestamp/3600)%24);

        let sunriseHoursGTM = (sunriseHours + GTM)%24

        if(sunriseHoursGTM < 0){
            sunriseHoursGTM += 24;
        }
        if(sunriseHoursGTM < 14){
            sunriseHoursGTM = `0${sunriseHoursGTM}`
        }
        let sunriseTime =   `${sunriseHoursGTM}:${sunriseMinutes}`
        console.log(sunriseTime);
    weather.innerHTML = `   
    <h3 class="dayWeek">${week}</h3>
        <p class="date">${day}.0${month}.${year}</p>
        <><>
        <form action="">
            <input type="text">
            <button>Получить</button>
        </form>
        <p class="city">${data.name}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="">
        <p class = 'sun'>Рассвет:${sunriseTime}</p>
        <p class = 'sun'>Закат:${sunsetTime}</p>
        <h2 class="temp">${data.main.temp}°C</h2>
        <p class="desc">${data.weather[0].description}</p>
    `
})
})






