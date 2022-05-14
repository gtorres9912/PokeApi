import PokedexList from "./PokedexList";
import PokemonInput from "./PokemonInput";
import RandomPokemon from "./RandomPokemon";
import FavoriteTypeButton from "./FavoriteTypeButton";
import PokedordleLabel from "./PokedordleLabel";

const PokemonNav = ({ pokemonName, setPokemonName }) => {
    return (
        <nav className="nav">
            <PokemonInput pokemonName={pokemonName} setPokemonName={setPokemonName} />
            <RandomPokemon setPokemonName={setPokemonName} />
            <PokedexList />
            <FavoriteTypeButton />
            <PokedordleLabel />
        </nav>
    );
};

export default PokemonNav;
