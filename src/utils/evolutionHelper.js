export function getAllSpeciesNames(chain) {
  function getAllSpecies(chain) {
    if (chain.evolves_to.length === 0) {
      return chain.species.name;
    } else {
      return getAllSpecies(chain.evolves_to[0]).concat(",", chain.species.name);
    }
  }

  return getAllSpecies(chain).split(",").reverse();
}
