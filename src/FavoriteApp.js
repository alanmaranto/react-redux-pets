import "./App.css";
import { petFavoriteDecrement, petFavoriteIncrement } from "./redux/actions/pets";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const petFavorite = useSelector((state) => state.petFavorite);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Favorite</h1>
      <button onClick={() => dispatch(petFavoriteIncrement(5))}>Add favorite pet</button>
      <button onClick={() => dispatch(petFavoriteDecrement())}>Remove favorite pet</button>
      <p>Pet Favorite {petFavorite}</p>
    </div>
  );
}

export default App;
