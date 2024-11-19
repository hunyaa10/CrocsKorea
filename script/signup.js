$(function () {
  // 화면 스크롤 시 header 스타일 변경
  function headerColor() {
    let windowWidth = $(window).outerWidth();
    let windowT = $(window).scrollTop();
    let secT = $("section").offset().top;
    let header = $("header");
    let li = $(".header_menu>ul>li");
    let menuW = $(".menu-white");
    let menuB = $(".menu-black");
    let logoW = $(".logo-white");
    let logoB = $(".logo-black");
    let loginW = $(".login-white");
    let loginB = $(".login-black");

    if (windowT > secT) {
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

    if (windowT > secT && windowWidth <= 575) {
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
    let mainMenu = $(".main");
    let m1 = $(".main1");
    let m2 = $(".main2");
    let m3 = $(".main3");
    let m4 = $(".main4");
    let m5 = $(".main5");
    let mains = [m1, m2, m3, m4, m5];
    let subMenu = $(".sub");
    let s1 = $(".sub1");
    let s2 = $(".sub2");
    let s3 = $(".sub3");
    let s4 = $(".sub4");
    let s5 = $(".sub5");
    let subs = [s1, s2, s3, s4, s5];

    mainMenu.each(function () {
      $(this).click(function () {
        $(this).css("color", "#7fb700");
        mainMenu.not(this).css("color", "#fff");
      });
    });

    mains.forEach(function (main, i) {
      main.click(function () {
        subs.forEach(function (sub) {
          sub.slideUp();
        });
        subs[i].slideDown();
      });
    });

    $(window).scroll(function () {
      subMenu.slideUp();
      mainMenu.css("color", "#fff");
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

  // 가입버튼클릭 시 알림창 뜨게
  let form = $("#sign-form");
  form.submit(function (e) {
    e.preventDefault();
    alert("크록스클럽가입을 축하드립니다!");
    this.submit();
  });

  ///////////////////////////////////
});
