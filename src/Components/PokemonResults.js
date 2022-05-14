import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NextPokemon from "./NextPokemon";
import PokemonSprites from "./PokemonSprites";
import PokemonType from "./PokemonType";
import PreviousPokemon from "./PreviousPokemon";
import PokeStats from "./PokeStats";
import PokemonTitle from "./PokemonTitle";
import PokemonNav from "./PokemonNav";

const PokemonResults = ({ pokemonName, setPokemonName }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonImage, setPokemonImage] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonSprites, setPokemonSprites] = useState([]);
    const [bgColor, setBgColor] = useState({
        backgroundColor: "#FFFFFF",
    });
    const [pokemonStats, setPokemonStats] = useState([]);
    let pokeName = useParams();
    let URL = "https://pokeapi.co/api/v2/pokemon/" + pokeName.pokeName;

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPokemonData(result);
                    setPokemonImage(
                        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${result.id}.png`
                    );
                    console.log(URL);
                    setPokemonType(result.types);
                    setPokemonSprites(result.sprites);
                    getBackgroundColor(setBgColor, result);
                    setPokemonStats(result.stats);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, [URL]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <PokemonNav pokemonName={pokemonName} setPokemonName={setPokemonName}></PokemonNav>
                <div className="labelRow">
                    <PreviousPokemon
                        previousId={pokemonData.id - 1}
                        setPokemonName={setPokemonName}
                    />
                    <NextPokemon nextId={pokemonData.id + 1} setPokemonName={setPokemonName} />
                </div>
                <div
                    className="pokemonProfile"
                    style={{ backgroundColor: bgColor.backgroundColor }}
                >
                    <PokemonTitle pokemonName={pokemonData.name} pokemonId={pokemonData.id} />
                    <img src={pokemonImage} alt="" width="200" height="200"></img>
                    <PokemonType pokeType={pokemonType} />
                    <PokeStats stats={pokemonStats} />
                    <PokemonSprites sprites={pokemonSprites} />
                </div>
            </div>
        );
    }
};

function getBackgroundColor(setBgColor, result) {
    if (result.types[0].type.name === "grass") {
        setBgColor({
            backgroundColor: "#78C850",
        });
    } else if (result.types[0].type.name === "normal") {
        setBgColor({
            backgroundColor: "#A8A878",
        });
    } else if (result.types[0].type.name === "fire") {
        setBgColor({
            backgroundColor: "#F08030",
        });
    } else if (result.types[0].type.name === "water") {
        setBgColor({
            backgroundColor: "#6890F0",
        });
    } else if (result.types[0].type.name === "electric") {
        setBgColor({
            backgroundColor: "#F8D030",
        });
    } else if (result.types[0].type.name === "ice") {
        setBgColor({
            backgroundColor: "#98D8D8",
        });
    } else if (result.types[0].type.name === "fighting") {
        setBgColor({
            backgroundColor: "#C03028",
        });
    } else if (result.types[0].type.name === "poison") {
        setBgColor({
            backgroundColor: "#A040A0",
        });
    } else if (result.types[0].type.name === "ground") {
        setBgColor({
            backgroundColor: "#E0C068",
        });
    } else if (result.types[0].type.name === "flying") {
        setBgColor({
            backgroundColor: "#A890F0",
        });
    } else if (result.types[0].type.name === "psychic") {
        setBgColor({
            backgroundColor: "#F85888",
        });
    } else if (result.types[0].type.name === "bug") {
        setBgColor({
            backgroundColor: "#A8B820",
        });
    } else if (result.types[0].type.name === "rock") {
        setBgColor({
            backgroundColor: "#B8A038",
        });
    } else if (result.types[0].type.name === "ghost") {
        setBgColor({
            backgroundColor: "#705898",
        });
    } else if (result.types[0].type.name === "dark") {
        setBgColor({
            backgroundColor: "#705848",
        });
    } else if (result.types[0].type.name === "dragon") {
        setBgColor({
            backgroundColor: "#7038F8",
        });
    } else if (result.types[0].type.name === "steel") {
        setBgColor({
            backgroundColor: "#B8B8D0",
        });
    } else {
        setBgColor({
            backgroundColor: "#F0B6BC",
        });
    }
}

export default PokemonResults;
