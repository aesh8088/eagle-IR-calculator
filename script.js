let amount = document.getElementById('loan-amount');
let rate = document.getElementById('interest-rate');
let period = document.getElementById('period');
let button = document.getElementById('button');
let output = document.querySelector(".output1");

button.addEventListener("click", () => {
    let am = amount.value;
    let r = rate.value;
    let t = period.value;


    let a = am * (1 + (r/100) * t);

    if(!am){
        alert("Please enter Loan Amount");
        return;
    } else if (!r){
        alert("Please enter Interest Rate");
        return;
    } else if(!t){
        alert("Please enter Loan Period in Years");
        return;
    } else {
      output.innerHTML = `Your Total loan amount after Interest is ${a.toFixed(2)}`;
    }


})