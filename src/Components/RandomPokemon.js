import { useNavigate } from "react-router-dom";

const RandomPokemon = ({ setPokemonName }) => {
  let navigate = useNavigate();
  const getRandomId = () => {
    let randomId = Math.floor(Math.random() * 898) + 1;
    setPokemonName(randomId);
    navigate(`/pokemon/${randomId}`);
  };
  return (
    <button className="randomButton" onClick={getRandomId}>
      Random Pokemon
    </button>
  );
};

export default RandomPokemon;
