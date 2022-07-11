$("document").ready(function(){

    let pro_chk = false;

    function pro(id, per){
        let bar = new ProgressBar.Line(id,{
            strokeWidth: 3,
            duration: 1400,
            color : "#7953a2",
            trailWidth : 3,
            // ↓ 공식이라 복붙하면 됨
            step: function(state, circle){
                circle.setText(Math.round(circle.value()*100)+"%")
            }
        })
        bar.animate(per)
    }



    $(".nav ul li a").textillate({
        in:{
            effect:"bounceIn",
        }
        
    })




    let Fullpage = new fullpage(".fullpage",{
        anchors: ["home", "about", "hobby", "works", "others","others2", "contact"],
        licenseKey: "603D3EBB-D1B84561-B40D98B6-7A87C3D7",
        onLeave : function(origin, destination, directon){
            if(origin.index >= 0 && directon == "down"){
                // =오리진의 인덱스가 0보다 크거나 작다면(=첫페이지라면)스크롤 다운할때
                $(".nav").fadeOut();
                $(".hamburger").addClass("on");
            }else if(origin.index == 1 && directon == "up"){
                $(".nav").fadeIn();
                $(".hamburger").removeClass("on");
            }
            // $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
            if(destination.index == 1){
                $(".about .wrap .line").css("width","70%").css("transition-delay","500ms");
                $(".about .wrap .circle").css("opacity",1).css("transition-delay","1500ms");
            }
        },// onLeave

        afterLoad : function(origin, destination){
            if(destination.index == 1){
                $(".about .wrap > p").addClass("animated animate__slideInDown").css("opacity",1).css("transition-delay","1000ms").css("animation-delay","1000ms");
                $(".about .wrap .profile .p-text").addClass("animated animate__pulse").css("opacity",1).css("transition-delay","1500ms").css("animation-delay","1500ms");
                $(".about .wrap .profile .p-img .me").addClass("animated animate__slideInUp").css("opacity",1).css("transition-delay","2000ms").css("animation-delay","2000ms");
                $(".about .wrap .right .r_up .p_info").addClass("animated animate__slideInDown").css("opacity",1).css("transition-delay","2400ms").css("animation-delay","2400ms");
                $(".about .wrap .right .r_up .license").addClass("animated animate__slideInDown").css("opacity",1).css("transition-delay","2800ms").css("animation-delay","2800ms");
                $(".about .wrap .right .r_bottom span").addClass("animated animate__slideInDown").css("opacity",1).css("transition-delay","3200ms").css("animation-delay","3200ms");
                

                if(pro_chk == true){
                    return;
                }

                $(".about .progress").eq(0).delay(3600).animate({
                    opacity: 1
                },1000, function(){
                    pro("#ps", 0.9)
                })
                $(".about .progress").eq(1).delay(3800).animate({
                    opacity: 1
                },1000, function(){
                    pro("#ai", 0.7)
                })
                $(".about .progress").eq(2).delay(4000).animate({
                    opacity: 1
                },1000, function(){
                    pro("#html", 0.8)
                })
                $(".about .progress").eq(3).delay(4200).animate({
                    opacity: 1
                },1000, function(){
                    pro("#css", 0.75)
                })
                $(".about .progress").eq(4).delay(4400).animate({
                    opacity: 1
                },1000, function(){
                    pro("#js", 0.6)
                })
                
                pro_chk = true
            }
        } //afterLoad
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