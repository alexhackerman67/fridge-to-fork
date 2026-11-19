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
  "Instant polenta": "g",
  "Chilli": "each",
  "Black pepper": "g",
  "Soba noodles": "g",
  "Arborio rice": "g",
  "Pea shoots": "g",
  "Salmon": "g",
  "Oregano": "g",
  "Self-raising flour": "g",
  "Chives": "g",
  "Corn kernels": "g",
  "White fish": "g",
  "Chickpea flour": "g",
  "Coriander": "g",
  "Olives": "g",
  "Edamame": "g",
  "Bread roll": "each",
  "Bulgur": "g",
  "Prawns": "g",
  "Leek": "each",
  "Cooked beetroot": "g",
  "Cooked lentils": "g",
  "Halloumi": "g",
  "Blueberries": "g",
  "Gnocchi": "g",
  "Pumpkin seeds": "g",

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
    cuisine: "Italian", kcal: 430, protein: 14,
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
    cuisine: "Mediterranean", kcal: 260, protein: 19,
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
    cuisine: "Chinese", kcal: 345, protein: 13,
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
    cuisine: "Mediterranean", kcal: 210, protein: 12,
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
    cuisine: "Australian", kcal: 295, protein: 14,
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
    cuisine: "American", kcal: 340, protein: 15,
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
    cuisine: "Chinese", kcal: 505, protein: 17,
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
    cuisine: "Indian", kcal: 345, protein: 20,
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
    cuisine: "Japanese", kcal: 260, protein: 10,
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
    cuisine: "Mexican", kcal: 540, protein: 24,
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
    cuisine: "European", kcal: 155, protein: 3,
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
    cuisine: "Indian", kcal: 480, protein: 15,
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
    cuisine: "British", kcal: 330, protein: 14,
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
    cuisine: "Italian", kcal: 510, protein: 32,
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
    cuisine: "Korean", kcal: 370, protein: 13,
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
    cuisine: "Mediterranean", kcal: 480, protein: 18,
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
    cuisine: "Middle Eastern", kcal: 495, protein: 17,
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
    cuisine: "Mediterranean", kcal: 365, protein: 19,
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
    cuisine: "North African", kcal: 410, protein: 16,
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
    cuisine: "Korean", kcal: 490, protein: 24,
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
    cuisine: "Australian", kcal: 365, protein: 13,
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
    cuisine: "Italian", kcal: 530, protein: 22,
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
    cuisine: "European", kcal: 400, protein: 12,
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
    cuisine: "Greek", kcal: 350, protein: 16,
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
    cuisine: "British", kcal: 245, protein: 14,
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
    cuisine: "Spanish", kcal: 405, protein: 20,
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
    cuisine: "Thai", kcal: 350, protein: 6,
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
    cuisine: "North African", kcal: 440, protein: 14,
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
    cuisine: "Italian", kcal: 530, protein: 19,
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
    cuisine: "Mexican", kcal: 410, protein: 14,
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
    cuisine: "Thai", kcal: 450, protein: 12,
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
    cuisine: "Italian", kcal: 460, protein: 21,
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
    cuisine: "Middle Eastern", kcal: 420, protein: 18,
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
    cuisine: "Chinese", kcal: 390, protein: 12,
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
    cuisine: "British", kcal: 445, protein: 21,
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
    cuisine: "French", kcal: 240, protein: 17,
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
    cuisine: "Australian", kcal: 330, protein: 13,
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
    cuisine: "American", kcal: 345, protein: 14,
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
    cuisine: "Australian", kcal: 335, protein: 14,
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
    cuisine: "Middle Eastern", kcal: 420, protein: 14,
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
    cuisine: "Middle Eastern", kcal: 315, protein: 11,
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
    cuisine: "Chinese", kcal: 200, protein: 5,
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
    cuisine: "American", kcal: 400, protein: 17,
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
    cuisine: "European", kcal: 305, protein: 10,
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
    cuisine: "Japanese", kcal: 240, protein: 7,
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
    cuisine: "European", kcal: 345, protein: 14,
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
    cuisine: "Italian", kcal: 295, protein: 9,
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
    cuisine: "Italian", kcal: 380, protein: 14,
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
  {
    "name": "Tomato garlic migas",
    "cuisine": "Spanish",
    "time": 15,
    "kcal": 360,
    "protein": 16,
    "needs": {
      "Bread": 3,
      "Egg": 3,
      "Tomato": 2,
      "Garlic": 1,
      "Oil": 15
    },
    "note": "Crisp pieces of yesterday’s bread catch the tomato juices and soft scrambled egg.",
    "steps": [
      "Tear the bread and brown it in half the oil, then set aside. Fry chopped garlic and diced tomatoes in the remaining oil until jammy.",
      "Beat the eggs and stir them into the tomato over low heat until set. Fold in the bread just before serving."
    ]
  },
  {
    "name": "Chilli basil tofu",
    "cuisine": "Thai",
    "time": 20,
    "kcal": 370,
    "protein": 20,
    "needs": {
      "Tofu": 300,
      "Basil": 15,
      "Soy sauce": 20,
      "Cooked rice": 250,
      "Chilli": 1,
      "Oil": 10
    },
    "note": "A hot pan gives crumbled tofu crisp edges before basil and chilli go in.",
    "steps": [
      "Pat the tofu dry and crumble into a hot oiled pan. Fry until browned, stirring occasionally.",
      "Add finely sliced chilli and soy sauce with a splash of water. Fold in basil and serve over rice reheated until steaming."
    ]
  },
  {
    "name": "Sesame spinach rice balls",
    "cuisine": "Japanese",
    "time": 20,
    "kcal": 310,
    "protein": 8,
    "needs": {
      "Cooked rice": 350,
      "Spinach": 100,
      "Sesame seeds": 20,
      "Soy sauce": 10
    },
    "note": "Spinach and toasted sesame fold into small rice balls that hold together in your hand.",
    "steps": [
      "Wilt spinach, squeeze out excess water and mince. Toast sesame seeds in a dry pan.",
      "Combine with hot cooked short-grain rice and soy. When cool enough to handle, wet your hands and press into small balls. Serve promptly."
    ]
  },
  {
    "name": "Black pepper mushroom toast",
    "cuisine": "British",
    "time": 15,
    "kcal": 340,
    "protein": 13,
    "needs": {
      "Mushroom": 250,
      "Bread": 4,
      "Butter": 20,
      "Black pepper": 1,
      "Cream": 30
    },
    "note": "A short splash of cream gathers the browned mushroom juices into a sauce for toast.",
    "steps": [
      "Slice mushrooms and fry in butter over high heat until golden and the pan is nearly dry.",
      "Add crushed black pepper and cream. Simmer briefly and spoon over freshly toasted bread."
    ]
  },
  {
    "name": "Chana chaat",
    "cuisine": "Indian",
    "time": 15,
    "kcal": 325,
    "protein": 14,
    "needs": {
      "Chickpeas": 300,
      "Tomato": 2,
      "Onion": 0.5,
      "Lemon": 1,
      "Cumin": 3,
      "Yoghurt": 80
    },
    "note": "Cool yoghurt and lemon dress a crunchy chickpea salad with a toasted cumin finish.",
    "steps": [
      "Drain cooked chickpeas, dice tomatoes and finely chop the onion. Toast cumin briefly in a dry pan.",
      "Toss the vegetables and chickpeas with lemon juice, then spoon on the yoghurt and scatter with cumin."
    ]
  },
  {
    "name": "Garlic mushroom aglio e olio",
    "cuisine": "Italian",
    "time": 20,
    "kcal": 455,
    "protein": 14,
    "needs": {
      "Spaghetti": 180,
      "Mushroom": 200,
      "Garlic": 3,
      "Oil": 25,
      "Parsley": 8
    },
    "note": "Thin garlic slices flavour the oil that coats the spaghetti and mushrooms.",
    "steps": [
      "Cook spaghetti and reserve a mug of cooking water. Brown sliced mushrooms in half the oil.",
      "Lower the heat, add the remaining oil and sliced garlic, and stir until fragrant. Toss with pasta, parsley and a splash of pasta water."
    ]
  },
  {
    "name": "Red bean chilli",
    "cuisine": "Mexican",
    "time": 30,
    "kcal": 405,
    "protein": 19,
    "needs": {
      "Kidney beans": 400,
      "Tinned tomatoes": 400,
      "Onion": 1,
      "Cumin": 4,
      "Paprika": 3,
      "Oil": 10
    },
    "note": "A mashed spoonful of beans thickens this tomato chilli without a long simmer.",
    "steps": [
      "Soften diced onion in oil and stir in cumin and paprika. Add tomatoes and drained tinned kidney beans.",
      "Mash a few beans against the pan and simmer for 18 minutes, stirring occasionally."
    ]
  },
  {
    "name": "Ginger egg drop soup",
    "cuisine": "Chinese",
    "time": 15,
    "kcal": 190,
    "protein": 14,
    "needs": {
      "Egg": 3,
      "Ginger": 10,
      "Spring onion": 2,
      "Soy sauce": 15,
      "Cornflour": 8,
      "Tofu": 80
    },
    "note": "A thin stream of beaten egg sets into delicate ribbons in ginger broth.",
    "steps": [
      "Simmer sliced ginger and soy sauce in 650 ml water for 5 minutes. Stir in cubed tofu and cornflour mixed with a spoonful of cold water.",
      "Once simmering, stir in a circle and slowly pour in beaten egg. Cook until the ribbons are set and finish with spring onion."
    ]
  },
  {
    "name": "Spinach chickpea stew",
    "cuisine": "Spanish",
    "time": 25,
    "kcal": 365,
    "protein": 16,
    "needs": {
      "Chickpeas": 320,
      "Spinach": 150,
      "Tinned tomatoes": 250,
      "Paprika": 4,
      "Garlic": 2,
      "Oil": 15
    },
    "note": "Sweet paprika gives the tomato broth depth while spinach wilts around soft chickpeas.",
    "steps": [
      "Warm crushed garlic and paprika in oil for 30 seconds. Add tomatoes, drained cooked chickpeas and a splash of water.",
      "Simmer for 15 minutes. Mash a few chickpeas and stir in spinach until wilted."
    ]
  },
  {
    "name": "Lentil and rice pilaf",
    "cuisine": "Middle Eastern",
    "time": 40,
    "kcal": 490,
    "protein": 19,
    "needs": {
      "Rice": 120,
      "Lentils": 100,
      "Onion": 2,
      "Cumin": 3,
      "Oil": 20
    },
    "note": "Sweet browned onion tops a fragrant pan of rice and green lentils.",
    "steps": [
      "Rinse dry green lentils and simmer in water for 12 minutes. Meanwhile slice onions and fry in oil until deeply golden.",
      "Add rice to the lentils with cumin and enough water to cover by 2 cm. Cover and simmer until tender, adding water if needed. Top with onions."
    ]
  },
  {
    "name": "Quick sesame soba",
    "cuisine": "Japanese",
    "time": 15,
    "kcal": 395,
    "protein": 15,
    "needs": {
      "Soba noodles": 180,
      "Sesame seeds": 18,
      "Soy sauce": 20,
      "Vinegar": 15,
      "Spring onion": 2
    },
    "note": "Cool noodles pick up a nutty dressing made from crushed sesame seeds.",
    "steps": [
      "Cook soba according to the packet, rinse under cold water and drain well.",
      "Toast and crush sesame seeds. Mix with soy, vinegar and a little water, toss with the noodles and finish with spring onion."
    ]
  },
  {
    "name": "Pea and pea-shoot risotto",
    "cuisine": "Italian",
    "time": 35,
    "kcal": 465,
    "protein": 15,
    "needs": {
      "Arborio rice": 160,
      "Peas": 180,
      "Onion": 1,
      "Butter": 20,
      "Cheese": 30,
      "Pea shoots": 20
    },
    "note": "Sweet peas go into the rice at the end so they keep their bright colour.",
    "steps": [
      "Soften diced onion in butter, stir in rice and add hot water a ladle at a time, stirring as each addition is absorbed.",
      "After about 15 minutes add peas and continue until rice is tender. Fold in grated cheese and scatter with pea shoots."
    ]
  },
  {
    "name": "Crispy potato tacos",
    "cuisine": "Mexican",
    "time": 35,
    "kcal": 445,
    "protein": 12,
    "needs": {
      "Potato": 3,
      "Tortilla": 4,
      "Paprika": 3,
      "Oil": 15,
      "Yoghurt": 60,
      "Lime": 1
    },
    "note": "Crisp-edged potato cubes fill warm tortillas with lime yoghurt.",
    "steps": [
      "Dice potatoes small, toss with oil and paprika, and roast at 220°C for 25–30 minutes, turning once.",
      "Warm tortillas in a dry pan. Fill with potatoes and spoon over yoghurt mixed with lime juice."
    ]
  },
  {
    "name": "Lemon dill salmon tray bake",
    "cuisine": "Mediterranean",
    "time": 35,
    "kcal": 445,
    "protein": 35,
    "needs": {
      "Salmon": 300,
      "Potato": 2,
      "Lemon": 1,
      "Dill": 8,
      "Oil": 15
    },
    "note": "Thin potato rounds roast before the salmon goes on the tray with lemon and dill.",
    "steps": [
      "Slice potatoes thinly, coat with oil and roast at 210°C for 15 minutes.",
      "Place salmon fillets on top with lemon slices. Roast until cooked through and flaking, then finish with chopped dill."
    ]
  },
  {
    "name": "Chicken fajita skillet",
    "cuisine": "Mexican",
    "time": 25,
    "kcal": 465,
    "protein": 35,
    "needs": {
      "Chicken": 280,
      "Capsicum": 2,
      "Onion": 1,
      "Tortilla": 4,
      "Cumin": 3,
      "Oil": 15
    },
    "note": "Seared chicken strips, onion and capsicum make a filling for warm tortillas.",
    "steps": [
      "Slice chicken, onions and capsicum into thin strips. Fry the chicken in oil, turning until browned.",
      "Add onion, capsicum and cumin and cook until vegetables soften and chicken is cooked through. Serve in warm tortillas."
    ]
  },
  {
    "name": "Lemon oregano chicken",
    "cuisine": "Greek",
    "time": 35,
    "kcal": 400,
    "protein": 34,
    "needs": {
      "Chicken": 300,
      "Lemon": 1,
      "Oregano": 3,
      "Potato": 2,
      "Oil": 15
    },
    "note": "Lemon juice and oregano coat bite-sized chicken and potato pieces on one tray.",
    "steps": [
      "Dice potatoes into small cubes and roast with half the oil at 210°C for 12 minutes.",
      "Toss diced chicken with remaining oil, lemon juice and oregano. Add to tray and roast until the chicken is cooked through and potatoes are tender."
    ]
  },
  {
    "name": "Coconut red lentil soup",
    "cuisine": "Sri Lankan",
    "time": 30,
    "kcal": 410,
    "protein": 17,
    "needs": {
      "Red lentils": 150,
      "Coconut milk": 180,
      "Turmeric": 2,
      "Ginger": 10,
      "Lime": 1
    },
    "note": "Split lentils simmer to a soft purée with ginger and coconut milk.",
    "steps": [
      "Rinse lentils and combine with turmeric, grated ginger and 500 ml water. Simmer until tender, about 18 minutes.",
      "Stir in coconut milk and gently heat through. Finish with lime juice to taste."
    ]
  },
  {
    "name": "Pan-fried tofu lettuce cups",
    "cuisine": "Chinese",
    "time": 20,
    "kcal": 310,
    "protein": 18,
    "needs": {
      "Tofu": 300,
      "Lettuce": 120,
      "Carrot": 1,
      "Soy sauce": 20,
      "Ginger": 10,
      "Oil": 15
    },
    "note": "Crisp lettuce leaves hold crumbled tofu and finely chopped carrot.",
    "steps": [
      "Separate and dry the lettuce leaves. Dice carrot, grate ginger and crumble the tofu.",
      "Brown tofu in oil, add carrot and ginger and stir-fry until tender. Stir in soy and spoon into lettuce leaves."
    ]
  },
  {
    "name": "Tuna and white bean toast",
    "cuisine": "Italian",
    "time": 10,
    "kcal": 405,
    "protein": 29,
    "needs": {
      "Tuna": 160,
      "White beans": 180,
      "Bread": 4,
      "Lemon": 0.5,
      "Parsley": 10
    },
    "note": "Mashed beans bind flaked tuna into a lemony topping for thick toast.",
    "steps": [
      "Drain cooked beans and tinned tuna. Mash half the beans with lemon juice and a spoonful of water.",
      "Fold in remaining beans, tuna and chopped parsley. Divide over hot toast."
    ]
  },
  {
    "name": "Savoury miso oats",
    "cuisine": "Japanese",
    "time": 15,
    "kcal": 325,
    "protein": 16,
    "needs": {
      "Oats": 90,
      "Miso": 25,
      "Egg": 2,
      "Spring onion": 2,
      "Sesame seeds": 8
    },
    "note": "Miso turns oats into a savoury breakfast topped with eggs and toasted seeds.",
    "steps": [
      "Simmer oats in 400 ml water, stirring until creamy. Meanwhile boil eggs until set, peel and halve.",
      "Take oats off the heat and stir in miso loosened with water. Top with eggs, sliced spring onion and toasted seeds."
    ]
  },
  {
    "name": "Mushroom stroganoff",
    "cuisine": "European",
    "time": 25,
    "kcal": 480,
    "protein": 16,
    "needs": {
      "Mushroom": 300,
      "Pasta": 160,
      "Onion": 1,
      "Yoghurt": 100,
      "Paprika": 3,
      "Oil": 10
    },
    "note": "Browned mushrooms and paprika make a creamy sauce for ribbon pasta.",
    "steps": [
      "Cook pasta and save a mug of water. Fry sliced mushrooms and onion in oil until well browned.",
      "Add paprika and a splash of pasta water. Remove from heat, stir in yoghurt and toss through pasta."
    ]
  },
  {
    "name": "Tuscan bread soup",
    "cuisine": "Italian",
    "time": 30,
    "kcal": 320,
    "protein": 10,
    "needs": {
      "Bread": 4,
      "Tinned tomatoes": 400,
      "Garlic": 2,
      "Basil": 10,
      "Oil": 15
    },
    "note": "Stale bread melts into a thick tomato soup with torn basil.",
    "steps": [
      "Warm sliced garlic in oil, then add tomatoes and 350 ml water. Simmer for 12 minutes.",
      "Tear in bread and simmer, stirring, until soft and thick. Tear basil over the bowls."
    ]
  },
  {
    "name": "Carrot ribbon tahini salad",
    "cuisine": "Middle Eastern",
    "time": 15,
    "kcal": 335,
    "protein": 12,
    "needs": {
      "Carrot": 4,
      "Chickpeas": 200,
      "Tahini": 35,
      "Lemon": 1,
      "Parsley": 8
    },
    "note": "Long carrot ribbons stay crisp under a nutty lemon dressing.",
    "steps": [
      "Peel carrots into ribbons. Drain cooked chickpeas and finely chop parsley.",
      "Whisk tahini, lemon juice and water to a pouring consistency. Toss with the carrots, chickpeas and parsley."
    ]
  },
  {
    "name": "Cheese and chive scones",
    "cuisine": "British",
    "time": 30,
    "kcal": 405,
    "protein": 14,
    "needs": {
      "Self-raising flour": 140,
      "Butter": 30,
      "Cheese": 50,
      "Milk": 85,
      "Chives": 6
    },
    "note": "A small batch of tender savoury scones with pockets of melted cheese.",
    "steps": [
      "Rub cold diced butter into the flour, then add grated cheese and snipped chives. Stir in enough milk for a soft dough.",
      "Pat 2 cm thick and cut four rounds. Bake at 210°C for 12–15 minutes until risen and golden."
    ]
  },
  {
    "name": "Sweetcorn chowder",
    "cuisine": "American",
    "time": 30,
    "kcal": 365,
    "protein": 13,
    "needs": {
      "Corn kernels": 250,
      "Potato": 2,
      "Milk": 250,
      "Onion": 1,
      "Butter": 15
    },
    "note": "Some of the corn and potato is mashed to thicken the chowder while leaving whole kernels.",
    "steps": [
      "Soften chopped onion in butter. Add diced potatoes, corn kernels and enough water to cover. Simmer until tender.",
      "Mash roughly in the pan. Pour in milk and reheat gently, stirring until creamy."
    ]
  },
  {
    "name": "Ginger scallion fish",
    "cuisine": "Chinese",
    "time": 25,
    "kcal": 380,
    "protein": 32,
    "needs": {
      "White fish": 300,
      "Ginger": 15,
      "Spring onion": 3,
      "Soy sauce": 20,
      "Cooked rice": 260,
      "Oil": 10
    },
    "note": "Steam carries ginger through the fish while spring onions stay bright and fresh.",
    "steps": [
      "Lay fillets on a heatproof plate with ginger matchsticks. Steam, covered, until cooked through and flaking easily.",
      "Top with sliced spring onions, soy and warmed oil. Serve over reheated, steaming-hot rice."
    ]
  },
  {
    "name": "Penne with roasted capsicum",
    "cuisine": "Italian",
    "time": 35,
    "kcal": 460,
    "protein": 14,
    "needs": {
      "Pasta": 180,
      "Capsicum": 2,
      "Garlic": 2,
      "Oil": 20,
      "Basil": 8
    },
    "note": "Roasted capsicum blends into a sweet red sauce that catches inside penne.",
    "steps": [
      "Quarter and deseed capsicums, toss with garlic and oil, and roast at 220°C until soft and blistered.",
      "Cook pasta. Blend roasted vegetables with a splash of cooking water and toss with drained pasta and basil."
    ]
  },
  {
    "name": "Herbed chickpea pancakes",
    "cuisine": "Indian",
    "time": 25,
    "kcal": 360,
    "protein": 16,
    "needs": {
      "Chickpea flour": 150,
      "Onion": 0.5,
      "Cumin": 3,
      "Coriander": 12,
      "Oil": 15
    },
    "note": "Chickpea flour makes a savoury batter flecked with chopped herbs and onion.",
    "steps": [
      "Whisk flour, cumin and 210 ml water until smooth. Stir in finely diced onion and chopped coriander.",
      "Spread thin circles in a lightly oiled frying pan. Cook each side until golden and the centre is set."
    ]
  },
  {
    "name": "Chopped Greek salad",
    "cuisine": "Greek",
    "time": 15,
    "kcal": 345,
    "protein": 12,
    "needs": {
      "Tomato": 3,
      "Cucumber": 1,
      "Feta": 100,
      "Olives": 50,
      "Oregano": 2,
      "Oil": 15
    },
    "note": "Firm pieces of tomato, cucumber and feta keep their texture under an oregano dressing.",
    "steps": [
      "Cut tomatoes and cucumber into chunky pieces. Toss with olives, oil and oregano.",
      "Cut feta into cubes and fold through gently. Leave for five minutes before serving."
    ]
  },
  {
    "name": "Smoky tomato butter beans",
    "cuisine": "Spanish",
    "time": 20,
    "kcal": 360,
    "protein": 16,
    "needs": {
      "White beans": 400,
      "Tinned tomatoes": 300,
      "Garlic": 2,
      "Paprika": 4,
      "Oil": 15
    },
    "note": "Creamy beans absorb a smoky tomato sauce flavoured with sliced garlic.",
    "steps": [
      "Warm garlic and paprika gently in oil. Add tomatoes and simmer for 8 minutes.",
      "Fold in drained cooked beans and heat for another 6 minutes, loosening with water if needed."
    ]
  },
  {
    "name": "Soba and edamame lunch bowl",
    "cuisine": "Japanese",
    "time": 20,
    "kcal": 450,
    "protein": 23,
    "needs": {
      "Soba noodles": 150,
      "Edamame": 200,
      "Carrot": 1,
      "Soy sauce": 20,
      "Vinegar": 15,
      "Sesame seeds": 8
    },
    "note": "Edamame and carrot ribbons add colour and bite to chilled soba noodles.",
    "steps": [
      "Cook soba and frozen shelled edamame according to their packets. Drain and cool under running water.",
      "Peel carrot into ribbons. Toss everything with soy, vinegar and sesame seeds."
    ]
  },
  {
    "name": "Baked ricotta tomatoes",
    "cuisine": "Italian",
    "time": 30,
    "kcal": 295,
    "protein": 17,
    "needs": {
      "Tomato": 4,
      "Ricotta": 200,
      "Bread": 1,
      "Basil": 10,
      "Oil": 10
    },
    "note": "Soft tomato shells hold basil ricotta beneath a crisp breadcrumb topping.",
    "steps": [
      "Halve tomatoes, scoop out the wet seeds and place cut-side up in a baking dish. Mix ricotta with chopped basil and spoon into the halves.",
      "Crumble bread over the top, drizzle with oil and bake at 200°C for 18–22 minutes."
    ]
  },
  {
    "name": "Pumpkin chickpea couscous",
    "cuisine": "North African",
    "time": 40,
    "kcal": 475,
    "protein": 15,
    "needs": {
      "Butternut pumpkin": 0.5,
      "Couscous": 120,
      "Chickpeas": 200,
      "Cumin": 3,
      "Oil": 15
    },
    "note": "Roast pumpkin and chickpeas turn fluffy couscous into a warm supper.",
    "steps": [
      "Peel and dice pumpkin, then toss with drained chickpeas, cumin and oil. Roast at 210°C for about 30 minutes until tender.",
      "Prepare couscous following the packet, fluff with a fork and fold through the roasted vegetables."
    ]
  },
  {
    "name": "Crispy tofu banh mi rolls",
    "cuisine": "Vietnamese",
    "time": 25,
    "kcal": 470,
    "protein": 23,
    "needs": {
      "Bread roll": 2,
      "Tofu": 250,
      "Carrot": 1,
      "Cucumber": 0.5,
      "Vinegar": 20,
      "Soy sauce": 15,
      "Oil": 10
    },
    "note": "Quick-pickled carrot gives these tofu rolls their tang and crunch.",
    "steps": [
      "Cut carrot into matchsticks and toss with vinegar. Pat tofu dry, slice and fry in oil until golden, then coat with soy.",
      "Split rolls and fill with tofu, thin cucumber slices and drained carrot."
    ]
  },
  {
    "name": "Kimchi potato cakes",
    "cuisine": "Korean",
    "time": 25,
    "kcal": 310,
    "protein": 9,
    "needs": {
      "Potato": 3,
      "Kimchi": 100,
      "Egg": 1,
      "Flour": 35,
      "Oil": 15
    },
    "note": "Chopped kimchi adds heat to crisp grated potato cakes.",
    "steps": [
      "Grate potatoes and squeeze dry. Mix with finely chopped kimchi, beaten egg and flour.",
      "Flatten spoonfuls in an oiled pan and cook over medium heat until crisp on both sides and cooked through."
    ]
  },
  {
    "name": "Spinach and egg breakfast wrap",
    "cuisine": "Australian",
    "time": 10,
    "kcal": 365,
    "protein": 20,
    "needs": {
      "Tortilla": 2,
      "Egg": 3,
      "Spinach": 80,
      "Cheese": 40,
      "Butter": 8
    },
    "note": "Soft scrambled eggs and wilted spinach make a quick breakfast wrap.",
    "steps": [
      "Wilt spinach in butter, then add beaten eggs and stir gently until set.",
      "Warm tortillas, divide the eggs and spinach between them, top with grated cheese and roll."
    ]
  },
  {
    "name": "Lemon parsley bulgur",
    "cuisine": "Middle Eastern",
    "time": 20,
    "kcal": 365,
    "protein": 11,
    "needs": {
      "Bulgur": 140,
      "Parsley": 25,
      "Tomato": 2,
      "Lemon": 1,
      "Oil": 15
    },
    "note": "Fine bulgur absorbs the tomato juices in a lemony grain salad.",
    "steps": [
      "Prepare bulgur according to the packet and let it cool until warm. Finely chop parsley and tomatoes.",
      "Toss everything with lemon juice and oil. Rest for five minutes before serving."
    ]
  },
  {
    "name": "Roast broccoli with hummus",
    "cuisine": "Mediterranean",
    "time": 30,
    "kcal": 345,
    "protein": 14,
    "needs": {
      "Broccoli": 350,
      "Chickpeas": 240,
      "Tahini": 25,
      "Lemon": 0.5,
      "Oil": 15
    },
    "note": "Crisp broccoli florets sit on a bed of freshly blended chickpeas.",
    "steps": [
      "Toss broccoli in oil and roast at 220°C for 18–22 minutes until the edges brown.",
      "Blend drained cooked chickpeas with tahini, lemon juice and a little water until smooth. Spread on plates and top with broccoli."
    ]
  },
  {
    "name": "Apple cinnamon French toast",
    "cuisine": "French",
    "time": 20,
    "kcal": 375,
    "protein": 14,
    "needs": {
      "Bread": 4,
      "Apple": 1,
      "Egg": 2,
      "Milk": 80,
      "Cinnamon": 2,
      "Butter": 15
    },
    "note": "Warm spiced apple tops slices of golden French toast.",
    "steps": [
      "Slice and soften apple in half the butter with cinnamon and a splash of water. Transfer to a bowl.",
      "Whisk eggs and milk. Dip bread briefly and fry in remaining butter until golden on both sides and cooked through. Top with apple."
    ]
  },
  {
    "name": "Tomato poached chickpeas and eggs",
    "cuisine": "Mediterranean",
    "time": 25,
    "kcal": 395,
    "protein": 23,
    "needs": {
      "Chickpeas": 220,
      "Egg": 4,
      "Tinned tomatoes": 350,
      "Cumin": 3,
      "Oil": 10
    },
    "note": "Eggs poach gently in a tomato and chickpea sauce spiced with cumin.",
    "steps": [
      "Warm cumin in oil and add tomatoes and drained cooked chickpeas. Simmer until slightly thickened.",
      "Make four hollows, add eggs and cover. Cook gently until the eggs are set."
    ]
  },
  {
    "name": "Peanut sweet potato stew",
    "cuisine": "West African",
    "time": 35,
    "kcal": 470,
    "protein": 15,
    "needs": {
      "Sweet potato": 2,
      "Peanut butter": 50,
      "Tinned tomatoes": 300,
      "Onion": 1,
      "Spinach": 80,
      "Oil": 10
    },
    "note": "Peanut butter thickens the broth around cubes of sweet potato and wilted greens.",
    "steps": [
      "Soften diced onion in oil, add cubed sweet potato, tomatoes and enough water to cover. Simmer until tender.",
      "Whisk peanut butter with a little broth, stir back into the pot and add spinach until wilted."
    ]
  },
  {
    "name": "Garlic lemon prawn linguine",
    "cuisine": "Italian",
    "time": 20,
    "kcal": 450,
    "protein": 32,
    "needs": {
      "Pasta": 180,
      "Prawns": 250,
      "Garlic": 3,
      "Lemon": 1,
      "Oil": 15,
      "Parsley": 8
    },
    "note": "Lemon and parsley brighten a quick sauce of garlic oil and prawns.",
    "steps": [
      "Boil pasta and reserve a mug of water. In a pan warm sliced garlic in oil, add peeled prawns and cook until opaque throughout.",
      "Toss with the pasta, lemon zest, juice, chopped parsley and a little cooking water."
    ]
  },
  {
    "name": "Coconut rice pudding",
    "cuisine": "Thai",
    "time": 35,
    "kcal": 355,
    "protein": 5,
    "needs": {
      "Rice": 90,
      "Coconut milk": 180,
      "Sugar": 20,
      "Mango": 1
    },
    "note": "Soft rice and coconut milk make a warm pudding topped with fresh mango.",
    "steps": [
      "Rinse rice and simmer in 300 ml water until tender. Stir in coconut milk and sugar.",
      "Cook gently until creamy, adding a little water as needed. Serve with diced mango."
    ]
  },
  {
    "name": "Cheddar leek pasta bake",
    "cuisine": "British",
    "time": 40,
    "kcal": 535,
    "protein": 23,
    "needs": {
      "Pasta": 160,
      "Leek": 1,
      "Milk": 250,
      "Cheese": 80,
      "Butter": 15,
      "Flour": 15
    },
    "note": "Soft leeks and a simple cheese sauce coat pasta under a browned top.",
    "steps": [
      "Cook pasta just short of tender. Wash and slice leek, soften in butter, stir in flour and gradually add milk until thickened.",
      "Stir in half the grated cheese and pasta. Transfer to a baking dish, top with remaining cheese and bake at 210°C for 12 minutes."
    ]
  },
  {
    "name": "Warm beetroot lentil salad",
    "cuisine": "French",
    "time": 15,
    "kcal": 380,
    "protein": 17,
    "needs": {
      "Cooked beetroot": 250,
      "Cooked lentils": 300,
      "Feta": 50,
      "Mustard": 8,
      "Vinegar": 15,
      "Oil": 15
    },
    "note": "Sweet beetroot and earthy lentils soak up a sharp mustard dressing.",
    "steps": [
      "Drain the cooked lentils and warm in a pan with a splash of water. Cut cooked beetroot into wedges.",
      "Whisk mustard, vinegar and oil. Toss with the warm lentils and beetroot, then crumble feta on top."
    ]
  },
  {
    "name": "Eggplant tomato rice",
    "cuisine": "Turkish",
    "time": 35,
    "kcal": 440,
    "protein": 9,
    "needs": {
      "Eggplant": 1,
      "Rice": 150,
      "Tinned tomatoes": 250,
      "Onion": 1,
      "Oil": 20
    },
    "note": "Tender aubergine cubes and tomato cook together with the rice in one pan.",
    "steps": [
      "Dice eggplant and onion and brown in oil. Add rinsed rice and tomatoes.",
      "Add 250 ml water, cover and simmer gently until rice is tender, adding water as needed. Rest covered for 5 minutes."
    ]
  },
  {
    "name": "Halloumi and peach salad",
    "cuisine": "Mediterranean",
    "time": 15,
    "kcal": 375,
    "protein": 19,
    "needs": {
      "Halloumi": 150,
      "Peach": 2,
      "Lettuce": 100,
      "Lemon": 0.5,
      "Oil": 10
    },
    "note": "Warm browned halloumi pairs with ripe peach and crisp lettuce.",
    "steps": [
      "Slice halloumi and fry in half the oil until golden on both sides. Pit and slice peaches.",
      "Dress lettuce with remaining oil and lemon juice. Divide between plates and add halloumi and peaches."
    ]
  },
  {
    "name": "Sweet soy chicken noodles",
    "cuisine": "Chinese",
    "time": 25,
    "kcal": 490,
    "protein": 35,
    "needs": {
      "Chicken": 250,
      "Noodles": 160,
      "Soy sauce": 25,
      "Honey": 15,
      "Carrot": 1,
      "Oil": 10
    },
    "note": "A glossy soy and honey sauce coats thin strips of chicken and noodles.",
    "steps": [
      "Cook noodles following the packet. Slice chicken thinly and stir-fry in oil until cooked through.",
      "Add thin carrot sticks, honey, soy and a splash of water. Toss with noodles until glossy and hot."
    ]
  },
  {
    "name": "Yoghurt berry breakfast pots",
    "cuisine": "Australian",
    "time": 10,
    "kcal": 305,
    "protein": 13,
    "needs": {
      "Yoghurt": 300,
      "Oats": 60,
      "Blueberries": 140,
      "Honey": 12
    },
    "note": "Toasted oats keep a little crunch between layers of yoghurt and berries.",
    "steps": [
      "Toast oats in a dry pan over medium heat, stirring until fragrant. Tip onto a plate to cool.",
      "Layer yoghurt, berries and oats into two glasses. Drizzle with honey and serve."
    ]
  },
  {
    "name": "Lemon butter gnocchi with peas",
    "cuisine": "Italian",
    "time": 15,
    "kcal": 465,
    "protein": 15,
    "needs": {
      "Gnocchi": 350,
      "Peas": 140,
      "Butter": 25,
      "Lemon": 0.5,
      "Cheese": 20
    },
    "note": "Peas and lemon zest lighten a quick butter sauce for tender potato gnocchi.",
    "steps": [
      "Cook gnocchi and peas following packet timings. Reserve some cooking water before draining.",
      "Melt butter with lemon zest. Toss in gnocchi, peas, grated cheese and a splash of the cooking water."
    ]
  },
  {
    "name": "Smoky tofu breakfast scramble",
    "cuisine": "American",
    "time": 15,
    "kcal": 375,
    "protein": 23,
    "needs": {
      "Tofu": 280,
      "Bread": 4,
      "Paprika": 3,
      "Turmeric": 1,
      "Spinach": 80,
      "Oil": 10
    },
    "note": "Crumbled tofu takes on a golden colour from turmeric and a smoky edge from paprika.",
    "steps": [
      "Fry crumbled tofu in oil with turmeric and paprika, stirring until lightly browned.",
      "Fold in spinach and cook until wilted. Serve over toasted bread."
    ]
  },
  {
    "name": "Pumpkin seed pesto pasta",
    "cuisine": "Italian",
    "time": 20,
    "kcal": 530,
    "protein": 18,
    "needs": {
      "Pasta": 180,
      "Pumpkin seeds": 40,
      "Basil": 25,
      "Cheese": 25,
      "Oil": 15,
      "Lemon": 0.5
    },
    "note": "Toasted pumpkin seeds make a nutty alternative to pine nuts in basil pesto.",
    "steps": [
      "Toast seeds in a dry pan and cool. Blend with basil, grated cheese, oil, lemon juice and a spoonful of water.",
      "Cook pasta and reserve a mug of cooking water. Toss off the heat with pesto, loosening with cooking water."
    ]
  },
];
