
let con = document.getElementById("a");
let str = "";
let set = "";
let m = "";
let but = document.getElementById("b");
let val = 10;
let abc = 2;
let lmn = 0;
let xyz = 1;
const finish = document.getElementById("finish");
const ne = document.getElementById("new");
let w = document.getElementById("n");
// let a = (Math.floor(Math.random()*3))+1;
const o1 = document.getElementById("one");
const t2 = document.getElementById("two");
const t3 = document.getElementById("three");
// const tw = new Audio("forest-lullaby-110624.mp3");
// const thre = new Audio("naruto_sadness-and-sorrow.mp3");
// const on = new Audio("hare-krishna-flute-5200.mp3");
const slider = document.getElementById("myRange");
const output = document.getElementById("tim");
// const pass = document.getElementById("dep");
const ni = document.getElementById("abcd");
const lu = document.getElementById("lmno");
const su = document.getElementById("xyzz");
const sh = document.getElementById("ab");
const an = document.getElementById("lm");
const tt = document.getElementById("xy");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
    val = this.value;
}
sh.innerHTML = ni.value;
ni.oninput = function () {
    sh.innerHTML = this.value;
    abc = this.value;
}
an.innerHTML = lu.value;
lu.oninput = function () {
    an.innerHTML = this.value;
    lmn = this.value;
}
tt.innerHTML = su.value;
su.oninput = function () {
    tt.innerHTML = this.value;
    xyz = this.value;
}
document.getElementById("ion").addEventListener('click', function () {
    document.getElementById("nes").style.display = "none";
    document.getElementById("sen").style.display = "block";
})
// let a = m%100;
// console.log(a)
// let c = Math.floor(m/100);
function sechat() {
    str += con.value;
    con.value = "";
}
but.addEventListener('click', function () {
    but.style.backgroundColor = "green";
})
// o1.addEventListener('click', function () {
//     on.play();
//     thre.pause();
//     thre.currentTime = 0;
//     tw.pause();
//     tw.currentTime = 0;
//     o1.style.border = "3px solid yellow";
//     o1.style.borderRadius = "50%";
//     t2.style.border = "none";
//     t3.style.border = "none";
// })
// t2.addEventListener('click', function () {
//     tw.play();
//     on.pause();
//     on.currentTime = 0;
//     thre.pause();
//     thre.currentTime = 0;
//     t2.style.border = "3px solid yellow";
//     t2.style.borderRadius = "50%";
//     t3.style.border = "none";
//     o1.style.border = "none";
// })
// t3.addEventListener('click', function () {
//     thre.play();
//     on.pause();
//     on.currentTime = 0;
//     tw.pause();
//     tw.currentTime = 0;
//     t3.style.border = "3px solid yellow";
//     t3.style.borderRadius = "50%";
//     t2.style.border = "none";
//     o1.style.border = "none";
// })
function step1(i, j) {
    j = Math.abs(j - 27);
    let m = (i + lmn * lmn) % 26;
    let z = (j + m) % (27 - (Math.floor((j + m) / 27)));
    return z;
}
function step2(i, j) {
    let b = (xyz * i + abc * abc * abc) % 26;
    let c = j + b;
    // c = Math.floor(c/10) + c%10;
    let y = (c) % (27 - (Math.floor(c / 27)));
    console.log(c);
    console.log(y);
    return y;
}
function fi() {
    finish.style.display = "none";
    ne.style.display = "block";
    // document.getElementById("add").style.display = "none";
    const len = str.length;
    let arr = [];
    const brr = str.split("");
    for (i = 0; i < len; i++) {
        arr.push(str.charCodeAt(i) - 64);
    }
    for (i = 0; i < len; i++) {
        if (arr[i] > 0 && arr[i] < 27) {
            arr[i] = step1(i, arr[i]);
            console.log(arr[i]);
            arr[i] = step2(i, arr[i]);
            console.log(arr[i]);
        }
    }
    for (i = 0; i < len; i++) {
        set += String.fromCharCode(arr[i] + 64);
    }
    w.value = set;
}