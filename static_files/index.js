const form = document.getElementById("songForm");
const songList = document.getElementById("songList");

let songs = []

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const rank = document.getElementById("rank").value;

    // must fill everything before submitting
                                                // https://www.w3schools.com/jsref/jsref_isnan.asp
                                                // check if number
    if (!name || !description || !imageUrl || !rank || isNaN(rank) ) {
        alert("Fill all correctly");
        return;
    }
    // no rank must be duplicated
    const rankNumber = parseInt(rank);
        if (songs.some(song => song.rank === rankNumber)) {
            alert("The rank already exists!");
            return;
        }
    
    // store the song
    const song = {name, description, imageUrl,  rank: rankNumber };
    songs.push(song);

    // Sort the songs by rank
    // https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677
    // https://www.w3schools.com/js/js_array_sort.asp
    songs.sort((a, b) => a.rank - b.rank);

    storeSongs();
    form.reset();
});

// store songs in a newly created container
// using inner HTML
// adding the image, rank, name, description and a remove button
// in each container when submitting a new song
function storeSongs() {
    songList.innerHTML = "";

    songs.forEach((song) => {
        const songCard = document.createElement("div");
        songCard.classList.add("song-card");

        const image = document.createElement("img");
        image.src = song.imageUrl;
        image.width = 150;

        const nameSong = document.createElement("h3");
        nameSong.textContent = `Rank ${song.rank} | ${song.name}`;

        const description = document.createElement("p");
        description.textContent = song.description;

        const removeButton = document.createElement("button");
        removeButton.textContent = "REMOVE";
        removeButton.classList.add("remove-button");

        removeButton.addEventListener("click", () => {
            const index = songs.indexOf(song);
            if (index !== -1) {
                songs.splice(index, 1);
            }
            storeSongs();
        });

        songCard.appendChild(image);
        songCard.appendChild(nameSong);
        songCard.appendChild(description);
        songCard.appendChild(removeButton);

        songList.appendChild(songCard);
    });
}

