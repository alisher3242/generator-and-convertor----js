//1-vazifa
function convertion(valyuta, qiymat) {
    if (valyuta == "torub") {
        return qiymat*0.0074
    }
    if (valyuta == "tosum"){
        return qiymat*11369.97
    }
    return null;
}

let valute =prompt("Valyutani kiriting:");
let value = prompt("Qiymatni kiriting:")


console.log(convertion(valute, value));

//2-vazifa
function generator() {
     return Math.floor(Math.random()*Math.pow(10,6))
}

console.log(generator());