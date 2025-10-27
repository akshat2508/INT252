const form = document.getElementById("myForm");
const nameIn = document.getElementById("email");
const number = document.getElementById("number");

const outputDiv = document.getElementById("output");
const submit = document.getElementById("sub");

form.addEventListener("submit" , function(e){
    e.preventDefault();

    outputDiv.innerHTML = `
    <p> Name: ${nameIn.value}</p>
    <p> Email: ${email.value}</p>
    <p> Number : ${number.value}</p>`;
});