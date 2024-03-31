import { useState, useEffect } from "react";
import Modal from "./modal.js";


// const viewPortSize = window.innerWidth;
// // console.log(viewPortSize)
export default function PokemonCard({ pokemonInfo }) {
  const [knowMore, setKnowMore] = useState(false);
  // const [viewPortWidth, setViewPortWidth] = useState(false)


// useEffect(()=>{
//   const viewPortSize = window.innerWidth;
//   function handelResize(){
//     console.log(window.innerWidth)
//   }
//   window.addEventListener('resize',handelResize)
// },[viewPortWidth])



  function handelKnowMore(param) {
    // console.log("clicked");
    setKnowMore(param);
  }
  // console.log(pokemonInfo)
  

  return (
    <div className={`pokemon-card ${pokemonInfo.type}`}>
      <div className="pokemon-card-id center">
        <p>{`#${pokemonInfo.id}`}</p>
      </div>
      <div className="pokemon-image-cnt">
        <img src={pokemonInfo.image}></img>
      </div>
      <h3 className="pokemon-name">{pokemonInfo.name.toUpperCase()}</h3>
      <p className="pokemon-type-detail">{`Type: ${pokemonInfo.type
        .charAt(0)
        .toUpperCase()}${pokemonInfo.type.slice(1)}`}</p>
      <button className={`know-more-btn btn-${pokemonInfo.type}`} onClick={handelKnowMore}>
        Know more...
      </button>
      {knowMore === false ? null : (
        <Modal knowMore={knowMore} handelKnowMore={handelKnowMore} pokemonInfo={pokemonInfo}></Modal>
      )}
    </div>
  );
  //   string.charAt(0).toUpperCase() + string.slice(1);
}
