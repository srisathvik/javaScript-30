const dataTemplate = document.querySelector("[city-state-template]");
const dataContainer = document.querySelector("[data-city-container]");
const searchInput = document.querySelector("[data-search]");

let users =[]

searchInput.addEventListener("input", (e) =>{
    if(e.target.value.length){
        document.querySelector(".cityorstate").style.display = "block";
    }
    else{
        document.querySelector(".cityorstate").style.display = "none";
    }
    const value = e.target.value.toLowerCase();
    users.forEach(user => {
        const isVisible = user.city.toLowerCase().includes(value);
        user.element.classList.toggle("hide", !isVisible);
    })
})

fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
    .then(res => res.json())
    .then(data =>{
        users = data.map(user => {
            const card = dataTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            header.textContent = user.city +", " +user.state;
            body.textContent = user.population;
            dataContainer.append(card);
            return { city: user.city +", " +user.state, population: user.population, element: card};
        })
        
})

