import React, { useEffect, useState } from "react";
import { getCocktailsByLetter } from "../services/cocktailApi";
import CocktailCard from "./CocktailCard";

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await getCocktailsByLetter("a");
        setCocktails(response.data.drinks);
      } catch (error) {
        console.error("Error fetching cocktails:", error);
      }
    };

    fetchCocktails();
  }, []);

  return (
    <div className="cocktail-list">
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
};

export default CocktailList;
