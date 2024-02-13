let co = 0;
function getAllSpecies(arr, chain) {
  console.log("fn", ++co);
  for (const c in chain) {
    console.log("key", c, co);
    if (c === "evolves_to" && Array.isArray(chain[c]) && chain[c].length > 0) {
      console.log("here");
      getAllSpecies(chain[c][0]);
    } else {
      if (c === "species") {
        console.log("inside species");
        arr.push(chain[c]);
        console.log(chain[c]);
        // return;
      }
    }
  }
}
export function getAllSpeciesNames(chain) {
  function getAllSpecies() {}
  //   console.log("chain", chain);
}
//   return species.reverse().map((value) => {
//     return value.name;
//   });
