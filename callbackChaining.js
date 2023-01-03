function add(a,b,cb){
    setTimeout(function(){
        var z = a + b;
        cb(z);
    },5000)
}

function sub(a,b,cb){
    setTimeout(function(){
        var y = a - b;
        cb(y);
    },3000)
}

add(3,4, function(sum){
    console.log(sum);
    sub(sum,3, function(diff){
        console.log(diff);
    })
})