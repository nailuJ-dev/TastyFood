class BuilderMainPart {
	constructor (data) {
		this._id = data.id;
		this._name = data.name;
		this._description = data.description;
		this._time = data.time;
		this._servings = data.servings;
		this._ustensils = data.ustensils;
		this._ingredients = data.ingredients;
		this._appliance = data.appliance;
	}

	// Create recipe cards

	get createMainPart () {
		const recipeCard = createDomElements(
			"article",
			{ class: "recipes-main-article-card" },
			createDomElements("img", { class: "recipes-main-article-card-image" }),
			createDomElements("h2", `${this._name}`, { class: "recipes-main-article-card-title" }),
			createDomElements("p",	`${this._time}min `, { class: "recipe__card__header__time" },
				createDomElements("i", { class: "fas fa-clock recipe__card__header__icon" })
			),
            createDomElements("p", `${this._description}`, { class: "recipe__card__description" })
		);
		return recipeCard;
	};
};