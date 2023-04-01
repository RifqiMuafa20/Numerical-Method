function nama(j) {
    let tabel = [];

    for(i=1; i<10; i++){
        tabel.push({i : i, j : j});
        j++
    }

    return tabel;
}

let hasil = nama(5);
console.table(hasil);