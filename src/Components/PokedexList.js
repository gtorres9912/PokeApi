import { useNavigate } from "react-router-dom";

const PokedexList = () => {
  let navigate = useNavigate();
  const onChange = (event) => {
    navigate(`/pokedex/${event.target.value}`);
    window.location.reload(true);
  };
  return (
    <select className="pokedexList" onChange={onChange} value="Pokedex">
      <option default>Select Gen</option>
      <option value={"all"}>All</option>
      <option value={1}>Gen 1</option>
      <option value={2}>Gen 2</option>
      <option value={3}>Gen 3</option>
      <option value={4}>Gen 4</option>
      <option value={5}>Gen 5</option>
      <option value={6}>Gen 6</option>
      <option value={7}>Gen 7</option>
      <option value={8}>Gen 8</option>
    </select>
  );
};

export default PokedexList;
