import { useNavigate, useParams } from "react-router-dom";

const PokemonInput = ({ pokemonName, setPokemonName }) => {
    let navigate = useNavigate();
    let pokeName = useParams();
    const onChange = (event) => {
        //event.preventDefault();
        //console.log(event.target.value);
        setPokemonName(event.target.value);
    };

    const onSubmit = (event) => {
        //event.preventDefault();
        //setPokemonName(event.target.value);
        navigate(`/pokemon/${pokemonName}`);
        // console.log(pokemonName);
        // console.log(event.target.value);
    };
    return (
        <form onSubmit={onSubmit} params={pokeName}>
            <input
                type="text"
                placeholder="Pokemon Name or ID"
                onChange={onChange}
                className="pokemonInput"
            ></input>
        </form>
    );
};

export default PokemonInput;
