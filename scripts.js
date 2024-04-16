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
const telaprevisao  = document.querySelector(".previsao")
const erro = document.querySelector(".und")
const paises = document.querySelector(".paises")
const temp = document.querySelector(".temppais")
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
    if(cityElement.textContent == "undefined"){
        telaprevisao.style.display = "none"
        erro.style.display = "block"
        console.log(cityElement)
    }else{
        telaprevisao.style.display = "block"
        erro.style.display = "none"
    }
    tempElement.innerText = parseInt(data.main.temp)
    wheaterElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`)
    windElement.innerText = `${data.wind.speed}km/h`
    umidityElement.innerText = `${data.main.humidity}%`
    console.log(`https://flagsapi.com/${data.sys.country}/flat/64.png`)

    
    

}

//funções
buscar.addEventListener("click", (e) =>{
    e.preventDefault()
    const city = cidade.value;
    previsao(city)   



})

cidade.addEventListener("keyup", (e) => {
    if(e.code == 'Enter'){
        const city = e.target.value;
        previsao(city) 
    }
})

const principais = async (pais, temp) => {
    ConsultarDados(pais)
    const data = await ConsultarDados(city);

    return temp.innerText = parseInt(data.main.temp)

}
principais(paises, temp)


