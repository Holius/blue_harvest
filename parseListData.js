
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

// console.log(JSON.stringify(getIngredients(ingreds)))

let i = ["vodka","gin","rum","tequila","scotch","absolut kurant","absolut peppar","absolut vodka","advocaat","aejo rum","aftershock","agave syrup","ale","allspice","almond extract","almond flavoring","almond","amaretto","angelica root","angostura bitters","anis","anise","anisette","aperol","apfelkorn","apple brandy","apple cider","apple juice","apple schnapps","apple","applejack","apricot brandy","apricot nectar","apricot","aquavit","asafoetida","añejo rum","bacardi limon","bacardi","baileys irish cream","banana liqueur","banana rum","banana syrup","banana","barenjager","basil","beef stock","beer","benedictine","berries","bitter lemon","bitters","black pepper","black rum","black sambuca","blackberries","blackberry brandy","blackberry schnapps","blackcurrant cordial","blackcurrant schnapps","blackcurrant squash","blended whiskey","blue curacao","blue maui","blueberries","blueberry schnapps","bourbon","brandy","brown sugar","butter","butterscotch schnapps","cachaca","calvados","campari","canadian whisky","candy","cantaloupe","caramel coloring","carbonated soft drink","carbonated water","cardamom","cayenne pepper","celery salt","celery","chambord raspberry liqueur","champagne","cherries","cherry brandy","cherry cola","cherry grenadine","cherry heering","cherry juice","cherry liqueur","cherry","chocolate ice-cream","chocolate liqueur","chocolate milk","chocolate syrup","chocolate","cider","cinnamon schnapps","cinnamon","citrus vodka","clamato juice","cloves","club soda","coca-cola","cocktail onion","cocoa powder","coconut cream","coconut liqueur","coconut milk","coconut rum","coconut syrup","coffee brandy","coffee liqueur","coffee","cognac","cointreau","cola","cold water","condensed milk","coriander","corn syrup","cornstarch","corona","cranberries","cranberry juice","cranberry liqueur","cranberry vodka","cream of coconut","cream sherry","cream soda","cream","creme de almond","creme de banane","creme de cacao","creme de cassis","creme de noyaux","creme fraiche","crown royal","crystal light","cucumber","cumin powder","cumin seed","curacao","cynar","daiquiri mix","dark chocolate","dark creme de cacao","dark rum","dark soy sauce","demerara sugar","dr. pepper","drambuie","dried oregano","dry vermouth","dubonnet blanc","dubonnet rouge","egg white","egg yolk","egg","eggnog","erin cream","espresso","everclear","fanta","fennel seeds","firewater","flaked almonds","food coloring","forbidden fruit","frangelico","fresca","fresh basil","fresh lemon juice","fruit juice","fruit punch","fruit","galliano","garlic sauce","gatorade","ginger ale","ginger beer","ginger","glycerine","godiva liqueur","gold rum","gold tequila","goldschlager","grain alcohol","grand marnier","granulated sugar","grape juice","grape soda","grapefruit juice","grapes","green chartreuse","green creme de menthe","green ginger wine","green olives","grenadine","ground ginger","guava juice","guinness stout","guinness","half-and-half","hawaiian punch","hazelnut liqueur","heavy cream","honey","hooch","hot chocolate","hot damn","hot sauce","hpnotiq","ice-cream","ice","iced tea","irish cream","irish whiskey","jack daniels","jello","jelly","jagermeister","jim beam","johnnie walker","kahlua","key largo schnapps","kirschwasser","kiwi liqueur","kiwi","kool-aid","kummel","lager","lemon juice","lemon peel","lemon soda","lemon vodka","lemon-lime soda","lemon-lime","lemon","lemonade","licorice root","light cream","light rum","lillet","lime juice cordial","lime juice","lime liqueur","lime peel","lime vodka","lime","limeade","madeira","malibu rum","mandarin","mandarine napoleon","mango","maple syrup","maraschino cherry juice","maraschino cherry","maraschino liqueur","margarita mix","marjoram leaves","marshmallows","maui","melon liqueur","melon vodka","mezcal","midori melon liqueur","midori","milk","mint syrup","mint","mountain dew","nutmeg","olive oil","olive","onion","orange bitters","orange curacao","orange juice","orange liqueur","orange peel","orange rum","orange soda","orange spiral","orange vodka","orange","oreo cookie","orgeat syrup","ouzo","oyster sauce","papaya juice","papaya","parfait amour","passion fruit juice","passion fruit syrup","passoa","peach brandy","peach juice","peach liqueur","peach nectar","peach schnapps","peach vodka","peach","peachtree schnapps","peanut oil","pepper","peppermint extract","peppermint schnapps","pepsi cola","pernod","peychaud bitters","pina colada mix","pineapple juice","pineapple rum","pineapple vodka","pineapple-orange-banana juice","pineapple","pink lemonade","pisang ambon","pisco","plain chocolate","plain flour","plums","port","powdered sugar","purple passion","raisins","raspberry cordial","raspberry jam","raspberry juice","raspberry liqueur","raspberry schnapps","raspberry syrup","raspberry vodka","red chile flakes","red chili flakes","red hot chili flakes","red wine","rhubarb","ricard","rock salt","root beer schnapps","root beer","roses sweetened lime juice","rosewater","rumple minze","rye whiskey","sake","salt","sambuca","sarsaparilla","schnapps","schweppes lemon","schweppes russchian","sherbet","sherry","sirup of roses","sloe gin","soda water","sour apple pucker","sour mix","southern comfort","soy milk","soy sauce","soya milk","soya sauce","spiced rum","sprite","squeezed orange","squirt","strawberries","strawberry juice","strawberry liqueur","strawberry schnapps","strawberry syrup","sugar syrup","sugar","sunny delight","surge","swedish punsch","sweet and sour","sweet cream","sweet vermouth","tabasco sauce","tang","tawny port","tea","tennessee whiskey","tequila rose","tia maria","tomato juice","tomato","tonic water","triple sec","tropicana","tuaca","vanilla extract","vanilla ice-cream","vanilla liqueur","vanilla schnapps","vanilla syrup","vanilla vodka","vanilla","vermouth","vinegar","water","watermelon schnapps","whipped cream","whipping cream","white chocolate liqueur","white creme de menthe","white grape juice","white port","white rum","white vinegar","white wine","wild turkey","wildberry schnapps","wine","worcestershire sauce","wormwood","yeast","yellow chartreuse","yoghurt","yukon jack","zima","caramel sauce","chocolate sauce","lillet blanc","peach bitters","mini-snickers bars","prosecco","salted chocolate","martini rosso","martini bianco","martini extra dry","fresh lime juice","fresh mint","rosemary","habanero peppers","ilegal joven mezcal","elderflower cordial","rosso vermouth","creme de violette","cocchi americano","white vermouth","dry curacao","nocino","averna","ramazzotti","fernet-branca","allspice dram","falernum","singani","arrack","blackstrap rum","ginger syrup","honey syrup","blended scotch","islay single malt scotch","151 proof rum","7-up","absinthe","absolut citron","creme de mure","olive brine","pineapple syrup","st. germain","lavender","whiskey","whisky","pomegranate juice","watermelon","chareau","cinnamon whisky","red bull","diet coke","rosemary syrup"]

console.log(i)

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
