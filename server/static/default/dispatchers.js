const dispatch = (resolver, args, elm) => {
    switch (resolver) {
        case 'amphora_contents':
            handle_amphora_contents(args, elm)
            break
        case 'api':
            handle_api_call(args, elm)
            break
        case 'open_close':
            handle_open_close(args, elm)
            break
        case 'navigation':
            handle_navigation(args,elm)
            break
        default:
            throw `dispatch did not get a valid resolver expected [amphora_contents, api, open_close, or navigation] got ${resolver}.`
    }
} 

//amphora_contents
const handle_amphora_contents = (args, elm) => {
    [action, ingredient] = args
    switch (action) {
        case 'remove':
            remove_amphora_contents(state.current_ingredients, ingredient, elm)
            break
        case 'add':
            add_amphora_contents(state.current_ingredients, state.amphora_contents, elm.textContent)
            break
        default:
            throw `handle_ampohra_contents did not get a valid action expected [remove or add] got ${action}.`
    }
}
//['handle_card_switch', 'open/close', state.current_open_cards]
const add_amphora_contents = (container, parent, ingredient) => {
    if (typeof ingredient !== 'string') throw `add_ampohra_contents expected <type string> got <type ${typeof ingredient}>`
    if (container.indexOf(ingredient) !== -1) return console.log('attempted to add duplicate ingredient to amphora') //todo development
    container.push(ingredient)
    const newborn = content_to_dom(parent, 'div', ingredient)
    newborn.classList.add('amphora-contents--content')
    newborn.addEventListener('click', dispatch.bind(this, 'amphora_contents', ['remove', ingredient], newborn))
}

const remove_amphora_contents = (ingredients, ingredient, elm) => {
    remove_array_value(ingredients, ingredient)
    elm.remove()
}

//api
const handle_api_call = (args) => {
    [action, ...rest] = args
    switch (action) {
        case 'list_drinks':
            //[state.curret_ingredients, state.current_drinks, 'ingredients',cb] 
            if (!args[1].length) return console.log ('No ingredients are present to search.') //todo development
            get_html(rest)
            break
         case 'list_drink':
            get_html(rest)
            break
    default:
        throw `handle_api_call did not get a valid action expected [list_drinks or list_drink] got ${action}.`
    }
}

const get_html = (args) => {
    [parameters, endpoint, cb, promise_resolver] = args
    fetch(`/${endpoint}/${parameters}`)
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        return parser.parseFromString(html, 'text/html').querySelector('div')
    }).then(elm => { 
        cb([elm], promise_resolver)
    })
}

//open_close
const handle_open_close = (args, elm) => {
    [action] = args
    switch (action) {
        case 'ingredient_card':
            ingredient_card_switch(args,elm)
            break
        default: 
            throw `handle_open_close did not get a valid action expected [ingredient_card] got ${resolver}.`
    }
}   

//['handle_card_switch', 'open/close', state.current_open_cards]
const ingredient_card_switch = (args,elm) => {
    let [not_used, action, tracker] = args
    switch (action) {
        case 'open':
            if (elm.parentElement in tracker) return console.log('Card is already open.') //todo development
            elms = [elm.parentElement.querySelector('ul'), elm.parentElement.querySelector('.amphora-ingredients--list_close')]
            tracker.push(elm.parentElement)
            toggleSwitch(elms, 'on')
        break
        case 'close':
            elms = [elm.parentElement.querySelector('ul'), elm]
            
            toggleSwitch(elms, 'off')
            remove_array_value(tracker,elm.parentNode)
        break
        default:
            throw `ingredient_card_switch did not get a valid action expected [open or close] got ${action}.`
    }
}

//navigation
const handle_navigation = (args, elm) => {
    let [action, ...rest] = args //todo refactor other handlers with this pattern
    switch (action) {
        case 'replacement':
            navigate_to_replacement(rest)
            break
        case 'search':
            navigate_to_search_results(rest)
            break
        case 'modal':
            navigate_to_modal(rest)
            break
        case 'open_drink': 
            navigate_to_drink([elm, ...rest])
            break
        default:
            throw `handle_navigation did not get a valid action expected [replacement,search,modal, open_drink] got ${action}.`
    }
}

//[state.amphora_ingredients]
const navigate_to_replacement = (args, promise_resolver) => {
    let [replacement] = args
    const current = document.querySelector('.amphora')
    //could be a better solution to search for the classname that would be preseent opposed to the lastElement Child
    if (current.lastElementChild === replacement) return console.log('Replacement are already loaded') //todo development
    current.lastElementChild.remove()
    current.appendChild(replacement)
    if (promise_resolver) promise_resolver('success')
}

//state.last_search, state.current_ingredients
const navigate_to_search_results = args => {   
    let [last_search, ingredients, open_cards] = args
    //could add message for when there are no ingredients
    if (!ingredients.length) return console.log ('No ingredients are present to search.') //todo development
    query = ingredients.map(ingredient => ingredient.replace(' ', '_')).join(',')
    if (last_search === ingredients) return console.log('Last search was the same.  Already displaying results') //todo development
    state.last_search = query //todo refactor --> hardcoded because state.last_search is <type str> and is therefore pass by value
    //API call [parameters, endpoint, cb]
    //async behavior ensures the DOM is updated with new content before handling the state of the ingredients component
    new Promise ((resolve,reject) => dispatch('api', ['list_drinks', query, 'ingredients', navigate_to_replacement, resolve])).then(a =>  toggleSwitch(open_cards, 'off')).catch(err => console.log(err))
}


const navigate_to_drink = args => {
    let [elm] = args
    const query = elm.parentElement.id
    dispatch('api', ['list_drink', query, 'drink', navigate_to_modal])
}

const navigate_to_modal = args => {
    const [foreground] = args
    const background = document.querySelector('.modal-background')
    background.appendChild(foreground)
    const close_button = foreground.querySelector('.modal-back')
    close_button.addEventListener('click', close_modal.bind(this, background))
    toggleSwitch([background], 'on')  
}

//stopgap solution
const try_close_modal = elm => {
    try {
        if (elm.target.className === 'modal-background' || elm.target.className === 'modal-back') return true
    }
    catch {
        return false
    }
}

const close_modal = e => {
    if (!try_close_modal(e)) return
    background = e.target.className ==='modal-background' ? e.target : e.target.parentElement.parentElement
    background.querySelector('.modal-foreground').remove()
    toggleSwitch([background], 'off')
}
