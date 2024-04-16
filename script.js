document.addEventListener("DOMContentLoaded", () => {
    // setTimeout(() => {
    //     document.getElementById("weather_card").style.display = "block";
    // }, 5000);

const wcity=document.getElementById("weacity");
const inbox=document.getElementById("inputbox");
const search=document.getElementById("searchbox");
const imag=document.getElementById("weaimg");
const tempwea=document.getElementById("weatempid");
const descwea=document.getElementById("weadesc");
const per=document.getElementById("humper");
const windsp=document.getElementById("speed");
const hightemp=document.getElementById("high");
const lowtemp=document.getElementById("low");
const containers=document.querySelector(".container");
const tempselect=document.querySelector("#temperature");



async function fn(city,state,country){
   try{
    const api="2029321592022c0c890a6168d4e9198a";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    const weather_data= await fetch(`${url}`).then(response=>response.json());
    
    console.log(weather_data);
    wcity.innerHTML=`${weather_data.name}`;
  
    descwea.innerHTML=`${weather_data.weather[0].description}`;
   
    per.innerHTML=`${weather_data.main.humidity}%`;
    windsp.innerHTML=`${weather_data.wind.speed}Km/H`;
    if(tempselect.value=="Fahrenheit")
  {
    tempwea.innerHTML = `${Math.round(((weather_data.main.temp - 273.15) * 9) / 5 + 32)}°F`;
    hightemp.innerHTML=`High:${Math.round(((weather_data.main.temp_max - 273.15) * 9) / 5 + 32)}°F`
    lowtemp.innerHTML=`Low:${Math.round(((weather_data.main.temp_min - 273.15) * 9) / 5 + 32)}°F`
  }
  else{
    tempwea.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`
    hightemp.innerHTML=`High:${Math.round(weather_data.main.temp_max - 273.15)}°C`
    lowtemp.innerHTML=`Low:${Math.round(weather_data.main.temp_min - 273.15)}°C`
  }

    if(`${weather_data.weather[0].main}`== 'Smoke')
    {
        imag.src="smoke.png";
        document.body.style.backgroundImage = "url('smoke1.jpeg')";
    }
    else if(`${weather_data.weather[0].main}`== 'Clouds'){
        imag.src="clouds.png";
        document.body.style.backgroundImage="url('clouds1.jpeg')";
    }
    else if(`${weather_data.weather[0].main}`== 'Clear'){
        imag.src="clear.png";
        document.body.style.backgroundImage="url('clearsky.jpeg')";
    }
    else if(`${weather_data.weather[0].main}`== 'Drizzle'){
        imag.src="drizzle.png";
        document.body.style.backgroundImage="url('drizzle1.jpg')";
    }
    else if(`${weather_data.weather[0].main}`== 'Mist'){
        imag.src="mist.png";
        document.body.style.backgroundImage="url('mist1.jpeg')";
    }
    else if(`${weather_data.weather[0].main}`== 'Rain'){
        imag.src="rain.png";
        document.body.style.backgroundImage="url('rain1.jpeg')";
    }
    else if(`${weather_data.weather[0].main}`== 'Snow'){
        imag.src="snow.png";
        document.body.style.backgroundImage="url('snow1.jpeg')";
    }
    else if(`${weather_data.weather[0].main}`== 'Haze'){
        imag.src="smoke.png";
        document.body.style.backgroundImage="url('smoke1.jpeg')";
    }
    else{
        imag.src="thunderstorm.png";
        document.body.style.backgroundImage="url('thunder.jpg')";
    }
   }
   catch (error) {
    console.error(error);
    alert("Error fetching weather data. Please try again.");
  }
    
    
}

search.addEventListener("click",()=>{
    fn(inbox.value);
       
    }

)
});
