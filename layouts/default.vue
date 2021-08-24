<template>
  <div>
    <client-only>
      <header class="mainnav">
        <div class="container">
          <nav class="row">
            <div class="col-4 col-md-4 col-lg-2 logo">
              <a href="/"
                ><img src="~/assets/images/logo-kbtginspire.svg" alt=""
              /></a>
            </div>
            <div class="col-12 col-md-1 col-lg-7 col-xl-6 mainmenu">
              <button class="btn_mainmenu">
                <div class="menu_symbol">
                  <span></span><span></span><span></span>
                </div>
              </button>
              <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/jobs">JOBS</a></li>
                <li><a href="/activities">ACTIVITIES</a></li>
                <li><a href="/#FAQ">FAQ</a></li>
                <li><a href="/contact">CONTACT</a></li>
              </ul>
            </div>
            <div class="col-8 col-md-7 col-lg-3 col-xl-4 wrap_top_btn">
              <div class="btn_lang">
                <button class="active">EN</button><span>/</span
                ><button>TH</button>
              </div>
              <a class="btn_signin" href="/sign-in">SIGN IN</a>
            </div>
          </nav>
        </div>
      </header>

      <Nuxt />
      <footer class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="container">
              <div class="row">
                <div class="col-6 col-md-6 col-lg-4 col-xl-3">
                  <div class="logo_footer">
                    <img
                      src="~/assets/images/logo-kbtginspire-footer.svg"
                      alt=""
                    />
                  </div>
                  <ul class="menu_footer menu_fhalf">
                    <li><a href="index.php">HOME</a></li>
                    <li><a href="index.php#FAQ">FAQ</a></li>
                    <li><a href="activities.php">ACTIVITIES</a></li>
                    <li><a href="policy.php">PRIVACY POLICY</a></li>
                    <li><a href="jobs.php">JOBS</a></li>
                    <li><a href="contact.php">CONTACT</a></li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-4 col-xl-5 menu_footer_kbtg">
                  <div class="logo_footer_kbtg">
                    <img src="~/assets/images/kbtg.svg" alt="" />
                  </div>
                  <ul class="menu_footer">
                    <li>
                      <a target="_blank" href="https://www.kbtg.tech/"
                        >COMPANY</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="https://www.kbtg.tech/about"
                        >PROJECTS</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="https://www.kbtg.tech/career"
                        >OTHER POSITIONS</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="col-12 col-md-3 col-lg-4">
                  <div class="linksocail">
                    <a target="_blank" href="https://www.facebook.com/KBTGLive"
                      ><img src="~/assets/images/if_facebook.png" alt=""
                    /></a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/kasikorn-business-technology-group"
                      ><img src="~/assets/images/if_in.png" alt=""
                    /></a>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UCXZMCLAYewhJbRd-YMA8KMA"
                      ><img src="~/assets/images/if_yt.png" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <small class="copyright"
                    >© 2021, KASIKORN Business-Technology Group (KBTG) All
                    rights reserved.</small
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="cookie-bg">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="cookie-text">
                          <h4>Cookies Policy</h4>
                          <p>KBTG Inspire website uses cookies to provide you with better experience of using the website. You can find out more details about the types of cookies KBTG Inspire stores. Purpose of use of cookies from our <a href="/cookies-policy">Cookies Policy</a></p>
                      </div>
                      <div class="cookie-btn">
                          <button class="cookie-btn-accept">Accept</button>
                          <button class="cookie-btn-notaccept">Do Not Accept</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </client-only>
  </div>
</template>
<script>
import WOW from 'WOWjs'
export default {
  head: {
    script: [
    {  body: true, async: true, type: "text/javascript", src: "/js/jquery-3.6.0.min.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/jquery-3.6.0.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/jquery-ui.min.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/modernizr.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/jquery.fancybox.min.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/wow.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/owl.carousel.min.js" },
    {  body: true, async: true, type: "text/javascript", src: "https://kit.fontawesome.com/3e8060abb4.js",crossorigin: "anonymous",},
    {  body: true, async: true, type: "text/javascript", src: "/js/bootstrap-datepicker.min.js",},

  ],
},
  mounted() {

    new WOW.WOW({
      animateClass : 'animated',
      offset:100,
    }).init();

    $(document).ready(function () {
      var mmH = $(".mainnav").outerHeight(true);
      $(".container-fluid").eq(0).css("padding-top", mmH);

      $(".cookie-btn-accept, .cookie-btn-notaccept").click(function (event) {
        $(".cookie-bg").fadeOut();
      });

      $(".btn_mainmenu").click(function (event) {
        if ($(".mainmenu > ul").hasClass("active")) {
          $(".btn_mainmenu").removeClass("active");
          $(".mainmenu > ul").removeClass("active");
        } else {
          $(".btn_mainmenu").addClass("active");
          $(".mainmenu > ul").addClass("active");
        }
        event.stopPropagation();
      });

      $(".member-menu-btn").click(function (event) {
        if ($(".member-menu").hasClass("active")) {
          $(".member-menu-btn").removeClass("active");
          $(".member-menu").removeClass("active");
        } else {
          $(".member-menu-btn").addClass("active");
          $(".member-menu").addClass("active");
        }
        event.stopPropagation();
      });

      $(".search_btn").click(function (event) {
        if ($(".bg_searchbox").is(":hidden")) {
          $(this).addClass("active");
          $(".bg_searchbox").slideDown();
        } else {
          $(this).removeClass("active");
          $(".bg_searchbox").slideUp();
        }
        event.stopPropagation();
      });

      $(".btn_close_search").click(function () {
        $(".search_btn").removeClass("active");
        $(".bg_searchbox").slideUp();
      });

      $(".bg_searchbox").click(function (event) {
        event.stopPropagation();
      });

      $(".close_mainmenu").click(function (event) {
        $(".mainmenu > ul").removeClass("active");
        $(this).slideUp();
        event.stopPropagation();
      });

      // $("html").click(function () {
      //   if (Modernizr.mq("(max-width: 1199px)")) {
      //    }
      //   $(".search_btn").removeClass("active");
      //   $(".bg_searchbox").slideUp();
      // });

      // if (Modernizr.mq("(max-width: 1024px)")) {
      //   $("body").css(
      //     "padding-bottom",
      //     $(".wrap_fixed_relatelink").height() - 5
      //   );
      // }

      $(".dropdown").click(function () {
        $(this).attr("tabindex", 1).focus();
        $(this).toggleClass("active");
        $(this).find(".dropdown-menu").slideToggle(300);
      });
      $(".dropdown").focusout(function () {
        $(this).removeClass("active");
        $(this).find(".dropdown-menu").slideUp(300);
      });
      $(".dropdown .dropdown-menu .listmenu:not(.disabled)").click(function () {
        $(this).parents(".dropdown").find("span").text($(this).text());
        $(this)
          .parents(".dropdown")
          .find("input")
          .attr("value", $(this).attr("id"));
      });

      $(".dropdown-menu .listmenu:not(.disabled)").click(function () {
        var input =
            "<strong>" +
            $(this).parents(".dropdown").find("input").val() +
            "</strong>",
          msg = '<span class="msg">Hidden input value: ';
        $(".msg").html(msg + input + "</span>");
        $(".listmenu").removeClass("selected");
        $(this).addClass("selected");
      });

      $(".submenu")
        .mouseenter(function () {
          $(this).clearQueue();
          event.stopPropagation();
        })
        .mouseleave(function () {
          $(this).delay(800).fadeOut();
        });

      var moffsetleft = $(".mainmenu > ul").offset().left;

      $(".mainnav .mainmenu ul li .submenu > ul").css({
        width: $(".mainmenu > ul").outerWidth(),
        "margin-left": moffsetleft,
      });

 

      $(".swlang_btn").click(function () {
        $(this).siblings("ul").slideToggle();
      });
      $(".lang_btn ul li").click(function () {
        var imglang = $(this).children("img").clone();
        var textlang = $(this).text().substr(0, 2);
        $(".swlang_btn")
          .empty()
          .append(imglang)
          .append(textlang + '<i class="fas fa-caret-down"></i>');
        $(this).parent("ul").slideUp();
        $(this).addClass("selected").siblings("li").removeClass("selected");
      });

      $(function () {
        jQuery("img.svg").each(function () {
          var $img = jQuery(this);
          var imgID = $img.attr("id");
          var imgClass = $img.attr("class");
          var imgURL = $img.attr("src");

          jQuery.get(
            imgURL,
            function (data) {
              // Get the SVG tag, ignore the rest
              var $svg = jQuery(data).find("svg");

              // Add replaced image's ID to the new SVG
              if (typeof imgID !== "undefined") {
                $svg = $svg.attr("id", imgID);
              }
              // Add replaced image's classes to the new SVG
              if (typeof imgClass !== "undefined") {
                $svg = $svg.attr("class", imgClass + " replaced-svg");
              }

              // Remove any invalid XML tags as per http://validator.w3.org
              $svg = $svg.removeAttr("xmlns:a");

              // Check if the viewport is set, else we gonna set it if we can.
              if (
                !$svg.attr("viewBox") &&
                $svg.attr("height") &&
                $svg.attr("width")
              ) {
                $svg.attr(
                  "viewBox",
                  "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
                );
              }

              // Replace image with new SVG
              $img.replaceWith($svg);
            },
            "xml"
          );
        });
      });

      // wow = new WOW({
      //   animateClass: "animated",
      //   offset: 100,
      // });
      // wow.init();
    });
    
    $(window).on("load", function () {});

    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        $(".mainnav").addClass("sticky");
        $(".bubble_linkshop").addClass("sticky");
      } else {
        $(".mainnav").removeClass("sticky");
        $(".bubble_linkshop").removeClass("sticky");
      }
    });
    
  },
};
</script>
<style>
</style>
