

const items = [];
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

//   try {
//     item.validateName(name);
//     this.items.push(item.create(name));
//   } catch (e) {
//     console.log(e.message);
//   }
// };


function findAndUpdate(id, newData) {
  const resItem = this.items.find(x => x.id === id);
  Object.assign(resItem, newData);
}

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter
};