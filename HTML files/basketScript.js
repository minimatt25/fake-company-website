let basketNum = 0;
let basketVal = 0;

function addToB(clickedID){

    //items in the basket
    basketNum+=1;
    console.log(basketNum);
    if(basketNum!=1){
        document.getElementById("items").innerHTML = basketNum;
    } else{
        document.getElementById("items").innerHTML = basketNum;
    }

    //price of items overall

    //comics
    if(clickedID == "Invincible c1" || clickedID == "Invincible c2" || clickedID == "Invincible c3"){
        basketVal+=39.99;
    } else if(clickedID == "Secret invasion" || clickedID == "Civil war" || clickedID == "long halloween"){
        basketVal+=20;
    } else if(clickedID == "year one"){
        basketVal+=10;
    } else if(clickedID == "Watchmen"){
        basketVal+=25;
    }
    console.log(basketVal);
    document.getElementById("cost").innerHTML = "£" + (Math.round(basketVal * 100) / 100).toFixed(2);
}