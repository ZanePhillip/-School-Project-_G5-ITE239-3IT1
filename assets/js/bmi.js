const age = document.getElementById("age");
const gender = document.getElementsByName("gender");
const weightLBS = document.getElementById("weightLBS");
const weightKG = document.getElementById("weightKG");
const weightGM = document.getElementById("weightGM");
const weightOZ = document.getElementById("weightOZ");
const heightCM = document.getElementById("heightCM");
const heightINCH = document.getElementById("heightINCH");
const heightM = document.getElementById("heightM");
const heightFT = document.getElementById("heightFT");
const resultBMI = document.getElementById("resultBMI");
const resultMCI = document.getElementById("resultMCI");
const resultMCB = document.getElementById("resultMCB");
const resultAdvise = document.getElementById("resultAdvise");

function weightOnPress(weight){
    weightLBS.addEventListener('keyup', function(){
        weightKG.value = Math.round((weight/2.205)*400)/400;
        weightGM.value = Math.round((weight*454)*400)/400;
        weightOZ.value = Math.round((weight*16)*400)/400;
    });
    weightKG.addEventListener('keyup', function(){
        weightLBS.value = Math.round((weight*2.205)*400)/400;
        weightGM.value = Math.round((weight*1000)*400)/400;
        weightOZ.value = Math.round((weight*35.274)*400)/400;
    });
    weightGM.addEventListener('keyup', function(){
        weightLBS.value = Math.round((weight/454)*400)/400;
        weightKG.value = Math.round((weight/1000)*400)/400;
        weightOZ.value = Math.round((weight/28.35)*400)/400;
    });
    weightOZ.addEventListener('keyup', function(){
        weightLBS.value = Math.round((weight/16)*400)/400;
        weightKG.value = Math.round((weight/35.274)*400)/400;
        weightGM.value = Math.round((weight*28.35)*400)/400;
    });
}

function heightOnPress(height){
    heightCM.addEventListener('keyup', function(){
        heightINCH.value = Math.round((height/2.54)*400)/400;
        heightM.value = Math.round((height/100)*400)/400;
        heightFT.value = Math.round((height/30.48)*400)/400; 
    });
    heightINCH.addEventListener('keyup', function(){
        heightCM.value = Math.round((height*2.)*400)/400;
        heightM.value = Math.round((height/39.37)*400)/400;
        heightFT.value = Math.round((height/12)*400)/400;
    });
    heightM.addEventListener('keyup', function(){
        heightCM.value = Math.round((height*100)*400)/400;
        heightINCH.value = Math.round((height*39.37)*400)/400;
        heightFT.value = Math.round((height*3.281)*400)/400;
    });
    heightFT.addEventListener('keyup', function(){
        heightCM.value = Math.round((height*30.48)*400)/400;
        heightINCH.value = Math.round((height*12)*400)/400;
        heightM.value = Math.round((height/3.281)*400)/400;
    });
}

function calculateResults(){
    resultBMI.innerHTML = calculateBMI(weightLBS.value, heightINCH.value);
    resultMCI.innerHTML = calculateCalorieIntake();
    resultMCB.innerHTML = calculateCalorieBurn(weightKG.value, heightCM.value, getGender(), age.value);
}

function calculateBMI(weightLBS, heightINCH){
    return Math.round(703*weightLBS/(Math.pow(heightINCH, 2))*100)/100;
}

function calculateCalorieBurn(weightKG, heightCM, gender, age){
    if(gender == "male"){
        return Math.round(((10 * weightKG) + (6.25 * heightCM) - (5 * age)+5)*100)/100;
    }
    else{
        return Math.round(((10 * weightKG) + (6.25 * heightCM) - (5 * age)-161)*100)/100;
    }
}

function calculateCalorieIntake(){
    return Math.round((calculateCalorieBurn(weightKG.value, heightCM.value, getGender(), age.value)*1.375)*100)/100;
}

function getGender(){
    for (var i = 0, length = gender.length; i < length; i++) {
    if (gender[i].checked) {
        // do whatever you want with the checked radio
        return gender[i].value

        // only one radio can be logically checked, don't check the rest
        break;
    }
    }
}

function resetInputs(){
    age.value =0; 
    weightLBS.value =0;
    weightKG.value =0;
    weightGM.value =0;
    weightOZ.value =0; 
    heightCM.value =0; 
    heightINCH.value =0; 
    heightM.value =0; 
    heightFT.value =0; 
    resultBMI.value = ' '; 
    resultMCI.value = ' ';
    resultMCB.value = ' '; 
    resultAdvise.value = ' '; 

}