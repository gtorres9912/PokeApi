const PokemonSprites = ({ sprites }) => {
  return (
    <div>
      <img
        className="sprites"
        src={sprites.front_default}
        alt=""
        width="150"
        height="150"
      ></img>
      <img
        className="sprites"
        src={sprites.back_default}
        alt=""
        width="150"
        height="150"
      ></img>
      <img
        className="sprites"
        src={sprites.front_shiny}
        alt=""
        width="150"
        height="150"
      ></img>
      <img
        className="sprites"
        src={sprites.back_shiny}
        alt=""
        width="150"
        height="150"
      ></img>
    </div>
  );
};

export default PokemonSprites;
