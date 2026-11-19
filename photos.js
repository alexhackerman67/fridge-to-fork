"use strict";
// Original publisher photographs for the featured recipe cards.
const dishPhotos = {
  "Lemony pesto spaghetti": {
    "image": "https://www.recipetineats.com/tachyon/2019/02/Pesto-Pasta_2-1.jpg",
    "title": "Pesto Pasta - with plenty of pesto sauce!",
    "source": "https://www.recipetineats.com/pesto-pasta/"
  },
  "Tomato & feta baked eggs": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/95/55/6/pic2dskUP.jpg",
    "source": "https://www.food.com/recipe/baked-eggs-with-feta-and-tomatoes-95556",
    "title": "Baked Eggs With Feta and Tomatoes"
  },
  "Capsicum egg fried rice": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/31/72/19/picxClsrg.jpg",
    "source": "https://www.food.com/recipe/egg-fried-rice-easy-317219",
    "title": "Egg Fried Rice - Easy!"
  },
  "White bean & tomato salad": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/69/66/7/picL41bnT.jpg",
    "source": "https://www.food.com/recipe/white-bean-and-cherry-tomato-salad-69667",
    "title": "White Bean and Cherry Tomato Salad"
  },
  "Spinach melt toasties": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/86/35/0/picy2HEsh.jpg",
    "source": "https://www.food.com/recipe/spinach-cheese-grilled-sandwich-86350",
    "title": "Spinach & Cheese Grilled Sandwich"
  },
  "Banana oat pancakes": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/53/72/14/knjynmriSZanlBkA1mXh_Banana%20Recipes50.jpg",
    "source": "https://www.food.com/recipe/banana-oat-pancakes-537214",
    "title": "Banana Oat Pancakes"
  },
  "Peanut sesame noodles": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/16/54/49/pic8rqvc9.jpg",
    "source": "https://www.food.com/recipe/peanut-sesame-noodles-165449",
    "title": "Peanut Sesame Noodles"
  },
  "Red lentil dal": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/32/85/37/picCPm0gu.jpg",
    "source": "https://www.food.com/recipe/curried-red-lentil-dahl-328537",
    "title": "Curried Red Lentil Dahl"
  },
  "Miso mushroom udon": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/32/54/47/MChBFjeESi2ASjXe7H7M_IMG_0123.JPG",
    "source": "https://www.food.com/recipe/udon-shiitake-and-kale-in-miso-broth-325447",
    "title": "Udon, Shiitake and Kale in Miso Broth"
  },
  "Black bean quesadillas": {
    "image": "https://cookieandkate.com/images/2016/02/sweet-potato-black-bean-quesadillas-recipe.jpg",
    "title": "Spiralized Sweet Potato & Black Bean Quesadillas",
    "source": "https://cookieandkate.com/sweet-potato-black-bean-quesadillas-recipe/"
  },
  "Carrot and ginger soup": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/64/78/3/pic2YWp9A.jpg",
    "source": "https://www.food.com/recipe/carrot-and-ginger-soup-64783",
    "title": "Carrot and Ginger Soup"
  },
  "Coconut chickpea curry": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/48/54/72/pic319EHR.jpg",
    "source": "https://www.food.com/recipe/coconut-curry-with-cauliflower-carrots-chickpeas-485472",
    "title": "Coconut Curry With Cauliflower, Carrots, & Chickpeas"
  },
  "Broccoli cheddar jacket potatoes": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/27/39/64/picDebH0c.jpg",
    "source": "https://www.food.com/recipe/broccoli-cheddar-twice-baked-potatoes-273964",
    "title": "Broccoli Cheddar Twice-Baked Potatoes"
  },
  "Lemon tuna spaghetti": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/12/94/42/picRHOGlD.jpg",
    "source": "https://www.food.com/recipe/spaghetti-with-tuna-and-lemon-129442",
    "title": "Spaghetti With Tuna and Lemon"
  },
  "Kimchi fried rice": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/29/64/21/picJmZFgL.jpg",
    "source": "https://www.food.com/recipe/kimchi-fried-rice-296421",
    "title": "Kimchi Fried Rice"
  },
  "Chickpea cucumber wraps": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/41/81/76/picrDAcWO.jpg",
    "source": "https://www.food.com/recipe/mediterranean-chickpea-wrap-418176",
    "title": "Mediterranean Chickpea Wrap"
  },
  "Roast sweet potato tahini bowls": {
    "image": "https://minimalistbaker.com/wp-content/uploads/2015/04/AMAZING-Sweet-Potato-Chickpea-Buddha-Bowl-with-Kale-Red-Onion-and-a-STUNNING-Tahini-maple-sauce-vegan-glutenfree-dinner-1.jpg",
    "source": "https://minimalistbaker.com/sweet-potato-chickpea-buddha-bowl/",
    "title": "Sweet Potato Chickpea Buddha Bowl"
  },
  "Garlicky butter bean mash": {
    "image": "https://www.recipetineats.com/tachyon/2014/07/White-Bean-Mash.jpg",
    "title": "Garlic White Bean Mash In A Flash",
    "source": "https://www.recipetineats.com/garlic-white-bean-mash-flash/"
  },
  "Pea and mint couscous": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/43/74/33/pic2jJkzq.jpg",
    "source": "https://www.food.com/recipe/minted-pea-couscous-437433",
    "title": "Minted Pea Couscous"
  },
  "Gochujang tofu bowls": {
    "image": "https://www.veganricha.com/wp-content/uploads/2024/01/Gochujang-Sheet-Pan-Dinner-8946.jpg",
    "source": "https://www.veganricha.com/sheet-pan-gochujang-bowl/",
    "title": "Sheet Pan Gochujang Bowl (1 pan!)"
  },
  "Smashed avocado and white bean toast": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/50/99/09/YkOx5JLFQuCE76tXtREY-IMG_0481.JPG",
    "source": "https://www.food.com/recipe/white-bean-avocado-appetizer-toasts-509909",
    "title": "White Bean-Avocado Appetizer Toasts"
  },
  "Tomato red lentil pasta": {
    "image": "https://www.theconsciousplantkitchen.com/wp-content/uploads/2020/09/Red-Lentil-Pasta-2.jpg",
    "title": "Red Lentil Pasta Recipe (Healthy, Vegan)",
    "source": "https://www.theconsciousplantkitchen.com/red-lentil-pasta/"
  },
  "Mushroom barley pot": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/29/06/95/piccFj61i.jpg",
    "source": "https://www.food.com/recipe/mushroom-barley-risotto-290695",
    "title": "Mushroom Barley Risotto"
  },
  "Zucchini feta fritters": {
    "image": "https://img.sndimg.com/food/image/upload/v1/img/feed/289212/X3IqM3UERSiYb9iAhhl3_FullSizeRender.jpg",
    "source": "https://www.food.com/recipe/zucchini-basil-feta-fritters-289212",
    "title": "Zucchini, Basil & Feta Fritters"
  },
  "Cauliflower cheese soup": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/77/95/9/WeOutpLTwyIGbwJj4VtZ_picUStnw3%20(2).jpg",
    "source": "https://www.food.com/recipe/cauliflower-cheese-soup-77959",
    "title": "Cauliflower-Cheese Soup"
  },
  "Egg and potato tortilla": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/23/07/52/picQ91Vm8.jpg",
    "source": "https://www.food.com/recipe/potato-and-onion-tortilla-230752",
    "title": "Potato and Onion Tortilla"
  },
  "Pumpkin coconut soup": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/18/48/53/picVxljoO.jpg",
    "source": "https://www.food.com/recipe/butternut-pumpkin-soup-with-ginger-and-coconut-184853",
    "title": "Butternut Pumpkin Soup With Ginger and Coconut"
  },
  "Harissa carrot couscous": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/42/13/57/picqK3jcx.jpg",
    "source": "https://www.food.com/recipe/harissa-couscous-421357",
    "title": "Harissa Couscous"
  },
  "Pasta e ceci": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/45/76/21/picaYTrhF.jpg",
    "source": "https://www.food.com/recipe/pasta-e-ceci-pasta-and-chickpeas-457621",
    "title": "Pasta E Ceci (Pasta and Chickpeas)"
  },
  "Lime and black bean rice bowl": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/submissions/recipe/400708/1YWknXgzSX6erjxm8DLl_Mexican%20Rice%20Bowl22.JPG",
    "source": "https://www.food.com/recipe/mexican-rice-bowl-with-black-beans-greens-537422",
    "title": "Mexican Rice Bowl With Black Beans & Greens"
  },
  "Peanut cucumber noodle salad": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/submissions/recipe/2001103587/l4QnqCPcSbWHqhTV2FEE_SKU0905_web.jpg",
    "source": "https://www.food.com/recipe/cucumber-noodle-salad-with-basil-green-beans-peanuts-527706",
    "title": "Cucumber Noodle Salad With Basil, Green Beans & Peanuts"
  },
  "Spinach and ricotta pasta": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/31/00/71/picdIfOTE.jpg",
    "source": "https://www.food.com/recipe/pasta-and-spinach-with-ricotta-and-herbs-310071",
    "title": "Pasta and Spinach With Ricotta and Herbs"
  },
  "Oven-roasted chickpea pita pockets": {
    "image": "https://www.liveeatlearn.com/wp-content/uploads/2025/07/Chickpea-Gyros-7.jpg",
    "source": "https://www.liveeatlearn.com/roasted-chickpea-gyros/",
    "title": "The vegetarian dinner I've made every week for 10 years"
  },
  "Soy ginger bok choy noodles": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/37/14/39/picxAD3T8.jpg",
    "source": "https://www.food.com/recipe/mightyro-s-bok-choy-leek-noodle-stir-fry-371439",
    "title": "Mightyro's Bok Choy-Leek-Noodle Stir Fry"
  },
  "Smoky baked bean toast": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/42/34/27/picOA8LDU.jpg",
    "source": "https://www.food.com/recipe/beans-on-toast-423427",
    "title": "Beans on Toast"
  },
  "Mushroom and thyme omelettes": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/67/12/4/picq98gER.jpg",
    "source": "https://www.food.com/recipe/mushroom-omelette-67124",
    "title": "Mushroom Omelette"
  },
  "Cinnamon apple porridge": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/26/60/0/pic3TV3CX.jpg",
    "source": "https://www.food.com/recipe/cinnamon-apple-oatmeal-26600",
    "title": "Cinnamon-Apple Oatmeal"
  },
  "Overnight cocoa oats": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/submissions/recipe/2001201872/kO3BWtURQW2yhom2qkQG_untitled-6428.jpg",
    "source": "https://www.food.com/recipe/chocolate-banana-overnight-oats-537204",
    "title": "Chocolate & Banana Overnight Oats"
  },
  "Corn and spring onion fritters": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/12/56/01/pic5HwxAF.jpg",
    "source": "https://www.food.com/recipe/corn-fritters-with-scallions-125601",
    "title": "Corn Fritters With Scallions"
  },
  "Za’atar labneh flatbreads": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/17/80/10/xluN3UrRwWTwlshbxqwQ_Zatar%20Flatbreads_4347.jpg",
    "source": "https://www.food.com/recipe/flatbread-with-za-atar-178010",
    "title": "Flatbread With Za’atar"
  },
  "Quinoa tabbouleh": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/14/06/18/zigRPssMQIS5LaNLjMG2_0S9A5566.jpg",
    "source": "https://www.food.com/recipe/quinoa-tabouli-140618",
    "title": "Quinoa Tabouli"
  },
  "Ginger congee with spring onions": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/76/01/4/picLx2Ipn.jpg",
    "source": "https://www.food.com/recipe/easy-rice-congee-76014",
    "title": "Easy Rice Congee"
  },
  "Sweet potato hash with eggs": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/47/24/87/kRAowqpRvCC6pRUHcHQm_sweet-potato-hash-7406.jpg",
    "source": "https://www.food.com/recipe/sweet-potato-hash-472487",
    "title": "Sweet Potato Hash"
  },
  "Dill yoghurt potato salad": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/45/84/72/picZBf2e9.jpg",
    "source": "https://www.food.com/recipe/creamy-dill-potato-salad-458472",
    "title": "Creamy Dill Potato Salad"
  },
  "Roasted aubergine with miso": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/50/13/68/picmjQpaF.jpg",
    "source": "https://www.food.com/recipe/roasted-miso-eggplant-501368",
    "title": "Roasted Miso Eggplant"
  },
  "Ricotta and honey pear toast": {
    "image": "https://assets.bonappetit.com/photos/57acdd6ef1c801a1038bc84b/16:9/w_1280,c_limit/BACK-TO-SCHOOL-1-of-3.jpg",
    "source": "https://www.bonappetit.com/recipe/ricotta-toast-pears-honey",
    "title": "Ricotta Toast with Pears and Honey"
  },
  "Tomato and basil bruschetta": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/submissions/recipe/1802395849/i7mWJx7LRZS8vtvCxNXP_Bruschetta.%20Photo%20by%20J.%20Gino%20Genovesi.JPG",
    "source": "https://www.food.com/recipe/tomato-basil-bruschetta-516312",
    "title": "Tomato & Basil Bruschetta"
  },
  "Cheesy polenta with mushrooms": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/19/69/53/piceT6xEi.jpg",
    "source": "https://www.food.com/recipe/creamy-polenta-with-wild-mushrooms-196953",
    "title": "Creamy Polenta With Wild Mushrooms"
  },
  "Tomato garlic migas": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/10/95/14/tme5wzpSFqMVqHaWwFDX_IMG_5286.JPG",
    "source": "https://www.food.com/recipe/migas-109514",
    "title": "Migas"
  },
  "Chilli basil tofu": {
    "image": "https://asianinspirations.com.au/wp-content/uploads/2023/05/TBT-19%20(2).jpg",
    "source": "https://asianinspirations.com.au/recipes/thai-basil-tofu-vegetables-stirfry/",
    "title": "Thai Basil Tofu & Vegetables Stirfry | Asian Inspirations"
  },
  "Sesame spinach rice balls": {
    "image": "https://www.thedailymeal.com/img/gallery/sesame-spinach-onigiri-rice-balls-recipe/flickr_hampdenarchy_0.jpg",
    "source": "https://www.thedailymeal.com/recipes/sesame-spinach-rice-balls-recipe/",
    "title": "Sesame-Spinach Onigiri (Rice Balls) Recipe - Daily Meal"
  },
  "Black pepper mushroom toast": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/48/64/6/piczhIugc.jpg",
    "source": "https://www.food.com/recipe/mushrooms-on-toast-48646",
    "title": "Mushrooms on Toast"
  },
  "Chana chaat": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/50/46/2/picNby7wh.jpg",
    "source": "https://www.food.com/recipe/chana-chickpeas-chaat-50462",
    "title": "Chana (Chickpeas) Chaat"
  },
  "Garlic mushroom aglio e olio": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/15/98/94/picwsnrYG.jpg",
    "source": "https://www.food.com/recipe/pasta-with-garlic-and-oil-aglio-e-olio-159894",
    "title": "Pasta With Garlic and Oil (Aglio E Olio)"
  },
  "Red bean chilli": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/23/27/27/piceRSjRu.jpg",
    "source": "https://www.food.com/recipe/red-bean-chili-232727",
    "title": "Red Bean Chili"
  },
  "Ginger egg drop soup": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/61/9/picF1itID.jpg",
    "source": "https://www.food.com/recipe/egg-drop-soup-619",
    "title": "Egg Drop Soup"
  },
  "Spinach chickpea stew": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/31/89/39/pic0k5hzM.jpg",
    "source": "https://www.food.com/recipe/chickpea-and-spinach-stew-318939",
    "title": "Chickpea and Spinach Stew"
  },
  "Lentil and rice pilaf": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/38/11/0/picmY6EdU.jpg",
    "source": "https://www.food.com/recipe/lentil-rice-pilaf-38110",
    "title": "Lentil Rice Pilaf"
  },
  "Quick sesame soba": {
    "image": "https://cdn.loveandlemons.com/wp-content/uploads/opengraph/2019/05/soba-noodles-recipe.jpg",
    "title": "Sesame Soba Noodles - Love and Lemons",
    "source": "https://www.loveandlemons.com/sesame-soba-noodles/"
  },
  "Pea and pea-shoot risotto": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/23/39/97/picOTlI1J.jpg",
    "source": "https://www.food.com/recipe/pea-and-parmesan-risotto-233997",
    "title": "Pea and Parmesan Risotto"
  },
  "Crispy potato tacos": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/25/04/98/pic2fKyub.jpg",
    "source": "https://www.food.com/recipe/tacos-de-papa-fried-potato-tacos-250498",
    "title": "Tacos De Papa (Fried Potato Tacos)"
  },
  "Lemon dill salmon tray bake": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/46/63/88/picuY3DNf.jpg",
    "source": "https://www.food.com/recipe/baked-salmon-with-dill-466388",
    "title": "Baked Salmon With Dill"
  },
  "Chicken fajita skillet": {
    "image": "https://www.recipetineats.com/tachyon/2017/04/Chicken-Fajitas_8.jpg",
    "title": "Chicken Fajitas",
    "source": "https://www.recipetineats.com/chicken-fajitas/"
  },
  "Lemon oregano chicken": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/19/55/31/picntwN77.jpg",
    "source": "https://www.food.com/recipe/lemon-roast-chicken-and-potatoes-195531",
    "title": "Lemon Roast Chicken and Potatoes"
  },
  "Coconut red lentil soup": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/33/30/22/picH3XRxl.jpg",
    "source": "https://www.food.com/recipe/spicy-red-lentil-coconut-soup-333022",
    "title": "Spicy Red Lentil Coconut Soup"
  },
  "Pan-fried tofu lettuce cups": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/14/80/93/picSEb51l.jpg",
    "source": "https://www.food.com/recipe/asian-lime-and-herbed-tofu-in-lettuce-cups-148093",
    "title": "Asian Lime and Herbed Tofu in Lettuce Cups"
  },
  "Tuna and white bean toast": {
    "image": "https://waitrose-prod.scene7.com/is/image/waitroseprod/creamy-tuna-and-white-bean-toast?uuid=4d2467ea-df6d-4e4d-a752-c977ffa1d64d&$Waitrose-Default-Image-Preset$",
    "source": "https://www.waitrose.com/ecom/recipe/creamy-tuna-and-white-bean-toast",
    "title": "Creamy Tuna & White Bean Toast  Recipe | Waitrose & Partners"
  },
  "Savoury miso oats": {
    "image": "https://cdn.pickuplimes.com/cache/29/27/2927afa0ad2e074b253b4beecb2355cf.jpg",
    "title": "Savoury Miso Sesame Oatmeal",
    "source": "https://www.pickuplimes.com/recipe/savoury-miso-sesame-oatmeal-736"
  },
  "Mushroom stroganoff": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/28/43/78/picHnKet2.jpg",
    "source": "https://www.food.com/recipe/mushroom-stroganoff-284378",
    "title": "Mushroom Stroganoff"
  },
  "Tuscan bread soup": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/13/93/16/G93vaMkeS5SvgAx5Jndm-1-HPIM2236-3-.JPG",
    "source": "https://www.food.com/recipe/pappa-al-pomodoro-tuscan-bread-soup-139316",
    "title": "Pappa Al Pomodoro (Tuscan Bread Soup)"
  },
  "Carrot ribbon tahini salad": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/13/74/13/picn6o0zB.jpg",
    "source": "https://www.food.com/recipe/carrot-ribbon-salad-137413",
    "title": "Carrot Ribbon Salad"
  },
  "Cheese and chive scones": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/12/17/16/pic0CwBy6.jpg",
    "source": "https://www.food.com/recipe/cheese-and-chive-scones-121716",
    "title": "Cheese and Chive Scones"
  },
  "Sweetcorn chowder": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/31/62/7/picGcaSNZ.jpg",
    "source": "https://www.food.com/recipe/corn-chowder-31627",
    "title": "Corn Chowder"
  },
  "Ginger scallion fish": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/13/77/13/picTxsZGo.jpg",
    "source": "https://www.food.com/recipe/steamed-fish-with-ginger-and-scallions-137713",
    "title": "Steamed Fish With Ginger and Scallions"
  },
  "Penne with roasted capsicum": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/83/63/1/pic8f2Z7N.jpg",
    "source": "https://www.food.com/recipe/pasta-with-roasted-red-pepper-sauce-83631",
    "title": "Pasta with Roasted Red Pepper Sauce"
  },
  "Herbed chickpea pancakes": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/46/01/96/picK1kNnT.jpg",
    "source": "https://www.food.com/recipe/pudla-besan-chickpea-pancake-460196",
    "title": "Pudla - Besan Chickpea Pancake"
  },
  "Chopped Greek salad": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/16/59/46/picvSIGll.jpg",
    "source": "https://www.food.com/recipe/greek-chopped-salad-165946",
    "title": "Greek Chopped Salad"
  },
  "Smoky tomato butter beans": {
    "image": "https://assets.sbs.com.au/dims4/default/293e242/2147483647/strip/true/crop/1757x988+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fsbs-au-brightspot.s3.ap-southeast-2.amazonaws.com%2Fdrupal%2Ffood%2Fpublic%2FWhiteBeans-0266.jpg",
    "source": "https://www.sbs.com.au/food/recipe/white-beans-braised-with-tomato-alubias-blancas-con-tomate/485xb9rqu",
    "title": "White beans braised with tomato (alubias blancas con tomate)"
  },
  "Soba and edamame lunch bowl": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/46/23/16/picXOlF4c.jpg",
    "source": "https://www.food.com/recipe/spicy-almond-soba-noodles-with-edamame-462316",
    "title": "Spicy Almond Soba Noodles With Edamame"
  },
  "Baked ricotta tomatoes": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/22/39/38/picEf1EfZ.jpg",
    "source": "https://www.food.com/recipe/stuffed-tomatoes-223938",
    "title": "Stuffed Tomatoes"
  },
  "Pumpkin chickpea couscous": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/31/09/39/2LstGZpvQFKSdeGsVQqy_untitled-8074.jpg",
    "source": "https://www.food.com/recipe/moroccan-style-pumpkin-and-couscous-salad-310939",
    "title": "Moroccan Style Pumpkin and Couscous Salad"
  },
  "Crispy tofu banh mi rolls": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/submissions/recipe/1803495670/X1wrDqrMQguGGrKyBWGz_tofu-bhan-mi-with-vegan-mayo-800x1033.jpg",
    "source": "https://www.food.com/recipe/tofu-banh-mi-with-sriracha-mayo-535429",
    "title": "Tofu Banh Mi With Sriracha Mayo"
  },
  "Kimchi potato cakes": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/25/81/87/picIg6QaO.jpg",
    "source": "https://www.food.com/recipe/kimchi-pancakes-kimchi-jun-258187",
    "title": "Kimchi Pancakes (Kimchi Jun)"
  },
  "Spinach and egg breakfast wrap": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/38/03/72/cLtPtDDOQ8ypdaQmYz7r_Avocado%20n%20Egg%20Wrap.JPG",
    "source": "https://www.food.com/recipe/nif-s-avocado-and-egg-breakfast-wrap-380372",
    "title": "Nif's Avocado and Egg Breakfast Wrap"
  },
  "Lemon parsley bulgur": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/46/26/99/picwqswRO.jpg",
    "source": "https://www.food.com/recipe/bulgur-salad-462699",
    "title": "Bulgur Salad"
  },
  "Roast broccoli with hummus": {
    "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/roasted-cauli-bowl-a7bb279.jpg?resize=440%2C230",
    "source": "https://www.bbcgoodfood.com/recipes/roasted-cauli-broc-bowl-tahini-houmous",
    "title": "Roasted cauli-broc bowl with tahini hummus"
  },
  "Apple cinnamon French toast": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/submissions/recipe/2001398683/nFgxi2RcaYUi2f5UwpAC_1723869487855907.jpg",
    "source": "https://www.food.com/recipe/apple-cinnamon-pecan-french-toast-531239",
    "title": "Apple Cinnamon Pecan French Toast"
  },
  "Tomato poached chickpeas and eggs": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/32/31/25/pic4IAh3P.jpg",
    "source": "https://www.food.com/recipe/eggs-and-chickpeas-in-spicy-tomato-sauce-323125",
    "title": "Eggs and Chickpeas in Spicy Tomato Sauce"
  },
  "Peanut sweet potato stew": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/21/53/5/nOLFl15QPOdo44CZP2RX_IMG_20200205_190341.jpg",
    "source": "https://www.food.com/recipe/sweet-potato-and-peanut-stew-21535",
    "title": "Sweet Potato and Peanut Stew"
  },
  "Garlic lemon prawn linguine": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/53/67/26/AIgIwNj2TBKiLWRsxmQV_Garlic%20Prawn%20Pasta.jpg",
    "source": "https://www.food.com/recipe/garlic-prawn-pasta-536726",
    "title": "Garlic Prawn Pasta"
  },
  "Coconut rice pudding": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/29/90/56/picryg1MA.jpg",
    "source": "https://www.food.com/recipe/coconut-rice-pudding-299056",
    "title": "Coconut Rice Pudding"
  },
  "Cheddar leek pasta bake": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/22/33/34/picvtOCJC.jpg",
    "source": "https://www.food.com/recipe/cheesy-leek-pasta-bake-223334",
    "title": "Cheesy Leek & Pasta Bake"
  },
  "Warm beetroot lentil salad": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/31/25/73/8o0ukgErTZ6d5w8bfrbZ_LentilSalad3.jpg",
    "source": "https://www.food.com/recipe/lentil-salad-with-baby-beets-feta-312573",
    "title": "Lentil Salad With Baby Beets & Feta"
  },
  "Eggplant tomato rice": {
    "title": "Eggplant & Rice Pilav",
    "source": "https://www.clovegarden.com/recipes/tsv_eplric1.html",
    "image": "https://www.clovegarden.com/recipes/img/tsv_eplric1c.jpg"
  },
  "Halloumi and peach salad": {
    "image": "https://dairyfarmersofcanada.ca/sites/default/files/image_file_browser/conso_recipe/grilled-halloumi-heirloom-cherry-tomato-and-peach-salad.jpg",
    "source": "https://dairyfarmersofcanada.ca/en/canadian-goodness/recipes/grilled-halloumi-heirloom-cherry-tomato-and-peach-salad",
    "title": "Grilled Halloumi, Heirloom Cherry Tomato and Peach Salad | Canadian Goodness"
  },
  "Sweet soy chicken noodles": {
    "image": "https://cdn.myfoodbook.com.au/public/images/partner/recipes/birch-and-waite/ed16x9-chicken-and-honey-soy-noodles.jpg",
    "source": "https://myfoodbook.com.au/recipes/show/chicken-and-honey-soy-noodles",
    "title": "Chicken and Honey Soy Noodles | myfoodbook"
  },
  "Yoghurt berry breakfast pots": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/22/24/05/picp3taKC.jpg",
    "source": "https://www.food.com/recipe/light-and-healthy-blueberry-yogurt-parfait-222405",
    "title": "Light and Healthy Blueberry Yogurt Parfait"
  },
  "Lemon butter gnocchi with peas": {
    "image": "https://assets.epicurious.com/photos/56c759a39568393e2121fc80/16:9/w_1280,c_limit/240959_hires.jpg",
    "source": "https://www.epicurious.com/recipes/food/views/lemon-gnocchi-with-spinach-and-peas-240959",
    "title": "Lemon Gnocchi with Spinach and Peas"
  },
  "Smoky tofu breakfast scramble": {
    "image": "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/42/83/62/picYrjdbl.jpg",
    "source": "https://www.food.com/recipe/basic-breakfast-tofu-scramble-428362",
    "title": "Basic Breakfast Tofu Scramble"
  },
  "Pumpkin seed pesto pasta": {
    "image": "https://vegnews.com/media/W1siZiIsIjIxODA5L1ZlZ05ld3MuUHVtcGtpblNlZWRQZXN0b1Bhc3RhLkpQRyJdLFsicCIsImNyb3BfcmVzaXplZCIsIjU4NzB4MzA4Mis1KzQyMiIsIjEyMDB4NjMwXiJdLFsicCIsImVuY29kZSIsImpwZyIsIiJdLFsicCIsIm9wdGltaXplIl0sWyJwIiwic3JnYl9zdHJpcCJdXQ/VegNews.PumpkinSeedPestoPasta.jpg?sha=80f72ddf0645eb2d",
    "source": "https://vegnews.com/recipes/lemony-pumpkin-seed-pesto-pasta",
    "title": "Lemony Pumpkin Seed Pesto Pasta"
  }
};
