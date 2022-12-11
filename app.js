

//const butterfly = document.getElementById('nametag');
//butterfly.style.backgroundColor = 'purple';

const button = document.getElementById('update-button');
const nameDisplay = document.getElementById('name-display');
button.addEventListener('click', () => {
    console.log("i am clicking button");
    console.log(nameDisplay);
    nameDisplay.textContent = nameInput.value;
    nameDisplay.style.color = 'blue';
});
//test