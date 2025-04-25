import {recipesDB} from "../datas/recipesDatasNew.js";

// Formatting duration in minutes
function formatDuration(minutes) {
  if (!minutes && minutes !== 0) return '';
  
  if (minutes < 60) {
    return `${minutes} min`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  return remainingMinutes ? `${hours} h ${remainingMinutes} min` : `${hours} h`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Get recipe ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get('id');
  
  // Find the recipe in the database
  const recipe = recipesDB.find(recipe => recipe.id == recipeId);
  
  if (!recipe) {
    document.getElementById('recipe-details').innerHTML = '<p>Recette introuvable</p>';
    return;
  }
  
  // Update the page title
  document.title = `${recipe.title} - Détail de la recette`;
  
  // Display recipe details & title
  const titleElement = `
    <h2>${recipe.title}</h2>
    <p>Pour 4 personnes</p>
  `;

  document.getElementById('recipe-header-page').innerHTML = titleElement;

  const detailsHTML = `
    <div class="content flex mediatel">
      <div class = "left-side">
        <section class="description-recipe">
          <h3>Description</h3>
          <div class= "top-description flex">
            <p class="category-tag category-${recipe.category}"><strong>Catégorie de la recette:</strong> ${recipe.category} </p>
            ${recipe.vegetarian ? '<p class="vegetarian-badge">Veggie <i class="fa-solid fa-seedling fa-lg veggie-icon" style="color: #13c328;"></i>  </p>' : ''}
            <p class="duration-badge">   <strong>Préparation:</strong> ${formatDuration(recipe.duration)}</p>
          </div>
          <p class="recipe-presentation">${recipe.description}</p>
          <div class= "img-contenair flex">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">
          </div>
          </section>
        
        <article class="recipe-steps">
          <h3>Préparation</h3>
          <ol>
            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </article>
      </div>
        
      <div class = "right-side">
        <article class ="recipe-ingredients">
          <h3>Ingrédients</h3>
          <ul>
            ${recipe.ingredients.map(ingredient => 
              `<li class="one-ingredient">${ingredient.quantity} ${ingredient.unit} de ${ingredient.name}</li>`
            ).join('')}
          </ul>
        </article>
      </div>
    </div>

    
    
  `;
  
  document.getElementById('recipe-main').innerHTML = detailsHTML;
});