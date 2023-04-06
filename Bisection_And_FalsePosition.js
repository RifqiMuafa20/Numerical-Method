const prompt = require('prompt-sync')(); // we have to install module prompt-sync from npm (npm install prompt-sync)

function signToUnsign (value){
    if(value > 0){
        return value;
    } else {
        return value*-1;
    }
}

function fm (m){
    let hasil = (0.392 * m *(1 - Math.E**-(375 / m))-55);
    return hasil;
}

function rumusXrBisection (xl, xu){
    return (xl + xu)/2;
}

function rumusXrFalsePosition (xl, xu, fxl, fxu){
    return xu - ((fxu*(xl-xu))/(fxl-fxu));
}

function rumusEa (xrnow, xrpre) {
    return ((xrnow-xrpre)/xrnow)*100;
}

console.log('\nPROGRAM MENCARI MASSA');
console.log('======================\n');

console.log('1.BISECTION ALGORITHM \n2.FALSE POSITION ALGORITHM \n-------------------------------');
let pilihan = prompt("Silahkan memilih Algorithm: ");
console.log('\n');

let nowxl = prompt("Masukkan Nilai xl pertama: ");
let nowxu = prompt("Masukkan nilai xu pertama: ");

// console.log('----------------------------------------------------------------------------------------------------------------------------------------');
// console.log('|\titeration\t|\txl\t|\tf(xl)\t|\txu\t|\tf(xu)\t|\txr\t|\tf(xr)\t|\tea\t|');
// console.log('----------------------------------------------------------------------------------------------------------------------------------------');

let xrpre = null;
let ea = 100;
let tabelnya = [];

for(i = 1; i<=20; i++){
    if(signToUnsign(ea) < 0.1){
        break;
    }

    xu = parseFloat(nowxu);
    xl = parseFloat(nowxl);
    fxl = fm(xl);
    fxu = fm(xu); 

    if(fxl*fxu > 0){
        break;
    }
    
    if(parseInt(pilihan) === 1){
        xr = rumusXrBisection(xl, xu);
    } else if(parseInt(pilihan) === 2){
        xr = rumusXrFalsePosition(xl, xu, fxl, fxu);
    }

    fxr = fm(xr);
    ea = rumusEa(xr, xrpre);

    // console.log(`|\t${i}\t\t|\t${xl.toFixed(3)}\t|\t${fxl.toFixed(3)}\t|\t${xu.toFixed(3)}\t|\t${fxu.toFixed(3)}\t|\t${xr.toFixed(3)}\t|\t${fxr.toFixed(3)}\t|${signToUnsign(ea).toFixed(3)} %\t|`);
    // console.log('----------------------------------------------------------------------------------------------------------------------------------------');

    tabelnya.push({iteration : i, xl : xl.toFixed(3), fxl : fxl.toFixed(3), xu: xu.toFixed(3), fxu: fxu.toFixed(3), xr: xr.toFixed(3), fxr: fxr.toFixed(3), ea: signToUnsign(ea).toFixed(3)});

    if(fxr < 0){
        nowxu = xu;
        nowxl = xr;
        xrpre = xr;
    }else {
        nowxu = xr;
        nowxl = xl;
        xrpre = xr;
    }
}

if(fxl*fxu > 0){
    console.log('xu dan xl yang dimasukkan tidak memenuhi syarat! (fxl x fxu < 0)\n\n');
} else {
    console.table(tabelnya);
    console.log(`\n\nJadi massa penerjun dengan kecepatan 55 m/s pada saat 15 detik terjun adalah ${xr.toFixed(3)} kg, dengan approximate error yaitu ${signToUnsign(ea).toFixed(3)} %\n\n`);
}
