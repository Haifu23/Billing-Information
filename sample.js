function billingFunction(){
    if(same.checked){
        if( (document.getElementById("shippingName").value === !null) &&
        (document.getElementById("shippingZip").value === !null) )
        {
            document.getElementById("billingName").value = document.getElementById("shippingName").value;
            document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
            alert("It's a match!");
        }else{
            alert("Please fill in required field");
        }
    }else{ 
        document.getElementById("billingName").value = null;
        document.getElementById("billingZip").value = null;
    }
}
