/*
    * Contributor : Rillera, Ralph Lawrence DV
    * Date : March 21, 2021 
*/


// NOTE : Guys, paki add niyo name niyo dito pag gusto nyo i-edit itong code..

function CToF(c)
{
    var n = parseFloat(c);
    n = (n * 9.0/5.0) + 32.0;
    $('#output').text(n.toFixed(4));
}

function CToK(c)
{
    var n = parseFloat(c);
    n = (n + 273.15);
    $('#output').text(n.toFixed(4));
}

function FToC(f)
{
    var n = parseFloat(f);
    n = (n - 32.0) * 5.0/9.0;
    $('#output').text(n.toFixed(4));
}

function FToK(f)
{
    var n = parseFloat(f);
    n = (n - 32.0) * 5.0/9.0 + 273.15;
    $('#output').text(n.toFixed(4));
}

function KToC(k)
{
    var n = parseFloat(k);
    n = (n - 273.15);
    $('#output').text(n.toFixed(4));
}

function KToF(k)
{
    var n = parseFloat(k);
    n = (n - 273.15) * 9.0/5.0 + 32.0;
    $('#output').text(n.toFixed(4));
}