$(function () {
  // 화면 스크롤 시 header 스타일 변경
  function headerColor() {
    let windowWidth = $(window).outerWidth();
    let windowT = $(window).scrollTop();
    let sec01T = $("#sec01").offset().top;
    let header = $("header");
    let li = $(".header_menu>ul>li");
    let menuW = $(".menu-white");
    let menuB = $(".menu-black");
    let logoW = $(".logo-white");
    let logoB = $(".logo-black");
    let loginW = $(".login-white");
    let loginB = $(".login-black");

    if (windowT > sec01T) {
      header.css({ position: "fixed", opacity: "0.5" });
      li.css({ color: "#000" });
      logoW.css({ display: "none" });
      logoB.css({ display: "block" });
    } else {
      header.css({ position: "absolute", opacity: "0.9" });
      li.css({ color: "#fff" });
      logoW.css({ display: "block" });
      logoB.css({ display: "none" });
    }

    if (windowT > sec01T && windowWidth <= 575) {
      menuW.css({ display: "none" });
      menuB.css({ display: "block" });
      loginW.css({ display: "none" });
      loginB.css({ display: "block" });
    } else {
      menuW.css({ display: "block" });
      menuB.css({ display: "none" });
      loginW.css({ display: "block" });
      loginB.css({ display: "none" });
    }
  }
  $(window).scroll(function () {
    headerColor();
  });

  // main메뉴 클릭 시 sub메뉴 슬라이드다운
  function menuClick() {
    let m1 = $(".main1");
    let m2 = $(".main2");
    let m3 = $(".main3");
    let m4 = $(".main4");
    let m5 = $(".main5");
    let s1 = $(".sub1");
    let s2 = $(".sub2");
    let s3 = $(".sub3");
    let s4 = $(".sub4");
    let s5 = $(".sub5");

    $(m1).click(function () {
      $(this).css({ color: "#7fb700" });
      $(".main").not(this).css({ color: "#fff" });
      s1.slideDown();
      $(".sub").not(s1).slideUp();
    });
    $(m2).click(function () {
      $(this).css({ color: "#7fb700" });
      $(".main").not(this).css({ color: "#fff" });
      s2.slideDown();
      $(".sub").not(s2).slideUp();
    });
    $(m3).click(function () {
      $(this).css({ color: "#7fb700" });
      $(".main").not(this).css({ color: "#fff" });
      s3.slideDown();
      $(".sub").not(s3).slideUp();
    });
    $(m4).click(function () {
      $(this).css({ color: "#7fb700" });
      $(".main").not(this).css({ color: "#fff" });
      s4.slideDown();
      $(".sub").not(s4).slideUp();
    });
    $(m5).click(function () {
      $(this).css({ color: "#7fb700" });
      $(".main").not(this).css({ color: "#fff" });
      s5.slideDown();
      $(".sub").not(s5).slideUp();
    });

    $(window).scroll(function () {
      $(".sub").slideUp();
      $(".main").css({ color: "#fff" });
    });
  }
  menuClick();

  // menubtn클릭 시 메뉴 나타나게
  let menu = $("menu");
  let menubtn = $(".menubtn");
  let close = $(".closebtn");

  menubtn.click(function () {
    menu.animate({ left: "0" }, 800);
  });
  close.click(function () {
    menu.animate({ left: "-100%" });
    $(".sub").slideUp();
    $(".main").css({ color: "#fff" });
  });

  // sec01 스크롤 시 이미지 포지션 효과
  function sec01_scrollevent() {
    let windowT = $(window).scrollTop();
    let sec01T = $("#sec01").offset().top;

    if (windowT >= sec01T - 300) {
      $(".title-txt1").animate(
        {
          top: "0",
          opacity: "1",
        },
        1500
      );
      $(".title-txt2").animate(
        {
          top: "0",
          opacity: "1",
        },
        1200
      );
      $(".scrimg-1").animate(
        {
          top: "0",
          opacity: "1",
        },
        1500
      );
      $(".scrimg-2").delay(500).animate(
        {
          top: "0",
          opacity: "1",
        },
        1500
      );
      $(".scrimg-3").delay(1000).animate(
        {
          top: "0",
          opacity: "1",
        },
        1500
      );
    }
    scr = windowT;
  }

  $(window).scroll(function () {
    sec01_scrollevent();
  });

  // sec02 이미지 마우스오버 효과
  // 윈도우 창크기 1200이상일때만 적용
  let windowWidth = $(window).outerWidth();
  function sec02_hoverEvent() {
    $(".hover1").mouseover(function () {
      $(".hover1>figure").stop().animate(
        {
          top: "0",
        },
        300
      );
    });
    $(".hover1").mouseout(function () {
      $(".hover1>figure").stop().animate(
        {
          top: "70",
        },
        300
      );
    });
    $(".hover2").mouseover(function () {
      $(".hover2>figure").stop().animate(
        {
          top: "0",
        },
        300
      );
    });
    $(".hover2").mouseout(function () {
      $(".hover2>figure").stop().animate(
        {
          top: "70",
        },
        300
      );
    });
    $(".hover3").mouseover(function () {
      $(".hover3>figure").stop().animate(
        {
          top: "0",
        },
        300
      );
    });
    $(".hover3").mouseout(function () {
      $(".hover3>figure").stop().animate(
        {
          top: "70",
        },
        300
      );
    });
  }

  function hoverAction() {
    if (windowWidth > 1200) {
      sec02_hoverEvent();
    } else {
      return;
    }
  }
  hoverAction();

  // 위도우창크기 변화 시 새로고침
  function windowResize() {
    $(window).resize(function () {
      document.location.reload();
    });
  }
  if (windowWidth > 450) {
    windowResize();
  }

  // sec02 숫자 or 화살표 클릭 시 아이템 슬라이드
  var slide = 2;
  let slideBoxWidth = $(".slidebox").width();
  let slideWidth = $(".slide2").width();
  let center = (slideBoxWidth - windowWidth) / 2 + 5;

  function setting() {
    $(".slidebox").css({
      transform: "translateX(" + -center + "px)",
    });
  }

  function numberClick() {
    $(".number1").click(function () {
      $(".slidebox").animate({ left: slideWidth });
      slide = 1;
    });
    $(".number2").click(function () {
      $(".slidebox").animate({ left: 0 });
      slide = 2;
    });
    $(".number3").click(function () {
      $(".slidebox").animate({ left: -slideWidth });
      slide = 3;
    });
  }

  function arrowClick() {
    $(".sec02_arrow-R").click(function () {
      if (slide == 2) {
        $(".slidebox").animate({ left: -slideWidth });
        slide = 3;
      } else if (slide == 1) {
        $(".slidebox").animate({ left: 0 });
        slide = 2;
      }
    });
    $(".sec02_arrow-L").click(function () {
      if (slide == 2) {
        $(".slidebox").animate({ left: slideWidth });
        slide = 1;
      } else if (slide == 3) {
        $(".slidebox").animate({ left: 0 });
        slide = 2;
      }
    });
  }

  function clickStyle() {
    let num1 = $(".number1");
    let num2 = $(".number2");
    let num3 = $(".number3");
    let sd1 = $(".slide1");
    let sd2 = $(".slide2");
    let sd3 = $(".slide3");
    let t1 = $(".Tbox1");
    let t2 = $(".Tbox2");
    let t3 = $(".Tbox3");
    let c1 = $(".click1");
    let c2 = $(".click2");
    let c3 = $(".click3");

    $("#sec02").click(function () {
      if (slide == 1) {
        num1.css({ color: "#7FB700" });
        $(".number").not(num1).css({ color: "#c8c8c8" });

        sd1.css({ scale: "1", opacity: "1" });
        $(".slide").not(sd1).css({ scale: "0.7", opacity: "0.5" });

        t1.css({ display: "flex" });
        $(".slide_Tbox").not(t1).css({ display: "none" });

        c1.css({ display: "flex" });
        $(".sec02_click").not(c1).css({ display: "none" });
      } else if (slide == 2) {
        num2.css({ color: "#7FB700" });
        $(".number").not(num2).css({ color: "#c8c8c8" });

        sd2.css({ scale: "1", opacity: "1" });
        $(".slide").not(sd2).css({ scale: "0.7", opacity: "0.5" });

        t2.css({ display: "flex" });
        $(".slide_Tbox").not(t2).css({ display: "none" });

        c2.css({ display: "flex" });
        $(".sec02_click").not(c2).css({ display: "none" });
      } else {
        num3.css({ color: "#7FB700" });
        $(".number").not(num3).css({ color: "#c8c8c8" });

        sd3.css({ scale: "1", opacity: "1" });
        $(".slide").not(sd3).css({ scale: "0.7", opacity: "0.5" });

        t3.css({ display: "flex" });
        $(".slide_Tbox").not(t3).css({ display: "none" });

        c3.css({ display: "flex" });
        $(".sec02_click").not(c3).css({ display: "none" });
      }
    });
  }

  if (windowWidth <= 1200) {
    setting();
    numberClick();
    arrowClick();
    clickStyle();
  }

  // sec03 스크롤 시 이미지&텍스트 슬라이드
  $(window).scroll(function () {
    let windowT = $(window).scrollTop();
    let sec03T = $("#sec03").offset().top;

    if (windowT >= sec03T - 300) {
      $(".scroll-img").addClass("visible");
      $(".scroll-txt").addClass("visible");
    }
  });

  // sec03 화살표 클릭 시 이미지 페이드인아웃&텍스트슬라이드
  $(document).ready(function () {
    $(".slideImg").hide();
    $(".slideImg").first().show();

    i = 0;
    let sdi1 = $(".slideImg-1");
    let sdi2 = $(".slideImg-2");
    let sdi3 = $(".slideImg-3");

    function fadeImg() {
      if (i == 1) {
        sdi2.fadeIn();
        $(".slideImg").not(sdi2).fadeOut();
        i = 1;
      } else if (i == 2) {
        sdi3.fadeIn();
        $(".slideImg").not(sdi3).fadeOut();
        i = 2;
      } else {
        sdi1.fadeIn();
        $(".slideImg").not(sdi1).fadeOut();
        i = 0;
      }
      // console.log(i);
    }

    let sdtWidth = $(".slidetxt").outerWidth();

    $(".slidetxt").last().prependTo(".slidetxtBox");
    $(".slidetxtBox").css("left", -sdtWidth);

    function slideTextRight() {
      let sdt = $(".slidetxt");
      let sdtBox = $(".slidetxtBox");
      sdtBox.animate(
        {
          left: "-=" + sdtWidth,
        },
        "slow",
        function () {
          sdt.first().appendTo(sdtBox);
          sdtBox.css("left", -sdtWidth);
        }
      );
    }
    function slideTextLeft() {
      let sdt = $(".slidetxt");
      let sdtBox = $(".slidetxtBox");
      sdtBox.animate(
        {
          left: "+=" + sdtWidth,
        },
        "slow",
        function () {
          sdt.last().prependTo(sdtBox);
          sdtBox.css("left", -sdtWidth);
        }
      );
    }
    function indexBack() {
      if (i == 0) {
        i = 3;
      }
    }

    $(".sec03_arrow-R").click(function () {
      i++;
      fadeImg();
      slideTextRight();
    });
    $(".sec03_arrow-L").click(function () {
      i--;
      fadeImg();
      slideTextLeft();
      indexBack();
    });
  });

  // sec04 이미지 무한 슬라이드
  function rollingSlide() {
    let list = $(".sns-list");
    let slider = $(".sns-slider");
    let cloneslider = list.clone(true).appendTo(slider);
    let listWidth = $(".sns-list>ul").outerWidth();

    slider.css({ left: "0" });
    cloneslider.css({ left: listWidth });

    list.addClass("original");
    cloneslider.addClass("clone");
  }
  rollingSlide();

  // 탑버튼 효과
  function topbtnScroll() {
    let windowT = $(window).scrollTop();
    let top = $(".topbtn");
    if (windowT > 800) {
      top.css({ display: "block" });
    } else {
      top.css({ display: "none" });
    }
  }
  $(window).scroll(function () {
    topbtnScroll();
  });

  // top버튼 클릭 시 맨위로
  let topbtn = $(".topbtn");
  topbtn.click(function () {
    $("html").animate({ scrollTop: 0 }, 800);
  });

  // /////////////////////////
});
