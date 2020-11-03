const state = {
    amphora_contents: document.querySelector(".amphora-contents"),
    amphora_cards: document.querySelectorAll(".amphora-ingredients--card"),
    current_ingredients: [],
}

const handle_amphora_contents = (e, action, option) => {
    switch (action) {
        case 'remove':
            remove_amphora_contents(e, state.current_ingredients)
            break;
        case 'add':
            //option is only optional for handle_ampohra_contents expects <type string> 
            add_amphora_contents(e, state.current_ingredients, state.amphora_contents, option)
            break;
        default:
            throw `handle_ampohra_conntents did not get a valid action expected [remove or add] got ${action}.`
    }
}

const add_amphora_contents = (e, container, parent, ingredient) => {
    if (typeof ingredient !== 'string') throw `add_ampohra_contents expected <type string> got <type ${typeof ingredient}>`
    if (container.indexOf(ingredient) !== -1) return console.log('attempted to add duplicate ingredient to amphora') //todo development
    container.push(ingredient)
    content_to_dom(parent, 'div', ingredient).classList.add('amphora-contents--content')
}

//const remove_amphora_contents = (e, )
////need event to trigger to test access to element

const content_to_dom = (parent, child, content) => {
    const newborn = document.createElement(child)
    newborn.textContent = content
    return parent.appendChild(newborn) //return value is newborn
}

