// Create Background
const bg = new Bg(
    document.getElementById('bg'),
    50,
    '#499dfc'
);

let sum = 0;
let max = 0;
let arr = [];

// Add number
function addNumber () {
    let inp = document.getElementById('input-number');
    let num = parseFloat(inp.value);
    
    if (num / 1 !== num) return false;

    arr.push(num);
    handl(num);

    inp.value = '';
    inp.focus();
    return false;
}

// Handl and show
function handl (num) {
    let el_even = document.getElementById('even');
    let el_odd = document.getElementById('odd');
    let el_sum = document.getElementById('sum');
    let el_max = document.getElementById('max');
    let el_prime = document.getElementById('prime');

    // Show number
    let div = document.createElement('div');
    div.classList.add('number');
    div.style.color = "#fff";
    div.innerHTML = num;
    
    if (num % 2 == 0) el_even.appendChild(div);
    else el_odd.appendChild(div);

    // Color
    let length = (num + '').length;

    if (length == 6) {
        div.style.backgroundColor = '#' + num;
    }
    else if (length < 6) {
        let color = '#';

        for (let i = 0; i < 6 - length; i++) {
            color += '0';
        }

        color += num;
        div.style.backgroundColor = color;
    }
    else {
        let color = '#' + (num + '').substr(0, 6);
        div.style.backgroundColor = color;
    }

    // Sum
    sum += num;
    el_sum.innerHTML = sum;

    // Max
    if (num > max) max = num;
    el_max.innerHTML = max;

    // Prime Number
    if (num == 2) {
        let div = document.createElement('div');
        div.classList.add('number');
        div.innerHTML = num;

        el_prime.appendChild(div);
    }
    else {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            let div = document.createElement('div');
            div.classList.add('number');
            div.innerHTML = num;
            el_prime.appendChild(div);
        }
    }
}