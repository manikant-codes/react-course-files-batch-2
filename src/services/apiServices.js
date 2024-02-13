export async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error getting data: ", error);
    throw error;
  }
}

export async function fetchMultipleData(urls) {
  const promises = urls.map(async (url) => await fetchData(url));
  const data = await Promise.all(promises);
  return data;
}

export async function fetchEvolutionChain(id) {
  const species = await fetchData(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  const evolutionChain = await fetchData(species.evolution_chain.url);
  return evolutionChain.chain;
}
