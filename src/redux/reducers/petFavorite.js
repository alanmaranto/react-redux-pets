import { petTypes } from "../types/pets";

const petFavorite = (state = 0, action) => {
  switch (action.type) {
    case petTypes.PET_FAVORITE_INCREASED:
      return state + 1;
    case petTypes.PET_FAVORITE_DECREASED:
      return state - 1;
    default:
      return state;
  }
};

export default petFavorite;
