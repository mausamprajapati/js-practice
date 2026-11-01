let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let reset = document.querySelector('#reset');
let counter = document.querySelector('h2');
let count = 0;

function updateDisplay(){
    counter.textContent = count;

    if(count > 0){
        document.body.style.backgroundColor = 'green';
    }else if(count < 0){
        document.body.style.backgroundColor = 'red';
    }else{
        document.body.style.backgroundColor = 'white';
    }
}

plus.addEventListener('click',function(){
    count++;
    updateDisplay();
})
minus.addEventListener('click',function(){
    count--;
    updateDisplay();
})
reset.addEventListener('click',function(){
    count = 0;
    updateDisplay();
})