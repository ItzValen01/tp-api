let characters = []

fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
        data.results.forEach(char => {
            characters.push(char)
            document.getElementById("personajes").innerHTML += `
                <div class="col-md-3 mb-4">
                    <div class="card">
                        <img src="${char.image}" class="card-img-top" />

                        <div class="card-body">
                            <h5 class="card-title">
                                ${char.name}
                            </h5>

                            <p>
                                ${char.species}
                            </p>
                        </div>
                    </div>
                </div>
            `
        })
    })

function generar() {
    const index = Math.floor(Math.random() * characters.length)
    const char = characters[index];

    document.getElementById("random-img").src = char.image
    document.getElementById("random-title").innerText = char.name
    document.getElementById("random-species").innerText = char.species
}