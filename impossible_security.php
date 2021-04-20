<?php

//
// THE SUBMIT BUTTON IS CLICKED ..
//
if( isset( $_POST[ 'Submit' ] ) ) {
    // Get input
    $id = $_POST[ 'userid' ];
    $pw = $_POST[ 'passw' ];

    // was the entered user id a number?
    if (is_numeric($id))
    {
        $stmt = $conn->prepare('SELECT * FROM users WHERE userID = ? AND password = ?');
        $stmt->bind_param('i', $id);
        $stmt->bind_param('s', $pw);
        $stmt->execute();

        $result = $stmt->get_result();
        
        if( count((array)$result) > 0 ) 
        {
            header('Location: index.html');
        }
        else
        {
            echo "<script>alert(\"Wrong password\")</script>";
        }
    }
}

?>