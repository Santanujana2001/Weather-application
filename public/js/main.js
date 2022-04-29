const cityname=document.getElementById('cityname');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const getInfo = async(event) => {
    event.preventDefault();
    let cityval=cityname.value;
    if (cityval === "") {
        city_name.innerText=`Please Type City Name Before Search`;
        datahide.classList.add('data_hide');
    }
    else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=ffb006b1382494125983853c37e4c835`;
            const response = await fetch(url);
            const data=await response.json();
            const arrData=[data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            let num = 273.15;
            num = arrData[0].main.temp-num;
            let n = num.toFixed();
            temp_real_val.innerText = n;
            // temp_status.innerText = arrData[0].weather[0].main;
            const tempMood =arrData[0].weather[0].main;
            if(tempMood ==="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if(tempMood ==="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(tempMood ==="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText=`Incorrect City Name Entered`;
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click', getInfo);