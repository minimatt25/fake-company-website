let basketNum = 0;
let basketVal = 0;

if(localStorage.getItem("money")!=""){
    basketVal = parseInt(localStorage.getItem("money"));
}

if(localStorage.getItem("amount")!=""){
    basketNum = parseInt(localStorage.getItem("amount"));
}

console.log(basketVal);
console.log(basketNum);

//for basket in corners
document.getElementById("cost").innerHTML = "£" + (Math.round(basketVal * 100) / 100).toFixed(2);

//for main basket page
document.getElementById("total").innerHTML = "Price: £" + (Math.round(basketVal * 100) / 100).toFixed(2);
document.getElementById("items").innerHTML = "Items: " + basketNum;

function addToB(clickedID){

    //price of items overall

    //comics
    if(clickedID == "Invincible c1" || clickedID == "Invincible c2" || clickedID == "Invincible c3"){
        basketVal+=39.99;
    } else if(clickedID == "Watchmen"){
        basketVal+=25;
    } else if(clickedID == "Secret invasion" || clickedID == "Civil war" || clickedID == "long halloween" || clickedID == "placeholder"){
        basketVal+=20;
    } else if(clickedID == "Umbrella 1" || clickedID == "Umbrella 2" || clickedID == "Umbrella 3" ){
        basketVal+=15;
    } else if(clickedID == "year one"){
        basketVal+=10;
    } 

    console.log(basketVal);
    localStorage.setItem("money", basketVal);
    document.getElementById("cost").innerHTML = "£" + (Math.round(basketVal * 100) / 100).toFixed(2);

    //items in the basket
    basketNum+=1;
    console.log(basketNum);
    localStorage.setItem("amount", basketNum);
    if(basketNum!=1){
        document.getElementById("items").innerHTML = basketNum;
    } else{
        document.getElementById("items").innerHTML = basketNum;
    }
}

function resetBasket(){
    basketVal = 0;
    basketNum = 0;
    console.log(basketVal);
    localStorage.setItem("money", basketVal);
    console.log(basketNum);
    localStorage.setItem("amount", basketNum);
    document.getElementById("cost").innerHTML = "£" + (Math.round(basketVal * 100) / 100).toFixed(2);
}