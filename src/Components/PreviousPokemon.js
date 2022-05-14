import { useNavigate } from "react-router-dom";

const PreviousPokemon = ({ previousId, setPokemonName }) => {
  let navigate = useNavigate();
  const onClick = () => {
    setPokemonName(previousId);
    navigate(`/pokemon/${previousId}`);
  };
  if (previousId !== 0) {
    let source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${previousId}.png`;
    return (
      <label className="labelButton" onClick={onClick}>
        <strong>#{previousId}</strong> <img src={source} alt=""></img>
      </label>
    );
  } else return <div></div>;
};

export default PreviousPokemon;
