/*
    * Contributor : Rillera, Ralph Lawrence DV
    * Date : March 21, 2021 
*/


// NOTE : Guys, paki add niyo name niyo dito pag gusto nyo i-edit itong code..


// FUNCTION FOR CHECKING STRING CONTAINS
var Contains = function (strFrom, strWith)
{
	var contains = false;
    
    if (strFrom.indexOf(strWith) !== -1 || strFrom.includes(strWith))
    {
    	contains = true;
    }
    else
    {
    	contains = false;
    }
    
    return contains;
};
