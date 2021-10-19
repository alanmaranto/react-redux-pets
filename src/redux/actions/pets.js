import { petTypes } from "../types/pets";

export const petIncrement = (number) => {
  return {
    type: petTypes.PET_INCREASED,
    payload: number,
  };
};

export const petDecrement = () => {
  return {
    type: petTypes.PET_DECREASED,
  };
};

export const petFavoriteIncrement = () => {
  return {
    type: petTypes.PET_FAVORITE_INCREASED,
  };
};

export const petFavoriteDecrement = () => {
  return {
    type: petTypes.PET_FAVORITE_DECREASED,
  };
};
