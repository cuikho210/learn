// Create Background
const bg = new Bg(
    document.getElementById('bg'),
    50,
    '#499dfc'
);

let sum = 0;
let max = 0;
let min = null;
let arr = [];

// Add number
function addNumber () {
    sum = 0;
    max = 0;
    min = 0;
    arr = [];

    document.getElementById('numbers').innerHTML = '';

    let inp = document.getElementById('input-number');
    let num = parseFloat(inp.value);
    
    if (num / 1 !== num || num < 1) return false;

    for (let i = 0; i < num; i++) {
        let rand = Math.round(Math.random() * 20);

        arr.push(rand);
        handl(rand);
    }

    inp.value = '';
    inp.focus();
    return false;
}

// Handl and show
function handl (num) {
    let el_numbers = document.getElementById('numbers');
    let el_sum = document.getElementById('sum');
    let el_max = document.getElementById('max');
    let el_min = document.getElementById('min');

    // Show number
    let div = document.createElement('div');
    div.classList.add('number');
    div.innerHTML = num;
    
    el_numbers.appendChild(div);

    // Sum
    sum += num;
    el_sum.innerHTML = sum;

    // Max
    if (num > max) max = num;
    el_max.innerHTML = max;

    // Min
    if (!min) min = num;
    else if (num < min) min = num;
    el_min.innerHTML = min;
}