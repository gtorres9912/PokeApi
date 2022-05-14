const PokemonTitle = ({ pokemonName, pokemonId }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return (
        <div>
            {pokemonName && (
                <div className="description">
                    <strong>
                        #{pokemonId} {capitalizeFirstLetter(pokemonName)}
                    </strong>
                </div>
            )}
        </div>
    );
};

export default PokemonTitle;
