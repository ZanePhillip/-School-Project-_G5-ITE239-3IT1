/*
    * Contributor : Rillera, Ralph Lawrence DV
    * Date : March 21, 2021 
*/


// NOTE : Guys, paki add niyo name niyo dito pag gusto nyo i-edit itong code..


// Ito yung dropdown natin..
var ConvOptions = $('#convertOptions')[0];

//
// THE MAIN CONVERSION FUNCTION (Tatawagin ito mamaya sa onclick ng button..)
//
function Convert()
{    
    // Get The Text Content Of Selected Option -> (Ito yung selected value sa dropdown..)
    var selected = ConvOptions.options[ConvOptions.selectedIndex].text;

    // Get The Input Text Value -> (Ito yung ini-input ni user..)
    var inputN = $('#inputN').val();

    // Before We COnvert, Check Muna Natin Pag May Laman Yung Input
    if (inputN === "")
    {
        $('#output').text("Input Is Empty!");
    }
    else
    {
        // Calling The Function By Its Name (string) 
        // (Tawagin yung function based dun sa selected item sa dropdown..)
        INVOKE(selected, inputN);
    }
}
//
// MAPPING THE FUNCTION NAME (STRING) TO FUNCTION CALLS (OBJECT) 
// (Guys, WARNING.. pag papalitan nyo yung function names, dapat pareho din sa dropdown..)
//
function INVOKE(funcString, funcArgs)
{
    // Find The Object
    var fn = window[funcString];

    // Check If The Object Is A Function.. -> If Yes, Call It
    if (typeof fn === "function")
    {
        fn(funcArgs);
    }
}

// RESET JUST THE OUTPUT AREA
function ClearOutput() 
{
    $("#output").text("");
}

// RESET EVERYTHING
$('#resetBtn').on('click', function()
{
    $("#output").text("");
    $("#output").trigger("keyup");
});

// LIMIT CHARACTER INPUT (Depende Parin Sa Conversion Method, Pag StringToBinary, Pwede Lahat Ng Letters Numbers etc..)
$("#inputN").bind("keyup paste", function()
{
    // Get The Conversion Method
    var selected = ConvOptions.options[ConvOptions.selectedIndex].text;

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
    }

    $("#inputN").val(value);
});



//-----------------------------
//---THE ACTUAL CALCULATIONS---
//-----------------------------

// (Guys, yung $('#').text() blah blah parehas lang sya document.getElementById().value)

/*
    ToString(2)  => Convert To Base2  (Binary)
    ToString(8)  => Convert To Base8  (Octal)
    ToString(16) => Convert To Base16 (Hex)
    PadStart(8, '0') => Lagyan Ng Maraming '0' Yung String
*/

function BinToHex(bin)
{
    var hex = parseInt(bin, 2).toString(16).toUpperCase();
    $('#output').text(hex);
}

function BinToDec(bin)
{
    var dec = parseInt(bin, 2);
    $('#output').text(dec);
}

function BinToOct(bin)
{
    var oct = parseInt(bin, 2).toString(8);
    $('#output').text(oct);
}

function HexToBin(hex)
{
    var bin = (parseInt(hex, 16).toString(2)).padStart(8, '0');
    $('#output').text(bin);
}

function DecToBin(dec)
{
    var bin = parseInt(dec).toString(2);
    $('#output').text(bin);
}

function OctToBin(oct)
{
    var i = 0;         // Loop Start
    var binary = "";   // Output

    // Doon Sa Input, Isa-Isahin Natin iCheck Yung Binary Equivalent Of Each Number.
    // Dahil Ang OCTAL Is 8 Bits Lang (0-7), I-Hardcode Nalang Natin Yung Binary Values
    // Example >>
    // [INPUT]  OCT : 35
    // [OUTPUT] BIN : 011101            How...?
    //
    // 3 = 011
    // 5 = 101
    // So, Pag Pinagsama, 3 (011) 5 (101) => 011101
    //
    while (i < oct.length)
    {
        var num = oct[i];

        switch (num)
        {
            case '0': 
                binary += "000"; 
                break; 
            case '1': 
                binary += "001"; 
                break; 
            case '2': 
                binary += "010"; 
                break; 
            case '3': 
                binary += "011"; 
                break; 
            case '4': 
                binary += "100"; 
                break; 
            case '5': 
                binary += "101"; 
                break; 
            case '6': 
                binary += "110"; 
                break; 
            case '7': 
                binary += "111"; 
                break; 
        }

        i += 1; // Increment Para Hindi Mag-Infinite Loop
    }

    // Yung Final Output
    $('#output').text(binary);
}

//
// Salamat StackOverflow hahaha 
//
// -> https://stackoverflow.com/a/64352014
// -> https://stackoverflow.com/a/14430733
//
function BinToStr(bin)
{
    const binArray = bin.split(' '); 
    const output = [];

    binArray.forEach(item => 
    {
        var i = parseInt(item, 2);
        output.push(String.fromCharCode(i));
    });

    var result = output.join('');
    $('#output').text(result);
}

function StrToBin(text)
{
    var result = "";

    for (var i = 0; i < text.length; i++)
    {
        result += text[i].charCodeAt(0).toString(2) + " ";
    }
    
    result = result.trim();

    $('#output').text(result);
}