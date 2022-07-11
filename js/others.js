$("document").ready(function(){
    

    $(".wrap .line").css("width","70%")
    $(".wrap .circle").css("opacity",1).css("transition-delay","900ms");
    $(".wrap > p").addClass("animated animate__slideInDown").css("opacity",1).css("transition-delay","1200ms").css("animation-delay","1200ms");



    $(".hamburger a").click(function(e){
        e.preventDefault()
        $(this).addClass("on")
        $(".side").addClass("on")
        $(".close").addClass("on")
    })

    $(".side-menu li").click(function(){
        $(".side").removeClass("on")
        $(".close").removeClass("on")
        $(".hamburger a").removeClass("on")
    })

    $(".hamburger a").click(function(e){
    $(".close").addClass("on")
    })
    
    $(".close").click(function(){
        $(this).removeClass("on")
        setTimeout(function(){
            $(".side").removeClass("on")
        },1200)

        setTimeout(function(){
            $(".hamburger a").removeClass("on")

        },1500)
    })  



}) //script