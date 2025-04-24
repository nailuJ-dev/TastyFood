import {recipesDB} from "../datas/recipesDatasNew.js";

/*************************************************************************** */
/*                             RECUPERATION DES DATAS                        */ 
/*************************************************************************** */

//  retrieve the list of IDs
function getRecipeIds() {
    return recipesDB.map(recipe => recipe.id);
}
  
// collect the description according to the id
function getDescriptionById(id) {
    const recipe = recipesDB.find(recipe => recipe.id === id);
    return recipe ? recipe.description : null;
}

function getDurationById(id) {
    const recipe = recipesDB.find(recipe => recipe.id === id);
    return recipe ? recipe.duration : null;
}
  
function getCategoryById(id) {
    const recipe = recipesDB.find(recipe => recipe.id === id);
    return recipe ? recipe.category : null;
}

function getIsVegetarianById(id) {
    const recipe = recipesDB.find(recipe => recipe.id === id);
    return recipe ? recipe.vegetarian : null;
}

function getImageById(id) {
    const recipe = recipesDB.find(recipe => recipe.id === id);
    return recipe ? recipe.image : null;
}

// collect the ingredients according to the id
function getIngredientsById(id) {
    const recipe = recipesDB.find(recipe => recipe.id === id);
    return recipe ? recipe.ingredients : null;
}

function getStepsById(id) {
    const recipe = recipesDB.find(recipe => recipe.id === id);
    return recipe ? recipe.steps : null;
}

// Tests
console.log(getRecipeIds()); // Affiche: [1, 2, 3, 4]
console.log(getIngredientsById(2)); // Affiche les ingrédients de la tarte aux fraises
console.log(getDescriptionById(2));
console.log(getDurationById(2));
console.log(getCategoryById(2));
console.log(getIsVegetarianById(2));
console.log(getImageById(2));
console.log(getStepsById(2));

/*************************************************************************** */
/*                             AFFICHAGE DANS HTML                           */ 
/*************************************************************************** */



