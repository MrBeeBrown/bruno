import { Ustensils } from "/projets/4_petits_plats/js/class/Ustensils.js";
import { Ingredients } from "/projets/4_petits_plats/js/class/Ingredients.js";
import { Appareils } from "/projets/4_petits_plats/js/class/Appareils.js";
import { Liste } from "/projets/4_petits_plats/js/class/Liste.js";


const list = new Liste(recipes);
list.display(recipes);
list.countRecipes(recipes);

//Create the ustensils filter
const ustensiles = new Ustensils(recipes, list);
list.addFilter(ustensiles);

//Create the ingredients filter
const ingredients = new Ingredients(recipes, list);
list.addFilter(ingredients);

//Create the appliance filter
const appareils = new Appareils(recipes, list);
list.addFilter(appareils);