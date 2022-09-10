document.getElementById('reset-btn').addEventListener('click',function(){
    const counter = document.getElementById('counter');
    counter.innerText = 0; 
    counter.style.color = 'black';
})
document.getElementById('increase-btn').addEventListener('click',function(){
    const counter = document.getElementById('counter');
    counter.innerText = parseInt(counter.innerText) + 1;
    if ((parseInt(counter.innerText)) > 0 ){
        counter.style.color = 'green';
    }
    else if(parseInt(counter.innerText) == 0){
        counter.style.color = 'black';
    }
    else{
        counter.style.color = 'red';
    }

})
document.getElementById('decrease-btn').addEventListener('click',function(){
    const counter = document.getElementById('counter');
    counter.innerText = parseInt(counter.innerText) - 1;
    if ((parseInt(counter.innerText)) > 0 ){
        counter.style.color = 'green';
    }
    else if(parseInt(counter.innerText) == 0){
        counter.style.color = 'black';
    }
    else{
        counter.style.color = 'red';
    }
})
