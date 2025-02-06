let password_container=document.querySelector('.password');
let password_Box=document.querySelector('.password-container')
let generate_btn=document.querySelector('.generate-btn');
let length_container=document.querySelector('.pass-len');

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789"
const specialChar="!@#$%^&*()_-+=[{]}\|/?>.<,`~";
const allChars=upperCase+lowerCase+numbers+specialChar;



function generatePassword(){
    let password=""
    const lengthh=Number(length_container.value);
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=specialChar[Math.floor(Math.random()*specialChar.length)];
    while (lengthh>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)]

    }
    password_container.value=password;
}

function copyPassword(){
    password_container.select();
    document.execCommand("copy");
}

generate_btn.addEventListener('click',generatePassword);
password_Box.addEventListener('click',copyPassword)