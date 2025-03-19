const removeButton = document.getElementById("remove-game")
const removeGame = () => {
    alert('Removing one game')
  }

const onHover = () => {
    alert('On hover :3')
}
removeButton.addEventListener("click", removeGame)
// removeButton.addEventListener("mouseover", removeGame)
// removeButton.addEventListener("mousedown", removeGame)
// removeButton.addEventListener("mouseup", removeGame)

// we can also remove event listeners
removeButton.removeEventListener("click", removeGame)