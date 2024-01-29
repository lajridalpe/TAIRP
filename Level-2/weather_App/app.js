// let city =document.getElementsByClassName('city')



   const api_key=`e2c9f0ff739a313ad5efd9f352cd16fc`;
   const api_url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
   const serachBox = document.querySelector(".search input");
   const serachBtn = document.querySelector(".search button");
   const weatherImage = document.querySelector(".weatherImg");
      


 async function checkWeather(city){
    
     const response = await fetch(api_url + city + `&appid=${api_key}`);
     var data = await response.json();
     console.log(data);
   //   city.innerHTML= data.name;
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
   if(data.weather[0].main == "Cloud"){
      weatherImage.src ="images/clouds.png";
   }
      else if(data.weather[0].main == "Clear"){
         weatherImage.src ="images/clear.png";
      }
      else if(data.weather[0].main == "Snow"){
         weatherImage.src ="images/snow.png";
      }
      else if(data.weather[0].main == "Rain"){
         weatherImage.src ="images/rain.png";
      }
      else if(data.weather[0].main == "Mist"){
         weatherImage.src ="images/mist.png";
      }



      document.querySelector(".weather").style.display = "block";
      // document.querySelector(".details").style.display = "block";
}
 serachBtn.addEventListener("click", ()=>{
    checkWeather(serachBox.value);
 })
// e2c9f0ff739a313ad5efd9f352cd16fc

// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}

// e2c9f0ff739a313ad5efd9f352cd16fc