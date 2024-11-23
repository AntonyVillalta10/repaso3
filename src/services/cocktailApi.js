import axios from "axios";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const getCocktailsByLetter = (letter) =>
  axios.get(`${BASE_URL}/search.php?f=${letter}`);

export const getCocktailById = (id) =>
  axios.get(`${BASE_URL}/lookup.php?i=${id}`);
