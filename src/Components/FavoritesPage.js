import PokemonNav from "./PokemonNav";
import FavoriteBlock from "./FavoriteBlock";
import { useState, useEffect } from "react";

const FavoritesPage = ({ pokemonName, setPokemonName }) => {
    const [pokemonType, setPokemonType] = useState(null);
    const clicked = (event) => {
        if (!pokemonType) {
            alert("finish picking pokemon");
        } else {
            console.log(pokemonType);
        }
    };
    const [pokemonInfo, setPokemonInfo] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/types")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPokemonInfo(data);
            });
    }, []);

    return (
        <div>
            <PokemonNav pokemonName={pokemonName} setPokemonName={setPokemonName}></PokemonNav>
            {pokemonInfo && (
                <div className="favoritesContainer">
                    <FavoriteBlock
                        pokemonList={pokemonInfo[0]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[1]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[2]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[3]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[4]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[5]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[6]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[7]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[8]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[9]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[10]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[11]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[12]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[13]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[14]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[15]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[16]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <FavoriteBlock
                        pokemonList={pokemonInfo[17]}
                        setPokemonType={setPokemonType}
                        pokemonType={pokemonType}
                    ></FavoriteBlock>
                    <button onClick={clicked}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default FavoritesPage;
