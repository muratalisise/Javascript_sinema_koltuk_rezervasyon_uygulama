var container = document.querySelector(".container");
var count = document.getElementById("count");
var amount = document.getElementById("amount");
var list = document.getElementById("movie");  
var seats = document.querySelectorAll(".box:not(.reserved)");

getFromLocalStorage();
calculateTotal();

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
    const selectedSeats = container.querySelectorAll(".box.selected");

    const selectedSeatsArr = [];
    const seatsArr= [];

    selectedSeats.forEach(function(seat) {
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function (seat) {
        seatsArr.push(seat);
    });

    let selectedSeatIndexs = selectedSeatsArr.map(function (seat) {
        return seatsArr.indexOf(seat);
    })
    console.log(selectedSeatIndexs);


    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * list.value;;

    saveToLocalStorage(selectedSeatIndexs);
}



function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach(function(seat,index) {
            if (selectedSeats.indexOf(index) > -1) {
                list.classList.add("selected");
            }
        })
    }


    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
    if (selectedMovieIndex != null) {
         list.selectedIndex = selectedMovieIndex; 
    }
    
}


function saveToLocalStorage(indexs) {
    localStorage.setItem("SelectedSeats", JSON.stringify(indexs));
    localStorage.setItem("SelectedMovie", list.selectedIndex);
}



