var but=document.querySelector(".btn");
but.addEventListener("click",function(){
    
    findWinners();
    buttonAnimation(but);
});
function findWinners(){
var randomNumber1=Math.floor(Math.random()*6+1);
var randomDice1ImageSource= "images/dice"+ randomNumber1 +".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDice1ImageSource); 


var randomNumber2=Math.floor(Math.random()*6+1);
var randomDice2ImageSource= "images/dice"+ randomNumber2 +".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDice2ImageSource);

if(randomNumber1>randomNumber2)
{
     document.querySelector("h1").innerHTML= "Player 1 Wins 🏆"
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML= "Player 2 Wins 🏆"
}
else{
    document.querySelector("h1").innerHTML= "Draw! "
}
}

function buttonAnimation(currentKey){
    currentKey.classList.add("pressed");
    setTimeout(function(){
    currentKey.classList.remove("pressed");
    },100);
   }