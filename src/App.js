import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonNav from "./Components/PokemonNav";
import PokemonResults from "./Components/PokemonResults";
import Pokedex from "./Components/Pokedex";
import FavoritesPage from "./Components/FavoritesPage";
import Pokedordle from "./Components/Pokedordle";

const App = () => {
    const [pokemonName, setPokemonName] = useState();
    const [pokemonInfo, setPokemonInfo] = useState();
    useEffect(() => {
        fetch("http://localhost:8000/lengths")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPokemonInfo(data);
            });
    }, []);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PokemonNav
                                pokemonName={pokemonName}
                                setPokemonName={setPokemonName}
                            ></PokemonNav>
                        }
                    ></Route>
                    <Route
                        path="/pokemon/:pokeName"
                        element={
                            <PokemonResults
                                pokemonName={pokemonName}
                                setPokemonName={setPokemonName}
                            />
                        }
                    ></Route>
                    <Route
                        path="/pokedex/:generation"
                        element={
                            <Pokedex pokemonName={pokemonName} setPokemonName={setPokemonName} />
                        }
                    />
                    <Route
                        path="/favorite-pokemons"
                        element={
                            <FavoritesPage
                                pokemonName={pokemonName}
                                setPokemonName={setPokemonName}
                            />
                        }
                    />
                    <Route path="/pokedordle" element={<Pokedordle pokemonInfo={pokemonInfo} />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
