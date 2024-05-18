// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

function getAllFirePokemons(pokemons) {
  return pokemons.filter((pokemon) => pokemon.type.includes("Fire"));
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

function shortestPokemon(pokemons) {
  if (!pokemons.length) {
    return 0;
  }
  return pokemons
    .map((pokemon) => {
      return {
        name: pokemon.name,
        height: Number(pokemon.height.replace(/[^0-9\.]+/g, "")),
      };
    })
    .sort((a, b) => a.height - b.height)[0].name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

function candyAverage(pokemons) {
  if (!pokemons.length) {
    return 0;
  }
  return Number(
    (
      pokemons.reduce((acc, pokemon) => acc + (pokemon.candy_count | 0), 0) /
      pokemons.length
    ).toFixed(2)
  );
}

// Iteration 4: images for the first 10 `Ground`  Pokemons

function getGroundPokeImg(pokemons) {
  if (!pokemons.length) {
    return 0;
  }
  return pokemons
    .filter((pokemon) => pokemon.type.includes("Ground"))
    .slice(0, 10)
    .map((pokemon) => pokemon.img);
}

// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(pokemons) {
  if (!pokemons.length) {
    return 0;
  }
  const pikachuWeight = Number(
    pokemons
      .filter((pokemon) => pokemon.name === "Pikachu")[0]
      .weight.replace(/[^0-9\.]+/g, "")
  );
  return pokemons
    .filter(
      (pokemon) =>
        Number(pokemon.weight.replace(/[^0-9\.]+/g, "")) > pikachuWeight
    )
    .map((pokemon) => pokemon.name);
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function orderAlphabetically(pokemons) {
  return [...pokemons]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((pokemon) => pokemon.name)
    .slice(0, 20);
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them

function strongPokemons() {
  return pokemons
    .filter((pokemon) => pokemon.weaknesses.length === 1)
    .map(pokemon => pokemon.name)
    .slice(0, 15);
}
