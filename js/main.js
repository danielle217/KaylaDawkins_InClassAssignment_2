const cat = document.getElementById("cat");
const dog = document.getElementById("dog");
const cow = document.getElementById("cow");
let count = 0;

function revealAnimal(animal, BtnId, btn) {
    const img = document.getElementById(animal);
    const hideBtn = document.getElementById(BtnId);
    const revealBtn = document.getElementById(btn);

    if (img.style.display === "none") {
        img.style.display = "block";
        hideBtn.style.display = "block";
        revealBtn.classList.add("clicked");
        count++;
    }
    document.getElementById("count").textContent = count;
}

function hideAnimal(animal, BtnId, btn) {
    document.getElementById(animal).style.display = "none";
    document.getElementById(BtnId).style.display = "none";
    document.getElementById(btn).classList.remove("clicked");
    count--;
    document.getElementById("count").textContent = count;
}

document.getElementById("btn1").addEventListener("click", function() {
    revealAnimal("cat", "hide_btn1", "btn1");
});
document.getElementById("btn2").addEventListener("click", function() {
    revealAnimal("dog", "hide_btn2", "btn2");
});
document.getElementById("btn3").addEventListener("click", function() {
    revealAnimal("cow", "hide_btn3", "btn3");
});

document.getElementById("hide_btn1").addEventListener("click", function() {
    hideAnimal("cat", "hide_btn1", "btn1");
});
document.getElementById("hide_btn2").addEventListener("click", function() {
    hideAnimal("dog", "hide_btn2", "btn2");
});
document.getElementById("hide_btn3").addEventListener("click", function() {
    hideAnimal("cow", "hide_btn3", "btn3");
});

document.querySelector('button[type="reset"]').addEventListener("click", function() {
    cat.style.display = "none";
    dog.style.display = "none";
    cow.style.display = "none";
    document.getElementById("hide_btn1").style.display = "none";
    document.getElementById("hide_btn2").style.display = "none";
    document.getElementById("hide_btn3").style.display = "none";
    count = 0;
    document.getElementById("count").textContent = count;
    document.querySelectorAll("button.clicked").forEach(function(btn) {
        btn.classList.remove("clicked");
    });

});