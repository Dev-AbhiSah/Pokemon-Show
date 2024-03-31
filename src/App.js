import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import "./App.css";
import PokemonCard from "./components/pokemoncard.js";

let viewPortSize = window.innerWidth;
let initial = false;
// function handelResize(){
//   console.log(window.innerWidth)
// }
// window.addEventListener('resize',handelResize);
function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPokemonUrl, setNextPokemonUrl] = useState("");
  const [viewPortwidth, setViewPortWidth] = useState(window.innerWidth <= 600);

  async function getPokemonsList(
    url = "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1",
    override = false
  ) {
    let response = await axios.get(url);
    let responseData = await response.data;

    setNextPokemonUrl(responseData[0].next);

    let pokemonDefaultList = await responseData[0].results;
    // console.log(pokemonDefaultList);
    let pokemonListFromApi = [];
    for (let individualPokemon of pokemonDefaultList) {
      let onePokemonResponse = await axios.get(individualPokemon.url);
      let onePokemonDetails = await onePokemonResponse.data[0];
      pokemonListFromApi.push(onePokemonDetails);
    }
    if (!override) {
      setPokemonList(pokemonListFromApi);
      setLoading((oldval) => !oldval);
    } else {
      setPokemonList((oldval) => oldval.concat(pokemonListFromApi));
    }
  }

  useEffect(() => {
    initial = window.innerWidth <= 600 ? true : false;
    getPokemonsList();
    function handelResize() {
      viewPortSize = window.innerWidth;
      if (viewPortSize <= 600 && initial === false) {
        initial = true;
        setViewPortWidth((oldval) => {
          // console.log(!oldval);
          return initial;
        });
        // console.log(`first: ${window.innerWidth}   ${viewPortwidth}`);
      }
      if (viewPortSize > 600 && initial === true) {
        initial = false;
        setViewPortWidth((oldval) => initial);
        // console.log(`second: ${window.innerWidth}   ${viewPortwidth}`);
      }
    }

    window.addEventListener("resize", handelResize);
  }, []);

  return (
    <>
      {loading === true ? (
        <span class="loader"></span>
      ) : (
        <>
          <div className="content">
            {viewPortwidth === true ? (
              <>
                <h2>Pokemon</h2>
                <h2>Pokemon</h2>
                <h3>Kingdom</h3>
                <h3>Kingdom</h3>
              </>
            ) : (
              <>
                <h2>Pokemon Kingdom</h2>
                <h2>Pokemon Kingdom</h2>
              </>
            )}
            {/* <h2>Pokemon Kingdom</h2>
            <h2>Pokemon Kingdom</h2>
            {viewPortwidth === true? <h3>Kindom</h3>: null} */}
          </div>

          <div className="app-container">
            {pokemonList.map((pokemonInfo, index) => {
              // console.log(pokemonInfo);
              return (
                <PokemonCard
                  key={index}
                  pokemonInfo={pokemonInfo}
                ></PokemonCard>
              );
            })}
          </div>
          <div className="center show-more-cnt">
            <button
              className="load-more-btn"
              onClick={() => {
                getPokemonsList(nextPokemonUrl, true);
                // console.log("clcked");
              }}
            >
              Load More
            </button>
          </div>
          {/* {console.log(viewPortwidth)} */}
        </>
      )}
    </>
  );
}

export default App;
