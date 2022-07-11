$("document").ready(function(){

    let Fullpage = new fullpage
    $(".hamburger a").click(function(e){
        e.preventDefault()
        $(this).addClass("on")
        $(".side").addClass("on")
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

    
})