/*console.log('program menghitung kecepatan jatuh');
function kecepatan(v){
    return (9.8 + (77 / 102) * v);
}

let vt = 0;

for(i=1; i<=40; i++){
    console.log(`untuk t = ${i}, v(𝑡+∆𝑡) = ${kecepatan(vt)} m/s`);
    vt = kecepatan(vt); 
}*/

console.log('program menghitung kecepatan jatuh');

function kecepatan(v){
    return (v + (9.8 - (12.5/51)*v));
}

let vt = 0;

for(i=1; i<=40; i++){
    console.log(`untuk t = ${i}, \tv(𝑡+∆𝑡) = (9.8 + (77/102) x ${vt.toFixed(3)}) \n\t\tv(𝑡+∆𝑡) = ${kecepatan(vt).toFixed(3)} m/s`);
    vt = kecepatan(vt); 
}