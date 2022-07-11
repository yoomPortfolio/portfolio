$("document").ready(function(){
    $("nav ul li").eq(1).addClass("on");

    let mouseCursor = document.querySelector(".cursor");
        let navLinks = document.querySelectorAll("nav li a"); //메뉴 링크
        //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
        window.addEventListener("scroll", cursor);
        window.addEventListener("mousemove", cursor);
        //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
        function cursor(e) {
          mouseCursor.style.left = e.pageX + "px";
          mouseCursor.style.top = e.pageY - scrollY + "px";
      }

      navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
          mouseCursor.classList.add("cursor-grow");
          mouseCursor.style.zIndex = "1";
          
        });
        link.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("cursor-grow");
          mouseCursor.style.zIndex = "1000";
          
        });
      });

    let pro_chk = false;

    function pro(id, per){
        let bar = new ProgressBar.Circle(id,{
            strokeWidth: 12,
            duration: 1400,
            color : "#7953a2",
            trailWidth : 12,
            // ↓ 공식이라 복붙하면 됨
            step: function(state, circle){
                circle.setText(Math.round(circle.value()*100)+"%")
            }
        })
        bar.animate(per)
    }

    let Fullpage = new fullpage(".fullpage",{
        anchors: [ "about", "hobby"],
        licenseKey: "603D3EBB-D1B84561-B40D98B6-7A87C3D7",
        scrollingSpeed: 1300,

        afterLoad : function(origin, destination){
            if(destination.index == 0){
                $(".about .wrap .profile .p-text").addClass("animated animate__fadeInLeft").css("opacity",1).css("transition-delay","700ms").css("animation-delay","700ms");
                $(".about .wrap .profile .p-img .me").addClass("animated animate__slideInUp").css("opacity",1).css("transition-delay","2100ms").css("animation-delay","2100ms");
                $(".about .wrap .right").addClass("animated animate__slideInDown").css("opacity",1).css("transition-delay","2400ms").css("animation-delay","2400ms");
                $(".about .wrap .right .r_up .p_info").addClass("animated animate__slideInDown").css("opacity",1).css("transition-delay","2900ms").css("animation-delay","2900ms");
                $(".about .wrap .right .r_up .license").addClass("animated animate__slideInDown").css("opacity",1).css("transition-delay","3300ms").css("animation-delay","3300ms");
                $(".about .wrap .right .r_bottom span").addClass("animated animate__slideInDown").css("opacity",1).css("transition-delay","3600ms").css("animation-delay","3600ms");
                
    
                if(pro_chk == true){
                    return;
                }
    
                // $(".about .progress").eq(0).delay(3600).animate({
                //     opacity: 1
                // },1000, function(){
                //     pro("#ps", 0.9)
                // })
                // $(".about .progress").eq(1).delay(3800).animate({
                //     opacity: 1
                // },1000, function(){
                //     pro("#ai", 0.8)
                // })
                // $(".about .progress").eq(2).delay(4000).animate({
                //     opacity: 1
                // },1000, function(){
                //     pro("#html", 0.85)
                // })
                // $(".about .progress").eq(3).delay(4200).animate({
                //     opacity: 1
                // },1000, function(){
                //     pro("#css", 0.8)
                // })
                // $(".about .progress").eq(4).delay(4400).animate({
                //     opacity: 1
                // },1000, function(){
                //     pro("#js", 0.6)
                // })
                
                pro_chk = true
            }
            if(destination.index == 1){
                $(".hobby span").css("opacity",1).addClass("animated bounceInDown on")
                // $(".hobby .hb_up .up_text").textillate({
                //     in:{
                //         effect: "tada"
                //     }
                // })

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
})