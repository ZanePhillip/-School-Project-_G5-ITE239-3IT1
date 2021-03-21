/*
    * Contributor : Rillera, Ralph Lawrence DV
    * Date : March 21, 2021 
*/

// NOTE : Guys, paki add niyo name niyo dito pag gusto nyo i-edit itong code..


function CopyToClipBoard()
{
    var toCopy = $("#output");
    toCopy.select();
    document.execCommand("copy");

    var tooltip = document.getElementById("toolTipMain");
    tooltip.innerHTML = "Output Copied To Clipboard";
}

function ResetTooltip()
{
    var tooltip = document.getElementById("toolTipMain");
    tooltip.innerHTML = "Copy to clipboard";
}
