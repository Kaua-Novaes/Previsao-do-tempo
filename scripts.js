//seleção de eventos
const key = 'eef750d8acf37a3d4c6515dd8e783d25';
const flagapi = "https://flagsapi.com/BR/flat/64.png";

const cidade = document.querySelector("#city-input")
const buscar = document.querySelector("#pesquisar")



const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const wheaterElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")

const ConsultarDados = async(city) => {
    const UrlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"eef750d8acf37a3d4c6515dd8e783d25"}&lang=pt_br`
    const res = await fetch(UrlApi)
    const data = await res.json()
    return data
    


}

//função esperar a cidade
const previsao = async (city) => {
    ConsultarDados(city)
    const data = await ConsultarDados(city);
    cityElement.innerText= data.name
    tempElement.innerText = parseInt(data.main.temp)
    wheaterElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`)
    console.log(`https://flagsapi.com/${data.sys.country}/flat/64.png`)
    

}

//funções
buscar.addEventListener("click", (e) =>{
    e.preventDefault()
    const city = cidade.value;
    previsao(city)   
})

