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
        console.log('-------------------');
        console.log('BISECTION ALGORITHM');
        console.log('-------------------\n');

        let nowxl = prompt("Masukkan initial guess xl: ");
        let nowxu = prompt("Masukkan initial guess xu: ");

        let xrpre = 0;
        let ea = 100;
        let tabel = [];

        for(i = 1; i<=20; i++){
            if(signToUnsign(ea) < 2){
                break;
            }
        
            xu = parseFloat(nowxu);
            xl = parseFloat(nowxl);
            fxl = (5-(5*(xl))-(Math.E**(xl/2)));
            fxu = (5-(5*(xu))-(Math.E**(xu/2)));
            
            if(fxl*fxu > 0){
                console.log('\nTidak memenuhi syarat (fxl*fxu > 0)');
                break;
            }

            xr = (xl + xu)/2
            fxr = (5-(5*(xr))-(Math.E**(xr/2)));
            ea = ((xr-xrpre)/xr)*100;

            tabel.push({iteration : i, xl : xl.toFixed(3), fxl : fxl.toFixed(3), xu: xu.toFixed(3), fxu: fxu.toFixed(3), xr: xr.toFixed(3), fxr: fxr.toFixed(3), ea: signToUnsign(ea).toFixed(3)});
        
            if((fxl > 0 && fxr > 0) || (fxl < 0 && fxr < 0)){
                nowxu = xu;
                nowxl = xr;
                xrpre = xr;
            }else if ((fxl > 0 && fxr < 0) || (fxl < 0 && fxr > 0)){
                nowxu = xr;
                nowxl = xl;
                xrpre = xr;
            }
        }
        console.table(tabel);
        console.log('\n-----------------------------------------------------------------------------------------------------------\n');
        delete tabel;

    }else if(parseInt(pilihan)===2){
        console.log('------------------------');
        console.log('NEWTON RAPHSON ALGORITHM');
        console.log('------------------------\n');

        let initialGuess = prompt("Masukkan initial guess xi: ");
        let xo = parseFloat(initialGuess);
        let ea = 100;
        let tabel = [];

        for(i = 1; i <= 20; i++){
            if(signToUnsign(ea) < 2){
                break;
            }

            fx = (5-(5*(xo))-(Math.E**(xo/2)));
            fxa = ((-5) - ((Math.E**(xo/2))/2));

            xi = xo-(fx/fxa); 
            ea = ((xi - xo)/xi)*100;

            tabel.push({i : i, xo : xo.toFixed(3) , 'f(xo)' : fx.toFixed(3) , 'f`(xo)' : fxa.toFixed(3) , xi : (xi.toFixed(3)), 'ea (%)' : signToUnsign(ea).toFixed(2)});
            xo = xi;
        }
        console.table(tabel);
        console.log('\n-----------------------------------------------------------------------------------------------------------\n');
        delete tabel;

    }else if(parseInt(pilihan)===3){
        console.log('----------------');
        console.log('SECANT ALGORITHM');
        console.log('----------------\n');

        let value1 = prompt("Masukkan initial guess x-1: ");
        let value2 = prompt("Masukkan initial guess xo: ");

        let x_1 = parseFloat(value1);
        let xo = parseFloat(value2);
        let ea = 100;
        let tabel = [];

        for(i = 1; i < 20; i++){
            if(signToUnsign(ea) < 2){
                break;
            }

            fxm = (5-(5*(x_1))-(Math.E**(x_1/2)));
            fxo = (5-(5*(xo))-(Math.E**(xo/2)));
            xi = xo-((fxo*(x_1-xo)))/(fxm-fxo);
            ea = ((xi - xo)/xi)*100;

            tabel.push({i : i, 'x-1' : x_1.toFixed(3), 'f(x-1)' : fxm.toFixed(3) , 'xo' : xo.toFixed(3) , 'f(x0)' : fxo.toFixed(3), 'xi' : (xi.toFixed(3)), 'ea (%)' : signToUnsign(ea).toFixed(2)});
            x_1 = xo;
            xo = xi;
        }

        console.table(tabel);
        console.log('\n-----------------------------------------------------------------------------------------------------------\n');
        delete tabel;

    }else if(parseInt(pilihan)===4){
        kondisi = false;

    }else {
        console.log('Pilihan tidak tersedia!\n');
    }

    j++
}
