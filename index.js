function displayTemperature(response) {
    let temperature = Math.round(response.data.temperature.currentTemperature);
    let city = response.data.city;
  
    let temperatureElement = document.querySelector("#temperature");
    let h1 = document.querySelector("h1");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    h1.innerHTML = response.data.city;
  }
  
  function search(event) {
    event.preventDefault();
  
    let searchInput = document.querySelector("#search-text-input");
    let city = searchInput.value;
    console.log(searchInput.value);
  
    let apiKey = "1de043300tfb174cf1a30ef403a9aobc";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  
    axios.get(apiUrl).then(displayTemperature);
  }
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", search);
  
  function updateDateTime(DateTime) {
    let now = new Date();
    let div = document.querySelector("h2");
    let date = now.getDate();
    let hours = now.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let minutes = now.getMinutes();
    now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let year = now.getFullYear();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "saturday",
    ];
    let day = days[now.getDay()]; // 0 and 6
  
    div.innerHTML = `${day}, ${hours}:${minutes}, `;
  }
  
  updateDateTime();