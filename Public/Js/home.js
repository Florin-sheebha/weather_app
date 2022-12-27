$(document).ready(function(){
    $("#srchBtn").click(function(){
        var val = $("#value").val();
        console.log(val);
        if(val =="") {
            alert("Please enter the city name");
            return;
        }
        alert("Success");
    })

    
})