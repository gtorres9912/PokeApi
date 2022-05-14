import { useState } from "react";

const FavoriteBlock = ({ pokemonList, setPokemonType, pokemonType }) => {
    const [image, setImage] = useState(null);
    const change = (type) => (event) => {
        const pokemonSplit = event.target.value.split(" ");
        const val = Number(pokemonSplit[0].substring(1));
        if (val) {
            setImage(
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${val}.png`
            );
            const obj = {};
            obj[type] = pokemonSplit[1];
            setPokemonType(obj);
        }
    };
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const type = Object.keys(pokemonList)[0];
    const typeColor = getBackgroundColor(type);
    return (
        <>
            <div className="favorite-section" style={{ backgroundColor: typeColor }}>
                <div className="typeTitle">
                    <span>{capitalizeFirstLetter(type)}</span>
                </div>
                <div className="favoriteCenter">
                    <input
                        className="select"
                        placeholder="Select Pokemon"
                        list={type}
                        onChange={change(type)}
                    />
                    <datalist id={type}>
                        {pokemonList[type].map((pokemon, index) => (
                            <option key={pokemon.id} value={`#${pokemon.id} ${pokemon.name}`} />
                        ))}
                    </datalist>
                    {image && (
                        <img
                            className="favoriteImage"
                            src={image}
                            alt=""
                            width="200"
                            height="200"
                        ></img>
                    )}
                </div>
            </div>
        </>
    );
};

function getBackgroundColor(pokemonType) {
    if (pokemonType === "grass") {
        return "#78C850";
    } else if (pokemonType === "normal") {
        return "#A8A878";
    } else if (pokemonType === "fire") {
        return "#F08030";
    } else if (pokemonType === "water") {
        return "#6890F0";
    } else if (pokemonType === "electric") {
        return "#F8D030";
    } else if (pokemonType === "ice") {
        return "#98D8D8";
    } else if (pokemonType === "fighting") {
        return "#C03028";
    } else if (pokemonType === "poison") {
        return "#A040A0";
    } else if (pokemonType === "ground") {
        return "#E0C068";
    } else if (pokemonType === "flying") {
        return "#A890F0";
    } else if (pokemonType === "psychic") {
        return "#F85888";
    } else if (pokemonType === "bug") {
        return "#A8B820";
    } else if (pokemonType === "rock") {
        return "#B8A038";
    } else if (pokemonType === "ghost") {
        return "#705898";
    } else if (pokemonType === "dark") {
        return "#705848";
    } else if (pokemonType === "dragon") {
        return "#7038F8";
    } else if (pokemonType === "steel") {
        return "#B8B8D0";
    } else {
        return "#F0B6BC";
    }
}

export default FavoriteBlock;
