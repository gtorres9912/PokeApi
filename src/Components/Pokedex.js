import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PokemonNav from "./PokemonNav";
import PokemonList from "./PokemonList";

const Pokedex = ({ pokemonName, setPokemonName }) => {
    const [error, setError] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);
    let generationParam = useParams();
    let limit = 0;
    let offset = 0;

    if (generationParam.generation === "all") {
        limit = 898;
        offset = 0;
    } else if (generationParam.generation === "1") {
        limit = 151;
        offset = 0;
    } else if (generationParam.generation === "2") {
        limit = 100;
        offset = 151;
    } else if (generationParam.generation === "3") {
        limit = 135;
        offset = 251;
    } else if (generationParam.generation === "4") {
        limit = 107;
        offset = 386;
    } else if (generationParam.generation === "5") {
        limit = 156;
        offset = 493;
    } else if (generationParam.generation === "6") {
        limit = 72;
        offset = 649;
    } else if (generationParam.generation === "7") {
        limit = 88;
        offset = 721;
    } else if (generationParam.generation === "8") {
        limit = 89;
        offset = 809;
    }

    let URL = "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset;
    console.log(URL);
    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then(
                (result) => {
                    setPokemonList(result.results);
                },
                (error) => {
                    setError(error);
                }
            );
    }, [URL]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return (
            <div>
                <PokemonNav pokemonName={pokemonName} setPokemonName={setPokemonName}></PokemonNav>
                <PokemonList pokemonList={pokemonList} offset={offset}></PokemonList>
            </div>
        );
    }
};

export default Pokedex;
