//expected behavior
////clicking search should take state.current_open_cards and close all of them.

//super extra
////picture slides down out of view to reveal drink list

const state = {
    amphora_contents: document.querySelector(".amphora-contents"),
    amphora_lists: document.querySelectorAll(".amphora-ingredients--list"),
    amphora_ingredients: document.querySelector(".amphora-ingredients"),
    select_ingredients: [],
    current_ingredients: [],
    base_url: 'http://127.0.0.1:5500',
    current_open_cards: [],
    current_drinks: [],
    current_drink: [],
    last_search: '',
}

handle_list_drinks = elm => {
    state.amphora_ingredients.remove()
    state.current_drinks = elm
    console.log(elm)
    document.querySelector('body').appendChild(elm)
}

//assumes val exists in arr
const remove_array_value = (arr, val) => arr.splice(arr.indexOf(val), 1)

//dom manipulation//
const content_to_dom = (parent, child, content) => {
    const newborn = document.createElement(child)
    newborn.textContent = content
    return parent.appendChild(newborn) //return value is newborn
}

const add_child_event = (parents, cb, type, resolver, args) => {
    parents = [...parents]
    for (let parent of parents) {
        parent = [...parent.children]
        for (let child of parent) {
            child.addEventListener(type, cb.bind(this, resolver, args, child))
        }
    }
    return parents
}

const add_event = (elms, cb, type, resolver, args) => {
    for (let elm of elms) {
        elm.addEventListener(type, cb.bind(this, resolver, args, elm))
    }
    return elms
}

const replace_dom_element = (replacement, original) => {
    original.parentNode.replaceChild(replacement, original)
}

const toggleSwitch = (elms, new_status) => {
    new_status = new_status === 'on' ? ['block', 'visible'] : ['none', 'hidden']
    for (let elm of elms) {
        elm.style.display = new_status[0]
        elm.style.visibility = new_status[1]
    } 
    return elms
}

//get functions

//[action (not used), state.curret_ingredients, state.current_drinks, cb]
//[action (not used), <id>, state.current_drink, cb]

//main
const main = () => {
    add_child_event(state.amphora_lists, dispatch,'click', 'amphora_contents', ['add'])
    add_event(document.querySelectorAll('.amphora-ingredients--image'), dispatch, 'click', 'open_close', ['ingredient_card', 'open', state.current_open_cards])
    add_event(document.querySelectorAll('.amphora-ingredients--list_close'), dispatch, 'click', 'open_close', ['ingredient_card', 'close', state.current_open_cards])
    add_event([document.querySelector('.amphora-home')], dispatch, 'click', 'navigation', ['replacement', state.amphora_ingredients])
    add_event([document.querySelector('.amphora-search')], dispatch, 'click', 'navigation', ['search', state.last_search, state.current_ingredients, state.current_open_cards])
    document.querySelector('.modal-background').addEventListener('click', close_modal)
    document.querySelector('body').addEventListener('click', e => {
        const css =['amphora-drinks--title', 'amphora-drinks--image']  
        css_clicked = e.target.classList[0] 
        if (css.indexOf(css_clicked) > -1) handle_navigation(['open_drink', []], e.target)
    })

} 
main()