const unorderedList = document.querySelector('ul');
const userInput = document.querySelector('input');
const btn = document.querySelectorAll('button');

btn.forEach((button)=>{
    button.addEventListener('click', () =>{
        const input = document.getElementById('item');
        const inputValue = input.value;
        console.log(inputValue);
        input.value = '';


    });

});
