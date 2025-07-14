const apiKey = '58fc93e54d539747a99d437876e38e66';

document.querySelector('.getWeatherButton').addEventListener('click', () => {
  const city = document.querySelector('.cityInput').value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      document.querySelector('.cityName').textContent = data.name;
      document.querySelector('.temperature').textContent = ` Temp - ${Math.round(data.main.temp)} °C`;
      document.querySelector('.humidity').textContent = `humidity - ${(data.main.humidity)}%`;
      document.querySelector('.wind').textContent = `Wind - ${Math.round((data.wind.speed)*1.609344)}k/m`;
    });
});
