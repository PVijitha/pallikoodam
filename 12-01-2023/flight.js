let time = document.getElementById("tm");
let fare = document.getElementById("rate");
let para = document.getElementById("para");
function flightHandle(){
    let hour = tm.value.split(":")[0];
    let rate = fare.value;
    let temp ;
    if(hour >= 6 & hour < 9){
        temp = rate * 10 / 100;
        rate = parseInt(rate) + temp;
        para.innerText = rate;
        console.log(rate);
    } 
    else if(hour >= 9 & hour < 17){
        temp = rate * 20 / 100;
        rate = parseInt(rate) + temp;
        para.innerText = rate;
        console.log(rate);
    }
    else if(hour >= 17 & hour < 23){
        temp = rate * 7 / 100;
        rate = parseInt(rate) + temp;
        para.innerText = rate;
        console.log(rate);
    }
    else{
        temp = rate * 5 / 100;
        para.innerText = "Your flight rate " + rate;
        console.log(rate);
    }
}