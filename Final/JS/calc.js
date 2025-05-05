const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add(n) {
    document.querySelector("#add").innerHTML = "Addition:";
    for (let i = 1; i <= 10; i++) {
        let result = `<br> ${i} + ${n} = ${i + n}`;
        document.querySelector("#add").innerHTML += result;
    }
}

function sub(n) {
    document.querySelector("#sub").innerHTML = "Subtration:";
    let i = 1;
    while (i <= 10) {
        let result = `<br> ${i} - ${n} = ${i - n}`;
        document.querySelector("#sub").innerHTML += result;
        i++;
    }
}

function mult(n) {
    document.querySelector("#mult").innerHTML = "Multiplicaton:";
    let i = 1;
    do {
        let result = `<br> ${i} * ${n} = ${i * n}`;
        document.querySelector("#mult").innerHTML += result;
        i++;
    } while (i <= 10);
}

function divi(n) {
    document.querySelector("#divi").innerHTML = "Divition:";
    for (var i of numbers) {
        let result = `<br> ${i} / ${n} = ${(i / n).toFixed(2)}`;
        document.querySelector("#divi").innerHTML += result;
    }
}

document.querySelector("#calc").addEventListener("click", function calc() {
    let n = parseInt(document.querySelector("#num").value);
    if (isNaN(n)) {
        document.querySelector("#error").innerHTML = "Please enter a valid number";
        document.querySelector("#add").innerHTML = "Addition:";
        document.querySelector("#sub").innerHTML = "Subtration:";
        document.querySelector("#mult").innerHTML = "Multiplicaton:";
        document.querySelector("#divi").innerHTML = "Divition:";
    } else {
        document.querySelector("#error").innerHTML = "";
        add(n);
        sub(n);
        mult(n);
        divi(n);
    }
});
