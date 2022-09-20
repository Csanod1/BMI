
function tesztAlert(){
    window.alert('Ez egy teszt');
}

function BMIszamitas(){
    let magassag = parseFloat(document.getElementById('magassag').value);
    let suly = parseFloat(document.getElementById('suly').value);
    let bmi = (suly / (magassag / 100) ** 2).toFixed(1);

    document.getElementById('eredmeny').innerHTML += bmi;

    if(bmi <= 18,5){

    }else if(18,5 < bmi && bmi < 25){

    }else if(25 <= bmi && bmi < 30){

    }else if(25 <= bmi && bmi < 30){

    }else if(25 <= bmi && bmi < 30){

    }else{

    }
    
}

document.getElementById('szamitas').addEventListener('click', BMIszamitas);

function init(){
    console.log('Loaded');
    
}


