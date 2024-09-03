



let letterEl = document.querySelector(".letter-cont");
let letterContent = document.querySelector(".letter");

let mess = [
    "I just realized",
    "man just like me are not special",
    "It's those Women that is with us, made us special",
    "Thank you!"
]
let count = 0
let letterAnimation = () => {
    letterContent.innerHTML = mess[0];
    letterEl.classList.add("lettAni");
    
    setInterval(() => {
        count++
        letterContent.innerHTML = mess[count];
        if(count >= mess.length) {
            letterContent.innerHTML = "";
            letterEl.classList.remove("lettAni")
            
        }
    }, 4000);  

}

letterAnimation();


