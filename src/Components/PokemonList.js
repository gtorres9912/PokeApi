import PokemonItem from "./PokemonItem";

const PokemonList = ({ pokemonList, offset }) => {
    const pokemons = pokemonList.map((pokemon, index) => (
        <PokemonItem key={index} index={offset + index + 1} pokemonName={pokemon.name} />
    ));
    return <div className="pokemonList">{pokemons}</div>;
};

export default PokemonList;
