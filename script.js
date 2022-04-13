function getValue () {
  const initial = document.querySelector ("initialAmount").value
    console.log (initial)
  const tipPercent = document.querySelector ("tipPercentage").value
    console.log (tipPercent)
}

let tip = initial + tipPercent/100;
  console.log (tip)

let total = initialAmount + tip;
  console.log (total)
  
 


document.getElementById ("tip").innerHTML = parseInt(initial) * (parseInt(tipPercent) / 100);
document.getElementById ("totalToPay").innerHTML = initial + tipPercent;