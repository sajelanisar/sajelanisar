document.addEventListener("DOMContentLoaded", function () {
    let nameText = "Hi, I'm Nisar Ali!";
    let index = 0;
    let speed = 100;
    function typeEffect() {
        if (index < nameText.length) {
            document.getElementById("name-animation").innerHTML += nameText.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        }
    }
    typeEffect();
});
