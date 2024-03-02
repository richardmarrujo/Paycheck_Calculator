// map Enter key for Calculate button
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default form submission behavior
        document.getElementById("Calculate").click(); // Trigger the button click event
    }
});

function paycheck() {
    var rate = parseFloat(document.getElementById("Rate").value);
    var hours = parseFloat(document.getElementById("Hours").value);
    var tax = parseFloat(document.getElementById("Tax").value) /100 ;
    var total = 0.00
    console.log(rate, hours, tax, total)
    if (isNaN(rate) || isNaN(hours)) {
        alert("Please enter numeric values for Rate, Hours, and Tax (and do not include %)");
        return;
    }
    
    if(hours > 40){
        var reg = (hours * rate);
        var otp = (hours - 40) * (rate * 1.5);
        total =  ((reg + otp) * tax).toFixed(2);
        console.log(reg, otp, total)
    }
    else{
        total = ((rate * hours) * tax).toFixed(2);
    }
    document.getElementById("Total").style.display = "unset";
    document.getElementById("Total").innerHTML = "Check Total is " + "$" + total; 
    if ( total < 99.00) {
        document.getElementById("Total").style.fontSize = "1.5rem";
        return;
    }
    if ( total < 199.00) {
        document.getElementById("Total").style.fontSize = "2.5rem";
        return;
    }
    if ( total < 499.00) {
        document.getElementById("Total").style.fontSize = "3.5rem";
        return;
    }
    else {
        document.getElementById("Total").style.fontSize = "5rem";
    }
}

//Refresh Button
document.getElementById('refreshButton').addEventListener('click', function () {
    location.reload(); // Refresh the page
});