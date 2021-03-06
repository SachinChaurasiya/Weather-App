const cityName= document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn')
const city_name = document.getElementById('city_name')
const Status = document.getElementById('Status')
const temp = document.getElementById('temp')
const datahide = document.querySelector('.middle_layer')

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

   if ( cityVal === '' ) {
       city_name.innerText = `Plz Write A Name`; 
       datahide.classList.add('data_hide');
   }
   else{
       try{
          let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=76a0e0fbfd3f313f45d70d99ee705a7c`;

        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        // console.log(arrData);    
        city_name.innerText =`${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        Status.innerText = arrData[0].weather[0].description;
        // const tempmod = arrData[0].weather[0].description;
        // console.log(tempmod);
        // // Condition to check sunny or cloudy

        // if(tempmod = "Haze"){
        //     Status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>";
        // }
        // else if(tempmod = "clouds"){
        //     Status.innerHTML = '<i class="fas fa-cloud" style="color:#f1f2f6"></i>';
        // }
        // else if(tempmod = "Rain"){
        //     Status.innerHTML = '<i class="fas fa-rain" style="color:#a4b0be"></i>';
        // }
        // else{
        //     '<i class="fas fa-cloud" style="color:#f1f2f6"></i>';
        // }
    

        datahide.classList.remove('data_hide');

       }catch{
            city_name.innerText = `Plz Enter The City Name`; 
            datahide.classList.add('data_hide');
       }
        
   }



}

submitBtn.addEventListener('click', getInfo);