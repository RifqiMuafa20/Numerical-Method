const prompt = require('prompt-sync')(); // we have to install module prompt-sync from npm (npm install prompt-sync)

function signToUnsign (value){
    if(value > 0){
        return value;
    } else {
        return value*-1;
    }
}

function bisection (value1, value2){
    let xrpre = null;
    let ea = 100;
    let tabel = [];

    for(i=1; i<=50; i++){
        if(signToUnsign(ea) < 2){
            break;
        }

        xu = parseFloat(value2);
        xl = parseFloat(value1);
        fxl = (5-(5*(value1))-(Math.E**(0.5*value1)));
        fxu = (5-(5*(value2))-(Math.E**(0.5*value2)));

        if(fxl*fxu > 0){
            break;
        }

        xr = (value1 + value2)/2;
        fxr = (5-(5*(xr))-(Math.E**(0.5*xr)));
        ea = ((xr-xrpre)/xr)*100;

        tabel.push({iteration : i, xl : xl.toFixed(3), fxl : fxl.toFixed(3), xu: xu.toFixed(3), fxu: fxu.toFixed(3), xr: xr.toFixed(3), fxr: fxr.toFixed(3), 'ea %': signToUnsign(ea).toFixed(3)});

        if(fxr < 0){
            value2 = xu;
            value1 = xr;
            xrpre = xr;
        }else {
            value2 = xr;
            value1 = xl;
            xrpre = xr;
        }
    }
    return tabel;
}

function newtonRaphson (xi){

}

function secant (xii, xi){

}

let kondisi = true;
let i = 1;

while(kondisi){
    console.log('\nOPEN METHOD PROGRAM');
    console.log('===================\n');
    console.log('1.BISECTION ALGORITHM \n2.NEWTON RAPHSON ALGORITHM \n3.SECANT ALGORITHM \n4.EXIT \n-------------------------------');

    let pilihan = prompt("Silahkan memilih Algorithm: ");
    console.log('\n');

    if(parseInt(pilihan)===1){
        console.log('-------------------')
        console.log('BISECTION ALGORITHM')
        console.log('-------------------\n')

        let xl = prompt("Masukkan initial guess xl: ");
        let xu = prompt("Masukkan initial guess xu: ");

        let hasil = bisection(parseInt(xl), parseInt(xu));
        console.table(hasil);

    }else if(parseInt(pilihan)===2){

    }else if(parseInt(pilihan)===3){

    }else {
        break;
    }

    console.log('\n-----------------------------------------------------------------------------------------------------------\n');
    i++
}