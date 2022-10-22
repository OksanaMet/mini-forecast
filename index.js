const label = document.querySelector('label');
const select = document.createElement('select');
select.setAttribute('class', 'citySelect');
label.appendChild(select);

const cities = {
  703447: 'Kyiv',
  3117735: 'Madrid',
  6173331: 'Vancouver',
  6455259: 'Paris',
};

for (let key in cities) {
  let a = document.createElement('option');
  document.querySelector('select').append(a);
  a.innerHTML = cities[key];
  a.setAttribute('value', key);
}

const param = {
  url: 'https://api.openweathermap.org/data/2.5/',
  appid: 'dd429f5e9448ad370a1349db31d992c1',
};

function getWeather() {
  const cityId = document.querySelector('.citySelect').value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then((weather) => {
      return weather.json();
    })
    .then(function showWeather(data) {
      console.log(data);
      document.querySelector('.out-1').innerHTML = data.name;
      document.querySelector('.out-2').innerHTML =
        Math.floor(data.main.temp) + '&degC';
      document.querySelector('.out-3').innerHTML =
        '<img src= "https://openweathermap.org/img/wn/' +
        data.weather[0]['icon'] +
        '@2x.png">';
      document.querySelector('.out-4').innerHTML =
        data.weather[0]['description'];
      document.querySelector(
        '.out-5'
      ).innerHTML = `Direction of the wind: ${data.wind.deg}`;
      document.querySelector('.out-6').innerHTML = `${data.wind.speed}km/h`;
      document.querySelector('.out-7').innerHTML = `${data.main.pressure}bar`;
    });
}
getWeather();
document.querySelector('.citySelect').onchange = getWeather;
