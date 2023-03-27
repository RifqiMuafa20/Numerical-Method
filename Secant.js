function signToUnsign (value){
    if(value > 0){
        return value;
    } else {
        return value*-1;
    }
}

function fx(x){
    return (Math.E**-x)-x;
}

let xm = 0;
let xo = 1;
let tabel = [];

for(i = 1; i <= 5; i++){
    let xi = xo-((fx(xo)*(xm-xo)))/(fx(xm)-fx(xo));
    let ea = ((xi - xo)/xi)*100;

    tabel.push({i : i, 'fx(x-1)' : fx(xm).toFixed(5), 'fx(x0)' : fx(xo).toFixed(5), xi : (xi.toFixed(5)), 'ea (%)' : signToUnsign(ea).toFixed(1)});
    xm = xo;
    xo = xi;
}
console.table(tabel);