const recipe = {
  "@type": "Recipe",
  description: "This is my personal recipe for the ultimate and easy-to-make treat, chocolate-covered strawberries. Your family & friends will devour them in a heartbeat!",
  recipeIngredient: [
    "2 cups of medium-large syrawberries, 1/2 cup of chocolate chips or melters (chocolate of choice), Topping of choice (sprinkles, almond bits, etc)"
  ],

  name: "Chocolate-covered Strawberries",
  prepTime: "Prep Time: 15 mins",
  recipeInstructions: "Gently rinse strawberries and dry on paper towels (berries must be completely dry). Line cookie sheet with waxed paper. In a microwavable bowl, heat chocolate chips in 20 second intervals, stirring each time until it becomes a fluent consistency. Be careful to not burn the mixture by overheating. Grab a strawberry by its leaves and dip lower half of each strawberry into chocolate mixture. Place on waxed paper-lined cookie sheet and sprinkle topping of choice before the chocolate hardens. They are now ready to serve!",
  recipeYield: "Serving Size: 18-20",
  author: "Emily Lee",

}

const titleElement = document.getElementById("title");

titleElement.innerText = recipe.name;

document.getElementById("description").innerText = recipe.description;

document.getElementById("prepTime").innerText = recipe.prepTime;

document.getElementById("recipeIngredient").innerText = recipe.recipeIngredient;

document.getElementById("recipeInstructions").innerText = recipe.recipeInstructions;

document.getElementById("recipeYield").innerText = recipe.recipeYield;

document.getElementById("author").innerText = recipe.author;
