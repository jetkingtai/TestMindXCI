let arr = [];
let a = Number(prompt('nhập số a'))
let b = Number(prompt('nhập số b'))
for(let i = a + 1; i < b; i++) {
    arr.push(i)
}


function checksonguyento(so) {
    soNguyenTocheck = true;
    if(so < 2) {
        soNguyenTocheck = false
    }
    for( let i = 2; i < so; i++) {
        // console.log(i);
        if(so % i == 0) {
            soNguyenTocheck = false
            break;
        }
    }
    return soNguyenTocheck;
}

for(let k = 0; k< arr.length; k++) {
    if(checksonguyento(arr[k])) {
        document.write(arr[k])
        document.write(`<br>`)
    }
}
