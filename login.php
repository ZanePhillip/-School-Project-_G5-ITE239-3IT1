<?php

/* ABOUT
----------------------------------------------------------------------
gawa muna kayo database sa XAMPP ...
yung name ng database, "login_db" tapos meron syang table na "users"
then sa loob ng users na table, meron columns na userID, password
> login_db
     > users
=========================
| userID  |   password  |
========================
| 01819  |  helloworld |
------------------------
| 01920  | pogi       |
----------------------|
| 02021  | hackme    |
______________________
-----------------------------------------------------------------------
*/

// --------------------------------------------------------------------
// ACTUAL CODE
// --------------------------------------------------------------------
// connect to database ..
$conn = mysqli_connect('localhost', 'root', '', 'login_db');

// check database connection
if (!$conn)
{
    echo 'Failed to connect to database!<br><br>Connection error: ' . mysqli_connect_error();
}

// ito yung low security
include("low_security.php"); 

// ito yung hindi mahack, super secure
//include("impossible_security.php");

?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <style>
    body {font-family: Arial, Helvetica, sans-serif; background-color: #dedede;}
    #login_box 
    {
        width: 25%;
        padding: 24px;
        background-color: white;
        position: absolute;
        top: 30%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -30%);
    }
    #passw, #userid
    {
        width: 100%;
        border: 1px solid #ccc;
        margin-bottom: 14px;
        font-size: 14px;
        padding:10px;
        box-sizing: border-box;
    }
    #login_title 
    {
        font-weight: bold;
        color: #333;
        font-size: 16px;
        margin-bottom: 10px;
    }
    #Submit
    {
        width: 100%;
        background-color: rgb(0,122,224);
        color: white;
        font-size: 14px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif; 
        border: none;
        padding: 12px;
    }
    #Submit:hover
    {
        background-color: rgb(0,155,255);
    }
    </style>
</head>
<body>
<div id="login_box">
    <div id="login_title">Login to continue</div>
    <div id="inputs">
    <form action="#" method="POST">
        <input type="text" name="userid" id="userid" placeholder="User ID"/><br>
        <input type="password" name="passw" id="passw" placeholder="Password"/><br>
        <input type="submit" name="Submit" id="Submit" value="LOG IN"/>
    </form>
    </div>
</div>
</body>
</html>