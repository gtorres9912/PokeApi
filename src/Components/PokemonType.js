import TypeLabel from "./TypeLabel";

const PokemonType = ({ pokeType }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const typeList = pokeType.map((pokemonType) => (
        <li key={pokemonType.type.name}>
            <TypeLabel pokemonType={capitalizeFirstLetter(pokemonType.type.name)} />
        </li>
    ));

    return (
        <ul className="typeList">
            <strong>Type:</strong> {typeList}
        </ul>
    );
};

export default PokemonType;
