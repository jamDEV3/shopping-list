// function to allow enter to act like clicking 'add item' button
var input = document.getElementById("add-item");
input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("sub-btn").click();
    }
})
document.getElementById("sub-btn").addEventListener('click', (e) => addItem())
//function to create dynamically a list element when a text is input 
function addItem() {

    var itemName = document.getElementById("add-item"); //targets the input element
    var itemText = itemName.value; // stores the input element value
    if (itemName.value != ""){ //checks field is not null
        var checkbox = document.createElement('input'); //creates a input checkbox to place next to the item
        var deletebtn = document.createElement('input'); // creates a delete button per item added to the list
        checkbox.type = 'checkbox'; // defines type for input element for checkbox
        checkbox.className = 'checkbox'; // adds class to the checkbox
        deletebtn.type = 'button'; // defines type for button element for checkbox
        deletebtn.value = 'Delete'; // adds value to delete button
        deletebtn.classList.add('delete', 'btn', 'btn-dark'); // adds class to the delete button
        li = document.createElement('li');   //creates a new list element in the DOM
        li.innerHTML = itemText; //assinges the stored input text in the element
        li.className = 'list-group-item'; //add a class attribute to the new element for bootstrap styling
        li.appendChild(checkbox); //adds the checkbox to the new list element
        li.appendChild(deletebtn); // adds the delete button next to the new item added to the list
        document.getElementById('item-list').firstElementChild.appendChild(li); //appends the new item to the ul element
        itemName.value = null; //resets input box       
         var deleteItem = document.querySelectorAll(".delete");
         deleteItem.forEach(function (button) {
         button.addEventListener("click",  function(){
         this.parentNode.remove()
         });
    });       
    }
}
