
function getIngredients(ingreds) {
    results = []
    state = 'close' // close
    current = ''
    for (let i = 0; i < ingreds.length; i++) {
        let char = ingreds[i];
        if (char === '"' && state === 'close') {
            state = 'open'
        }
        else if (char === '"' && state === 'open') {
            state = 'close'
            results.push(current)
            current = ''
        }
        else if (state === 'open') {
            current += char.toLowerCase()
        }
    }
    return results
}

console.log(getIngredients(ingreds))

["light rum", "applejack", "gin", "dark rum", "sweet vermouth", "strawberry schnapps", "scotch", "apricot brandy", "triple sec", "southern comfort", "orange bitters", "brandy", "lemon vodka", "blended whiskey", "dry vermouth", "amaretto", "tea", "champagne", "coffee liqueur", "bourbon", "tequila", "vodka", "añejo rum", "bitters", "sugar", "kahlua", "demerara sugar", "dubonnet rouge", "watermelon", "lime juice", "irish whiskey", "apple brandy", "carbonated water", "cherry brandy", "creme de cacao", "grenadine", "port", "coffee brandy", "red wine", "rum", "grapefruit juice", "ricard", "sherry", "cognac", "sloe gin", "apple juice", "pineapple juice", "lemon juice", "sugar syrup", "milk", "strawberries", "chocolate syrup", "yoghurt", "mango", "ginger", "lime", "cantaloupe", "berries", "grapes", "kiwi", "tomato juice", "cocoa powder", "chocolate", "heavy cream", "galliano", "peach vodka", "ouzo", "coffee", "spiced rum", "water", "espresso", "angelica root", "orange", "cranberries", "johnnie walker", "everclear", "cranberry juice", "egg yolk", "egg", "grape juice", "peach nectar", "lemon", "firewater", "lemonade", "lager", "whiskey", "absolut citron", "pisco", "irish cream", "ale", "chocolate liqueur", "midori melon liqueur", "sambuca", "cider", "sprite", "7-up", "blackberry brandy", "peppermint schnapps", "creme de cassis"]



const ingredients ={
    "Rum": ["light rum", "dark rum", "añejo rum", "rum", "spiced rum"],
    "Assorted Alcohol": ["applejack", "triple sec","amaretto", "galliano", "ouzo", "everclear", "firewater", "midori melon liqueur", "sambuca", ],
    "Beer": ["ale", "lager"],
    "Gin": ["gin", "sloe gin"],
    "Vermouth": ["sweet vermouth","dry vermouth"],
    "Schnapps": ["strawberry schnapps", "peppermint schnapps"],
    "Scotch": ["scotch"],
    "Sugar": ["sugar", "demerara sugar", "sugar syrup"],
    "Brandy": [ "apricot brandy", "coffee brandy"],
    "Whiskey": ["southern comfort", "blended whiskey", "bourbon", "irish whiskey", "johnnie walker", "whiskey"],
    "Bitters": ["bitters", "orange bitters"],
    "Brandy": ["brandy", "apple brandy", "cherry brandy", "cognac", "pisco", "blackberry brandy"],
    "Vodka": ["lemon vodka", "vodka",  "peach vodka", "absolut citron"],
    "Miscellaneous": ["tea", "grenadine",  "ginger", "tomato juice", "angelica root"],
    "Water": ["water", "carbonated water"],
    "Dairy/Egg":["milk", "yoghurt", "heavy cream", "egg yolk", "egg",],
    "Wine": ["champagne", "red wine"],
    "Fortified Wine": ["dubonnet rouge", "port","sherry"],
    "Coffee": ["coffee liqueur", "kahlua", "coffee brandy", "coffee", "espresso", "irish cream", "chocolate liqueur"],
    "Tequila": ["tequila"],
    "Fruit": ["watermelon", "lime juice", "grapefruit juice", "apple juice", "pineapple juice", "lemon juice", "strawberries", "mango", "lime", "cantaloupe", "berries", "grapes", "kiwi", "orange", "cranberries", "apple cider", "cranberry juice",  "grape juice", "peach nectar", "lemon",  "lemonade"],
    "Cider": ["cider", "apple cider"],
    "Licorice": ["ricard"],
    "Syrup": ["chocolate syrup", "sugar syrup"],
    "Chocolate": ["creme de cacao", "chocolate syrup",  "cocoa powder", "chocolate",],
    "Soda": ["sprite", "7-up"]
}
