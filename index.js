let button = document.getElementById("submit-btn")
let input = document.getElementById("num-val")
let length = document.getElementById("meter-feet")
let volume = document.getElementById("liters-gallons")
let mass = document.getElementById("kilograms-pounds")

button.addEventListener("click", function() {
    if (input.value) {
        length.innerHTML = `${input.value} meters = ${(input.value * (65.616/20)).toFixed(2)} feet | ${input.value} feet = ${(input.value * (6.096/20)).toFixed(2)} meters`
        volume.innerHTML = `${input.value} liters = ${(input.value * (5.284/20)).toFixed(2)} gallons | ${input.value} gallons = ${(input.value * (75.708/20)).toFixed(2)} liters`
        mass.innerHTML = `${input.value} kilos = ${(input.value * (44.092/20)).toFixed(2)} pound | ${input.value} pounds = ${(input.value * (9.072/20)).toFixed(2)} kilos`
    } else {
        input.value = 20;
        length.innerHTML = `${input.value} meters = ${(input.value * (65.616/20)).toFixed(2)} feet | ${input.value} feet = ${(input.value * (6.096/20)).toFixed(2)} meters`
        volume.innerHTML = `${input.value} liters = ${(input.value * (5.284/20)).toFixed(2)} gallons | ${input.value} gallons = ${(input.value * (75.708/20)).toFixed(2)} liters`
        mass.innerHTML = `${input.value} kilos = ${(input.value * (44.092/20)).toFixed(2)} pound | ${input.value} pounds = ${(input.value * (9.072/20)).toFixed(2)} kilos`
    }
})