/*
    * Contributor : Rillera, Ralph Lawrence DV
    * Date : March 21, 2021 
*/


// NOTE : Guys, paki add niyo name niyo dito pag gusto nyo i-edit itong code..

// Reference To Input's Value
var inputValue = $("#inputN").val();

// List Of Title Headers
const converterTypes =
[
    "Base Converter",
    "Length Converter",
    "Temp. Converter",
    "Volume Converter",
    "Time Converter"
];

var currentMode = "";

// DETECT DROPDOWN SELECTION CHANGE
$('#convertOptions').on("change", function() 
{
    //alert("drop down changed");
    
    // Get The Selected Droplist Value
    var selected = $('#convertOptions')[0].options[ConvOptions.selectedIndex].text;
    
    // Remove The Degrees Symbol U+00B0 OR &deg;
    selected = selected.replaceAll("\u00b0", "");
    
    // The Title Header
    var header = $('#TitleH1');

    // Change The Header Text According To Selected Converter
    if (Contains(selected, "Bin")) 
    { 
        header.text(converterTypes[0]); 
    }
    //
    //  FOR LENGTH CONVERTER
    //
    else if (Contains(selected, "MM") || Contains(selected, "Cm") || Contains(selected, "Km") 
            || Contains(selected, "Ft") || Contains(selected, "In"))
    {
        header.text(converterTypes[1]);
    }
    //
    // FOR TEMPERATURE CONVERTER
    //
    else if (Contains(selected, "C To ") || Contains(selected, "F To ") || Contains(selected, "K To ")) 
    {
         header.text(converterTypes[2]); 
    }
    //
    // FOR VOLUME
    //
    else if (Contains(selected, "mL") || Contains(selected, "Fl")) 
    { 
        header.text(converterTypes[3]); 
    }
    //
    // FOR TIME
    //
    else if (Contains(selected, "Sec") || Contains(selected, "Hr") || Contains(selected, "Min")) 
    { 
        header.text(converterTypes[4]); 
    }
    else
    {
        header.text("Data Converter");
    }
});


// LIMIT CHARACTER INPUT (Depende Parin Sa Conversion Method, Pag StringToBinary, Pwede Lahat Ng Letters Numbers etc..)
$("#inputN").bind("keyup paste", function()
{
    // Get The Conversion Method
    var selected = ConvOptions.options[ConvOptions.selectedIndex].text;

    // Remove WhiteSpaces And Degrees Symbol
    selected = selected.replace(/\s/g, "");
    selected = selected.replaceAll("\u00b0", "").replaceAll("\xB0", "");
    
    // Reference To Input's Value
    var value = $("#inputN").val();

    // Validate Input
    switch (selected)
    {
        // Pag Binary Bawal Ang Letters And Symbols. Dapat '0' At '1' Lang
        case "BinToHex": 
        case "BinToDec":
        case "BinToOct":
        case "BinToStr":
            value = value.replace(/[^0-1]/g, '');
            break;
        // Pag HEX Hanggang A-F At 0-9 Lang
        case "HexToBin":
            value = value.replace(/[^0-9a-fA-F]/g, '');
            break;
        // Pag OCTAL , 0-7 Lang
        case "OctToBin":
            value = value.replace(/[^0-7]/g, '');
            break;
        // Pag DECIMAL , 0-9 Lang
        case "DecToBin":
            value = value.replace(/[^0-9]/g, '');
            break;
        // TEMP, TIME and LENGTH 0-9 , Dot, Dash
        case "MMToCm": case "CmToMM":
        case "InToCm": case "CmToIn":
        case "FtToM":  case "MToFt":
        case "KmToM":  case "MToKm":
        case "CToF":   case "CToK":
        case "FToC":   case "FToK":
        case "KToC":   case "KToF":  
        case "SecToMin": case "SecToHr":
        case "MinToSec": case "MinToHr":
        case "HrToSec": case "HrToMin":
            value = value.replace(/[^0-9.-]/g, '');
            break;
        // VOLUME CANT BE NEGATIVE
        case "mLToL": case "mLToFl":
        case "LTomL": case "LToFl":
        case "FlToML":  case "FlToL":
            value = value.replace(/[^0-9.]/g, '');
            break;    

    }

    $("#inputN").val(value);
});
