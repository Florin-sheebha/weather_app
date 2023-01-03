$(document).ready(function(){
    $("#srchBtn").click(function(){
        var city = $("#city").val();
        console.log(city);
        $("#pTag").text("Loading...");

        if(city =="") {
            alert("Please enter the city name");
            return;
        }
        
        $.ajax({
            url: `/api/weather?city=${city}`,
            type: 'GET',
            success: function(res) {
                console.log(res);
                $("#pTag").text(res);
                $("#city").val("");
            }
        });
    })

    
})