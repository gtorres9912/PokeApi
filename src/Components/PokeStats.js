const PokeStats = ({ stats }) => {
  const status = stats.map((entry) => (
    <div
      className="stat"
      key={entry.stat.name}
      style={{ backgroundColor: deteremineBgColor(entry.stat.name) }}
    >
      {capitalizeFirstChar(entry.stat.name)}: {entry.base_stat}
    </div>
  ));

  return <div className="stats">{status}</div>;
};

export default PokeStats;

function capitalizeFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function deteremineBgColor(statName) {
  if (statName === "hp") {
    return "#FF5959";
  } else if (statName === "attack") {
    return "#F5AC78";
  } else if (statName === "defense") {
    return "#FAE078";
  } else if (statName === "special-attack") {
    return "#9DB7F5";
  } else if (statName === "special-defense") {
    return "#A7DB8D";
  } else if (statName === "speed") {
    return "#FA92B2";
  } else {
    return "pink";
  }
}
