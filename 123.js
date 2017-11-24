
const STORE = ['apples', 'oranges'];

function addItem(item) {
  // add a new item to the store
  STORE.push(item);
}

function generateItemHTML(item){
  // take an item from the store
  // and wrap it in an LI
  return `<li>${item}</li>`;
  
}

function renderList(store){
  // use generateItemHTML to iterate over the store.
  // and append the new HTML to the DOM
  let listHTML = '';
  for (let i = 0; i <store.length; i++) {
    listHTML += generateItemHTML(store[i])
  }
  $(".js-list").html(listHTML);
}

function handleFormSubmit(){
  $('.js-shopping-list-form').on('submit', function(event){
    event.preventDefault();
    const itemText = $('#item-entry').val();
    addItem(itemText);
    console.log(STORE);
    renderList(STORE);
  });
}
renderList(STORE);
handleFormSubmit();