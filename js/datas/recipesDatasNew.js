let test = "je teste la portee"
// Database for the recipes compilation
export const recipesDB = [
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
    ],
    steps: [
      "Laver et couper tous les légumes en dés de taille moyenne.",
      "Dans une grande poêle, faire revenir les oignons dans l'huile d'olive jusqu'à ce qu'ils deviennent translucides.",
      "Ajouter l'ail émincé et faire revenir pendant 1 minute.",
      "Ajouter les poivrons et les aubergines, puis faire cuire pendant 5 minutes.",
      "Ajouter les courgettes et les tomates, puis les herbes de Provence.",
      "Laisser mijoter à feu doux pendant 30 minutes en remuant de temps en temps."
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
      { name: "œuf", quantity: "4", unit: "pièces" },
      { name: "sucre", quantity: "100", unit: "g" },
      { name: "farine", quantity: "40", unit: "g" },
      { name: "vanille", quantity: "1", unit: "gousse" }
    ],
    steps: [
      "Préchauffer le four à 180°C et étaler la pâte brisée dans un moule à tarte.",
      "Cuire la pâte à blanc pendant 15 minutes avec des poids de cuisson.",
      "Préparer la crème pâtissière : faire bouillir le lait avec la gousse de vanille fendue.",
      "Fouetter les œufs avec le sucre, ajouter la farine, puis verser le lait chaud tout en remuant.",
      "Remettre le mélange sur le feu et faire épaissir, puis laisser refroidir.",
      "Étaler la crème sur le fond de tarte refroidi, disposer les fraises coupées en deux et servir frais."
    ]
  },
  {
    id: 3,
    title: "Bœuf Bourguignon",
    description: "Un plat traditionnel français mijoté avec du vin rouge et des légumes.",
    duration: 180,
    category: "plat",
    vegetarian: false,
    image: "../ressources/recipes/boeuf-bourguignon.jpg",
    ingredients: [
      { name: "bœuf", quantity: "1", unit: "kg" },
      { name: "vin rouge", quantity: "75", unit: "cl" },
      { name: "carotte", quantity: "3", unit: "pièces" },
      { name: "oignon", quantity: "2", unit: "pièces" },
      { name: "champignon", quantity: "250", unit: "g" },
      { name: "lardons", quantity: "200", unit: "g" },
      { name: "bouquet garni", quantity: "1", unit: "pièce" }
    ],
    steps: [
      "Couper le bœuf en morceaux de 3 cm et faire revenir avec les lardons dans une cocotte.",
      "Ajouter les oignons et les carottes coupés en morceaux, puis faire dorer.",
      "Saupoudrer de farine, mélanger, puis ajouter le vin rouge et le bouquet garni.",
      "Porter à ébullition, puis couvrir et laisser mijoter à feu doux pendant 2h30.",
      "Faire revenir les champignons séparément, puis les ajouter 15 minutes avant la fin de la cuisson.",
      "Vérifier l'assaisonnement, retirer le bouquet garni et servir chaud avec des pommes de terre."
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
      { name: "œuf", quantity: "3", unit: "pièces" },
      { name: "thon", quantity: "200", unit: "g" },
      { name: "olive", quantity: "100", unit: "g" },
      { name: "haricot vert", quantity: "200", unit: "g" },
      { name: "poivron", quantity: "1", unit: "pièce" },
      { name: "anchois", quantity: "8", unit: "filets" }
    ],
    steps: [
      "Faire cuire les œufs durs pendant 9 minutes et les haricots verts pendant 10 minutes.",
      "Laver et essorer la laitue, puis la déchirer en morceaux dans un saladier.",
      "Couper les tomates en quartiers et le poivron en lanières.",
      "Disposer harmonieusement tous les ingrédients sur le lit de salade.",
      "Ajouter le thon émietté, les œufs coupés en quartiers, les olives et les filets d'anchois.",
      "Préparer une vinaigrette avec huile d'olive, vinaigre et moutarde, puis arroser la salade."
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
    ],
    steps: [
      "Couper le citron vert en quartiers et les mettre dans un verre.",
      "Ajouter le sucre de canne et écraser légèrement avec un pilon.",
      "Ajouter les feuilles de menthe et les froisser doucement avec le pilon.",
      "Remplir le verre de glace pilée et verser le rhum.",
      "Compléter avec l'eau gazeuse et remuer doucement.",
      "Décorer avec une tranche de citron vert et une branche de menthe."
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
    ],
    steps: [
      "Préchauffer le four à 180°C et frotter un plat à gratin avec une gousse d'ail.",
      "Éplucher les pommes de terre et les couper en fines rondelles.",
      "Mélanger la crème et le lait, puis assaisonner avec sel, poivre et muscade.",
      "Disposer les pommes de terre en couches dans le plat beurré.",
      "Verser le mélange crème-lait et parsemer de gruyère râpé.",
      "Enfourner pendant 1 heure jusqu'à ce que les pommes de terre soient tendres et dorées."
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
      { name: "œuf", quantity: "6", unit: "pièces" },
      { name: "sucre", quantity: "50", unit: "g" },
      { name: "beurre", quantity: "30", unit: "g" }
    ],
    steps: [
      "Faire fondre le chocolat avec le beurre au bain-marie, puis laisser refroidir.",
      "Séparer les blancs des jaunes d'œufs.",
      "Fouetter les jaunes avec le sucre jusqu'à ce que le mélange blanchisse.",
      "Incorporer délicatement le chocolat fondu aux jaunes d'œufs.",
      "Monter les blancs en neige ferme et les incorporer délicatement à la préparation.",
      "Répartir dans des ramequins et réfrigérer au moins 3 heures avant de servir."
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
    ],
    steps: [
      "Faire revenir les oignons émincés dans l'huile d'olive jusqu'à ce qu'ils soient translucides.",
      "Ajouter les carottes et les navets coupés en morceaux, puis faire cuire 5 minutes.",
      "Ajouter les courgettes, les poivrons et les tomates coupés en morceaux.",
      "Verser de l'eau à hauteur des légumes, ajouter les épices et porter à ébullition.",
      "Ajouter les pois chiches et laisser mijoter à couvert pendant 30 minutes.",
      "Préparer la semoule selon les instructions du paquet et servir avec les légumes et la harissa."
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
      { name: "œuf", quantity: "3", unit: "pièces" },
      { name: "crème fraîche", quantity: "20", unit: "cl" },
      { name: "lait", quantity: "10", unit: "cl" },
      { name: "muscade", quantity: "1", unit: "pincée" },
      { name: "gruyère", quantity: "100", unit: "g" }
    ],
    steps: [
      "Préchauffer le four à 180°C et étaler la pâte brisée dans un moule à tarte.",
      "Faire revenir les lardons dans une poêle sans ajout de matière grasse.",
      "Battre les œufs avec la crème fraîche et le lait, puis assaisonner avec sel, poivre et muscade.",
      "Répartir les lardons sur le fond de tarte.",
      "Verser le mélange œufs-crème et parsemer de gruyère râpé.",
      "Enfourner pendant 30 minutes jusqu'à ce que la quiche soit dorée et l'appareil pris."
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
    ],
    steps: [
      "Mettre tous les ingrédients dans un blender.",
      "Mixer jusqu'à obtenir une consistance homogène et légèrement mousseuse.",
      "Goûter et ajuster les proportions selon votre préférence.",
      "Verser dans un verre à cocktail.",
      "Décorer avec une tranche d'ananas et une cerise confite.",
      "Servir immédiatement avec une paille."
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
    ],
    steps: [
      "Faire chauffer le bouillon de légumes dans une casserole.",
      "Dans une autre casserole, faire revenir l'oignon émincé dans l'huile d'olive et 20g de beurre.",
      "Ajouter le riz et le faire nacrer pendant 2 minutes, puis déglacer avec le vin blanc.",
      "Ajouter le bouillon chaud louche par louche en remuant constamment jusqu'à absorption.",
      "Pendant ce temps, faire revenir les champignons émincés avec l'ail dans une poêle séparée.",
      "Quand le riz est cuit (18-20 min), incorporer les champignons, le reste du beurre et le parmesan râpé."
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
      { name: "œuf", quantity: "3", unit: "pièces" },
      { name: "sucre", quantity: "80", unit: "g" },
      { name: "café", quantity: "15", unit: "cl" },
      { name: "biscuit cuillère", quantity: "24", unit: "pièces" },
      { name: "cacao", quantity: "2", unit: "cuillères à soupe" },
      { name: "amaretto", quantity: "2", unit: "cuillères à soupe" }
    ],
    steps: [
      "Séparer les blancs des jaunes d'œufs.",
      "Fouetter les jaunes avec le sucre jusqu'à ce que le mélange blanchisse, puis ajouter le mascarpone.",
      "Monter les blancs en neige et les incorporer délicatement à la préparation au mascarpone.",
      "Préparer le café, le laisser refroidir et y ajouter l'amaretto.",
      "Tremper rapidement les biscuits dans le café et les disposer dans un plat, puis couvrir d'une couche de crème.",
      "Répéter l'opération, terminer par une couche de crème et saupoudrer de cacao. Réfrigérer 4h minimum."
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
    ],
    steps: [
      "Découper le poulet en morceaux et les faire dorer dans l'huile d'olive.",
      "Ajouter les oignons émincés et l'ail écrasé, puis faire revenir jusqu'à ce qu'ils soient translucides.",
      "Ajouter les poivrons coupés en lanières et poursuivre la cuisson pendant 5 minutes.",
      "Incorporer les tomates pelées et coupées en morceaux, puis le piment d'Espelette.",
      "Verser le vin blanc, couvrir et laisser mijoter à feu doux pendant 40 minutes.",
      "Ajuster l'assaisonnement et servir chaud, idéalement avec du riz."
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
      { name: "bouillon de bœuf", quantity: "1.5", unit: "l" },
      { name: "vin blanc", quantity: "10", unit: "cl" },
      { name: "pain", quantity: "6", unit: "tranches" },
      { name: "gruyère", quantity: "150", unit: "g" },
      { name: "thym", quantity: "1", unit: "branche" }
    ],
    steps: [
      "Émincer finement les oignons et les faire caraméliser à feu doux dans le beurre pendant 25-30 minutes.",
      "Saupoudrer de farine, mélanger et laisser cuire 2 minutes.",
      "Déglacer avec le vin blanc, puis ajouter le bouillon chaud et le thym.",
      "Laisser mijoter à feu doux pendant 15 minutes.",
      "Toaster légèrement les tranches de pain et les disposer sur la soupe dans des bols allant au four.",
      "Parsemer de gruyère râpé et gratiner sous le gril du four jusqu'à ce que le fromage soit doré."
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
    ],
    steps: [
      "Laver et couper les fruits en morceaux sans les peler.",
      "Dans un grand pichet, mélanger le vin rouge avec le sucre et le bâton de cannelle.",
      "Ajouter les fruits coupés et mélanger délicatement.",
      "Laisser reposer au réfrigérateur pendant au moins 2 heures, idéalement toute une nuit.",
      "Au moment de servir, ajouter l'eau gazeuse et des glaçons.",
      "Servir dans des verres garnis de quelques morceaux de fruits."
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
      { name: "bœuf haché", quantity: "500", unit: "g" },
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
    ],
    steps: [
      "Préparer la sauce bolognaise : faire revenir oignon, carotte et céleri émincés, puis ajouter la viande.",
      "Quand la viande est dorée, ajouter l'ail, les tomates concassées et le vin rouge, puis laisser mijoter 45 min.",
      "Préparer la béchamel : faire fondre le beurre, ajouter la farine, puis incorporer progressivement le lait chaud.",
      "Faire cuire les pâtes à lasagne dans de l'eau bouillante salée pendant 5 minutes.",
      "Dans un plat à gratin, alterner les couches : sauce bolognaise, pâtes, béchamel et parmesan.",
      "Terminer par une couche de béchamel et de parmesan, puis enfourner à 180°C pendant 30 minutes."
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
      { name: "jaune d'œuf", quantity: "6", unit: "pièces" },
      { name: "crème fraîche", quantity: "50", unit: "cl" },
      { name: "sucre", quantity: "75", unit: "g" },
      { name: "vanille", quantity: "1", unit: "gousse" },
      { name: "sucre roux", quantity: "4", unit: "cuillères à soupe" }
    ],
    steps: [
      "Préchauffer le four à 100°C et porter la crème à ébullition avec la gousse de vanille fendue.",
      "Fouetter les jaunes d'œufs avec le sucre jusqu'à ce que le mélange blanchisse.",
      "Verser la crème chaude sur le mélange œufs-sucre en remuant constamment.",
      "Répartir la préparation dans des ramequins et les placer dans un bain-marie.",
      "Cuire au four pendant 35-40 minutes jusqu'à ce que la crème soit prise mais encore tremblotante.",
      "Refroidir, puis saupoudrer de sucre roux et caraméliser avec un chalumeau ou sous le gril du four."
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
      { name: "œuf", quantity: "2", unit: "pièces" },
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
    ],
    steps: [
      "Faire tremper les nouilles de riz dans l'eau tiède pendant 15 minutes, puis les égoutter.",
      "Dans un wok chaud, faire revenir les crevettes décortiquées jusqu'à ce qu'elles soient roses, puis les réserver.",
      "Faire revenir le tofu coupé en dés jusqu'à ce qu'il soit doré, puis ajouter les carottes râpées.",
      "Pousser les ingrédients sur le côté du wok et faire cuire les œufs brouillés.",
      "Ajouter les nouilles, les sauces, le sucre et le jus de citron vert, puis mélanger rapidement.",
      "Incorporer les crevettes, les pousses de soja, les ciboules émincées et parsemer de cacahuètes concassées."
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
    ],
    steps: [
      "Laver et couper grossièrement tous les légumes.",
      "Faire tremper le pain dans un peu d'eau, puis l'essorer.",
      "Mixer tous les légumes, l'ail et le pain jusqu'à obtenir une texture lisse.",
      "Ajouter l'huile d'olive et le vinaigre, puis mixer à nouveau.",
      "Assaisonner à votre goût avec du sel et du poivre.",
      "Réfrigérer pendant au moins 2 heures avant de servir garni de petits dés de légumes."
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
    ],
    steps: [
      "Frotter le rebord d'un verre avec un quartier de citron vert, puis le tremper dans du sel.",
      "Dans un shaker, mettre des glaçons, la tequila, le triple sec et le jus de citron vert.",
      "Secouer vigoureusement pendant 10-15 secondes.",
      "Remplir le verre de glace pilée.",
      "Filtrer le contenu du shaker dans le verre.",
      "Décorer d'une tranche de citron vert sur le rebord du verre."
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
    ],
    steps: [
      "Couper l'agneau en morceaux de 4-5 cm et faire revenir dans l'huile d'olive jusqu'à coloration.",
      "Ajouter les oignons émincés et l'ail écrasé, puis faire revenir 5 minutes.",
      "Ajouter toutes les épices et mélanger pour enrober la viande.",
      "Couvrir d'eau à hauteur, porter à ébullition puis réduire le feu et laisser mijoter 1h30.",
      "Faire tremper les pruneaux dans l'eau tiède pendant 15 minutes, puis les ajouter avec le miel.",
      "Poursuivre la cuisson 30 minutes, puis servir garni d'amandes grillées et de cannelle."
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
    ],
    steps: [
      "Éplucher et évider les pommes, puis les couper en quartiers.",
      "Dans un moule à tarte allant sur le feu, faire fondre le beurre avec le sucre pour obtenir un caramel.",
      "Disposer les quartiers de pommes en rosace dans le caramel, saupoudrer de cannelle.",
      "Faire cuire à feu moyen pendant 15 minutes jusqu'à ce que les pommes soient tendres et caramélisées.",
      "Recouvrir avec la pâte feuilletée en rentrant bien les bords à l'intérieur du moule.",
      "Cuire au four à 180°C pendant 25-30 minutes, puis démouler à chaud en retournant sur un plat."
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
    ],
    steps: [
      "Dans une grande poêle à paella, faire dorer les morceaux de poulet et de lapin dans l'huile d'olive.",
      "Ajouter les poivrons coupés en lanières et les haricots verts, puis faire revenir 5 minutes.",
      "Incorporer les tomates pelées et coupées en dés, l'ail émincé, le paprika et le safran.",
      "Verser le riz et remuer pour bien l'enrober, puis ajouter deux fois son volume en eau chaude.",
      "Laisser mijoter 15 minutes, puis disposer les crevettes et les moules sur le dessus.",
      "Poursuivre la cuisson sans remuer pendant encore 10 minutes jusqu'à absorption complète du liquide."
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
    ],
    steps: [
      "Éplucher et couper le potimarron, les pommes de terre et l'oignon en morceaux.",
      "Faire revenir l'oignon dans un peu d'huile jusqu'à ce qu'il soit translucide.",
      "Ajouter le potimarron et les pommes de terre, puis verser le bouillon.",
      "Porter à ébullition et laisser mijoter pendant 20-25 minutes jusqu'à ce que les légumes soient tendres.",
      "Mixer finement, puis ajouter la crème fraîche et la muscade.",
      "Réchauffer doucement sans faire bouillir et servir chaud avec des croûtons."
    ]
  },
  {
    id: 25,
    title: "Aperol Spritz",
    description: "Un cocktail italien pétillant à base d'Aperol et de Prosecco.",
    duration: 5,
    category: "boisson",
    vegetarian: true,
    image: "../ressources/recipes/aperol-spritz.jpg",
    ingredients: [
      { name: "Aperol", quantity: "6", unit: "cl" },
      { name: "Prosecco", quantity: "9", unit: "cl" },
      { name: "eau gazeuse", quantity: "3", unit: "cl" },
      { name: "orange", quantity: "1", unit: "tranche" },
      { name: "glace", quantity: "1", unit: "verre" }
    ],
    steps: [
      "Remplir un verre à vin large de glaçons.",
      "Verser l'Aperol dans le verre.",
      "Ajouter le Prosecco frais.",
      "Compléter avec un trait d'eau gazeuse.",
      "Mélanger délicatement une fois.",
      "Garnir d'une tranche d'orange et servir immédiatement."
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
    ],
    steps: [
      "Faire revenir les oignons émincés, l'ail et le gingembre râpés dans l'huile d'olive.",
      "Ajouter les épices et faire revenir 1 minute pour libérer les arômes.",
      "Incorporer les patates douces pelées et coupées en dés et le chou-fleur en petits bouquets.",
      "Verser le lait de coco et un peu d'eau si nécessaire, puis couvrir et laisser mijoter 20 minutes.",
      "Ajouter les pois chiches égouttés et les épinards, puis poursuivre la cuisson 5 minutes.",
      "Parsemer de coriandre fraîche ciselée et servir avec du riz basmati."
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
      { name: "œuf", quantity: "4", unit: "pièces" },
      { name: "sucre", quantity: "1", unit: "pincée" },
      { name: "sel", quantity: "1", unit: "pincée" },
      { name: "glace vanille", quantity: "500", unit: "ml" },
      { name: "chocolat noir", quantity: "200", unit: "g" },
      { name: "crème liquide", quantity: "15", unit: "cl" }
    ],
    steps: [
      "Préparer la pâte à choux : porter à ébullition 25cl d'eau avec le beurre, le sel et le sucre.",
      "Hors du feu, ajouter la farine d'un coup et mélanger vigoureusement jusqu'à obtenir une pâte homogène.",
      "Remettre sur feu doux et dessécher la pâte jusqu'à ce qu'elle se détache des parois.",
      "Incorporer les œufs un à un hors du feu en mélangeant bien entre chaque ajout.",
      "Façonner des petits choux sur une plaque et les cuire à 180°C pendant 25-30 minutes.",
      "Préparer la sauce au chocolat, garnir les choux de glace à la vanille et napper de chocolat chaud."
    ]
  },
  {
    id: 28,
    title: "Chili con carne",
    description: "Un plat mexicain épicé à base de bœuf haché, haricots rouges et épices.",
    duration: 60,
    category: "plat",
    vegetarian: false,
    image: "../ressources/recipes/chili-con-carne.jpg",
    ingredients: [
      { name: "bœuf haché", quantity: "500", unit: "g" },
      { name: "haricot rouge", quantity: "400", unit: "g" },
      { name: "tomate", quantity: "800", unit: "g" },
      { name: "poivron", quantity: "2", unit: "pièces" },
      { name: "oignon", quantity: "2", unit: "pièces" },
      { name: "ail", quantity: "3", unit: "gousses" },
      { name: "cumin", quantity: "2", unit: "cuillères à café" },
      { name: "paprika", quantity: "1", unit: "cuillère à café" },
      { name: "piment", quantity: "1", unit: "pièce" },
      { name: "coriandre", quantity: "1", unit: "bouquet" }
    ],
    steps: [
      "Faire revenir les oignons émincés et l'ail écrasé dans une cocotte.",
      "Ajouter la viande hachée et la faire dorer en l'émiettant.",
      "Incorporer les poivrons coupés en dés, le cumin, le paprika et le piment émincé.",
      "Ajouter les tomates concassées et laisser mijoter 15 minutes à feu doux.",
      "Incorporer les haricots rouges égouttés et poursuivre la cuisson 20 minutes.",
      "Servir parsemé de coriandre fraîche ciselée, accompagné de riz ou de tortillas."
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
    ],
    steps: [
      "Couper le saumon frais en petits dés et le placer dans un bol.",
      "Ajouter l'échalote finement ciselée et le gingembre râpé.",
      "Incorporer le jus de citron vert, l'huile d'olive et la sauce soja, puis mélanger délicatement.",
      "Réfrigérer pendant au moins 30 minutes pour mariner.",
      "Au moment de servir, couper les avocats en dés et les mélanger délicatement au tartare.",
      "Dresser avec un emporte-pièce et parsemer d'aneth ciselée."
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
    ],
    steps: [
      "Laver les feuilles de menthe et les déposer au fond d'un verre.",
      "Couper un citron vert en quartiers et les presser légèrement dans le verre.",
      "Ajouter le sucre de canne et le sirop, puis piler doucement pour libérer les arômes de la menthe.",
      "Remplir le verre de glace pilée.",
      "Ajouter l'eau gazeuse et remuer délicatement.",
      "Garnir d'une tranche de citron vert et de quelques feuilles de menthe fraîche."
    ]
  }
];

