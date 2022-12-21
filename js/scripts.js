function newItem(){
//1. adding a new to do list item

    let list = $('#list');
    let li = $('<li></li>');
    let userInput = $('#input');
    let inputValue = userInput.val();
    li.append(inputValue);

    if (!inputValue) {
        alert('You must write something!');
    } else {
        list.append(li);
        userInput.val('');
    }

//2. Crossing out an item from the list of items: 
    function crossOut() {
        li.toggleClass('strike');
    }
    li.on('dblclick', crossOut);

//3.1. adding the delete button "X":
    let crossOutButton = $('<crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

//3.2. adding class delete (display: none) from the css: 
    function deleteListItem() {
        li.addClass('delete');
    }
    crossOutButton.on('click', deleteListItem);

//4. reordering the items: 
    list.sortable();
}