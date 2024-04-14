//seleção de eventos
const key = 'eef750d8acf37a3d4c6515dd8e783d25';
const flagapi = "https://flagsapi.com/BR/flat/64.png";

const cidade = document.querySelector("#city-input")
const buscar = document.querySelector("#pesquisar")

//funções
buscar.addEventListener("click", (e) =>{
    e.preventDefault()
    const city = cidade.value;
    console.log("eu amo o corinthians")   
})

//função esperar a cidade
const previsao = (city) => {
    console.log("gay")
}

