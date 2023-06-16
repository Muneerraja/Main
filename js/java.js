


var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});




function firststar()
    {
        document.getElementById("all1").style.color ="yellow"
        document.getElementById("message").innerHTML = "Thank For Rating Our Website"
    }

    function secondstar()
    {
        document.getElementById("all1").style.color ="yellow"
        document.getElementById("all2").style.color ="yellow"
        document.getElementById("message").innerHTML = "Thank For Rating Our Website"
    }

    function threestar()
    {
        document.getElementById("all1").style.color ="yellow"
        document.getElementById("all2").style.color ="yellow"
        document.getElementById("all3").style.color ="yellow"
        document.getElementById("message").innerHTML = "Thank For Rating Our Website"



    }

    function fourthstar()
    {
        document.getElementById("all1").style.color ="yellow"
        document.getElementById("all2").style.color ="yellow"
        document.getElementById("all3").style.color ="yellow"
        document.getElementById("all4").style.color ="yellow"
        document.getElementById("message").innerHTML = "Thank For Rating Our Website"



    }
    function fivethstar()
    {
        document.getElementById("all1").style.color ="yellow"
        document.getElementById("all2").style.color ="yellow"
        document.getElementById("all3").style.color ="yellow"
        document.getElementById("all4").style.color ="yellow"
        document.getElementById("all5").style.color ="yellow"
        document.getElementById("message").innerHTML = "Thank For Rating Our Website"



    }

    function heartcolo()
    {
        document.getElementById("heart1").style.color ="purple"
       


    }

