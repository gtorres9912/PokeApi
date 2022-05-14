import { useNavigate } from "react-router-dom";

const FavoriteTypeButton = () => {
  let navigate = useNavigate();
  const onClick = () => {
    navigate("/favorite-pokemons");
  };
  return (
    <button className="favoriteButton" onClick={onClick}>
      Favorite Pokemons
    </button>
  );
};

export default FavoriteTypeButton;
