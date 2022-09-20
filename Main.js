
function tesztAlert(){
    window.alert('Ez egy teszt');
}

function BMIszamitas(){
    let magassag = parseFloat(document.getElementById('magassag').value);
    let suly = parseFloat(document.getElementById('suly').value);

    document.getElementById('eredmeny').innerHTML = "Az ön BMI értéke: " + (suly / (magassag / 100) ** 2).toFixed(1);
}

document.getElementById('szamitas').addEventListener('click', BMIszamitas);

function init(){
    console.log('Loaded');
    
}


