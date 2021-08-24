<template>
  <div>
    <section class="container-fluid">
      <div class="row wow fadeInDown">
        <div class="col-12 jobs-banner">
          <b-carousel
            id="carousel-1"
            :interval="3000"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
            class="jobs-banner-img"
              :img-src="require(`~/assets/images/R1565ac64.jpg`)"
            ></b-carousel-slide>
            <b-carousel-slide
            class="jobs-banner-img"
              :img-src="require(`~/assets/images/R4494cb4e.jpg`)"
            ></b-carousel-slide>
          </b-carousel>

          <div class="jobs-caption container">
            <h1 class="wow fadeInLeft">INSPIRATION BEGINS WITH YOU</h1>
            <div class="dropdown dropdown_sortby wow fadeInLeft">
              <div class="select">
                <span>Find your KBTG job today!</span>
                <i class="fas fa-caret-down"></i>
              </div>
              <input type="hidden" name="category" />
              <ul class="dropdown-menu">
                <li class="listmenu">Software Engineer</li>
                <li class="listmenu">Test Manager/Test Engineer</li>
                <li class="listmenu">System Engineer - Server Management</li>
                <li class="listmenu">Data Scientist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid jobs-bg wow fadeInDown">
      <div class="inspiration-fp-quote-job wow fadeInRight"></div>
      <div class="inspiration-fp-quote-bot wow fadeInLeft"></div>
      <div class="row">
        <div class="col-12">
          <div class="container">
            <div class="row">
              <div class="col-12 job-apply-head wow fadeInDown">
                <h2>SOFTWARE ENGINEER</h2>
                <a href="/job-detail">&#60; Back to job description</a>
              </div>
              <form class="col-12 job-apply-detail">
                <h4>Your details</h4>
                <div class="job-apply-form">
                  <div class="job-apply-form-100">
                    <label> Full Name: * </label>
                    <input type="text" value="Thanwa Sirisongtham" />
                  </div>
                  <div class="job-apply-form-50">
                    <label> Email: * </label>
                    <input type="text" value="ken.bgdg@gmail.com" />
                  </div>
                  <div class="job-apply-form-50">
                    <label> Phone Number: * </label>
                    <input type="text" value="+66 84 923 5666" />
                  </div>
                  <div class="job-apply-form-100">
                    <label> Attach your Resume: * </label>
                    <div class="input-file">
                      <input type="file" />
                      <span class="input-file-btn">Choose File</span>
                      <span class="input-file-text">no file selected</span>
                    </div>
                  </div>
                  <div class="job-apply-form-100">
                    <label> Were you referred by a current employee?: * </label>
                    <a class="jobs-btnapply" href="job-refer">YES</a
                    ><a class="jobs-btnrefer" href="#">NO</a>
                  </div>
                </div>
                <div class="job-apply-btn">
                  <a href="job-submitted" class="jobs-btnapply"
                    >SUBMIT YOUR APPLICATION</a
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import WOW from "WOWjs";
import MenuTop from "@/components/MenuTop";
import MenuBottom from "@/components/MenuBottom";
import Cookie from "@/components/Cookie";

// import 'owl.carousel';
export default {
  head: {
    script: [
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/js/jquery-3.6.0.min.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/js/jquery-3.6.0.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/js/jquery-ui.min.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/js/modernizr.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/js/jquery.fancybox.min.js",
      },
      { body: true, async: true, type: "text/javascript", src: "/js/wow.js" },
      {
        defer: true,
        body: true,
        async: true,
        type: "text/javascript",
        src: "/js/owl.carousel.min.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "https://kit.fontawesome.com/3e8060abb4.js",
        crossorigin: "anonymous",
      },
    ],
  },
  components: {
    MenuTop,
    MenuBottom,
    Cookie,
  },
  data() {
    return {
      sliding: null,
      slide: 0,
    };
  },
  mounted() {
    new WOW.WOW({
      animateClass: "animated",
      offset: 100,
    }).init();

    $('.mainmenu > ul > li:nth-child(2) > a').addClass('active');
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>