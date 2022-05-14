import { useNavigate } from "react-router-dom";

const NextPokemon = ({ nextId, setPokemonName }) => {
  let navigate = useNavigate();
  const onClick = () => {
    setPokemonName(nextId);
    navigate(`/pokemon/${nextId}`);
  };
  if (nextId !== 899) {
    let source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${nextId}.png`;
    return (
      <label className="labelButton" onClick={onClick}>
        <strong>#{nextId}</strong> <img src={source} alt=""></img>
      </label>
    );
  } else return <div></div>;
};

export default NextPokemon;
