var container = document.querySelector(".container");
var count = document.getElementById("count");
var amount = document.getElementById("amount");
var list = document.getElementById("movie");  

container.addEventListener("click", function (e) {
    if (e.target.classList.contains("box") && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle("selected");
            calculateTotal();
    }
});     

list.addEventListener("change", function (e) {
    calculateTotal();
})

function calculateTotal() {
    let selectedSeatCount = container.querySelectorAll(".box.selected").length;
    let price = list.value;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * price;
}


