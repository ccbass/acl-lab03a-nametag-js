const nametag = document.getElementById("name") 
const inputButton = document.getElementById("clickme")
const fontButton = document.getElementById('font-btn')

const nameHandler = () => {
    const inputName = document.getElementById("input-name")
    let limit = ""
    limit = inputName.value.slice(0, 18)
    if (limit.length > 0){
        nametag.textContent = limit
    }
    inputName.value = ""
}


const pinkColorButton = document.getElementById("pink-color-btn")
const greenColorButton = document.getElementById("green-color-btn")
const blueColorButton = document.getElementById("blue-color-btn")

const colorHandler = (e) => {
    const tagTop = document.getElementById("nametag-top")
    const tagBottom = document.getElementById("nametag-bottom")

    tagTop.style.background = e.target.value
    tagBottom.style.background = e.target.value
}

let fonts = ['Cedarville Cursive','monospace', 'serif', 'sans-serif']
let defaultFont = 0
nametag.style.fontFamily = fonts[defaultFont]

const fontChanger = () => {
    defaultFont++
    if (defaultFont > 3){
        defaultFont = defaultFont % 4
    }
    nametag.style.fontFamily = fonts[defaultFont]
}



inputButton.addEventListener("click", nameHandler)

pinkColorButton.addEventListener("click", colorHandler)
greenColorButton.addEventListener("click", colorHandler)
blueColorButton.addEventListener("click", colorHandler)

fontButton.addEventListener('click', fontChanger)