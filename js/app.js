//   "characters": "https://rickandmortyapi.com/api/character",
//   "locations": "https://rickandmortyapi.com/api/location",
//   "episodes": "https://rickandmortyapi.com/api/episode"
const page = 4
const baseUrl = 'https://rickandmortyapi.com/api'
const loadCharacter = async () => {
  const res = await fetch(`${baseUrl}/character?page=${page}`);
  const data = await res.json()
  const limiteData = data.results.slice(3, 9)
  console.log(data)
  return { results: limiteData }
};

const loadlocation = async () => {
  const res = await fetch(`${baseUrl}/location`)
  const data = await res.json()
  const limiteData = data.results.slice(0, 10);
  return { results: limiteData };
};

const loadEpisode = async () => {
  const res = await fetch(`${baseUrl}/episode`)
  const data = await res.json()
  return data
};

const loadAllWithpromiseAll = async () => {
  const [character, location, episode] = await Promise.all([
    loadCharacter(),
    loadlocation(),
    loadEpisode()
  ])
  showCharacter(character.results),
    console.log(location),
    console.log(episode)
}

loadAllWithpromiseAll()

const showCharacter = (characters) => {
  const characterContainer = document.getElementById('character-container');
  characters.map((character) => {
    console.log(character)
    const divCharacter = document.createElement('div')
    divCharacter.id = `character-${character.id}`
    divCharacter.innerHTML = `
    <img id="img-character" src=${character.image} alt="img character">
    <article class="character-info">
    <h3>${character.name}</h3>
    <span class="${character.status}"> ${character.status} - ${character.species} </span>
    <span class="location">Location:</span>
    <a class="character.link" href="${character.location.url}"> - ${character.location.name}</a>
    <span class="origin">Origin:</span>
    <a class="character-link" href="${character.location.url}"> - ${character.origin.name}</a>
    </article>
    `

    divCharacter.classList.add('character-box')
    characterContainer.appendChild(divCharacter)
  })
}
