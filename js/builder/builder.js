/**
 * Generate recipe's cards from database
 * @param {Array} recipes - recipes database
 * @param {string} containerId - Container id to include cards
 * @param {string} detailsBaseUrl - url basis for recipe details pages
 */
function generateRecipeCards(recipes, containerId, detailsBaseUrl = '/recette/') {
	const container = document.getElementById('recipes-main-generated-area');
	
	if (!container) {
	  console.error(`Conteneur pour générer les recettes introuvable`);
	  return;
	}
	
	// cleaning existing container
	container.innerHTML = '';
	
	// Display a message if no recipe is found
	if (recipes.length === 0) {
	  container.innerHTML = '<div class="no-results">Aucune recette trouvée pour cette recherche.</div>';
	  return;
	}
	
	// Use fragment to increase performance
	const fragment = document.createDocumentFragment();
	
	// Generate recipe cards
	recipes.forEach(recipe => {
	  // Create card
	  const card = document.createElement('article');
	  card.className = 'recipe-card';
	  
	  // Card template
	  card.innerHTML = `
		<div class="recipe-image-container">
		  <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
		</div>
		<div class="recipe-content">
          <div class="recipe-tags">
            <p class="category-tag category-${recipe.category}">${recipe.category}</p>
            ${recipe.vegetarian ? `
                <p>Veggie <i class="fa-solid fa-seedling fa-lg veggie-icon" style="color: #13c328;"></i></p>
              ` : ''}
		  </div>
		  <h3 class="recipe-title">${recipe.title}</h3>
		  <p class="recipe-description">${recipe.description}</p>
          <div class="recipe-bottom-container">
            <div class="recipe-duration">
			    <i class="fa-regular fa-clock fa-lg" style="color: #a36d3e;"></i>
			    <span>${formatDuration(recipe.duration)}</span>
		    </div>
		    <a href="${detailsBaseUrl}${recipe.id}" class="view-recipe-btn" data-recipe-id="${recipe.id}">Voir la recette</a>
          </div>
		</div>
	  `;
	  
	  // Add card to fragment
	  fragment.appendChild(card);
	});
	
	// Add fragment to container
	container.appendChild(fragment);
}
  
/**
* format duration in hours & minutes
* @param {number} minutes - duration in minutes
* @return {string} formated duration
*/
function formatDuration(minutes) {
	if (!minutes && minutes !== 0) return '';
	
	if (minutes < 60) {
	  return `${minutes} min`;
	}
	
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;
	
	return remainingMinutes ? `${hours} h ${remainingMinutes} min` : `${hours} h`;
}
  
/**
* Create & set a search bar for recipes
* @param {string} containerId - Container id to include the search bar
* @param {Array} recipes - Database for recipes
* @param {string} resultsContainerId - Container id where display results
* @param {Object} options - More options
*/
function createRecipeSearchBar(containerId, recipes, resultsContainerId, options = {}) {
	const container = document.getElementById('recipes-main-searchbar');
	
	if (!container) {
	  console.error(`Conteneur barre de recherche introuvable`);
	  return;
	}
	
	// Default settings
	const config = {
	  detailsBaseUrl: '/recette/',
	  useRealTimeSearch: true,
	  debounceDelay: 300,
	  ...options
	};
	
	// Create HTML basis for search bar
	container.innerHTML = `
	  <form class="recipe-search-form" id="recipe-search-form">
		<div class="search-input-group">
		  <input type="text" id="recipe-search-input" class="recipe-search-input" placeholder="Rechercher une recette...">
		  <button type="submit" class="recipe-search-button">
			<i class="fa-solid fa-magnifying-glass fa-lg" style="color: #a36d3e;"></i>
		  </button>
		</div>
		
		<div class="advanced-filters">
		  <button type="button" class="advanced-toggle">Filtres avancés</button>
		  <div class="advanced-filters-panel">
			<div class="filter-group">
			  <label for="ingredient-filter">Ingrédient:</label>
			  <input type="text" id="ingredient-filter" class="filter-input" placeholder="ex: tomate, poulet...">
			</div>
			
			<div class="filter-group">
			  <label for="category-filter">Catégorie:</label>
			  <select id="category-filter" class="filter-select">
				<option value="">Toutes les catégories</option>
				${[...new Set(recipes.map(recipe => recipe.category))]
				  .map(category => `<option value="${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</option>`)
				  .join('')}
			  </select>
			</div>
			
			<div class="filter-group checkbox-group">
			  <input type="checkbox" id="vegetarian-filter" class="filter-checkbox">
			  <label for="vegetarian-filter">Recettes végétariennes</label>
			</div>
			
			<div class="filter-group">
			  <label for="duration-filter">Durée maximale (min):</label>
			  <input id="duration-filter" class="filter-input" min="5" max="180" placeholder="ex: 30">
			</div>
			
			<button type="button" class="reset-filters-btn">Réinitialiser les filtres</button>
		  </div>
		</div>
	  </form>
	  <div id="results-counter" class="results-counter">${recipes.length} recettes trouvées</div>
	`;
	
	// Get elements
	const form = document.getElementById('recipe-search-form');
	const searchInput = document.getElementById('recipe-search-input');
	const ingredientInput = document.getElementById('ingredient-filter');
	const categorySelect = document.getElementById('category-filter');
	const vegetarianCheck = document.getElementById('vegetarian-filter');
	const durationInput = document.getElementById('duration-filter');
	const resetButton = document.querySelector('.reset-filters-btn');
	const advancedToggle = document.querySelector('.advanced-toggle');
	const advancedFiltersPanel = document.querySelector('.advanced-filters-panel');
	const resultsCounter = document.getElementById('results-counter');
	
	// Searching functions
	function performSearch() {
	  const searchTerm = searchInput.value.toLowerCase().trim();
	  const ingredientTerm = ingredientInput.value.toLowerCase().trim();
	  const categoryFilter = categorySelect.value;
	  const vegetarianOnly = vegetarianCheck.checked;
	  const maxDuration = durationInput.value ? parseInt(durationInput.value, 10) : null;
	  
	  // Filter recipes
	  const filteredRecipes = recipes.filter(recipe => {
		// Filter by name & description
		if (searchTerm && !(
		  recipe.title.toLowerCase().includes(searchTerm) ||
		  recipe.description.toLowerCase().includes(searchTerm)
		)) {
		  return false;
		}
		
		// Filter by ingredient
		if (ingredientTerm) {
		  const hasIngredient = recipe.ingredients.some(ingredient => 
			ingredient.name.toLowerCase().includes(ingredientTerm)
		  );
		  
		  if (!hasIngredient) {
			return false;
		  }
		}
		
		// Filter by category
		if (categoryFilter && recipe.category !== categoryFilter) {
		  return false;
		}
		
		// Filter veggie
		if (vegetarianOnly && !recipe.vegetarian) {
		  return false;
		}
		
		// Filter by max duration
		if (maxDuration && recipe.duration > maxDuration) {
		  return false;
		}
		
		return true;
	  });
	  
	  // Update result count
	  const count = filteredRecipes.length;
	  resultsCounter.textContent = `${count} recette${count > 1 ? 's' : ''} trouvée${count > 1 ? 's' : ''}`;
	  
	  // Generate filtered recipes' cards
	  generateRecipeCards(filteredRecipes, resultsContainerId, config.detailsBaseUrl);
	}
	
	// Debouncing function to limitate repeated call
	function debounce(func, delay) {
	  let timer;
	  return function(...args) {
		clearTimeout(timer);
		timer = setTimeout(() => func.apply(this, args), delay);
	  };
	}
	
	// Event listeners
	form.addEventListener('submit', e => {
	  e.preventDefault();
	  performSearch();
	});
	
	// Toggle for advanced filters
	advancedToggle.addEventListener('click', () => {
	  advancedFiltersPanel.classList.toggle('show');
	  advancedToggle.classList.toggle('active');
	});
	
	// Reinitialized filters
	resetButton.addEventListener('click', () => {
	  searchInput.value = '';
	  ingredientInput.value = '';
	  categorySelect.value = '';
	  vegetarianCheck.checked = false;
	  durationInput.value = '';
	  performSearch();
	});
	
	// Real-time searching if activate
	if (config.useRealTimeSearch) {
	  const debouncedSearch = debounce(performSearch, config.debounceDelay);
	  searchInput.addEventListener('input', debouncedSearch);
	  ingredientInput.addEventListener('input', debouncedSearch);
	  categorySelect.addEventListener('change', performSearch);
	  vegetarianCheck.addEventListener('change', performSearch);
	  durationInput.addEventListener('input', debouncedSearch);
	}
	
	// Initialize display with all recipes
	generateRecipeCards(recipes, resultsContainerId, config.detailsBaseUrl);
}

document.addEventListener('DOMContentLoaded', () => {
    let searchContainer = document.getElementsByClassName('.recipes-main-searchbar');
    let recipesContainer = document.getElementsByClassName('.recipes-main-generated-area');

    // Initialiser la barre de recherche avec la base de données
    createRecipeSearchBar(searchContainer, recipesDB, recipesContainer, {
      detailsBaseUrl: '/recettes/',
      useRealTimeSearch: true,
      debounceDelay: 300
    });
});