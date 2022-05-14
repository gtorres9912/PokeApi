const TypeLabel = ({ pokemonType }) => {
    const color = getBackgroundColor(pokemonType);
    console.log(color);
    return (
        <label className="typeLabel" style={{ backgroundColor: color }}>
            {pokemonType}
        </label>
    );
};

function getBackgroundColor(pokemonType) {
    if (pokemonType === "Grass") {
        return "#78C850";
    } else if (pokemonType === "Normal") {
        return "#A8A878";
    } else if (pokemonType === "Fire") {
        return "#F08030";
    } else if (pokemonType === "Water") {
        return "#6890F0";
    } else if (pokemonType === "Electric") {
        return "#F8D030";
    } else if (pokemonType === "Ice") {
        return "#98D8D8";
    } else if (pokemonType === "Fighting") {
        return "#C03028";
    } else if (pokemonType === "Poison") {
        return "#A040A0";
    } else if (pokemonType === "Ground") {
        return "#E0C068";
    } else if (pokemonType === "Flying") {
        return "#A890F0";
    } else if (pokemonType === "Psychic") {
        return "#F85888";
    } else if (pokemonType === "Bug") {
        return "#A8B820";
    } else if (pokemonType === "Rock") {
        return "#B8A038";
    } else if (pokemonType === "Ghost") {
        return "#705898";
    } else if (pokemonType === "Dark") {
        return "#705848";
    } else if (pokemonType === "Dragon") {
        return "#7038F8";
    } else if (pokemonType === "Steel") {
        return "#B8B8D0";
    } else {
        return "#F0B6BC";
    }
}

export default TypeLabel;
