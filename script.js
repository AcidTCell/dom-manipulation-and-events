const unorderedList = document.querySelector('ul');
const userInput = document.querySelector('input');
const btn = document.querySelectorAll('button');

btn.forEach((button)=>{
    button.addEventListener('click', () =>{
        const input = document.getElementById('item');
        const inputValue = input.value;
        console.log(inputValue);
        input.value = '';
        const listItem = document.createElement('li');
        const somethingSpan = document.createElement('span');
        const deleteButton = document.createElement('button');
        somethingSpan.textContent = inputValue;
        deleteButton.textContent = 'Delete';

        listItem.appendChild(somethingSpan);
        listItem.appendChild(deleteButton);

        unorderedList.appendChild(listItem);


    });

});

