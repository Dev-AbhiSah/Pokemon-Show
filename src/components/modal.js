import ReactDOM from "react-dom";
import { useEffect } from "react";
export default function Modal({ knowMore, handelKnowMore ,pokemonInfo }) {
  useEffect(() => {
    if (knowMore) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [])

  return ReactDOM.createPortal(
    <>
      <section id="modal-sec" className="overlay">
        <div className={`modal-cnt btn-${pokemonInfo.type}`}>
        <div className="center-column">
          <h2 id="modal-title" className="captilize underline">
            {pokemonInfo.name}
          </h2>
          <div className="modal modal-grid-cnt">
            <div className="grid-first-column-cnt center-column">
              <div className="modal-pokemon-img-cnt">
                <img
                  src={pokemonInfo.image}
                  alt={pokemonInfo.name}
                  className="modal-pokemon-img"
                />
              </div>

              <p className="captilize">{`height: ${pokemonInfo.height}`}</p>
              <p className="captilize">{`weight: ${pokemonInfo.weight}`}</p>
            </div>
            <div className="grid-second-column-cnt ">
              <h3 className="captilize">{`Figures`}</h3>
              <div className=" pokemon-stats centre-column">
                {pokemonInfo.stats.map((stat, index) => (
                  <p
                    key={stat.stat.name}
                    className="captilize"
                  >{`${stat.stat.name}: ${stat.base_stat}`}</p>
                ))}
              </div>
            </div>
          </div>
        </div>{" "}
          <button  className ={pokemonInfo.type} onClick={() => handelKnowMore(!knowMore)}>X</button>
          <div className="vl"></div>
        </div>
      </section>
    </>,
    document.getElementById('portal')
  );
}


// modalNoLandScape= window.innerWidth <= 400? true:false;
//     if (knowMore) {
//       document.body.style.overflow = 'hidden';
//     }
//     if(window.innerWidth <= 400 && modalNoLandScape === false)
//     {
//       modalNoLandScape = true;
//       setModalResize(modalNoLandScape)
//     }
    
    
//     {modalResize === true ? <img
//       src={pokemonInfo.image}
//       alt={pokemonInfo.name}
//       className="modal-pokemon-img"
//     />: (
// <div className="grid-first-column-cnt center-column">
//   <div className="modal-pokemon-img-cnt">
//     <img
//       src={pokemonInfo.image}
//       alt={pokemonInfo.name}
//       className="modal-pokemon-img"
//     />
//   </div>

//   <p className="captilize">{`height: ${pokemonInfo.height}`}</p>
//   <p className="captilize">{`weight: ${pokemonInfo.weight}`}</p>
// </div>
// )}