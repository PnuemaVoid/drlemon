const buttons = document.getElementById("buttons");
const greenBtn = document.getElementById("greenBtn");
const redBtn = document.getElementById("redBtn");
const gif = document.getElementById("gif");
const message = document.getElementById("message");

const yes_message = "WOOOOO!!! \nYou just made the best decision of your life :)) \nI'll do my best to make you the happiest person in the world! \n\nText me the following code to verify your new status: \n --> cremebrulee";
const no_messages = ["Are you sure?", "What if I asked really nicely?", "I'll be the best guy you could ever hope for" , "Pretty please", 
    "With a super fancy chocolate cake on top", "What about a coconut redbull", "PLEASE POOKIE", "But :*(", "I am going to die", "Yep im dead",
    "ok ur talking to daniel's ghost", ":((((", "PRETTY PLEASE", "No :(", ":(",
];

let scale = 1;
let offset = 0;
const moveAmount = 4; // pixels per click

var i = 0;

redBtn.addEventListener("click", () => {
    scale += 0.3;
    greenBtn.style.transform = `scale(${scale})`;
    
    offset += moveAmount;
    redBtn.style.transform = `translateX(${offset}px)`;
    redBtn.textContent = no_messages[i];
    if (i < no_messages.length - 1) {
        i = i + 1;
    }
});

greenBtn.addEventListener("click", () => {
    gif.src = "https://gifdb.com/images/high/animated-bear-is-in-love-obdfb0txoitfinz6.webp";
    message.textContent = yes_message;
    buttons.style.display = "none";
});