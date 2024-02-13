export async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchMultipleData(urls) {
  const promises = urls.map(async (url) => {
    return await fetchData(url);
  });
  const data = await Promise.all(promises);
  return data;
}

export async function fetchEvoulutionChain(id) {
  const species = await fetchData(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  const evolutionChain = await fetchData(species.evolution_chain.url);

  return evolutionChain.chain;
}
