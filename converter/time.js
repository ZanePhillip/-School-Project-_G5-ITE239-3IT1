/*
    * Contributor : Rillera, Ralph Lawrence DV
    * Date : March 21, 2021 
*/


// NOTE : Guys, paki add niyo name niyo dito pag gusto nyo i-edit itong code..

function SecToMin(sec)
{
    var n = parseFloat(sec);
    n /= 60.0;
    $('#output').text(n.toFixed(5));
}

function SecToHr(sec)
{
    var n = parseFloat(sec);
    n /= 3600.0;
    $('#output').text(n.toFixed(5));
}

function MinToSec(min)
{
    var n = parseFloat(min);
    n *= 60.0;
    $('#output').text(n.toFixed(5));
}

function MinToHr(min)
{
    var n = parseFloat(min);
    n /= 60.0;
    $('#output').text(n.toFixed(5));
}

function HrToSec(hr)
{
    var n = parseFloat(hr);
    n *= 3600.0;
    $('#output').text(n.toFixed(5));
}

function HrToMin(hr)
{
    var n = parseFloat(hr);
    n *= 60.0;
    $('#output').text(n.toFixed(5));
}