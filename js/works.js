$("documnet").ready(function(){
    $("nav ul li").eq(2).addClass("on");

    
    let Fullpage = new fullpage(".fullpage",{
        anchors: [ "works"],
        licenseKey: "603D3EBB-D1B84561-B40D98B6-7A87C3D7",
        navigation : true,
        navigationPosition : "left",
        navigationTooltips : ["Works1","Works2","Works3"]
        
    })


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