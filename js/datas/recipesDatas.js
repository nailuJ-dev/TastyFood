// Database for the recipes compilation

const recipesDB = [
  {
    id: 1,
    title: "Ratatouille provençale",
    description: "Un plat traditionnel du sud de la France, parfait pour l'été avec des légumes frais.",
    duration: 45, // in minutes
    category: "plat",
    vegetarian: true,
    image: "../ressources/recipes/ratatouille.jpg",
    ingredients: [
      { name: "aubergine", quantity: "2", unit: "pièces" },
      { name: "courgette", quantity: "2", unit: "pièces" },
      { name: "poivron", quantity: "2", unit: "pièces" },
      { name: "tomate", quantity: "4", unit: "pièces" },
      { name: "oignon", quantity: "2", unit: "pièces" },
      { name: "ail", quantity: "3", unit: "gousses" },
      { name: "huile d'olive", quantity: "4", unit: "cuillères à soupe" },
      { name: "herbes de Provence", quantity: "2", unit: "cuillères à café" }
    ]
  },
  {
    id: 2,
    title: "Tarte aux fraises",
    description: "Une tarte sucrée avec des fraises fraîches et une crème pâtissière onctueuse.",
    duration: 60,
    category: "dessert",
    vegetarian: true,
    image: "../ressources/recipes/tarte-fraises.jpg",
    ingredients: [
      { name: "fraise", quantity: "500", unit: "g" },
      { name: "pâte brisée", quantity: "1", unit: "rouleau" },
      { name: "lait", quantity: "50", unit: "cl" },
      { name: "oeuf", quantity: "4", unit: "pièces" },
      { name: "sucre", quantity: "100", unit: "g" },
      { name: "farine", quantity: "40", unit: "g" },
      { name: "vanille", quantity: "1", unit: "gousse" }
    ]
  },
  {
    id: 3,
    title: "Boeuf Bourguignon",
    description: "Un plat traditionnel français mijoté avec du vin rouge et des légumes.",
    duration: 180,
    category: "plat",
    vegetarian: false,
    image: "../ressources/recipes/boeuf-bourguignon.jpg",
    ingredients: [
      { name: "boeuf", quantity: "1", unit: "kg" },
      { name: "vin rouge", quantity: "75", unit: "cl" },
      { name: "carotte", quantity: "3", unit: "pièces" },
      { name: "oignon", quantity: "2", unit: "pièces" },
      { name: "champignon", quantity: "250", unit: "g" },
      { name: "lardons", quantity: "200", unit: "g" },
      { name: "bouquet garni", quantity: "1", unit: "pièce" }
    ]
  },
  {
    id: 4,
    title: "Salade niçoise",
    description: "Une entrée fraîche et légère parfaite pour l'été.",
    duration: 20,
    category: "entrée",
    vegetarian: false,
    image: "../ressources/recipes/salade-nicoise.jpg",
    ingredients: [
      { name: "laitue", quantity: "1", unit: "pièce" },
      { name: "tomate", quantity: "4", unit: "pièces" },
      { name: "oeuf", quantity: "3", unit: "pièces" },
      { name: "thon", quantity: "200", unit: "g" },
      { name: "olive", quantity: "100", unit: "g" },
      { name: "haricot vert", quantity: "200", unit: "g" },
      { name: "poivron", quantity: "1", unit: "pièce" },
      { name: "anchois", quantity: "8", unit: "filets" }
    ]
  },
  {
    id: 5,
    title: "Mojito classique",
    description: "Un cocktail rafraîchissant à base de rhum, menthe et citron vert.",
    duration: 5,
    category: "boisson",
    vegetarian: true,
    image: "../ressources/recipes/mojito.jpg",
    ingredients: [
      { name: "rhum", quantity: "5", unit: "cl" },
      { name: "menthe", quantity: "10", unit: "feuilles" },
      { name: "citron vert", quantity: "1", unit: "pièce" },
      { name: "sucre de canne", quantity: "2", unit: "cuillères à café" },
      { name: "eau gazeuse", quantity: "10", unit: "cl" }
    ]
  },
  {
    id: 6,
    title: "Gratin dauphinois",
    description: "Un délicieux gratin de pommes de terre à la crème et au gruyère.",
    duration: 75,
    category: "plat",
    vegetarian: true,
    image: "../ressources/recipes/gratin-dauphinois.jpg",
    ingredients: [
      { name: "pomme de terre", quantity: "1", unit: "kg" },
      { name: "crème fraîche", quantity: "40", unit: "cl" },
      { name: "lait", quantity: "25", unit: "cl" },
      { name: "ail", quantity: "2", unit: "gousses" },
      { name: "gruyère", quantity: "150", unit: "g" },
      { name: "muscade", quantity: "1", unit: "pincée" },
      { name: "beurre", quantity: "30", unit: "g" }
    ]
  },
  {
    id: 7,
    title: "Mousse au chocolat",
    description: "Un dessert aérien au chocolat noir, simple et irrésistible.",
    duration: 15,
    category: "dessert",
    vegetarian: true,
    image: "../ressources/recipes/mousse-chocolat.jpg",
    ingredients: [
      { name: "chocolat noir", quantity: "200", unit: "g" },
      { name: "oeuf", quantity: "6", unit: "pièces" },
      { name: "sucre", quantity: "50", unit: "g" },
      { name: "beurre", quantity: "30", unit: "g" }
    ]
  },
  {
    id: 8,
    title: "Couscous aux légumes",
    description: "Une version végétarienne du couscous traditionnel, riche en saveurs et en couleurs.",
    duration: 60,
    category: "plat",
    vegetarian: true,
    image: "../ressources/recipes/couscous-legumes.jpg",
    ingredients: [
      { name: "semoule", quantity: "300", unit: "g" },
      { name: "pois chiche", quantity: "250", unit: "g" },
      { name: "carotte", quantity: "3", unit: "pièces" },
      { name: "courgette", quantity: "2", unit: "pièces" },
      { name: "navet", quantity: "2", unit: "pièces" },
      { name: "tomate", quantity: "3", unit: "pièces" },
      { name: "oignon", quantity: "2", unit: "pièces" },
      { name: "poivron", quantity: "1", unit: "pièce" },
      { name: "harissa", quantity: "1", unit: "cuillère à café" },
      { name: "huile d'olive", quantity: "3", unit: "cuillères à soupe" }
    ]
  },
  {
    id: 9,
    title: "Quiche lorraine",
    description: "Une tarte salée traditionnelle avec des lardons et un appareil à la crème.",
    duration: 45,
    category: "entrée",
    vegetarian: false,
    image: "../ressources/recipes/quiche-lorraine.jpg",
    ingredients: [
      { name: "pâte brisée", quantity: "1", unit: "rouleau" },
      { name: "lardons", quantity: "200", unit: "g" },
      { name: "oeuf", quantity: "3", unit: "pièces" },
      { name: "crème fraîche", quantity: "20", unit: "cl" },
      { name: "lait", quantity: "10", unit: "cl" },
      { name: "muscade", quantity: "1", unit: "pincée" },
      { name: "gruyère", quantity: "100", unit: "g" }
    ]
  },
  {
    id: 10,
    title: "Piña colada",
    description: "Un cocktail tropical à base de rhum, d'ananas et de lait de coco.",
    duration: 5,
    category: "boisson",
    vegetarian: true,
    image: "../ressources/recipes/pina-colada.jpg",
    ingredients: [
      { name: "rhum blanc", quantity: "5", unit: "cl" },
      { name: "jus d'ananas", quantity: "10", unit: "cl" },
      { name: "lait de coco", quantity: "3", unit: "cl" },
      { name: "glace pilée", quantity: "1", unit: "verre" }
    ]
  },
  {
    id: 11,
    title: "Risotto aux champignons",
    description: "Un plat italien crémeux à base de riz arborio et de champignons frais.",
    duration: 30,
    category: "plat",
    vegetarian: true,
    image: "../ressources/recipes/risotto-champignons.jpg",
    ingredients: [
      { name: "riz arborio", quantity: "300", unit: "g" },
      { name: "champignon", quantity: "400", unit: "g" },
      { name: "oignon", quantity: "1", unit: "pièce" },
      { name: "ail", quantity: "2", unit: "gousses" },
      { name: "vin blanc", quantity: "10", unit: "cl" },
      { name: "bouillon de légumes", quantity: "1", unit: "l" },
      { name: "parmesan", quantity: "80", unit: "g" },
      { name: "beurre", quantity: "40", unit: "g" },
      { name: "huile d'olive", quantity: "2", unit: "cuillères à soupe" },
      { name: "persil", quantity: "1", unit: "bouquet" }
    ]
  },
  {
    id: 12,
    title: "Tiramisu",
    description: "Un dessert italien à base de mascarpone, café et biscuits.",
    duration: 30,
    category: "dessert",
    vegetarian: true,
    image: "../ressources/recipes/tiramisu.jpg",
    ingredients: [
      { name: "mascarpone", quantity: "250", unit: "g" },
      { name: "oeuf", quantity: "3", unit: "pièces" },
      { name: "sucre", quantity: "80", unit: "g" },
      { name: "café", quantity: "15", unit: "cl" },
      { name: "biscuit cuillère", quantity: "24", unit: "pièces" },
      { name: "cacao", quantity: "2", unit: "cuillères à soupe" },
      { name: "amaretto", quantity: "2", unit: "cuillères à soupe" }
    ]
  },
  {
    id: 13,
    title: "Poulet basquaise",
    description: "Un plat traditionnel du Pays basque avec du poulet mijoté dans une sauce aux poivrons.",
    duration: 60,
    category: "plat",
    vegetarian: false,
    image: "../ressources/recipes/poulet-basquaise.jpg",
    ingredients: [
      { name: "poulet", quantity: "1", unit: "pièce" },
      { name: "poivron", quantity: "3", unit: "pièces" },
      { name: "tomate", quantity: "5", unit: "pièces" },
      { name: "oignon", quantity: "2", unit: "pièces" },
      { name: "ail", quantity: "3", unit: "gousses" },
      { name: "huile d'olive", quantity: "3", unit: "cuillères à soupe" },
      { name: "vin blanc", quantity: "15", unit: "cl" },
      { name: "piment d'Espelette", quantity: "1", unit: "cuillère à café" }
    ]
  },
  {
    id: 14,
    title: "Soupe à l'oignon",
    description: "Une soupe traditionnelle française avec des oignons caramélisés et du fromage gratiné.",
    duration: 45,
    category: "entrée",
    vegetarian: true,
    image: "../ressources/recipes/soupe-oignon.jpg",
    ingredients: [
      { name: "oignon", quantity: "1", unit: "kg" },
      { name: "beurre", quantity: "50", unit: "g" },
      { name: "farine", quantity: "2", unit: "cuillères à soupe" },
      { name: "bouillon de boeuf", quantity: "1.5", unit: "l" },
      { name: "vin blanc", quantity: "10", unit: "cl" },
      { name: "pain", quantity: "6", unit: "tranches" },
      { name: "gruyère", quantity: "150", unit: "g" },
      { name: "thym", quantity: "1", unit: "branche" }
    ]
  },
  {
    id: 15,
    title: "Sangria",
    description: "Une boisson espagnole à base de vin rouge et de fruits frais.",
    duration: 15,
    category: "boisson",
    vegetarian: true,
    image: "../ressources/recipes/sangria.jpg",
    ingredients: [
      { name: "vin rouge", quantity: "75", unit: "cl" },
      { name: "orange", quantity: "2", unit: "pièces" },
      { name: "citron", quantity: "1", unit: "pièce" },
      { name: "pomme", quantity: "1", unit: "pièce" },
      { name: "cannelle", quantity: "1", unit: "bâton" },
      { name: "sucre", quantity: "3", unit: "cuillères à soupe" },
      { name: "eau gazeuse", quantity: "25", unit: "cl" }
    ]
  },
  {
    id: 16,
    title: "Lasagnes à la bolognaise",
    description: "Un plat italien composé de couches de pâtes, sauce bolognaise et béchamel.",
    duration: 90,
    category: "plat",
    vegetarian: false,
    image: "../ressources/recipes/lasagnes.jpg",
    ingredients: [
      { name: "pâtes à lasagne", quantity: "12", unit: "plaques" },
      { name: "boeuf haché", quantity: "500", unit: "g" },
      { name: "carotte", quantity: "2", unit: "pièces" },
      { name: "céleri", quantity: "1", unit: "branche" },
      { name: "oignon", quantity: "1", unit: "pièce" },
      { name: "ail", quantity: "2", unit: "gousses" },
      { name: "tomate", quantity: "800", unit: "g" },
      { name: "vin rouge", quantity: "10", unit: "cl" },
      { name: "lait", quantity: "50", unit: "cl" },
      { name: "farine", quantity: "50", unit: "g" },
      { name: "beurre", quantity: "50", unit: "g" },
      { name: "parmesan", quantity: "100", unit: "g" }
    ]
  },
  {
    id: 17,
    title: "Crème brûlée",
    description: "Un dessert français crémeux à la vanille avec une croûte de caramel.",
    duration: 40,
    category: "dessert",
    vegetarian: true,
    image: "../ressources/recipes/creme-brulee.jpg",
    ingredients: [
      { name: "jaune d'oeuf", quantity: "6", unit: "pièces" },
      { name: "crème fraîche", quantity: "50", unit: "cl" },
      { name: "sucre", quantity: "75", unit: "g" },
      { name: "vanille", quantity: "1", unit: "gousse" },
      { name: "sucre roux", quantity: "4", unit: "cuillères à soupe" }
    ]
  },
  {
    id: 18,
    title: "Pad thaï aux crevettes",
    description: "Un plat thaïlandais à base de nouilles de riz sautées avec des crevettes et des légumes.",
    duration: 30,
    category: "plat",
    vegetarian: false,
    image: "../ressources/recipes/pad-thai.jpg",
    ingredients: [
      { name: "nouilles de riz", quantity: "200", unit: "g" },
      { name: "crevette", quantity: "300", unit: "g" },
      { name: "oeuf", quantity: "2", unit: "pièces" },
      { name: "tofu", quantity: "100", unit: "g" },
      { name: "pousse de soja", quantity: "100", unit: "g" },
      { name: "carotte", quantity: "1", unit: "pièce" },
      { name: "ciboule", quantity: "3", unit: "pièces" },
      { name: "cacahuète", quantity: "50", unit: "g" },
      { name: "sauce de poisson", quantity: "2", unit: "cuillères à soupe" },
      { name: "sauce soja", quantity: "1", unit: "cuillère à soupe" },
      { name: "citron vert", quantity: "1", unit: "pièce" },
      { name: "sucre", quantity: "1", unit: "cuillère à soupe" },
      { name: "piment", quantity: "1", unit: "pièce" }
    ]
  },
  {
    id: 19,
    title: "Gaspacho andalou",
    description: "Une soupe froide espagnole à base de tomates et légumes frais.",
    duration: 20,
    category: "entrée",
    vegetarian: true,
    image: "../ressources/recipes/gaspacho.jpg",
    ingredients: [
      { name: "tomate", quantity: "1", unit: "kg" },
      { name: "concombre", quantity: "1", unit: "pièce" },
      { name: "poivron", quantity: "1", unit: "pièce" },
      { name: "oignon", quantity: "1", unit: "pièce" },
      { name: "ail", quantity: "1", unit: "gousse" },
      { name: "huile d'olive", quantity: "5", unit: "cuillères à soupe" },
      { name: "vinaigre de xérès", quantity: "2", unit: "cuillères à soupe" },
      { name: "pain", quantity: "50", unit: "g" }
    ]
  },
  {
    id: 20,
    title: "Margarita",
    description: "Un cocktail mexicain à base de tequila, triple sec et jus de citron vert.",
    duration: 5,
    category: "boisson",
    vegetarian: true,
    image: "../ressources/recipes/margarita.jpg",
    ingredients: [
      { name: "tequila", quantity: "5", unit: "cl" },
      { name: "triple sec", quantity: "3", unit: "cl" },
      { name: "jus de citron vert", quantity: "3", unit: "cl" },
      { name: "sel", quantity: "1", unit: "pincée" },
      { name: "glace pilée", quantity: "1", unit: "verre" }
    ]
  },
  {
    id: 21,
    title: "Tajine d'agneau aux pruneaux",
    description: "Un plat marocain mijoté avec de l'agneau tendre et des pruneaux.",
    duration: 120,
    category: "plat",
    vegetarian: false,
    image: "../ressources/recipes/tajine-agneau.jpg",
    ingredients: [
      { name: "épaule d'agneau", quantity: "1", unit: "kg" },
      { name: "oignon", quantity: "2", unit: "pièces" },
      { name: "ail", quantity: "3", unit: "gousses" },
      { name: "pruneau", quantity: "250", unit: "g" },
      { name: "amande", quantity: "100", unit: "g" },
      { name: "cannelle", quantity: "1", unit: "bâton" },
      { name: "gingembre", quantity: "2", unit: "cuillères à café" },
      { name: "cumin", quantity: "1", unit: "cuillère à café" },
      { name: "safran", quantity: "1", unit: "pincée" },
      { name: "miel", quantity: "2", unit: "cuillères à soupe" },
      { name: "huile d'olive", quantity: "3", unit: "cuillères à soupe" }
    ]
  },
  {
    id: 22,
    title: "Tarte Tatin",
    description: "Une tarte aux pommes caramélisées renversée, spécialité de la région de la Loire.",
    duration: 60,
    category: "dessert",
    vegetarian: true,
    image: "../ressources/recipes/tarte-tatin.jpg",
    ingredients: [
      { name: "pomme", quantity: "8", unit: "pièces" },
      { name: "pâte feuilletée", quantity: "1", unit: "rouleau" },
      { name: "beurre", quantity: "100", unit: "g" },
      { name: "sucre", quantity: "150", unit: "g" },
      { name: "cannelle", quantity: "1", unit: "pincée" }
    ]
  },
  {
    id: 23,
    title: "Paëlla valenciana",
    description: "Un plat espagnol à base de riz, safran, fruits de mer et viandes.",
    duration: 75,
    category: "plat",
    vegetarian: false,
    image: "../ressources/recipes/paella.jpg",
    ingredients: [
      { name: "riz", quantity: "400", unit: "g" },
      { name: "poulet", quantity: "400", unit: "g" },
      { name: "lapin", quantity: "400", unit: "g" },
      { name: "crevette", quantity: "300", unit: "g" },
      { name: "moule", quantity: "500", unit: "g" },
      { name: "poivron", quantity: "2", unit: "pièces" },
      { name: "tomate", quantity: "3", unit: "pièces" },
      { name: "safran", quantity: "1", unit: "dose" },
      { name: "paprika", quantity: "1", unit: "cuillère à café" },
      { name: "huile d'olive", quantity: "5", unit: "cuillères à soupe" },
      { name: "ail", quantity: "3", unit: "gousses" },
      { name: "haricot vert", quantity: "150", unit: "g" }
    ]
  },
  {
    id: 24,
    title: "Velouté de potimarron",
    description: "Une soupe crémeuse à base de potimarron et de crème fraîche.",
    duration: 35,
    category: "entrée",
    vegetarian: true,
    image: "../ressources/recipes/veloute-potimarron.jpg",
    ingredients: [
      { name: "potimarron", quantity: "1", unit: "pièce" },
      { name: "pomme de terre", quantity: "2", unit: "pièces" },
      { name: "oignon", quantity: "1", unit: "pièce" },
      { name: "bouillon de légumes", quantity: "1", unit: "l" },
      { name: "crème fraîche", quantity: "10", unit: "cl" },
      { name: "muscade", quantity: "1", unit: "pincée" }
    ]
  },
  {
    id: 25,
    title: "Aperol Spritz",
    description: "Un cocktail italien pétillant à base d'Aperol et de Prosecco.",
    duration: 5,
    category: "boisson",
    vegetarian: true,
    image: "../ressources/recipes/spritz.jpg",
    ingredients: [
      { name: "Aperol", quantity: "6", unit: "cl" },
      { name: "Prosecco", quantity: "9", unit: "cl" },
      { name: "eau gazeuse", quantity: "3", unit: "cl" },
      { name: "orange", quantity: "1", unit: "tranche" },
      { name: "glace", quantity: "1", unit: "verre" }
    ]
  },
  {
    id: 26,
    title: "Curry de légumes",
    description: "Un plat végétarien épicé avec un mélange de légumes et lait de coco.",
    duration: 40,
    category: "plat",
    vegetarian: true,
    image: "../ressources/recipes/curry-legumes.jpg",
    ingredients: [
      { name: "patate douce", quantity: "2", unit: "pièces" },
      { name: "chou-fleur", quantity: "1", unit: "pièce" },
      { name: "pois chiche", quantity: "250", unit: "g" },
      { name: "épinard", quantity: "200", unit: "g" },
      { name: "oignon", quantity: "2", unit: "pièces" },
      { name: "ail", quantity: "3", unit: "gousses" },
      { name: "gingembre", quantity: "1", unit: "morceau" },
      { name: "lait de coco", quantity: "40", unit: "cl" },
      { name: "curry", quantity: "2", unit: "cuillères à soupe" },
      { name: "cumin", quantity: "1", unit: "cuillère à café" },
      { name: "coriandre", quantity: "1", unit: "bouquet" },
      { name: "huile d'olive", quantity: "2", unit: "cuillères à soupe" }
    ]
  },
  {
    id: 27,
    title: "Profiteroles au chocolat",
    description: "Des choux garnis de glace à la vanille, nappés de sauce au chocolat.",
    duration: 70,
    category: "dessert",
    vegetarian: true,
    image: "../ressources/recipes/profiteroles.jpg",
    ingredients: [
      { name: "farine", quantity: "150", unit: "g" },
      { name: "beurre", quantity: "75", unit: "g" },
      { name: "oeuf", quantity: "4", unit: "pièces" },
      { name: "sucre", quantity: "1", unit: "pincée" },
      { name: "sel", quantity: "1", unit: "pincée" },
      { name: "glace vanille", quantity: "500", unit: "ml" },
      { name: "chocolat noir", quantity: "200", unit: "g" },
      { name: "crème liquide", quantity: "15", unit: "cl" }
    ]
  },
  {
    id: 28,
    title: "Chili con carne",
    description: "Un plat mexicain épicé à base de boeuf haché, haricots rouges et épices.",
    duration: 60,
    category: "plat",
    vegetarian: false,
    image: "../ressources/recipes/chili-carne.jpg",
    ingredients: [
      { name: "boeuf haché", quantity: "500", unit: "g" },
      { name: "haricot rouge", quantity: "400", unit: "g" },
      { name: "tomate", quantity: "800", unit: "g" },
      { name: "poivron", quantity: "2", unit: "pièces" },
      { name: "oignon", quantity: "2", unit: "pièces" },
      { name: "ail", quantity: "3", unit: "gousses" },
      { name: "cumin", quantity: "2", unit: "cuillères à café" },
      { name: "paprika", quantity: "1", unit: "cuillère à café" },
      { name: "piment", quantity: "1", unit: "pièce" },
      { name: "coriandre", quantity: "1", unit: "bouquet" }
    ]
  },
  {
    id: 29,
    title: "Tartare de saumon",
    description: "Une entrée fraîche à base de saumon cru, avocat et citron vert.",
    duration: 20,
    category: "entrée",
    vegetarian: false,
    image: "../ressources/recipes/tartare-saumon.jpg",
    ingredients: [
      { name: "saumon frais", quantity: "400", unit: "g" },
      { name: "avocat", quantity: "2", unit: "pièces" },
      { name: "échalote", quantity: "1", unit: "pièce" },
      { name: "citron vert", quantity: "1", unit: "pièce" },
      { name: "aneth", quantity: "1", unit: "bouquet" },
      { name: "huile d'olive", quantity: "2", unit: "cuillères à soupe" },
      { name: "sauce soja", quantity: "1", unit: "cuillère à café" },
      { name: "gingembre", quantity: "1", unit: "petit morceau" }
    ]
  },
  {
    id: 30,
    title: "Virgin Mojito",
    description: "Version sans alcool du célèbre cocktail à la menthe et au citron vert.",
    duration: 5,
    category: "boisson",
    vegetarian: true,
    image: "../ressources/recipes/virgin-mojito.jpg",
    ingredients: [
      { name: "menthe", quantity: "15", unit: "feuilles" },
      { name: "citron vert", quantity: "2", unit: "pièces" },
      { name: "sucre de canne", quantity: "2", unit: "cuillères à café" },
      { name: "eau gazeuse", quantity: "20", unit: "cl" },
      { name: "sirop de sucre de canne", quantity: "2", unit: "cl" }
    ]
  }
];