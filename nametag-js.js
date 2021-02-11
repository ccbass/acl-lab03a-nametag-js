let nametagName = document.getElementById("name") 
let inputButton = document.getElementById("clickme")

let pinkColorButton = document.getElementById("pink-color-btn")
let greenColorButton = document.getElementById("green-color-btn")
let blueColorButton = document.getElementById("blue-color-btn")


const nameHandler = () => {
    const inputName = document.getElementById("input-name")
    let limit = ""
    limit = inputName.value.slice(0, 18)
    if (limit.length > 0){
        nametagName.textContent = limit
    }
    inputName.value = ""
}

const colorHandler = (e) => {
    const tagTop = document.getElementById("nametag-top")
    const tagBottom = document.getElementById("nametag-bottom")

    tagTop.style.background = e.target.value
    tagBottom.style.background = e.target.value
}



inputButton.addEventListener("click", nameHandler)

pinkColorButton.addEventListener("click", colorHandler)
greenColorButton.addEventListener("click", colorHandler)
blueColorButton.addEventListener("click", colorHandler)

parent = document.querySelector("#button-modifiers").children
console.log(parent)
