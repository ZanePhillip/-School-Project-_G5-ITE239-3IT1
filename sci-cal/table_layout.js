var display = document.getElementById("display_field");
var isShift = false;
var shift_label = document.getElementById("shift_indicator");
var isAlpha = false;
var alpha_label = document.getElementById("alpha_indicator");

//
// Write something to screen
//
function WriteScreen(obj)
{
    display.style.textAlign = 'left';
    display.value += obj;
    display.focus();
}

//
// Clear the screen
//
function ClearScreen()
{
    isShift = false;
    isAlpha = false;

    CheckShift();
    CheckAlpha();

    display.style.textAlign = 'left';
    display.value = "";
    display.focus();
}

// Convert Operators Into Math Functions
//
// Evaluate the math expression and show results
//
function EvalExpr()
{
    display.style.textAlign = 'right';

    var raw_expression = display.value;

    raw_expression = raw_expression.replaceAll('\u23b7', "Math.sqrt")   // RADICAL => Sqrt
                                   .replaceAll("rnd", "Math.round")     // RND => Round
                                   .replaceAll("exp", "Math.exp")       // EXP => Exponential
                                   .replaceAll("abs", "Math.abs")       // ABS => Absolute
                                   .replaceAll("sin", "Math.sin")       // SIN => Sine
                                   .replaceAll("cos", "Math.cos")       // COS => CoSine
                                   .replaceAll("tan", "Math.tan")       // TAN => Tangent
                                   .replaceAll("log", "Math.log")       // LOG => Logarithm
                                   .replaceAll("pow", "Math.pow")       // POW => Power of X
                                   .replaceAll("trn", "Math.trunc")     // TRN => Truncate
                                   .replaceAll("min", "Math.min")       // MIN => Lowest Num In Set
                                   .replaceAll("max", "Math.max")       // MAX => Largest Num In Set
                                   .replaceAll('\u00d7', "*")           // MULTIPLICATION SYMBOL
                                   .replaceAll('\u00f7', "/")           // DIVISION SYMBOL
                                   .replaceAll('ceil', "Math.ceil")     // ROUND UP
                                   .replaceAll('floor', "Math.floor")    // FLOOR DIVISION
                                   .replaceAll('d>>p', 'Pct')           // CONVERT TO PERCENT
                                   .replaceAll('p>>d', 'Dec');           // CONVERT TO DECIMAL

    try
    {
        let equation = raw_expression;
        let exp = eval(equation);
        display.value = exp;
    }
    catch { display.value = "Syntax Error"; }
}

//
// Delete the last character
//
function DelSlice()
{
    var exp = display.value;
    if (exp != "")
    {
        exp = exp.slice(0, -1);
        display.value = exp;
    }
    
    display.focus();
}

// Show PI 
//
function GetPI() 
{
    if (isShift) {display.value += '3.1416';} //'(' + Math.PI + ')'; }
    else {display.value += Math.PI;}

    isShift = false;
    CheckShift();
}

// Turn On SHIFT KEY
//
function ShiftOn() 
{
    isShift = !isShift;
    CheckShift();
}

function CheckShift() {shift_label.innerHTML = (isShift) ? "SHIFT" : "";}

// Turn On ALPHA KEY
//
function AlphaOn()
{
    isAlpha = !isAlpha;
    CheckAlpha();
}

function CheckAlpha() {alpha_label.innerHTML = (isAlpha) ? "ALPHA" : "";}

// CHECK IF MATH CEIL or PLUS 
//
//
function PlusOrCeil()
{
    if (!isAlpha)
    {
        WriteScreen('+');
    }
    else
    {
        WriteScreen('ceil(');
    }

    isAlpha = false;
    CheckAlpha();
}

// CHECK IF MATH FLOOR or MINUS
//
//
function DifOrFloor()
{
    if (!isAlpha)
    {
        WriteScreen('-');
    }
    else
    {
        WriteScreen('floor(');
    }

    isAlpha = false;
    CheckAlpha();
}

// CHECK IF SOLVING OR PRINTING EQUALS
//
//
function EvalOrEqual()
{
    if (!isAlpha)
    {
        EvalExpr()
    }
    else
    {
        if (isShift)
        {
            WriteScreen('==');
        }
        else
        {
            WriteScreen('=');
        }

        isShift = false
        CheckShift();
    }

    isAlpha = false;
    CheckAlpha();
}

// CHECK IF DOT OR RANDOM
//
//
function DotOrRandom()
{
    if (!isShift)
    {
        WriteScreen('.');
    }
    else
    {
        WriteScreen(Math.random());
    }

    isShift = false;
    CheckShift();
}

// CHECK IF SIX OR HELP
//
//
function SixOrHelp()
{
    if (!isShift)
    {
        WriteScreen('6');
    }
    else
    {
        window.location.replace("semantic_layout.html");
    }

    isShift = false;
    CheckShift();
}

// CONVERT DECIMAL TO PERCENT
//
//
function DecToPct()
{
    if (!isShift)
    {
        WriteScreen('(');
    }
    else
    {
        WriteScreen('d>>p(');
    }

    isShift = false;
    CheckShift();
}

// CONVERT PERCENT TO DECIMAL  
//
//
function PctToDec()
{
    if (!isShift)
    {
        WriteScreen(')');
    }
    else
    {
        WriteScreen('p>>d(');
    }

    isShift = false;
    CheckShift();
}

function Pct(d)
{
    return d * 100;
}

function Dec(p)
{
    return p / 100;
}

// MEMORY REGISTERS / RECALL
//
// 
function AOrRand()
{
    if (!isAlpha)
    {
        WriteScreen('rnd(');
    }
    else
    {
        WriteScreen('A');
    }

    isAlpha = false;
    CheckAlpha();
}

function BOrExp()
{
    if (!isAlpha)
    {
        WriteScreen('exp(');
    }
    else
    {
        WriteScreen('B');
    }

    isAlpha = false;
    CheckAlpha();
}

function COrAbs()
{
    if (!isAlpha)
    {
        WriteScreen('abs(');
    }
    else
    {
        WriteScreen('C');
    }

    isAlpha = false;
    CheckAlpha();
}

function DOrSine()
{
    if (!isAlpha)
    {
        WriteScreen('sin(');
    }
    else
    {
        WriteScreen('D');
    }

    isAlpha = false;
    CheckAlpha();
}

function EOrCos()
{
    if (!isAlpha)
    {
        WriteScreen('cos(');
    }
    else
    {
        WriteScreen('E');
    }

    isAlpha = false;
    CheckAlpha();
}

// RESET CALCULATOR
//
//
function ResetOrZero()
{
    if (!isShift)
    {
        WriteScreen('0');
    }
    else
    {
        window.location.reload();
    }

    isShift = false;
    CheckShift();
}