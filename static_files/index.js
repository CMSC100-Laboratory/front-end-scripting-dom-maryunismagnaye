// const name = document.getElementById("name").value.trim();
// const description = document.getElementById("description").value.trim();
// const imageUrl = document.getElementById("imageUrl").value.trim();
// const rank = document.getElementById("rank").value.trim();
const form = document.getElementById("songForm");
const songList = document.getElementById("songList");

let songs = []

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const rank = document.getElementById("rank").value;

    // must fill everything before submitting
                                                // https://www.w3schools.com/jsref/jsref_isnan.asp
                                                // check if number
    if (!name | !description | !imageUrl | rank | isNaN(rank) ) {
        alert("Fill all correctly");
        return;
    }

    // the rank must be sorted

    // no rank must be duplicated

    


})

