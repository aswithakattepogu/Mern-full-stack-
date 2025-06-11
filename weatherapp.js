async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '84cd7719b928fb6e8a5a5fae8af4dace';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weather-info').innerHTML = `
                🌡️ Temperature: ${data.main.temp}°C <br>
                🌬️ Wind Speed: ${data.wind.speed} m/s <br>
                🌥️ Condition: ${data.weather[0].description}
            `;
        } else {
            document.getElementById('weather-info').textContent = 'City not found. Please try again.';
        }
    } catch (error) {
        document.getElementById('weather-info').textContent = 'Error fetching data. Please try again later.';
    }
}
