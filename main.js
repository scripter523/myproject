var forms = document.getElementById('form');
var items = document.getElementById('items');

forms.addEventListener('submit', addItem);

items.addEventListener('click', removeItem);
function addItem(e){
    e.preventDefault();
   

    var newElement = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newElement));
    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    items.appendChild(li);

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            items.removeChild(li);
        }
    }
}