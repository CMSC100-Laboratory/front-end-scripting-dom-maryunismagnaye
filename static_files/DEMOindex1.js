const title = document.getElementById("title")
console.log(title)
// 1. access and modify text inside an element
console.log(title.innerText)
title.innerText = 'Yunis\' Games'

// const games = document.getElementsByClassName("game")
// console.log(games)

// const gamesByTag = document.getElementsByTagName("li")
// console.log(gamesByTag)

const games = document.getElementsByClassName("games")
// 2. Modify elements inside an element
games[0].innerHTML = "<h3>" + games[0].innerText +"</h3>"

for (let a = 0; a < games.length; a++) {
    // 3. Get the value of an attribute
    console.log(games[a].getAttribute("id"))

    // 4. Modify the value of an attribute
    // element.attribute = new value 
    games[a].style = "color: blue;"
    // games[a].style.color= "blue"  // this also works
}

// 6. Remove an element
const gamesList = document.getElementById("games-list")
gamesList.removeChild(games[2])
// or
const mhw = document.getElementById("mh")
mhw.parentNode.removeChild(mhw)


// 7. Append element to a list of elements inside an element
gamesList.appendChild(mhw)

// 8. Create entirely new element
const newElement = document.createElement("h1")
newElement.innerText = "Hello!"
document.getElementsByTagName('body')[0].appendChild(newElement)

const newElement1 = document.createElement("div")
newElement1.innerHTML = "<h1> Capybaraaa! </h1>"
document.getElementsByTagName('body')[0].appendChild(newElement1)



