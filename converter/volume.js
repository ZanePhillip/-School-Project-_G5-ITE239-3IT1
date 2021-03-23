/*
    * Contributor : Rillera, Ralph Lawrence DV
    * Date : March 21, 2021 
*/


// NOTE : Guys, paki add niyo name niyo dito pag gusto nyo i-edit itong code..


function mLToL(ml)
{
    var n = parseFloat(ml);
    n /= 1000.0;
    $('#output').text(n.toFixed(5));
}

function mLToFl(ml)
{
    var n = parseFloat(ml);
    n *= 28.413;
    $('#output').text(n.toFixed(5));
}

function LTomL(ml)
{
    var n = parseFloat(ml);
    n *= 1000.0;
    $('#output').text(n.toFixed(5));
}

function LToFl(l)
{
    var n = parseFloat(l);
    n *= 35.195;
    $('#output').text(n.toFixed(5));
}

function FlTomL(fl)
{
    var n = parseFloat(fl);
    n *= 28.413;
    $('#output').text(n.toFixed(5));
}

function FlToL(fl)
{
    var n = parseFloat(fl);
    n /= 35.195;
    $('#output').text(n.toFixed(5));
}