<?php

//
// THE SUBMIT BUTTON IS CLICKED ..
//
if( isset( $_REQUEST[ 'Submit' ] ) ) {
    // Get input
    $id = $_REQUEST[ 'userid' ];
    $pw = $_REQUEST[ 'passw' ];

    // write query for all users
    $sql = "SELECT * FROM users WHERE userID = '{$id}' AND password = '{$pw}'";

    // make query and get results
    $result = mysqli_query($conn, $sql);

    // fetch the resulting rows as an array
    $row = mysqli_fetch_assoc( $result );

    // if row count is greater than 0, it means we can log in ..
    if (count((array)$row) > 0)
    {
        header('Location: index.html');
    }
    else
    {
        echo "<script>alert(\"Wrong password\")</script>";
    }
    // after weve done our query, we should free the results from memory -> not required but good practice
    mysqli_free_result($result);

    // lastly, close the connection to database
    mysqli_close($conn);
}

?>