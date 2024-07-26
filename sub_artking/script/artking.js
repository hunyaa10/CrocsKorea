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

  // section 메뉴 클릭 시 goods 변경
  let list = $(".menu-list");
  let li1 = $(".li1");
  let li2 = $(".li2");
  let li3 = $(".li3");
  let li4 = $(".li4");
  let li5 = $(".li5");
  let li6 = $(".li6");
  let goods = $(".goodsbox");
  let gd1 = $(".gd-nyc");
  let gd2 = $(".gd-line");
  let gd3 = $(".gd-toy");
  let gd4 = $(".gd-spbob");
  let gd5 = $(".gd-prin");
  let gd6 = $(".gd-md");

  list.each(function () {
    $(this).click(function () {
      $(this).css({
        opacity: "1",
        borderBottom: "3px solid #7fb700",
      });
      list.not(this).css({
        opacity: "0.7",
        borderBottom: "3px solid transparent",
      });
    });
  });

  li1.click(function () {
    gd1.css({ display: "grid" });
    goods.not(gd1).css({ display: "none" });
  });
  li2.click(function () {
    gd2.css({ display: "grid" });
    goods.not(gd2).css({ display: "none" });
  });
  li3.click(function () {
    gd3.css({ display: "grid" });
    goods.not(gd3).css({ display: "none" });
  });
  li4.click(function () {
    gd4.css({ display: "grid" });
    goods.not(gd4).css({ display: "none" });
  });
  li5.click(function () {
    gd5.css({ display: "grid" });
    goods.not(gd5).css({ display: "none" });
  });
  li6.click(function () {
    gd6.css({ display: "grid" });
    goods.not(gd6).css({ display: "none" });
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

  ///////////////////////////////////
});
