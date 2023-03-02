for(var i=0; i<document.querySelectorAll(".color").length;i++){

    document.querySelectorAll(".color")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
        switch(buttonInnerHTML){
            case 'o': document.body.style.color = "orange";
            break;
            case 'y': document.body.style.color = "yellow";
            break;
            case 'b': document.body.style.color = "blue";
            break;
            case 'O': document.body.style.backgroundColor = "orange";
            break;
            case 'Y': document.body.style.backgroundColor = "yellow";
            break;
            case 'B': document.body.style.backgroundColor = "blue";
            break;
            default: document.body.style.color="white";
        }   

    });
}





const form = document.querySelector('form');
const output = document.querySelector('#output');
form.addEventListener('submit', (event) => {
event.preventDefault();
const name = document.querySelector('#name').value;
const age = document.querySelector('#age').value;
// if statements for change in background/behavior
if (name === '' || age === '') {
output.textContent = 'Please enter a name and age.';
} else if (age < 18) {
  
output.textContent = 'Sorry, you are too young to enter this website.';
document.body.style.backgroundColor = "red";
} else {
output.textContent = `Welcome, ${name}!`;
document.body.style.backgroundColor = "green";
}
});

const colors = ['orange', 'yellow', 'blue'];

for (let i = 0; i < colors.length; i++) {
console.log(colors[i]);
}
