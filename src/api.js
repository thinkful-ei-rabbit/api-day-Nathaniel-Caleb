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

function updateItem(id, updateData){

    console.log("Inside Update Item", id, updateData);
    return fetch (`${BASE_URL}/items/${id}`, {
        method:'PATCH', 
        headers:{'Content-Type':'application/json'}, 
        body: JSON.stringify(updateData)});
   
}



export default {
    getItems,
    createItem,
    updateItem
};