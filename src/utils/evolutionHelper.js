export function getAllSpeciesNames(chain) {
  function getAllNames(chain) {
    if (chain.evolves_to.length === 0) {
      return chain.species.name;
    } else {
      return getAllNames(chain.evolves_to[0]) + "," + chain.species.name;
    }
  }

  const names = getAllNames(chain).split(",").reverse();

  return names;
}
