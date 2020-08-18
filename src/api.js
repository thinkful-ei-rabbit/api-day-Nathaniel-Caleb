const BASE_URL = 'https://thinkful-list-api.herokuapp.com/nateCaleb';

function getItems(){
    return fetch(`${BASE_URL}/items`);
}

function createItem(name){
    const newItem = {
    "name": name
    }
    return fetch(`${BASE_URL}/items`, {method:'POST', headers:{'Content-Type': 'application/json'}, body: JSON.stringify(newItem)});
}



export default {
    getItems,
    createItem
};