let box1 = document.querySelector('#innerbox1');
let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click',function(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    innerbox1.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
})

let box2 = document.querySelector('#innerbox2');
let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click',function(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    innerbox2.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
})