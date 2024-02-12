import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../../../services/apiServices";

function Badge(props) {
  return (
    <div
      style={{
        borderRadius: "50%",
        height: "150px",
        width: "150px",
        overflow: "hidden",
        backgroundColor: "#d1c4e9",
        padding: "16px",
      }}
    >
      <img
        src={props.src}
        alt={props.name}
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

function EvolutionInfo() {
  const temp = [];
  const temp1 = [];
  const [evolutions, setEvolutions] = useState([]);

  useEffect(() => {
    async function fethchAll() {
      const data = {
        baby_trigger_item: null,
        chain: {
          evolution_details: [],
          evolves_to: [
            {
              evolution_details: [],
              evolves_to: [
                {
                  evolution_details: [],
                  evolves_to: [],
                  is_baby: false,
                  species: {
                    name: "venusaur",
                    url: "https://pokeapi.co/api/v2/pokemon-species/3/",
                  },
                },
              ],
              is_baby: false,
              species: {
                name: "ivysaur",
                url: "https://pokeapi.co/api/v2/pokemon-species/2/",
              },
            },
          ],
          is_baby: false,
          species: {
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon-species/1/",
          },
        },
        id: 1,
      };

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
              temp.push(chain[c]);
              return;
            }
          }
        }
      }

      getAllSpecies(data.chain);

      const names = temp.reverse().map((value) => {
        return value.name;
      });

      const evs = names.map(async (name) => {
        return await getPokemonDetails(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
      });
      setEvolutions(await Promise.all(evs));
    }
    fethchAll();
  }, []);
  console.log(evolutions);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "64px",
        marginBottom: "64px",
      }}
    >
      <div style={{ display: "flex", gap: "32px" }}>
        {evolutions.map((value) => (
          <Badge src={value.sprites.other["official-artwork"].front_default} />
        ))}
      </div>
    </div>
  );
}

export default EvolutionInfo;
