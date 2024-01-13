const passwordBox = document.querySelector("input");
const length = 16;//length have to be multiple of 4
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|/{}[]<>-=";
const allChars = upperCase + lowerCase + numbers + symbols;

function generatePassword(){ 
    let password = "";
    for(let i = 0; i< length; i+=4){
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];
    }
    passwordBox.value = password;
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", generatePassword);

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

const copy = document.querySelector("#copy");
copy.addEventListener("click", copyPassword);