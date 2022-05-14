import PokedordleLetter from "./PokedordleLetter";
import PokedordleBoard from "./PokedordleBoard";
import PokemonNav from "./PokemonNav";
import { useState, useEffect } from "react";

const Pokedordle = ({ pokemonInfo }) => {
    const [solution, setSolution] = useState();
    if (pokemonInfo) {
        const randomLength = Math.floor(Math.random() * 11) + 3;
        let pokemonList = [];
        for (let i = 0; i < pokemonInfo.length; i++) {
            for (const [key, value] of Object.entries(pokemonInfo[i])) {
                if (Number(key) === randomLength) {
                    pokemonList = value;
                }
            }
        }
        const randomPokemon = Array.from(
            pokemonList[Math.floor(Math.random() * pokemonList.length)]
        );
        console.log(randomPokemon, randomPokemon.join(""), randomPokemon.length);
        const letterBlocks = randomPokemon.map((letter, index) => (
            <PokedordleLetter key={index} letter={letter} />
        ));
        return (
            <div>
                <PokemonNav />
                {pokemonInfo && <PokedordleBoard row={letterBlocks} />}
            </div>
        );
    } else return <div>Loading...</div>;
};

export default Pokedordle;
