<?php
    
  ini_set("display_errors", 0);

  if ($_FILES["image"]["error"] > 0){
    
    echo "Return Code: " . $_FILES["image"]["error"] . "<br />";
  
  }else{
  	foreach ($_FILES as $key => $value) {
  		echo "Upload: " . $value["name"] . "<br />";
	    echo "Type: " . $value["type"] . "<br />";
	    echo "Size: " . $value["size"] / 1024 . " Kb<br />";
	    
	    if(move_uploaded_file($value["tmp_name"],$key.$value["name"])){

	    }else{
	      echo "The file wasn't uploaded";
	    }
  	}
  }
  

?>