$("document").ready(function(){

    

    var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
    let Random_Number = Math.floor(Math.random() * 10);
    console.log(Random_Number)

    $('.loading .txt')
        .animateNumber(
            {
                number: 100,
                numberStep: percent_number_step

            },


            Random_Number + "000", function () {
                $(".loading").fadeOut(800);
            }
        );

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



    $(".title p").addClass("animated animate__fadeInLeft").css("opacity",1).css("transition-delay","1200ms").css("animation-delay","1200ms");
    // $("nav ul li a").addClass("animated animate__fadeInLeft").css("opacity",1).css("transition-delay","1200ms").css("animation-delay","1200ms");
    $(".pinkball").addClass("animated animate__fadeInDown").css("opacity",1).css("transition-delay","1500ms").css("animation-delay","1500ms");
    $(".orangeball").addClass("animated animate__fadeInUp").css("opacity",1).css("transition-delay","1800ms").css("animation-delay","1800ms");


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