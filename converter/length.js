/*
    * Contributor : Rillera, Ralph Lawrence DV
    * Date : March 21, 2021 
*/


// NOTE : Guys, paki add niyo name niyo dito pag gusto nyo i-edit itong code..


function MMToCm(mm)
{
    var n = parseFloat(mm);
    n /= 10.0;
    $('#output').text(n.toFixed(4));
}

function CmToMM(cm)
{
    var n = parseFloat(cm);
    n *= 10.0;
    $('#output').text(n.toFixed(4));
}

function InToCm(inc)
{
    var n = parseFloat(inc);
    n *= 2.54;
    $('#output').text(n.toFixed(4));
}

function CmToIn(cm)
{
    var n = parseFloat(cm);
    n /= 2.54;
    $('#output').text(n.toFixed(4));
}

function FtToM(ft)
{
    var n = parseFloat(ft);
    n /= 3.281;
    $('#output').text(n.toFixed(4));
}

function MToFt(m)
{
    var n = parseFloat(m);
    n *= 3.281;
    $('#output').text(n.toFixed(4));
}

function KmToM(km)
{
    var n = parseFloat(km);
    n *= 1000.0;
    $('#output').text(n.toFixed(4));
}

function MToKm(m)
{
    var n = parseFloat(m);
    n /= 1000.0;
    $('#output').text(n.toFixed(4));
}