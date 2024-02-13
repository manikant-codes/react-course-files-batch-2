export function getAllSpeciesNames(chain) {
  const species = [];

  function getAllSpecies(chain) {
    for (const c in chain) {
      if (
        c === "evolves_to" &&
        Array.isArray(chain[c]) &&
        chain[c].length > 0
      ) {
        getAllSpecies(chain[c][0]);
      } else {
        if (c === "species") {
          species.push(chain[c]);
          return;
        }
      }
    }
  }

  getAllSpecies(chain);

  const names = species.reverse().map((value) => {
    return value.name;
  });

  return names;
}
