const prompt = require('prompt-sync')(); // we have to install module prompt-sync from npm (npm install prompt-sync)

function signToUnsign (value){
    if(value > 0){
        return value;
    } else {
        return value*-1;
    }
}

let kondisi = true;
let j = 1;

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

        let value1 = prompt("Masukkan initial guess xl: ");
        let value2 = prompt("Masukkan initial guess xu: ");

        let xrpre = null;
        let ea = 100;
        let tabel = [];

        for(let i=1; i<=50; i++){
            if(signToUnsign(ea) < 2){
                break;
            }

            xl = value1;
            xu = value2;
            fxl = (5-(5*(xl))-(Math.E**(0.5*xl)));
            fxu = (5-(5*(xu))-(Math.E**(0.5*xu)));

            if(fxl*fxu > 0){
                break;
            }

            xr = ((xl + xu)/2);
            fxr = (5-(5*(xr))-(Math.E**(0.5*xr)));
            ea = ((xr-xrpre)/xr)*100;

            tabel.push({iteration : i, xl : xl, fxl : fxl, xu: xu, fxu: fxu, xr: xr, fxr: fxr, 'ea %': signToUnsign(ea)});

            if(fxr < 0){
                value2 = xu;
                value1 = xr;
                xrpre = xr;
            }else {
                value2 = xr;
                value1 = xl
                xrpre = xr;
            }
        }
        console.table(tabel);
        break;

    }else if(parseInt(pilihan)===2){

    }else if(parseInt(pilihan)===3){

    }else {
        break;
    }

    console.log('\n-----------------------------------------------------------------------------------------------------------\n');
    j++
}