import { useState } from "react";

const PokemonItem = ({ index, pokemonName }) => {
    const link = `http://localhost:3000/pokemon/${pokemonName}`;
    const [icon] = useState(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${index}.png`
    );

    return (
        <a className="pokemonLink" href={link}>
            <div className="item">
                <img src={icon} alt="" height="" width=""></img>
                <strong>
                    #{index} {capitalizeFirstChar(pokemonName)}
                </strong>
            </div>
        </a>
    );
};

function capitalizeFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default PokemonItem;
