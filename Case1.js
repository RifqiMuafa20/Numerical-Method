const prompt = require('prompt-sync')(); // we have to install module prompt-sync from npm (npm install prompt-sync)

let tabel = [];

function signToUnsign (value){
    if(value > 0){
        return value;
    } else {
        return value*-1;
    }
}

function bisectionMethod (nowxl, nowxu){
    let xrpre = 0;
    let ea = 100;
    let v = 1;
    let bis = true;

    while(bis){
        if(signToUnsign(ea) < 2){
            bis = false;
        }
    
        xu = parseFloat(nowxu);
        xl = parseFloat(nowxl);
        fxl = (0.392 * xl *(1 - Math.E**-(375 / xl))-55);
        fxu = (0.392 * xu *(1 - Math.E**-(375 / xu))-55);
        
        if(fxl*fxu > 0){
            console.log('\nTidak memenuhi syarat (fxl*fxu > 0)');
            bis = false;
        }

        xr = (xl + xu)/2
        fxr = (0.392 * xr *(1 - Math.E**-(375 / xr))-55);
        ea = ((xr-xrpre)/xr)*100;

        tabel.push({iteration : v, xl : xl.toFixed(3), fxl : fxl.toFixed(3), xu: xu.toFixed(3), fxu: fxu.toFixed(3), xr: xr.toFixed(3), fxr: fxr.toFixed(3), 'ea (%)': signToUnsign(ea).toFixed(3)});
    
        if((fxl > 0 && fxr > 0) || (fxl < 0 && fxr < 0)){
            nowxu = xu;
            nowxl = xr;
            xrpre = xr;
        }else if ((fxl > 0 && fxr < 0) || (fxl < 0 && fxr > 0)){
            nowxu = xr;
            nowxl = xl;
            xrpre = xr;
        }
        v++
    }
    return tabel;
}

function newtonRaphsonMethod (xo){
    let ea = 100;
    let w = 1;
    let rap = true;

    while(rap){
        if(signToUnsign(ea) < 2){
            rap = false;
        }

        fx = (0.392 * xo *(1 - Math.E**-(375 / xo))-55);
        fxa = ((0.392)-((49)/(125*Math.E**(375/xo)))-((147)/(xo*Math.E**(375/xo))));

        xi = xo-(fx/fxa); 
        ea = ((xi - xo)/xi)*100;

        tabel.push({i : w, xo : xo.toFixed(3) , 'f(xo)' : fx.toFixed(3) , 'f`(xo)' : fxa.toFixed(3) , xi : (xi.toFixed(3)), 'ea (%)' : signToUnsign(ea).toFixed(2)});
        xo = xi;

        w++
    }
    return tabel;
}

function secantMethod (x_1, xo){
    let ea = 100;
    let sec = true;
    let x = 1;

    while(sec){
        if(signToUnsign(ea) < 2){
            sec = false;
        }

        fxm = (0.392 * x_1 *(1 - Math.E**-(375 / x_1))-55);
        fxo = (0.392 * xo *(1 - Math.E**-(375 / xo))-55);
        xi = xo-((fxo*(x_1-xo)))/(fxm-fxo);
        ea = ((xi - xo)/xi)*100;

        tabel.push({i : x, 'x-1' : x_1.toFixed(3), 'f(x-1)' : fxm.toFixed(3) , 'xo' : xo.toFixed(3) , 'f(x0)' : fxo.toFixed(3), 'xi' : (xi.toFixed(3)), 'ea (%)' : signToUnsign(ea).toFixed(2)});
        x_1 = xo;
        xo = xi;

        x++
    }
    return tabel;
}

function falsePositionMethod (nowxl, nowxu){
    let xrpre = 0;
    let ea = 100;
    let y = 1;
    let fal = true;

    while(fal){
        if(signToUnsign(ea) < 2){
            fal = false;
        }
    
        xu = parseFloat(nowxu);
        xl = parseFloat(nowxl);
        fxl = (0.392 * xl *(1 - Math.E**-(375 / xl))-55);
        fxu = (0.392 * xu *(1 - Math.E**-(375 / xu))-55);
        
        if(fxl*fxu > 0){
            console.log('\nTidak memenuhi syarat (fxl*fxu > 0)');
            fal = false;
        }

        xr = (xu - ((fxu*(xl-xu))/(fxl-fxu)));
        fxr = (0.392 * xr *(1 - Math.E**-(375 / xr))-55);
        ea = ((xr-xrpre)/xr)*100;

        tabel.push({i : y, xl : xl.toFixed(3), fxl : fxl.toFixed(3), xu: xu.toFixed(3), fxu: fxu.toFixed(3), xr: xr.toFixed(3), fxr: fxr.toFixed(3), 'ea (%)': signToUnsign(ea).toFixed(3)});
    
        if((fxl > 0 && fxr > 0) || (fxl < 0 && fxr < 0)){
            nowxu = xu;
            nowxl = xr;
            xrpre = xr;
        }else if ((fxl > 0 && fxr < 0) || (fxl < 0 && fxr > 0)){
            nowxu = xr;
            nowxl = xl;
            xrpre = xr;
        }
        y++
    }

    return tabel;
}

let hasil;
let kondisi = true;
let j = 1;

while(kondisi){
    console.log('\nOPEN METHOD PROGRAM');
    console.log('===================\n');
    console.log('1.BISECTION ALGORITHM \n2.NEWTON RAPHSON ALGORITHM \n3.SECANT ALGORITHM \n4.FALSE POSITION ALGORITHM \n5.EXIT \n-------------------------------');

    let pilihan = prompt("Silahkan memilih Algorithm: ");
    console.log('\n');

    if(parseInt(pilihan)===1){
        console.log('-------------------');
        console.log('BISECTION ALGORITHM');
        console.log('-------------------\n');

        let nowxl = prompt("Masukkan initial guess xl: ");
        let nowxu = prompt("Masukkan initial guess xu: ");

        hasil = bisectionMethod(nowxl, nowxu);

        console.table(hasil);
        console.log('\n-----------------------------------------------------------------------------------------------------------\n');

    }else if(parseInt(pilihan)===2){
        console.log('------------------------');
        console.log('NEWTON RAPHSON ALGORITHM');
        console.log('------------------------\n');

        let initialGuess = prompt("Masukkan initial guess xi: ");
        let xo = parseFloat(initialGuess);
        
        hasil = newtonRaphsonMethod(xo);

        console.table(hasil);
        console.log('\n-----------------------------------------------------------------------------------------------------------\n');

    }else if(parseInt(pilihan)===3){
        console.log('----------------');
        console.log('SECANT ALGORITHM');
        console.log('----------------\n');

        let value1 = prompt("Masukkan initial guess x-1: ");
        let value2 = prompt("Masukkan initial guess xo: ");

        let x_1 = parseFloat(value1);
        let xo = parseFloat(value2);

        hasil = secantMethod(x_1, xo);

        console.table(hasil);
        console.log('\n-----------------------------------------------------------------------------------------------------------\n');

    }else if(parseInt(pilihan)===4){
        console.log('------------------------');
        console.log('FALSE POSITION ALGORITHM');
        console.log('------------------------\n');

        let nowxl = prompt("Masukkan initial guess xl: ");
        let nowxu = prompt("Masukkan initial guess xu: ");

        hasil = falsePositionMethod(nowxl, nowxu);

        console.table(hasil);
        console.log('\n-----------------------------------------------------------------------------------------------------------\n');

    }else if(parseInt(pilihan)===5){
        kondisi = false;

    }else{
        console.log('Pilihan tidak tersedia!\n');
    }

    tabel.splice(0, tabel.length);
    j++
}
