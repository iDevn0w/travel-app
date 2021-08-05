const sumPoint = {};

function handleAPI() {
    const travelInfo = document.getElementById('travel-info');
    travelInfo.style.display = "none";
    const removeBtn = document.getElementById('removeBtn');

    // in function globle variable
    const btn = document.getElementById('btn');
    const temp = document.getElementById('temp');
    const  pixabay = document.getElementById('pixabay');
    //fire the trip 
    btn.addEventListener('click', function(){
        travelInfo.style.display = "grid";
        // variable, encodestring for geonames, date converter
        const selectedDate = document.getElementById('date').value;
        const city = document.getElementById('city');
        const selectedDateConverter = new Date(selectedDate);
        const nowDate = new Date();
        const string = encodeURIComponent(city.value);
        //sum point object;
        sumPoint["city"] = city.value;
        sumPoint['departing'] = selectedDate;
        // UI goingto, departing on update
        const goingto = document.getElementById('goingto').innerHTML = `destination: ${sumPoint.city}`
        const departing = document.getElementById('departing').innerHTML = `departing: ${String(sumPoint.departing)}`;
        // api and fetch process based on date, get weather
        const geonameAPI = `http://api.geonames.org/searchJSON?q=${string}&maxRows=1&username=shwan`;
        fetch(geonameAPI).then(res => res.json()).then(res => {
            const lat = res.geonames[0].lat;
            const lng = res.geonames[0].lng;
            const currentWeatherBitAPI = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=f025fcc893b14ae2888b306efd2b65df`;
            const forcastWeatherBitAPI = ` http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=f025fcc893b14ae2888b306efd2b65df`;
            // condition for show the weatherbit api based on the timestamp
            if (selectedDateConverter > nowDate){
                fetch(forcastWeatherBitAPI).then(res => res.json()).then(res => {
                    const tempreture = res.data[0].temp;
                    const description = res.data[0].weather.description;
                    temp.innerHTML = `Nearly Weather: ${tempreture} &#176, ${description} <img width="20" height"20" src="https://www.weatherbit.io/static/img/icons/${res.data[0].weather.icon}.png" />`
                });
            }else{
                fetch(currentWeatherBitAPI).then(res => res.json()).then(res => {
                    const tempreture = res.data[0].temp;
                    const description = res.data[0].weather.description;
                    temp.innerHTML = `weather: ${tempreture} &#176, ${description} <img width="20" height"20" src="https://www.weatherbit.io/static/img/icons/${res.data[0].weather.icon}.png" />`
                });
            }
        
        });
        //remove the trip
        removeBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            // remove the trip
            travelInfo.style.display = "none";
        });
        // fetch image process from pixabay
        fetch(`https://pixabay.com/api/?key=22637717-e1d84d07e27cecba01774e3af&q=${encodeURIComponent(city.value)}&image_type=photo`).then(res=> res.json()).then(res => {
            if (res.hits.length > 0){
                const img = res.hits[0].largeImageURL;
                console.log(img);
                pixabay.innerHTML = `
                    <img src="${img} alt="${city.value} width="100%" height="300px"/>
                `;
            }else{
                //alert if non city is not found
                alert('there is no image avalible for that city');
            }
        })
    })
}


export {
    handleAPI
}