const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "63f551ab69f1e30568bccbab712756f6"
}

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value);
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}&lang=ua`);
    const result = await res.json();
    displayResult(result);
}

function displayResult(result) {
    console.log(result);
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelslike = document.querySelector("#feelslike");
    feelslike.innerHTML = `відчувається як: ${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].description}`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = "Мін.: " + `${Math.round(result.main.temp_min)}<span>°</span>` + " " + " Макс.: " + `${Math.round(result.main.temp_max)}<span>°</span>`;
}

function getOurDate() {
    const myDate = new Date;
    const days  = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', `П'ятниця`, 'Субота'];
    const months =  ["Січня", "Лютого", "Березеня", "Квітня", "Травня", "Червня", "Липня", "Серпня", "Вересеня", "Жовтня", "Листопада", "Грудня"];

    let day = days[myDate.getDay()];

    let todayDate = myDate.getDate();

    let month = months[myDate.getMonth()];

    let year = myDate.getFullYear();

    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}` + " " + `${todayDate}` + " " + `${month}`+ " " + `${year}`;
}