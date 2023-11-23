$(document).ready(function(){
    $(".container").animate({width: "80%"} , 1000 , function(){
        $(".container").animate({height: "100vh"} , 1000 , function(){
            $(".card").eq(0).fadeIn(1000, function() {
                $(".card").eq(1).fadeIn(1000, function () {
                    $(".card").eq(2).fadeIn(1000)
                })
            })
        })
    })
})