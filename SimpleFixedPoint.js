function signToUnsign (value){
    if(value > 0){
        return value;
    } else {
        return value*-1;
    }
}

let xo = 0;
let tabel = [];

for(i = 1; i <= 10; i++){
    let xi = (Math.E**-xo);
    let ea = ((xi - xo)/xi)*100;

    tabel.push({i : i, xi : (xi.toFixed(5)), 'ea (%)' : signToUnsign(ea).toFixed(1)});
    xo = xi;
}
console.table(tabel);