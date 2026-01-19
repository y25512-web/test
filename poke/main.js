async function getRandomPokemon() {
    const maxPokemonId = 1010;
    const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await response.json();
  
    const name = data.name;
    const types = data.types.map(t => t.type.name).join(', ');
    const image = data.sprites.front_default;
  
    document.getElementById('pokemon-info').innerHTML = `
      <h2>${name.toUpperCase()}</h2>
      <p>タイプ: ${types}</p>
      <img src="${image}" alt="${name}">
    `;
  }
  