// All amounts serve two. Quantities in the pantry and planner use the same units.
const foods = {
  Spaghetti: "g",
  Spinach: "g",
  Pesto: "g",
  Lemon: "each",
  Egg: "each",
  "Tinned tomatoes": "g",
  Feta: "g",
  "Cooked rice": "g",
  Capsicum: "each",
  "Soy sauce": "ml",
  "White beans": "g",
  "Cherry tomatoes": "g",
  Bread: "slices",
  Cheese: "g",
  Banana: "each",
  Oats: "g",
  Milk: "ml",
  Broccoli: "g",
  Cucumber: "each",
  Orange: "each",
  Apple: "each",
  Carrot: "each",
  Mushroom: "g",
  Cauliflower: "g",
  Zucchini: "each",
  Avocado: "each",
  Potato: "each",
  "Tomato": "each",
  "Onion": "each",
  "Mango": "each",
  "Pear": "each",
  "Peach": "each",
  "Kiwi": "each",
  "Watermelon": "each",
  "Eggplant": "each",
  "Lime": "each",
  "Butter": "g",
  "Yoghurt": "g",
  "Chicken": "g",
  "Tofu": "g",
  "Bacon": "g",
  "Ham": "g",
  "Cereal": "g",
  "Noodles": "g",
  "Couscous": "g",
  "Almonds": "g",
  "Peas": "g",
  "Lettuce": "g",
  "Cream": "ml",
  "Oil": "ml",
  "Cabbage": "each",
  "Butternut pumpkin": "each",
  "Strawberry": "g",
  "Pineapple": "each",
  "Artichoke": "each",
  "Pomegranate": "each",
  "Fig": "each",
  "Corn": "each",
  "Rice": "g",
  "Flour": "g",
  "Lentils": "g",
  "Chickpeas": "g",
  "Pasta": "g",
  "Sugar": "g",
  "Rolled barley": "g",
  "Peanut butter": "g",
  "Baked beans": "g",
  "Kidney beans": "g",
  "Black beans": "g",
  "Coconut milk": "ml",
  "Tomato paste": "g",
  "Baking powder": "g",
  "Baking soda": "g",
  Honey: "g",
  Tuna: "g",
  Quinoa: "g",
  Cornflour: "g",
  Salt: "g",
  Paprika: "g",
  Cumin: "g",
  Cinnamon: "g",
  Vinegar: "ml",
  Garlic: "each",

  "Tortilla": "each",
  "Spring onion": "each",
  "Sweet potato": "each",
  "Bok choy": "each",
  "Flatbread": "each",
  "Pita": "each",
  "Pearl barley": "g",
  "Tahini": "g",
  "Sesame seeds": "g",
  "Red lentils": "g",
  "Turmeric": "g",
  "Miso": "g",
  "Udon noodles": "g",
  "Ginger": "g",
  "Curry powder": "g",
  "Kimchi": "g",
  "Mint": "g",
  "Gochujang": "g",
  "Harissa": "g",
  "Rice noodles": "g",
  "Ricotta": "g",
  "Thyme": "g",
  "Cocoa powder": "g",
  "Labneh": "g",
  "Za’atar": "g",
  "Parsley": "g",
  "Dill": "g",
  "Mustard": "g",
  "Basil": "g",
  "Instant polenta": "g"
};
const starter = {
  Spaghetti: 250,
  Spinach: 100,
  Pesto: 80,
  Lemon: 1,
  Egg: 4,
  "Cooked rice": 320,
  Capsicum: 1,
  "Soy sauce": 30,
  Bread: 4,
  Cheese: 80,
};
const dishes = [
  {
    name: "Lemony pesto spaghetti",
    time: 20,
    gear: "One pot",
    note: "Spinach wilts in the spaghetti pot just before draining. A splash of the starchy cooking water loosens the pesto into a glossy sauce that coats each strand, and a squeeze of lemon brightens the basil.",
    needs: { Spaghetti: 180, Spinach: 60, Pesto: 50, Lemon: 0.5 },
    steps: [
      "Bring a pot of water to the boil. Cook the spaghetti according to the packet.",
      "Add the spinach for the last minute. Reserve a mug of cooking water, then drain.",
      "Off the heat, toss with pesto, lemon juice and a splash of cooking water.",
    ],
    swaps: "Try rocket in place of spinach.",
  },
  {
    name: "Tomato & feta baked eggs",
    time: 25,
    gear: "One pan",
    note: "A tin of tomatoes cooks down into a thick sauce with little wells for the eggs. Cover the pan until the whites set, then crumble feta over the top so each spoonful gets a salty bite.",
    needs: { Egg: 4, "Tinned tomatoes": 400, Feta: 40 },
    steps: [
      "Simmer the tomatoes in a small frying pan for 8 minutes, stirring occasionally.",
      "Make four wells and crack an egg into each. Cover and cook gently until the eggs are set.",
      "Scatter over the crumbled feta and serve from the pan.",
    ],
    swaps: "A little grated cheese can replace the feta.",
  },
  {
    name: "Capsicum egg fried rice",
    time: 15,
    gear: "One pan",
    note: "Chilled leftover rice separates into grains as it hits the hot pan. Diced capsicum adds crunch, soft ribbons of scrambled egg run through the rice, and soy sauce seasons the whole dish.",
    needs: { "Cooked rice": 300, Egg: 2, Capsicum: 1, "Soy sauce": 15 },
    steps: [
      "Dice the capsicum. Soften it in a lightly oiled pan.",
      "Push it aside, add beaten eggs and scramble until set.",
      "Add chilled cooked rice and soy sauce. Stir until steaming hot throughout.",
    ],
    swaps: "Use diced carrot in place of capsicum.",
  },
  {
    name: "White bean & tomato salad",
    time: 10,
    gear: "No cooking",
    note: "Halved cherry tomatoes release their juices into the lemon and olive oil, making a quick dressing for the creamy white beans. Serve straight away for a ten-minute lunch with no cooking.",
    needs: { "White beans": 240, "Cherry tomatoes": 200, Lemon: 0.5 },
    steps: [
      "Rinse and drain the beans. Halve the tomatoes.",
      "Toss together with lemon juice and a drizzle of olive oil to taste.",
    ],
    swaps: "Chickpeas work in place of white beans.",
  },
  {
    name: "Spinach melt toasties",
    time: 10,
    gear: "One pan",
    note: "A handful of spinach and grated cheese turn four slices of bread into two hot toasties. Press them gently in the pan so the crusts turn golden while the cheese melts around the leaves.",
    needs: { Bread: 4, Cheese: 60, Spinach: 40 },
    steps: [
      "Layer cheese and spinach between the bread slices.",
      "Toast in a lightly oiled pan over medium heat, pressing down gently. Flip and cook until golden and melted.",
    ],
    swaps: "Use wraps in place of sliced bread.",
  },
  {
    name: "Banana oat pancakes",
    time: 20,
    gear: "One pan",
    note: "Ripe bananas sweeten a simple batter of oats, egg and milk. Spoon it into small rounds that are easy to flip, then cook until the edges are golden and the centres are soft.",
    needs: { Banana: 2, Oats: 80, Egg: 2, Milk: 50 },
    steps: [
      "Mash the bananas, then blend with oats, eggs and milk until smooth.",
      "Spoon small rounds into a lightly oiled pan over medium heat.",
      "Flip when bubbles appear. Cook until set and golden on both sides.",
    ],
    swaps: "Any unsweetened plant milk works here.",
  },
  {
    "name": "Peanut sesame noodles",
    "time": 15,
    "note": "Lime loosens a creamy peanut dressing that clings to warm noodles.",
    "needs": {
      "Noodles": 180,
      "Peanut butter": 40,
      "Soy sauce": 20,
      "Lime": 1,
      "Sesame seeds": 8
    },
    "steps": [
      "Boil the noodles according to the packet, reserving a mug of water.",
      "Whisk the peanut butter, soy and lime juice with enough warm water to coat a spoon. Toss through the noodles and scatter with sesame seeds."
    ]
  },
  {
    "name": "Red lentil dal",
    "time": 30,
    "note": "Split lentils soften into a thick, cumin-scented dal in one pot.",
    "needs": {
      "Red lentils": 150,
      "Onion": 1,
      "Cumin": 3,
      "Turmeric": 2,
      "Oil": 10
    },
    "steps": [
      "Dice and soften the onion in oil, then stir in the spices for 30 seconds.",
      "Add rinsed lentils and 550 ml water. Simmer for 18–22 minutes, stirring and adding water until soft."
    ]
  },
  {
    "name": "Miso mushroom udon",
    "time": 15,
    "note": "Sliced mushrooms give this quick noodle broth a savoury base.",
    "needs": {
      "Miso": 30,
      "Mushroom": 150,
      "Udon noodles": 300,
      "Spring onion": 2
    },
    "steps": [
      "Slice mushrooms and simmer in 650 ml water for 7 minutes. Add fresh udon and heat according to the packet.",
      "Mix miso with a little hot broth, stir back into the pot off the heat and top with sliced spring onion."
    ]
  },
  {
    "name": "Black bean quesadillas",
    "time": 15,
    "note": "A dry pan crisps the tortillas around a soft filling of mashed beans and melted cheese.",
    "needs": {
      "Black beans": 220,
      "Tortilla": 4,
      "Cheese": 70,
      "Cumin": 2
    },
    "steps": [
      "Drain cooked beans and mash with cumin and a splash of water. Spread over half of each tortilla.",
      "Top with grated cheese, fold and toast both sides in a frying pan over medium heat until golden."
    ]
  },
  {
    "name": "Carrot and ginger soup",
    "time": 35,
    "note": "Fresh ginger lifts a smooth soup made from sweet carrots and softened onion.",
    "needs": {
      "Carrot": 5,
      "Ginger": 15,
      "Onion": 1,
      "Oil": 10
    },
    "steps": [
      "Chop the vegetables, grate the ginger and soften everything in oil for 5 minutes.",
      "Add 650 ml water and simmer until the carrots cut easily with a spoon. Blend carefully until smooth."
    ]
  },
  {
    "name": "Coconut chickpea curry",
    "time": 25,
    "note": "A tin of chickpeas becomes a creamy curry with a handful of spinach folded in at the end.",
    "needs": {
      "Chickpeas": 240,
      "Coconut milk": 300,
      "Curry powder": 6,
      "Spinach": 80,
      "Onion": 1,
      "Oil": 10
    },
    "steps": [
      "Dice the onion and soften in oil. Stir in curry powder for 30 seconds.",
      "Add drained cooked chickpeas and coconut milk. Simmer for 12 minutes and stir in spinach until wilted."
    ]
  },
  {
    "name": "Broccoli cheddar jacket potatoes",
    "time": 55,
    "note": "Fluffy potato centres are mashed with tender broccoli and a little sharp cheese.",
    "needs": {
      "Potato": 2,
      "Broccoli": 150,
      "Cheese": 60,
      "Milk": 30
    },
    "steps": [
      "Prick two large potatoes and bake at 210°C until tender, around 45–55 minutes. Steam broccoli until soft.",
      "Split potatoes and scoop the centres into a bowl. Mash with milk, chopped broccoli and grated cheese, then spoon back into the skins."
    ]
  },
  {
    "name": "Lemon tuna spaghetti",
    "time": 20,
    "note": "Lemon zest perfumes the oil before flaked tuna and spaghetti go into the pan.",
    "needs": {
      "Spaghetti": 180,
      "Tuna": 160,
      "Lemon": 1,
      "Oil": 15,
      "Garlic": 1
    },
    "steps": [
      "Cook spaghetti and reserve a mug of cooking water. Warm a crushed garlic clove and lemon zest gently in the oil.",
      "Add drained tinned tuna, spaghetti, lemon juice to taste and a splash of pasta water. Toss until glossy."
    ]
  },
  {
    "name": "Kimchi fried rice",
    "time": 15,
    "note": "Sizzling the chopped kimchi brings out its flavour before the rice goes in.",
    "needs": {
      "Kimchi": 120,
      "Cooked rice": 320,
      "Egg": 2,
      "Oil": 15
    },
    "steps": [
      "Chop and fry kimchi in half the oil for 3 minutes. Add chilled cooked rice and a spoonful of kimchi liquid.",
      "Stir until steaming hot throughout. Fry the eggs in the remaining oil until set and serve on top."
    ]
  },
  {
    "name": "Chickpea cucumber wraps",
    "time": 10,
    "gear": "No cooking",
    "note": "Crunchy cucumber and lemon yoghurt brighten a chunky chickpea filling.",
    "needs": {
      "Chickpeas": 240,
      "Cucumber": 1,
      "Yoghurt": 60,
      "Lemon": 0.5,
      "Tortilla": 4
    },
    "steps": [
      "Mash drained cooked chickpeas with yoghurt and lemon juice. Cut cucumber into thin batons.",
      "Divide the filling between tortillas, add cucumber and roll tightly."
    ]
  },
  {
    "name": "Roast sweet potato tahini bowls",
    "time": 40,
    "note": "Roasted chickpeas add crunch to sweet potato wedges with a lemon tahini dressing.",
    "needs": {
      "Sweet potato": 2,
      "Tahini": 35,
      "Lemon": 1,
      "Chickpeas": 240,
      "Oil": 15
    },
    "steps": [
      "Cube sweet potatoes and toss with drained cooked chickpeas and oil. Roast at 210°C for 30–35 minutes, turning once.",
      "Whisk tahini with lemon juice and enough water to drizzle. Spoon over the hot bowls."
    ]
  },
  {
    "name": "Garlicky butter bean mash",
    "time": 20,
    "note": "Creamy mashed beans make a warm base for lemony wilted spinach.",
    "needs": {
      "White beans": 450,
      "Garlic": 2,
      "Oil": 20,
      "Lemon": 0.5,
      "Spinach": 80
    },
    "steps": [
      "Warm crushed garlic cloves gently in oil. Add drained cooked beans and 80 ml water, simmer for 5 minutes and mash.",
      "Wilt spinach in a separate pan with a splash of water. Serve on the beans with lemon juice."
    ]
  },
  {
    "name": "Pea and mint couscous",
    "time": 15,
    "note": "Mint, peas and crumbled feta turn fluffy couscous into a quick lunch.",
    "needs": {
      "Couscous": 150,
      "Peas": 120,
      "Mint": 8,
      "Lemon": 1,
      "Feta": 50
    },
    "steps": [
      "Prepare couscous following the packet and fluff with a fork. Boil peas until tender and drain.",
      "Fold peas, torn mint, lemon zest and juice into the couscous. Finish with crumbled feta."
    ]
  },
  {
    "name": "Gochujang tofu bowls",
    "time": 25,
    "note": "A sticky chilli glaze coats crisp-edged cubes of tofu.",
    "needs": {
      "Tofu": 300,
      "Gochujang": 25,
      "Soy sauce": 15,
      "Honey": 10,
      "Cooked rice": 300,
      "Oil": 15
    },
    "steps": [
      "Pat tofu dry, cube it and fry in oil, turning until browned. Mix gochujang, soy, honey and 30 ml water.",
      "Toss the tofu in the glaze until glossy. Reheat the rice until steaming hot throughout and divide between bowls."
    ]
  },
  {
    "name": "Smashed avocado and white bean toast",
    "time": 10,
    "note": "Beans give avocado toast a chunkier texture and help one avocado stretch to two servings.",
    "needs": {
      "Avocado": 1,
      "White beans": 160,
      "Lemon": 0.5,
      "Bread": 4
    },
    "steps": [
      "Mash drained cooked beans with avocado and lemon juice, leaving a few beans whole.",
      "Toast bread and spoon the mixture generously over each slice."
    ]
  },
  {
    "name": "Tomato red lentil pasta",
    "time": 30,
    "note": "Red lentils break down in the tomato sauce while the pasta cooks.",
    "needs": {
      "Pasta": 180,
      "Red lentils": 75,
      "Tinned tomatoes": 400,
      "Garlic": 2,
      "Oil": 10
    },
    "steps": [
      "Warm crushed garlic cloves in oil. Add rinsed lentils, tomatoes and 250 ml water. Simmer for 20 minutes until soft.",
      "Meanwhile cook pasta according to the packet. Drain and toss with the thickened sauce."
    ]
  },
  {
    "name": "Mushroom barley pot",
    "time": 50,
    "note": "Barley keeps a gentle bite as the browned mushrooms flavour the cooking liquid.",
    "needs": {
      "Pearl barley": 150,
      "Mushroom": 220,
      "Onion": 1,
      "Butter": 20
    },
    "steps": [
      "Slice mushrooms and brown in butter. Set half aside. Add diced onion to the pan and soften.",
      "Add rinsed pearl barley and 650 ml water. Simmer for 35–45 minutes, topping up as needed. Fold in reserved mushrooms."
    ]
  },
  {
    "name": "Zucchini feta fritters",
    "time": 25,
    "note": "Squeezing the grated zucchini helps these little fritters brown at the edges.",
    "needs": {
      "Zucchini": 2,
      "Feta": 60,
      "Egg": 2,
      "Flour": 60,
      "Oil": 15
    },
    "steps": [
      "Grate the zucchini and squeeze out excess liquid in a clean cloth. Mix with crumbled feta, beaten eggs and flour.",
      "Fry flattened spoonfuls in oil over medium heat for 3–4 minutes per side until golden and cooked through."
    ]
  },
  {
    "name": "Cauliflower cheese soup",
    "time": 30,
    "note": "A potato thickens this cauliflower soup before the cheese melts through.",
    "needs": {
      "Cauliflower": 300,
      "Potato": 1,
      "Milk": 200,
      "Cheese": 60
    },
    "steps": [
      "Chop cauliflower and peeled potato. Simmer in 450 ml water until both are tender, about 18 minutes.",
      "Blend until smooth. Add milk, warm gently and stir in grated cheese off the heat."
    ]
  },
  {
    "name": "Egg and potato tortilla",
    "time": 30,
    "note": "Thin potato slices make a filling Spanish-style omelette for two.",
    "needs": {
      "Egg": 5,
      "Potato": 2,
      "Onion": 1,
      "Oil": 20
    },
    "steps": [
      "Slice potatoes thinly and dice onion. Cover and cook gently in oil, turning occasionally, until tender.",
      "Pour over beaten eggs and cook on low until mostly set. Finish under a grill in an ovenproof pan until the centre sets."
    ]
  },
  {
    "name": "Pumpkin coconut soup",
    "time": 35,
    "note": "Ginger and coconut milk give a small butternut pumpkin a silky finish.",
    "needs": {
      "Butternut pumpkin": 1,
      "Coconut milk": 200,
      "Ginger": 12,
      "Onion": 1,
      "Oil": 10
    },
    "steps": [
      "Peel, deseed and cube the pumpkin. Soften diced onion and grated ginger in oil.",
      "Add pumpkin and enough water to barely cover. Simmer until tender, blend carefully, then stir in coconut milk and warm through."
    ]
  },
  {
    "name": "Harissa carrot couscous",
    "time": 35,
    "note": "Harissa caramelises on roasted carrots, balanced by cool yoghurt.",
    "needs": {
      "Carrot": 4,
      "Harissa": 15,
      "Couscous": 150,
      "Yoghurt": 60,
      "Oil": 15
    },
    "steps": [
      "Cut carrots into thin batons, toss with oil and harissa and roast at 210°C for 25–30 minutes.",
      "Prepare couscous according to the packet. Fluff and top with carrots and yoghurt."
    ]
  },
  {
    "name": "Pasta e ceci",
    "time": 30,
    "note": "A partly mashed tin of chickpeas thickens this small-pasta soup.",
    "needs": {
      "Chickpeas": 240,
      "Pasta": 140,
      "Tomato paste": 30,
      "Garlic": 2,
      "Oil": 15
    },
    "steps": [
      "Warm crushed garlic cloves and tomato paste in oil. Add drained cooked chickpeas and mash half against the side of the pot.",
      "Add 650 ml water, bring to a boil and stir in small pasta. Simmer until tender, adding water to keep it soupy."
    ]
  },
  {
    "name": "Lime and black bean rice bowl",
    "time": 15,
    "note": "Sweetcorn adds bite to spiced beans served over hot rice.",
    "needs": {
      "Black beans": 240,
      "Cooked rice": 300,
      "Corn": 120,
      "Lime": 1,
      "Cumin": 2
    },
    "steps": [
      "Simmer drained cooked beans and corn with cumin and 60 ml water for 6 minutes.",
      "Reheat rice until steaming hot throughout. Spoon beans and corn on top and finish with lime juice."
    ]
  },
  {
    "name": "Peanut cucumber noodle salad",
    "time": 15,
    "note": "Cold rice noodles and cucumber ribbons carry a tangy peanut dressing.",
    "needs": {
      "Rice noodles": 160,
      "Cucumber": 1,
      "Peanut butter": 35,
      "Lime": 1,
      "Soy sauce": 15
    },
    "steps": [
      "Prepare noodles according to the packet, rinse under cold water and drain. Peel cucumber into ribbons.",
      "Whisk peanut butter with soy, lime juice and a splash of water. Toss with the noodles and cucumber."
    ]
  },
  {
    "name": "Spinach and ricotta pasta",
    "time": 20,
    "note": "Ricotta makes a creamy sauce with a splash of starchy pasta water.",
    "needs": {
      "Pasta": 180,
      "Ricotta": 150,
      "Spinach": 100,
      "Lemon": 0.5
    },
    "steps": [
      "Cook pasta and add spinach for the last minute. Reserve a mug of cooking water, then drain.",
      "Beat ricotta with lemon zest, a squeeze of juice and a little cooking water. Fold through the hot pasta."
    ]
  },
  {
    "name": "Oven-roasted chickpea pita pockets",
    "time": 30,
    "note": "Paprika chickpeas, shredded lettuce and yoghurt fill warm pita pockets.",
    "needs": {
      "Pita": 2,
      "Chickpeas": 240,
      "Paprika": 3,
      "Lettuce": 0.25,
      "Yoghurt": 60,
      "Oil": 10
    },
    "steps": [
      "Drain and dry cooked chickpeas. Toss with oil and paprika and roast at 210°C for 20–25 minutes.",
      "Warm pitas briefly, split open and fill with shredded lettuce, chickpeas and yoghurt."
    ]
  },
  {
    "name": "Soy ginger bok choy noodles",
    "time": 15,
    "note": "The bok choy stems stay crisp while the leaves wilt into the noodles.",
    "needs": {
      "Bok choy": 2,
      "Noodles": 180,
      "Ginger": 12,
      "Soy sauce": 20,
      "Oil": 10
    },
    "steps": [
      "Prepare noodles. Separate and slice bok choy stems and leaves.",
      "Stir-fry grated ginger and stems in oil for 2 minutes. Add leaves, noodles, soy and a splash of water. Toss until hot."
    ]
  },
  {
    "name": "Smoky baked bean toast",
    "time": 15,
    "note": "A little paprika gives this bubbling cheese toast a smoky tomato base.",
    "needs": {
      "Baked beans": 400,
      "Paprika": 2,
      "Cheese": 50,
      "Bread": 4
    },
    "steps": [
      "Heat baked beans with paprika, stirring until the sauce thickens slightly. Toast the bread.",
      "Spoon beans over toast, cover with grated cheese and grill briefly until melted."
    ]
  },
  {
    "name": "Mushroom and thyme omelettes",
    "time": 20,
    "note": "Browned mushrooms and thyme make a savoury filling for two folded omelettes.",
    "needs": {
      "Egg": 4,
      "Mushroom": 160,
      "Thyme": 3,
      "Butter": 15
    },
    "steps": [
      "Slice mushrooms and sauté in half the butter with thyme until their moisture evaporates. Set aside.",
      "For each omelette, melt a little butter, add two beaten eggs and tilt the pan. When set, add half the mushrooms and fold."
    ]
  },
  {
    "name": "Cinnamon apple porridge",
    "time": 15,
    "note": "Grated apple softens into the oats and sweetens the porridge as it cooks.",
    "needs": {
      "Oats": 90,
      "Milk": 400,
      "Apple": 1,
      "Cinnamon": 2
    },
    "steps": [
      "Core and grate the apple. Put it in a saucepan with oats, milk and cinnamon.",
      "Simmer gently for 6–8 minutes, stirring often. Loosen with water to taste."
    ]
  },
  {
    "name": "Overnight cocoa oats",
    "time": 485,
    "gear": "No cooking",
    "note": "A few minutes of mixing the night before makes a chilled chocolate breakfast.",
    "needs": {
      "Oats": 90,
      "Milk": 220,
      "Yoghurt": 80,
      "Cocoa powder": 12,
      "Honey": 15
    },
    "steps": [
      "Whisk milk, yoghurt, cocoa and honey until smooth. Stir in oats and divide between two covered jars.",
      "Refrigerate for about 8 hours. Stir before eating and loosen with a little milk if needed."
    ]
  },
  {
    "name": "Corn and spring onion fritters",
    "time": 20,
    "note": "Sweetcorn kernels and thinly sliced spring onions make crisp, chunky fritters.",
    "needs": {
      "Corn": 200,
      "Spring onion": 3,
      "Egg": 2,
      "Flour": 60,
      "Oil": 15
    },
    "steps": [
      "Drain cooked corn and mix with chopped spring onions, beaten eggs and flour.",
      "Fry flattened spoonfuls in a thin layer of oil over medium heat until golden and set on both sides."
    ]
  },
  {
    "name": "Za’atar labneh flatbreads",
    "time": 10,
    "note": "Tangy labneh, cool cucumber and fragrant za’atar dress warm flatbreads.",
    "needs": {
      "Flatbread": 2,
      "Labneh": 120,
      "Za’atar": 6,
      "Cucumber": 1,
      "Oil": 10
    },
    "steps": [
      "Warm flatbreads in a dry frying pan. Slice the cucumber thinly.",
      "Spread labneh over the bread, add cucumber and finish with za’atar and oil."
    ]
  },
  {
    "name": "Quinoa tabbouleh",
    "time": 30,
    "note": "Chopped parsley and juicy tomatoes brighten a fluffy quinoa salad.",
    "needs": {
      "Quinoa": 120,
      "Parsley": 35,
      "Tomato": 2,
      "Cucumber": 0.5,
      "Lemon": 1,
      "Oil": 15
    },
    "steps": [
      "Rinse quinoa and cook following the packet. Spread it on a plate to cool slightly.",
      "Finely chop parsley, tomatoes and cucumber. Toss with quinoa, lemon juice and oil."
    ]
  },
  {
    "name": "Ginger congee with spring onions",
    "time": 55,
    "note": "Rice breaks down into a soft porridge scented with thin slices of ginger.",
    "needs": {
      "Rice": 100,
      "Ginger": 15,
      "Spring onion": 2,
      "Soy sauce": 15
    },
    "steps": [
      "Rinse rice and simmer with sliced ginger and 1 litre of water for 40–50 minutes, stirring occasionally.",
      "Add water if it thickens too much. Serve in bowls with sliced spring onions and soy sauce."
    ]
  },
  {
    "name": "Sweet potato hash with eggs",
    "time": 25,
    "note": "Small sweet potato cubes crisp in the pan before eggs cook in little wells.",
    "needs": {
      "Sweet potato": 2,
      "Capsicum": 1,
      "Egg": 4,
      "Oil": 15
    },
    "steps": [
      "Dice sweet potatoes and capsicum. Fry potatoes in oil for 5 minutes, then cover with a splash of water until tender.",
      "Add capsicum and fry uncovered until golden. Make four wells, add eggs and cover over low heat until set."
    ]
  },
  {
    "name": "Dill yoghurt potato salad",
    "time": 25,
    "note": "Fresh dill and mustard turn yoghurt into a light dressing for warm potatoes.",
    "needs": {
      "Potato": 4,
      "Yoghurt": 90,
      "Dill": 8,
      "Lemon": 0.5,
      "Mustard": 8
    },
    "steps": [
      "Cut potatoes into bite-sized pieces and simmer until just tender. Drain and let steam escape.",
      "Mix yoghurt, chopped dill, lemon juice and mustard. Gently fold through the warm potatoes."
    ]
  },
  {
    "name": "Roasted aubergine with miso",
    "time": 35,
    "note": "A sweet miso glaze browns on top as the eggplant flesh softens.",
    "needs": {
      "Eggplant": 2,
      "Miso": 30,
      "Honey": 15,
      "Oil": 15,
      "Sesame seeds": 5
    },
    "steps": [
      "Halve eggplants, score the flesh and brush with oil. Roast cut-side up at 210°C for 25 minutes until tender.",
      "Mix miso, honey and a spoonful of water. Brush over eggplants, scatter with sesame seeds and roast for 5 more minutes."
    ]
  },
  {
    "name": "Ricotta and honey pear toast",
    "time": 10,
    "note": "Thin slices of ripe pear sit on creamy ricotta with a drizzle of honey.",
    "needs": {
      "Bread": 4,
      "Ricotta": 120,
      "Pear": 1,
      "Honey": 15
    },
    "steps": [
      "Toast bread and spread with ricotta. Core and thinly slice the pear.",
      "Fan pear slices over the toast and drizzle with honey just before serving."
    ]
  },
  {
    "name": "Tomato and basil bruschetta",
    "time": 15,
    "note": "Toasted bread soaks up the juices from chopped tomatoes and torn basil.",
    "needs": {
      "Bread": 4,
      "Tomato": 3,
      "Basil": 10,
      "Garlic": 1,
      "Oil": 15
    },
    "steps": [
      "Dice tomatoes and toss with torn basil and oil. Leave for 5 minutes while the bread toasts.",
      "Rub warm toast lightly with a cut garlic clove. Spoon over tomatoes just before eating."
    ]
  },
  {
    "name": "Cheesy polenta with mushrooms",
    "time": 25,
    "note": "Golden pan-fried mushrooms sit on soft polenta finished with cheese.",
    "needs": {
      "Instant polenta": 100,
      "Mushroom": 220,
      "Butter": 25,
      "Cheese": 40
    },
    "steps": [
      "Cook instant polenta with water according to the packet. Stir through grated cheese and half the butter.",
      "Slice mushrooms and fry in remaining butter over high heat until golden at the edges. Spoon over polenta."
    ]
  },
];
