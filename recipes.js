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
  "Sweet soy sauce": "ml",
  "Light soy sauce": "ml",
  "Dark soy sauce": "ml",
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
    cuisine: "Italian", difficulty: 1, kcal: 430, protein: 14,
    time: 20,
    gear: "One pot",
    note: "Spinach wilts in the spaghetti pot just before draining. A splash of the starchy cooking water loosens the pesto into a glossy sauce that coats each strand, and a squeeze of lemon brightens the basil.",
    needs: { Spaghetti: 180, Spinach: 60, Pesto: 50, Lemon: 0.5 },
    steps: [
      "Bring a pot of water to the boil. Cook the spaghetti according to the packet. Stir as the strands soften so they separate. Bite into one just before the packet time is up. It should still have a little firmness in the centre.",
      "Add the spinach for the last minute. Reserve a mug of cooking water, then drain.",
      "Off the heat, toss with pesto, lemon juice and a splash of cooking water.",
    ],
    swaps: "Try rocket in place of spinach.",
  },
  {
    name: "Tomato & feta baked eggs",
    cuisine: "Mediterranean", difficulty: 2, kcal: 260, protein: 19,
    time: 25,
    gear: "One pan",
    note: "A tin of tomatoes cooks down into a thick sauce with little wells for the eggs. Cover the pan until the whites set, then crumble feta over the top so each spoonful gets a salty bite.",
    needs: { Egg: 4, "Tinned tomatoes": 400, Feta: 40 },
    steps: [
      "Simmer the tomatoes in a frying pan large enough for the eggs for 8 minutes, stirring occasionally. Drag a spoon through the sauce. If the gap fills immediately, simmer a little longer so the eggs will sit in their wells.",
      "Make a well for each egg and crack an egg into each. Cover and cook gently until the eggs are set.",
      "Scatter over the crumbled feta and serve from the pan.",
    ],
    swaps: "A little grated cheese can replace the feta.",
  },
  {
    name: "Capsicum egg fried rice",
    cuisine: "Chinese", difficulty: 2, kcal: 345, protein: 13,
    time: 15,
    gear: "One pan",
    note: "Chilled leftover rice separates into grains as it hits the hot pan. Diced capsicum adds crunch, soft ribbons of scrambled egg run through the rice, and soy sauce seasons the whole dish.",
    needs: { "Cooked rice": 300, Egg: 2, Capsicum: 1, "Soy sauce": 15 },
    steps: [
      "Dice the capsicum. Soften it in a lightly oiled pan. Cut the capsicum into pea-sized pieces so a little fits into each spoonful of rice.",
      "Push it aside, add beaten eggs and scramble until set.",
      "Add chilled cooked rice and soy sauce. Stir until steaming hot throughout.",
    ],
    swaps: "Use diced carrot in place of capsicum.",
  },
  {
    name: "White bean & tomato salad",
    cuisine: "Mediterranean", difficulty: 1, kcal: 210, protein: 12,
    time: 10,
    gear: "No cooking",
    note: "Halved cherry tomatoes release their juices into the lemon and olive oil, making a quick dressing for the creamy white beans. Serve straight away for a ten-minute lunch with no cooking.",
    needs: { "White beans": 240, "Cherry tomatoes": 200, Lemon: 0.5 },
    steps: [
      "Rinse and drain the beans. Halve the tomatoes. Let the beans sit in the sieve while you cut the tomatoes. Excess rinse water will dilute the dressing.",
      "Toss together with lemon juice and a drizzle of olive oil to taste.",
    ],
    swaps: "Chickpeas work in place of white beans.",
  },
  {
    name: "Spinach melt toasties",
    cuisine: "Australian", difficulty: 1, kcal: 295, protein: 14,
    time: 10,
    gear: "One pan",
    note: "A handful of spinach and grated cheese make a filling for hot toasties. Press them gently in the pan so the crusts turn golden while the cheese melts around the leaves.",
    needs: { Bread: 4, Cheese: 60, Spinach: 40 },
    steps: [
      "Layer cheese and spinach between the bread slices. Put a little cheese on each side of the spinach so the filling holds together as it melts.",
      "Toast in a lightly oiled pan over medium heat, pressing down gently. Flip and cook until golden and melted.",
    ],
    swaps: "Use wraps in place of sliced bread.",
  },
  {
    name: "Banana oat pancakes",
    cuisine: "American", difficulty: 2, kcal: 340, protein: 15,
    time: 20,
    gear: "One pan",
    note: "Ripe bananas sweeten a simple batter of oats, egg and milk. Spoon it into small rounds that are easy to flip, then cook until the edges are golden and the centres are soft.",
    needs: { Banana: 2, Oats: 80, Egg: 2, Milk: 50 },
    steps: [
      "Mash the bananas, then blend with oats, eggs and milk until smooth. Let the batter stand for a few minutes while the pan heats. The oats absorb milk, making the rounds easier to flip.",
      "Spoon small rounds into a lightly oiled pan over medium heat.",
      "Flip when bubbles appear. Cook until set and golden on both sides.",
    ],
    swaps: "Any unsweetened plant milk works here.",
  },
  {
    "name": "Peanut sesame noodles",
    cuisine: "Chinese", difficulty: 1, kcal: 505, protein: 17,
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
      "Whisk the peanut butter, soy and lime juice with enough warm water to coat a spoon. Toss through the noodles and scatter with sesame seeds. Add the warm water a splash at a time. The sauce may tighten at first. Keep whisking until it falls off the spoon in a ribbon."
    ]
  },
  {
    "name": "Red lentil dal",
    cuisine: "Indian", difficulty: 1, kcal: 345, protein: 20,
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
      "Dice and soften the onion in oil, then stir in the spices for 30 seconds. Cut the onion small. Let it turn translucent before adding the spices so the spices spend only a short time in the hot oil.",
      "Add rinsed lentils and 550 ml water. Simmer for 18–22 minutes, stirring and adding water until soft."
    ]
  },
  {
    "name": "Miso mushroom udon",
    cuisine: "Japanese", difficulty: 1, kcal: 260, protein: 10,
    "time": 15,
    "note": "Sliced mushrooms give this quick noodle broth a savoury base.",
    "needs": {
      "Miso": 30,
      "Mushroom": 150,
      "Udon noodles": 300,
      "Spring onion": 2
    },
    "steps": [
      "Slice mushrooms and simmer in 650 ml water for 7 minutes. Add fresh udon and heat according to the packet. Cut the mushrooms into slices of similar thickness so they soften evenly in the broth.",
      "Mix miso with a little hot broth, stir back into the pot off the heat and top with sliced spring onion."
    ]
  },
  {
    "name": "Black bean quesadillas",
    cuisine: "Mexican", difficulty: 1, kcal: 540, protein: 24,
    "time": 15,
    "note": "A dry pan crisps the tortillas around a soft filling of mashed beans and melted cheese.",
    "needs": {
      "Black beans": 220,
      "Tortilla": 4,
      "Cheese": 70,
      "Cumin": 2
    },
    "steps": [
      "Drain cooked beans and mash with cumin and a splash of water. Spread over half of each tortilla. Leave a few beans partly whole for texture. Keep the filling just inside the tortilla edge so it stays in the pan when you turn it.",
      "Top with grated cheese, fold and toast both sides in a frying pan over medium heat until golden."
    ]
  },
  {
    "name": "Carrot and ginger soup",
    cuisine: "European", difficulty: 1, kcal: 155, protein: 3,
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
      "Add 650 ml water and simmer until the carrots cut easily with a spoon. Blend carefully until smooth. Cut the carrots into even coins. Stir them through the onion and ginger so each piece picks up some of the fragrant oil."
    ]
  },
  {
    "name": "Coconut chickpea curry",
    cuisine: "Indian", difficulty: 1, kcal: 480, protein: 15,
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
      "Dice the onion and soften in oil. Stir in curry powder for 30 seconds. Keep the heat gentle once the curry powder goes in and stir continuously until you smell the spices.",
      "Add drained cooked chickpeas and coconut milk. Simmer for 12 minutes and stir in spinach until wilted."
    ]
  },
  {
    "name": "Broccoli cheddar jacket potatoes",
    cuisine: "British", difficulty: 2, kcal: 330, protein: 14,
    "time": 55,
    "note": "Fluffy potato centres are mashed with tender broccoli and a little sharp cheese.",
    "needs": {
      "Potato": 2,
      "Broccoli": 150,
      "Cheese": 60,
      "Milk": 30
    },
    "steps": [
      "Prick the potatoes and bake at 210°C until tender, around 45–55 minutes. Steam broccoli until soft.",
      "Split potatoes and scoop the centres into a bowl. Mash with milk, chopped broccoli and grated cheese, then spoon back into the skins. Leave a thin wall of potato inside the skin when scooping so it can hold the filling."
    ]
  },
  {
    "name": "Lemon tuna spaghetti",
    cuisine: "Italian", difficulty: 2, kcal: 510, protein: 32,
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
      "Cook spaghetti and reserve a mug of cooking water. Warm the crushed garlic and lemon zest gently in the oil. Grate only the yellow part of the lemon peel. The white layer underneath tastes bitter.",
      "Add drained tinned tuna, spaghetti, lemon juice to taste and a splash of pasta water. Toss until glossy."
    ]
  },
  {
    "name": "Kimchi fried rice",
    cuisine: "Korean", difficulty: 2, kcal: 370, protein: 13,
    "time": 15,
    "note": "Sizzling the chopped kimchi brings out its flavour before the rice goes in.",
    "needs": {
      "Kimchi": 120,
      "Cooked rice": 320,
      "Egg": 2,
      "Oil": 15
    },
    "steps": [
      "Chop and fry kimchi in half the oil for 3 minutes. Add chilled cooked rice and a spoonful of kimchi liquid. Use kitchen scissors to snip the kimchi in a bowl so you can save the juices for the rice.",
      "Stir until steaming hot throughout. Fry the eggs in the remaining oil until set and serve on top."
    ]
  },
  {
    "name": "Chickpea cucumber wraps",
    cuisine: "Mediterranean", difficulty: 1, kcal: 480, protein: 18,
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
      "Mash drained cooked chickpeas with yoghurt and lemon juice. Cut cucumber into thin batons. Crush the chickpeas against the side of the bowl until the mixture holds together on a spoon.",
      "Divide the filling between tortillas, add cucumber and roll tightly."
    ]
  },
  {
    "name": "Roast sweet potato tahini bowls",
    cuisine: "Middle Eastern", difficulty: 2, kcal: 495, protein: 17,
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
      "Cube sweet potatoes and toss with drained cooked chickpeas and oil. Roast at 210°C for 30–35 minutes, turning once. Spread the cubes and chickpeas in one layer, using another tray if needed, so the edges roast evenly.",
      "Whisk tahini with lemon juice and enough water to drizzle. Spoon over the hot bowls."
    ]
  },
  {
    "name": "Garlicky butter bean mash",
    cuisine: "Mediterranean", difficulty: 1, kcal: 365, protein: 19,
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
      "Warm crushed garlic cloves gently in oil. Add drained cooked beans and 80 ml water, simmer for 5 minutes and mash. Press a bean against the pot with a spoon. When it flattens easily, mash until creamy with a few pieces left for texture.",
      "Wilt spinach in a separate pan with a splash of water. Serve on the beans with lemon juice."
    ]
  },
  {
    "name": "Pea and mint couscous",
    cuisine: "North African", difficulty: 1, kcal: 410, protein: 16,
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
      "Prepare couscous following the packet and fluff with a fork. Boil peas until tender and drain. Run the tines of the fork lightly across the couscous to separate the grains without crushing them.",
      "Fold peas, torn mint, lemon zest and juice into the couscous. Finish with crumbled feta."
    ]
  },
  {
    "name": "Gochujang tofu bowls",
    cuisine: "Korean", difficulty: 2, kcal: 490, protein: 24,
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
      "Pat tofu dry, cube it and fry in oil, turning until browned. Mix gochujang, soy, honey and 30 ml water. Give each side of the tofu time to form a crust. A browned cube should release easily when you turn it.",
      "Toss the tofu in the glaze until glossy. Reheat the rice until steaming hot throughout and divide between bowls."
    ]
  },
  {
    "name": "Smashed avocado and white bean toast",
    cuisine: "Australian", difficulty: 1, kcal: 365, protein: 13,
    "time": 10,
    "note": "Beans give avocado toast a chunkier texture and stretch the avocado filling.",
    "needs": {
      "Avocado": 1,
      "White beans": 160,
      "Lemon": 0.5,
      "Bread": 4
    },
    "steps": [
      "Mash drained cooked beans with avocado and lemon juice, leaving a few beans whole. Use a fork to crush the avocado against the sides of the bowl and fold it through the beans.",
      "Toast bread and spoon the mixture generously over each slice."
    ]
  },
  {
    "name": "Tomato red lentil pasta",
    cuisine: "Italian", difficulty: 2, kcal: 530, protein: 22,
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
      "Warm crushed garlic cloves in oil. Add rinsed lentils, tomatoes and 250 ml water. Simmer for 20 minutes until soft. Stir along the bottom as the lentils soften. Add a splash of water if the sauce begins catching before the lentils are tender.",
      "Meanwhile cook pasta according to the packet. Drain and toss with the thickened sauce."
    ]
  },
  {
    "name": "Mushroom barley pot",
    cuisine: "European", difficulty: 2, kcal: 400, protein: 12,
    "time": 50,
    "note": "Barley keeps a gentle bite as the browned mushrooms flavour the cooking liquid.",
    "needs": {
      "Pearl barley": 150,
      "Mushroom": 220,
      "Onion": 1,
      "Butter": 20
    },
    "steps": [
      "Slice mushrooms and brown in butter. Set half aside. Add diced onion to the pan and soften. Leave space between the mushroom slices. If the pan fills up, brown them in batches.",
      "Add rinsed pearl barley and 650 ml water. Simmer for 35–45 minutes, topping up as needed. Fold in reserved mushrooms."
    ]
  },
  {
    "name": "Zucchini feta fritters",
    cuisine: "Greek", difficulty: 2, kcal: 350, protein: 16,
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
      "Grate the zucchini and squeeze out excess liquid in a clean cloth. Mix with crumbled feta, beaten eggs and flour. Twist the cloth over the sink until very little liquid drips out. A drier mixture holds its shape in the pan.",
      "Fry flattened spoonfuls in oil over medium heat for 3–4 minutes per side until golden and cooked through."
    ]
  },
  {
    "name": "Cauliflower cheese soup",
    cuisine: "British", difficulty: 2, kcal: 245, protein: 14,
    "time": 30,
    "note": "A potato thickens this cauliflower soup before the cheese melts through.",
    "needs": {
      "Cauliflower": 300,
      "Potato": 1,
      "Milk": 200,
      "Cheese": 60
    },
    "steps": [
      "Chop cauliflower and peeled potato. Simmer in 450 ml water until both are tender, about 18 minutes. Keep the potato pieces small so they soften around the same time as the cauliflower florets.",
      "Blend until smooth. Add milk, warm gently and stir in grated cheese off the heat."
    ]
  },
  {
    "name": "Egg and potato tortilla",
    cuisine: "Spanish", difficulty: 3, kcal: 405, protein: 20,
    "time": 30,
    "note": "Thin potato slices make a filling Spanish-style omelette.",
    "needs": {
      "Egg": 5,
      "Potato": 2,
      "Onion": 1,
      "Oil": 20
    },
    "steps": [
      "Slice potatoes thinly and dice onion. Cover and cook gently in oil, turning occasionally, until tender. Aim for slices of similar thickness. Test a potato slice with the edge of a spatula before adding the eggs.",
      "Pour over beaten eggs and cook on low until mostly set. Finish under a grill in an ovenproof pan until the centre sets."
    ]
  },
  {
    "name": "Pumpkin coconut soup",
    cuisine: "Thai", difficulty: 2, kcal: 350, protein: 6,
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
      "Peel, deseed and cube the pumpkin. Soften diced onion and grated ginger in oil. Cut the pumpkin into even chunks. Check a larger piece with a fork before blending.",
      "Add pumpkin and enough water to barely cover. Simmer until tender, blend carefully, then stir in coconut milk and warm through."
    ]
  },
  {
    "name": "Harissa carrot couscous",
    cuisine: "North African", difficulty: 2, kcal: 440, protein: 14,
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
      "Cut carrots into thin batons, toss with oil and harissa and roast at 210°C for 25–30 minutes. Turn the carrots when the undersides begin to colour. Their thin tips will brown first.",
      "Prepare couscous according to the packet. Fluff and top with carrots and yoghurt."
    ]
  },
  {
    "name": "Pasta e ceci",
    cuisine: "Italian", difficulty: 2, kcal: 530, protein: 19,
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
      "Warm crushed garlic cloves and tomato paste in oil. Add drained cooked chickpeas and mash half against the side of the pot. Keep stirring the tomato paste until it darkens slightly and coats the garlic.",
      "Add 650 ml water, bring to a boil and stir in small pasta. Simmer until tender, adding water to keep it soupy."
    ]
  },
  {
    "name": "Lime and black bean rice bowl",
    cuisine: "Mexican", difficulty: 1, kcal: 410, protein: 14,
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
      "Simmer drained cooked beans and corn with cumin and 60 ml water for 6 minutes. Crush a spoonful of beans against the side of the pan to help the cumin-flavoured liquid cling to the corn.",
      "Reheat rice until steaming hot throughout. Spoon beans and corn on top and finish with lime juice."
    ]
  },
  {
    "name": "Peanut cucumber noodle salad",
    cuisine: "Thai", difficulty: 1, kcal: 450, protein: 12,
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
      "Prepare noodles according to the packet, rinse under cold water and drain. Peel cucumber into ribbons. Rotate the cucumber as you peel and stop at the watery core to keep the ribbons firm.",
      "Whisk peanut butter with soy, lime juice and a splash of water. Toss with the noodles and cucumber."
    ]
  },
  {
    "name": "Spinach and ricotta pasta",
    cuisine: "Italian", difficulty: 1, kcal: 460, protein: 21,
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
      "Beat ricotta with lemon zest, a squeeze of juice and a little cooking water. Fold through the hot pasta. Loosen the ricotta a spoonful at a time until the sauce slides easily off the spoon."
    ]
  },
  {
    "name": "Oven-roasted chickpea pita pockets",
    cuisine: "Middle Eastern", difficulty: 1, kcal: 420, protein: 18,
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
      "Drain and dry cooked chickpeas. Toss with oil and paprika and roast at 210°C for 20–25 minutes. Pat the chickpeas dry with a towel and spread them out on the tray. Surface moisture slows browning.",
      "Warm pitas briefly, split open and fill with shredded lettuce, chickpeas and yoghurt."
    ]
  },
  {
    "name": "Soy ginger bok choy noodles",
    cuisine: "Chinese", difficulty: 2, kcal: 390, protein: 12,
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
      "Prepare noodles. Separate and slice bok choy stems and leaves. Slice the thick stems more thinly than the leaves so both are tender when the noodles are ready.",
      "Stir-fry grated ginger and stems in oil for 2 minutes. Add leaves, noodles, soy and a splash of water. Toss until hot."
    ]
  },
  {
    "name": "Smoky baked bean toast",
    cuisine: "British", difficulty: 1, kcal: 445, protein: 21,
    "time": 15,
    "note": "A little paprika gives this bubbling cheese toast a smoky tomato base.",
    "needs": {
      "Baked beans": 400,
      "Paprika": 2,
      "Cheese": 50,
      "Bread": 4
    },
    "steps": [
      "Heat baked beans with paprika, stirring until the sauce thickens slightly. Toast the bread. Run a spoon through the beans. Once the sauce briefly holds a trail it will sit neatly on the toast.",
      "Spoon beans over toast, cover with grated cheese and grill briefly until melted."
    ]
  },
  {
    "name": "Mushroom and thyme omelettes",
    cuisine: "French", difficulty: 3, kcal: 240, protein: 17,
    "time": 20,
    "note": "Browned mushrooms and thyme make a savoury filling for folded omelettes.",
    "needs": {
      "Egg": 4,
      "Mushroom": 160,
      "Thyme": 3,
      "Butter": 15
    },
    "steps": [
      "Slice mushrooms and sauté in half the butter with thyme until their moisture evaporates. Set aside. Spread out the mushrooms and let the released liquid cook away so the filling stays dry enough to fold.",
      "For each omelette, melt a little butter, add two beaten eggs and tilt the pan. When set, add a share of the mushrooms and fold."
    ]
  },
  {
    "name": "Cinnamon apple porridge",
    cuisine: "Australian", difficulty: 1, kcal: 330, protein: 13,
    "time": 15,
    "note": "Grated apple softens into the oats and sweetens the porridge as it cooks.",
    "needs": {
      "Oats": 90,
      "Milk": 400,
      "Apple": 1,
      "Cinnamon": 2
    },
    "steps": [
      "Core and grate the apple. Put it in a saucepan with oats, milk and cinnamon. Stir across the base and into the corners of the pan, where the oats tend to catch.",
      "Simmer gently for 6–8 minutes, stirring often. Loosen with water to taste."
    ]
  },
  {
    "name": "Overnight cocoa oats",
    cuisine: "American", difficulty: 1, kcal: 345, protein: 14,
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
      "Whisk milk, yoghurt, cocoa and honey until smooth. Stir in oats and divide between individual covered jars. Press any cocoa lumps against the bowl with the back of a spoon before folding in the oats.",
      "Refrigerate for about 8 hours. Stir before eating and loosen with a little milk if needed."
    ]
  },
  {
    "name": "Corn and spring onion fritters",
    cuisine: "Australian", difficulty: 2, kcal: 335, protein: 14,
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
      "Drain cooked corn and mix with chopped spring onions, beaten eggs and flour. Blot the drained corn dry so the batter clings to the kernels.",
      "Fry flattened spoonfuls in a thin layer of oil over medium heat until golden and set on both sides."
    ]
  },
  {
    "name": "Za’atar labneh flatbreads",
    cuisine: "Middle Eastern", difficulty: 1, kcal: 420, protein: 14,
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
      "Warm flatbreads in a dry frying pan. Slice the cucumber thinly. Turn each flatbread when it feels pliable. Cover the warmed flatbreads with a clean towel while you prepare the toppings.",
      "Spread labneh over the bread, add cucumber and finish with za’atar and oil."
    ]
  },
  {
    "name": "Quinoa tabbouleh",
    cuisine: "Middle Eastern", difficulty: 2, kcal: 315, protein: 11,
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
      "Rinse quinoa and cook following the packet. Spread it on a plate to cool slightly. Let excess rinse water drain from the quinoa before cooking. Fluff the cooked grains before spreading them out.",
      "Finely chop parsley, tomatoes and cucumber. Toss with quinoa, lemon juice and oil."
    ]
  },
  {
    "name": "Ginger congee with spring onions",
    cuisine: "Chinese", difficulty: 1, kcal: 200, protein: 5,
    "time": 55,
    "note": "Rice breaks down into a soft porridge scented with thin slices of ginger.",
    "needs": {
      "Rice": 100,
      "Ginger": 15,
      "Spring onion": 2,
      "Soy sauce": 15
    },
    "steps": [
      "Rinse rice and simmer with sliced ginger and 1000 ml water for 40–50 minutes, stirring occasionally. Use a deep pan and keep the bubbles small. Stir across the bottom more frequently as the grains break down.",
      "Add water if it thickens too much. Serve in bowls with sliced spring onions and soy sauce."
    ]
  },
  {
    "name": "Sweet potato hash with eggs",
    cuisine: "American", difficulty: 2, kcal: 400, protein: 17,
    "time": 25,
    "note": "Small sweet potato cubes crisp in the pan before eggs cook in little wells.",
    "needs": {
      "Sweet potato": 2,
      "Capsicum": 1,
      "Egg": 4,
      "Oil": 15
    },
    "steps": [
      "Dice sweet potatoes and capsicum. Fry potatoes in oil for 5 minutes, then cover with a splash of water until tender. Cut the potato into small, even cubes. Check that a fork slips into one before adding the capsicum.",
      "Add capsicum and fry uncovered until golden. Make a well for each egg, add eggs and cover over low heat until set."
    ]
  },
  {
    "name": "Dill yoghurt potato salad",
    cuisine: "European", difficulty: 1, kcal: 305, protein: 10,
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
      "Cut potatoes into bite-sized pieces and simmer until just tender. Drain and let steam escape. Start the potatoes in cool water and bring them to a gentle simmer so the centres cook evenly.",
      "Mix yoghurt, chopped dill, lemon juice and mustard. Gently fold through the warm potatoes."
    ]
  },
  {
    "name": "Roasted aubergine with miso",
    cuisine: "Japanese", difficulty: 2, kcal: 240, protein: 7,
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
      "Halve eggplants, score the flesh and brush with oil. Roast cut-side up at 210°C for 25 minutes until tender. Make shallow diagonal cuts in both directions, keeping the skin intact so each half holds together.",
      "Mix miso, honey and a spoonful of water. Brush over eggplants, scatter with sesame seeds and roast for 5 more minutes."
    ]
  },
  {
    "name": "Ricotta and honey pear toast",
    cuisine: "European", difficulty: 1, kcal: 345, protein: 14,
    "time": 10,
    "note": "Thin slices of ripe pear sit on creamy ricotta with a drizzle of honey.",
    "needs": {
      "Bread": 4,
      "Ricotta": 120,
      "Pear": 1,
      "Honey": 15
    },
    "steps": [
      "Toast bread and spread with ricotta. Core and thinly slice the pear. Aim for slices thin enough to bend slightly as you spread them into a fan.",
      "Fan pear slices over the toast and drizzle with honey just before serving."
    ]
  },
  {
    "name": "Tomato and basil bruschetta",
    cuisine: "Italian", difficulty: 1, kcal: 295, protein: 9,
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
      "Rub warm toast lightly with a cut garlic clove. Spoon over tomatoes just before eating. Scoop up the tomatoes with a slotted spoon if they release lots of juice so the bread keeps its crunch."
    ]
  },
  {
    "name": "Cheesy polenta with mushrooms",
    cuisine: "Italian", difficulty: 2, kcal: 380, protein: 14,
    "time": 25,
    "note": "Golden pan-fried mushrooms sit on soft polenta finished with cheese.",
    "needs": {
      "Instant polenta": 100,
      "Mushroom": 220,
      "Butter": 25,
      "Cheese": 40
    },
    "steps": [
      "Cook instant polenta with water according to the packet. Stir through grated cheese and half the butter. Sprinkle the polenta into the water while whisking to prevent pockets of dry grain.",
      "Slice mushrooms and fry in remaining butter over high heat until golden at the edges. Spoon over polenta."
    ]
  },
  {
    "name": "Tomato garlic migas",
    "cuisine": "Spanish", difficulty: 2,
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
      "Tear the bread and brown it in half the oil, then set aside. Fry chopped garlic and diced tomatoes in the remaining oil until jammy. Tear the bread into bite-sized pieces with rough edges that will crisp in the oil.",
      "Beat the eggs and stir them into the tomato over low heat until set. Fold in the bread just before serving."
    ]
  },
  {
    "name": "Chilli basil tofu",
    "cuisine": "Thai", difficulty: 2,
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
      "Pat the tofu dry and crumble into a hot oiled pan. Fry until browned, stirring occasionally. Leave some larger tofu crumbles and let them sit against the pan briefly between stirs for browned edges.",
      "Add finely sliced chilli and soy sauce with a splash of water. Fold in basil and serve over rice reheated until steaming."
    ]
  },
  {
    "name": "Sesame spinach rice balls",
    "cuisine": "Japanese", difficulty: 2,
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
      "Wilt spinach, squeeze out excess water and mince. Toast sesame seeds in a dry pan. Chop the squeezed spinach finely so it spreads through the rice without pulling the balls apart.",
      "Combine with hot cooked short-grain rice and soy. When cool enough to handle, wet your hands and press into small balls. Serve promptly."
    ]
  },
  {
    "name": "Black pepper mushroom toast",
    "cuisine": "British", difficulty: 1,
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
      "Slice mushrooms and fry in butter over high heat until golden and the pan is nearly dry. Keep the mushrooms spread out so the released liquid can evaporate before you add the cream.",
      "Add crushed black pepper and cream. Simmer briefly and spoon over freshly toasted bread."
    ]
  },
  {
    "name": "Chana chaat",
    "cuisine": "Indian", difficulty: 1,
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
      "Drain cooked chickpeas, dice tomatoes and finely chop the onion. Toast cumin briefly in a dry pan. Cut the onion into smaller pieces than the tomato so each bite gets a little crunch.",
      "Toss the vegetables and chickpeas with lemon juice, then spoon on the yoghurt and scatter with cumin."
    ]
  },
  {
    "name": "Garlic mushroom aglio e olio",
    "cuisine": "Italian", difficulty: 2,
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
      "Cook spaghetti and reserve a mug of cooking water. Brown sliced mushrooms in half the oil. Wait until one side of the mushrooms is golden before turning; this leaves browned bits to flavour the sauce.",
      "Lower the heat, add the remaining oil and sliced garlic, and stir until fragrant. Toss with pasta, parsley and a splash of pasta water."
    ]
  },
  {
    "name": "Red bean chilli",
    "cuisine": "Mexican", difficulty: 1,
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
      "Soften diced onion in oil and stir in cumin and paprika. Add tomatoes and drained tinned kidney beans. Stir until the spices coat the softened onion, then add the tomatoes before the paprika catches.",
      "Mash a few beans against the pan and simmer for 18 minutes, stirring occasionally."
    ]
  },
  {
    "name": "Ginger egg drop soup",
    "cuisine": "Chinese", difficulty: 3,
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
      "Simmer sliced ginger and soy sauce in 650 ml water for 5 minutes. Stir in cubed tofu and cornflour mixed with a spoonful of cold water. Mix the cornflour with cold water until smooth and stir it again just before adding; it settles quickly.",
      "Once simmering, stir in a circle and slowly pour in beaten egg. Cook until the ribbons are set and finish with spring onion."
    ]
  },
  {
    "name": "Spinach chickpea stew",
    "cuisine": "Spanish", difficulty: 1,
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
      "Warm crushed garlic and paprika in oil for 30 seconds. Add tomatoes, drained cooked chickpeas and a splash of water. Stir the paprika into the oil until fragrant and have the tomatoes ready to add before it darkens.",
      "Simmer for 15 minutes. Mash a few chickpeas and stir in spinach until wilted."
    ]
  },
  {
    "name": "Lentil and rice pilaf",
    "cuisine": "Middle Eastern", difficulty: 2,
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
      "Rinse dry green lentils and simmer in water for 12 minutes. Meanwhile slice onions and fry in oil until deeply golden. Slice the onions evenly and turn them as their edges brown so they develop sweetness throughout.",
      "Add rice to the lentils with cumin and enough water to cover by 2 cm. Cover and simmer until tender, adding water if needed. Top with onions."
    ]
  },
  {
    "name": "Quick sesame soba",
    "cuisine": "Japanese", difficulty: 1,
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
      "Cook soba according to the packet, rinse under cold water and drain well. Rub a few rinsed noodles between your fingers. Once the sticky coating has washed away, shake the sieve well.",
      "Toast and crush sesame seeds. Mix with soy, vinegar and a little water, toss with the noodles and finish with spring onion."
    ]
  },
  {
    "name": "Pea and pea-shoot risotto",
    "cuisine": "Italian", difficulty: 3,
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
      "Soften diced onion in butter, stir in rice and add hot water a ladle at a time, stirring as each addition is absorbed. Add another ladle when a spoon drawn across the rice briefly exposes the pan. Keep the mixture loose enough to stir.",
      "After about 15 minutes add peas and continue until rice is tender. Fold in grated cheese and scatter with pea shoots."
    ]
  },
  {
    "name": "Crispy potato tacos",
    "cuisine": "Mexican", difficulty: 2,
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
      "Dice potatoes small, toss with oil and paprika, and roast at 220°C for 25–30 minutes, turning once. Spread the cubes apart and turn them once the undersides are golden so more than one side crisps.",
      "Warm tortillas in a dry pan. Fill with potatoes and spoon over yoghurt mixed with lime juice."
    ]
  },
  {
    "name": "Lemon dill salmon tray bake",
    "cuisine": "Mediterranean", difficulty: 2,
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
      "Slice potatoes thinly, coat with oil and roast at 210°C for 15 minutes. Spread the potato slices in a thin layer. Overlapping them heavily leaves the middle slices slower to cook.",
      "Place salmon fillets on top with lemon slices. Roast until cooked through and flaking, then finish with chopped dill."
    ]
  },
  {
    "name": "Chicken fajita skillet",
    "cuisine": "Mexican", difficulty: 2,
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
      "Slice chicken, onions and capsicum into thin strips. Fry the chicken in oil, turning until browned. Keep the strips similar in width. Work in batches if the pan is too crowded for the chicken to brown.",
      "Add onion, capsicum and cumin and cook until vegetables soften and chicken is cooked through. Serve in warm tortillas."
    ]
  },
  {
    "name": "Lemon oregano chicken",
    "cuisine": "Greek", difficulty: 2,
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
      "Dice potatoes into small cubes and roast with half the oil at 210°C for 12 minutes. Cut the potatoes evenly and leave room on the tray for the chicken before you start roasting.",
      "Toss diced chicken with remaining oil, lemon juice and oregano. Add to tray and roast until the chicken is cooked through and potatoes are tender."
    ]
  },
  {
    "name": "Coconut red lentil soup",
    "cuisine": "Sri Lankan", difficulty: 1,
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
      "Rinse lentils and combine with turmeric, grated ginger and 500 ml water. Simmer until tender, about 18 minutes. Skim any foam from the surface and stir along the base occasionally as the lentils soften.",
      "Stir in coconut milk and gently heat through. Finish with lime juice to taste."
    ]
  },
  {
    "name": "Pan-fried tofu lettuce cups",
    "cuisine": "Chinese", difficulty: 2,
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
      "Separate and dry the lettuce leaves. Dice carrot, grate ginger and crumble the tofu. Keep the larger lettuce leaves whole for scooping. Dry the insides so the warm filling stays in place.",
      "Brown tofu in oil, add carrot and ginger and stir-fry until tender. Stir in soy and spoon into lettuce leaves."
    ]
  },
  {
    "name": "Tuna and white bean toast",
    "cuisine": "Italian", difficulty: 1,
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
      "Drain cooked beans and tinned tuna. Mash half the beans with lemon juice and a spoonful of water. Add the water gradually while mashing until the beans spread easily and still hold their shape.",
      "Fold in remaining beans, tuna and chopped parsley. Divide over hot toast."
    ]
  },
  {
    "name": "Savoury miso oats",
    "cuisine": "Japanese", difficulty: 2,
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
      "Simmer oats in 400 ml water, stirring until creamy. Meanwhile boil eggs until set, peel and halve. Stir the oats along the base of the pan and loosen with a splash of water if they thicken before they soften.",
      "Take oats off the heat and stir in miso loosened with water. Top with eggs, sliced spring onion and toasted seeds."
    ]
  },
  {
    "name": "Mushroom stroganoff",
    "cuisine": "European", difficulty: 2,
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
      "Cook pasta and save a mug of water. Fry sliced mushrooms and onion in oil until well browned. Give the mushrooms enough room to brown. Save the pasta water before draining so you can loosen the sauce later.",
      "Add paprika and a splash of pasta water. Remove from heat, stir in yoghurt and toss through pasta."
    ]
  },
  {
    "name": "Tuscan bread soup",
    "cuisine": "Italian", difficulty: 1,
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
      "Tear in bread and simmer, stirring, until soft and thick. Tear basil over the bowls. Tear the bread into small uneven pieces so some dissolve into the soup and others keep a little texture."
    ]
  },
  {
    "name": "Carrot ribbon tahini salad",
    "cuisine": "Middle Eastern", difficulty: 1,
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
      "Peel carrots into ribbons. Drain cooked chickpeas and finely chop parsley. Turn the carrot after each few strokes of the peeler to keep the ribbons narrow enough to toss.",
      "Whisk tahini, lemon juice and water to a pouring consistency. Toss with the carrots, chickpeas and parsley."
    ]
  },
  {
    "name": "Cheese and chive scones",
    "cuisine": "British", difficulty: 3,
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
      "Rub cold diced butter into the flour, then add grated cheese and snipped chives. Stir in enough milk for a soft dough. Use your fingertips to rub in the butter until the mixture resembles coarse crumbs with a few small flakes remaining.",
      "Pat 2 cm thick and cut into rounds. Bake at 210°C for 12–15 minutes until risen and golden."
    ]
  },
  {
    "name": "Sweetcorn chowder",
    "cuisine": "American", difficulty: 2,
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
      "Soften chopped onion in butter. Add diced potatoes, corn kernels and enough water to cover. Simmer until tender. Cut the potatoes into similar-sized pieces and check that they crush easily against the pot before mashing.",
      "Mash roughly in the pan. Pour in milk and reheat gently, stirring until creamy."
    ]
  },
  {
    "name": "Ginger scallion fish",
    "cuisine": "Chinese", difficulty: 3,
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
      "Lay fillets on a heatproof plate with ginger matchsticks. Steam, covered, until cooked through and flaking easily. Arrange the fish in a single layer and keep the plate above the simmering water so the steam circulates around it.",
      "Top with sliced spring onions, soy and warmed oil. Serve over reheated, steaming-hot rice."
    ]
  },
  {
    "name": "Penne with roasted capsicum",
    "cuisine": "Italian", difficulty: 2,
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
      "Quarter and deseed capsicums, toss with garlic and oil, and roast at 220°C until soft and blistered. Lay the capsicum pieces skin-side up so the skins blister as the flesh softens.",
      "Cook pasta. Blend roasted vegetables with a splash of cooking water and toss with drained pasta and basil."
    ]
  },
  {
    "name": "Herbed chickpea pancakes",
    "cuisine": "Indian", difficulty: 2,
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
      "Whisk flour, cumin and 210 ml water until smooth. Stir in finely diced onion and chopped coriander. Pour the water into the flour gradually while whisking, scraping the edges of the bowl to catch dry pockets.",
      "Spread thin circles in a lightly oiled frying pan. Cook each side until golden and the centre is set."
    ]
  },
  {
    "name": "Chopped Greek salad",
    "cuisine": "Greek", difficulty: 1,
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
      "Cut tomatoes and cucumber into chunky pieces. Toss with olives, oil and oregano. Cut the cucumber and tomato to roughly the same size so both fit on a fork with a piece of feta.",
      "Cut feta into cubes and fold through gently. Leave for five minutes before serving."
    ]
  },
  {
    "name": "Smoky tomato butter beans",
    "cuisine": "Spanish", difficulty: 1,
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
      "Warm garlic and paprika gently in oil. Add tomatoes and simmer for 8 minutes. Keep the heat low while stirring the paprika through the garlic oil. Add the tomatoes as soon as it smells fragrant.",
      "Fold in drained cooked beans and heat for another 6 minutes, loosening with water if needed."
    ]
  },
  {
    "name": "Soba and edamame lunch bowl",
    "cuisine": "Japanese", difficulty: 2,
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
      "Cook soba and frozen shelled edamame according to their packets. Drain and cool under running water. Check both packet timings before starting so you can drain the noodles and edamame as each becomes tender.",
      "Peel carrot into ribbons. Toss everything with soy, vinegar and sesame seeds."
    ]
  },
  {
    "name": "Baked ricotta tomatoes",
    "cuisine": "Italian", difficulty: 2,
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
      "Halve tomatoes, scoop out the wet seeds and place cut-side up in a baking dish. Mix ricotta with chopped basil and spoon into the halves. Use a teaspoon to lift out the seeds, leaving the outer tomato wall intact to support the filling.",
      "Crumble bread over the top, drizzle with oil and bake at 200°C for 18–22 minutes."
    ]
  },
  {
    "name": "Pumpkin chickpea couscous",
    "cuisine": "North African", difficulty: 2,
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
      "Peel and dice pumpkin, then toss with drained chickpeas, cumin and oil. Roast at 210°C for about 30 minutes until tender. Keep the pumpkin pieces close in size. Spread them around the chickpeas so the hot air reaches their edges.",
      "Prepare couscous following the packet, fluff with a fork and fold through the roasted vegetables."
    ]
  },
  {
    "name": "Crispy tofu banh mi rolls",
    "cuisine": "Vietnamese", difficulty: 2,
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
      "Cut carrot into matchsticks and toss with vinegar. Pat tofu dry, slice and fry in oil until golden, then coat with soy. Cut the carrot sticks thinly enough to bend. Turn them in the vinegar while the tofu cooks.",
      "Split rolls and fill with tofu, thin cucumber slices and drained carrot."
    ]
  },
  {
    "name": "Kimchi potato cakes",
    "cuisine": "Korean", difficulty: 3,
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
      "Grate potatoes and squeeze dry. Mix with finely chopped kimchi, beaten egg and flour. Wring out the grated potato in a clean towel. Dry shreds brown more readily and help the cakes hold together.",
      "Flatten spoonfuls in an oiled pan and cook over medium heat until crisp on both sides and cooked through."
    ]
  },
  {
    "name": "Spinach and egg breakfast wrap",
    "cuisine": "Australian", difficulty: 1,
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
      "Wilt spinach in butter, then add beaten eggs and stir gently until set. Let excess moisture evaporate from the spinach before adding the eggs so the wrap stays firm.",
      "Warm tortillas, divide the eggs and spinach between them, top with grated cheese and roll."
    ]
  },
  {
    "name": "Lemon parsley bulgur",
    "cuisine": "Middle Eastern", difficulty: 1,
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
      "Prepare bulgur according to the packet and let it cool until warm. Finely chop parsley and tomatoes. Fluff the bulgur with a fork before cooling so the dressing can reach the individual grains.",
      "Toss everything with lemon juice and oil. Rest for five minutes before serving."
    ]
  },
  {
    "name": "Roast broccoli with hummus",
    "cuisine": "Mediterranean", difficulty: 2,
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
      "Toss broccoli in oil and roast at 220°C for 18–22 minutes until the edges brown. Slice large florets through the stem and place a flat side against the tray for deeper browning.",
      "Blend drained cooked chickpeas with tahini, lemon juice and a little water until smooth. Spread on plates and top with broccoli."
    ]
  },
  {
    "name": "Apple cinnamon French toast",
    "cuisine": "French", difficulty: 2,
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
      "Slice and soften apple in half the butter with cinnamon and a splash of water. Transfer to a bowl. Slice the apple thinly and turn the pieces in the cinnamon butter until they bend easily.",
      "Whisk eggs and milk. Dip bread briefly and fry in remaining butter until golden on both sides and cooked through. Top with apple."
    ]
  },
  {
    "name": "Tomato poached chickpeas and eggs",
    "cuisine": "Mediterranean", difficulty: 2,
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
      "Make a hollow for each egg, add eggs and cover. Cook gently until the eggs are set. Simmer until a spoon makes a hollow that holds its shape; this keeps the eggs separate as they cook."
    ]
  },
  {
    "name": "Peanut sweet potato stew",
    "cuisine": "West African", difficulty: 2,
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
      "Whisk peanut butter with a little broth, stir back into the pot and add spinach until wilted. Test a larger sweet potato cube with a fork before adding the peanut butter, which thickens the broth."
    ]
  },
  {
    "name": "Garlic lemon prawn linguine",
    "cuisine": "Italian", difficulty: 3,
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
      "Boil pasta and reserve a mug of water. In a pan warm sliced garlic in oil, add peeled prawns and cook until opaque throughout. Have the drained pasta and reserved water within reach so you can finish the sauce as soon as the prawns are cooked.",
      "Toss with the pasta, lemon zest, juice, chopped parsley and a little cooking water."
    ]
  },
  {
    "name": "Coconut rice pudding",
    "cuisine": "Thai", difficulty: 2,
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
      "Rinse rice and simmer in 300 ml water until tender. Stir in coconut milk and sugar. Stir more often as the rice absorbs the water, scraping the bottom to keep the grains from sticking.",
      "Cook gently until creamy, adding a little water as needed. Serve with diced mango."
    ]
  },
  {
    "name": "Cheddar leek pasta bake",
    "cuisine": "British", difficulty: 3,
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
      "Cook pasta just short of tender. Wash and slice leek, soften in butter, stir in flour and gradually add milk until thickened. Split the leek lengthways and rinse between the layers, where grit can hide, before slicing.",
      "Stir in half the grated cheese and pasta. Transfer to a baking dish, top with remaining cheese and bake at 210°C for 12 minutes."
    ]
  },
  {
    "name": "Warm beetroot lentil salad",
    "cuisine": "French", difficulty: 1,
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
      "Drain the cooked lentils and warm in a pan with a splash of water. Cut cooked beetroot into wedges. Let any excess water evaporate from the lentils so the mustard dressing coats them evenly.",
      "Whisk mustard, vinegar and oil. Toss with the warm lentils and beetroot, then crumble feta on top."
    ]
  },
  {
    "name": "Eggplant tomato rice",
    "cuisine": "Turkish", difficulty: 2,
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
      "Dice eggplant and onion and brown in oil. Add rinsed rice and tomatoes. Cut the eggplant into similar-sized cubes. Turn them when the first side is golden to build flavour before adding liquid.",
      "Add 250 ml water, cover and simmer gently until rice is tender, adding water as needed. Rest covered for 5 minutes."
    ]
  },
  {
    "name": "Halloumi and peach salad",
    "cuisine": "Mediterranean", difficulty: 2,
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
      "Slice halloumi and fry in half the oil until golden on both sides. Pit and slice peaches. Pat the halloumi slices dry and leave them undisturbed until they release easily from the pan.",
      "Dress lettuce with remaining oil and lemon juice. Divide between plates and add halloumi and peaches."
    ]
  },
  {
    "name": "Sweet soy chicken noodles",
    "cuisine": "Chinese", difficulty: 2,
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
      "Add thin carrot sticks, honey, soy and a splash of water. Toss with noodles until glossy and hot. Loosen the drained noodles before adding them so the soy and honey can coat the strands evenly."
    ]
  },
  {
    "name": "Yoghurt berry breakfast pots",
    "cuisine": "Australian", difficulty: 1,
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
      "Toast oats in a dry pan over medium heat, stirring until fragrant. Tip onto a plate to cool. Move the oats around the pan as they toast and transfer them as soon as they smell nutty. The hot pan keeps cooking them.",
      "Layer yoghurt, berries and oats into individual glasses. Drizzle with honey and serve."
    ]
  },
  {
    "name": "Lemon butter gnocchi with peas",
    "cuisine": "Italian", difficulty: 2,
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
      "Cook gnocchi and peas following packet timings. Reserve some cooking water before draining. Check the packet times for both ingredients and add the quicker one later so they finish together.",
      "Melt butter with lemon zest. Toss in gnocchi, peas, grated cheese and a splash of the cooking water."
    ]
  },
  {
    "name": "Smoky tofu breakfast scramble",
    "cuisine": "American", difficulty: 1,
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
      "Fry crumbled tofu in oil with turmeric and paprika, stirring until lightly browned. Break the tofu into bite-sized curds, leaving a mix of small and large pieces for different textures.",
      "Fold in spinach and cook until wilted. Serve over toasted bread."
    ]
  },
  {
    "name": "Pumpkin seed pesto pasta",
    "cuisine": "Italian", difficulty: 2,
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
      "Toast seeds in a dry pan and cool. Blend with basil, grated cheese, oil, lemon juice and a spoonful of water. Shake the pan frequently when toasting the seeds. Let them cool on a plate before blending so the basil keeps its fresh flavour.",
      "Cook pasta and reserve a mug of cooking water. Toss off the heat with pesto, loosening with cooking water."
    ]
  },
];
