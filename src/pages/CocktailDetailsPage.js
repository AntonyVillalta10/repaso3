import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCocktailById } from "../services/cocktailApi";

const CocktailDetailsPage = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await getCocktailById(id);
        setCocktail(response.data.drinks[0]);
      } catch (error) {
        console.error("Error fetching cocktail details:", error);
      }
    };

    fetchCocktail();
  }, [id]);

  if (!cocktail) return <p>Cargando...</p>;

  return (
    <div className="cocktail-details">
      <h1>{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p><strong>Categoría:</strong> {cocktail.strCategory}</p>
      <p><strong>Alcohol:</strong> {cocktail.strAlcoholic}</p>
      <p><strong>Instrucciones:</strong> {cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailDetailsPage;
