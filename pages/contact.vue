<template>
  <div>
    <section class="container-fluid">
      <div class="row wow fadeInDown">
        <div class="col-12 contact-banner">
          <img src="~/assets/images/CONTACT_02.png" alt="" />
        </div>
      </div>
    </section>
    <section class="container-fluid">
      <div class="row wow fadeInDown contact-bg">
        <div class="col-12">
          <div class="container">
            <div class="row">
              <div class="col-12 contact-head">
                <h2>GET IN TOUCH WITH US</h2>
                <p>We are looking forward to start a project with you.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 contact-info">
                <a
                  class="contact-item"
                  href="https://goo.gl/maps/KBtZo5cX4yRL3gxZ8"
                  target="_blank"
                >
                  <figure>
                    <div class="wow fadeInLeft" data-wow-delay=".25s">
                      <img src="~assets/images/contact1.jpg" alt="" />
                    </div>
                    <figcaption class="wow fadeInLeft" data-wow-delay=".5s">
                      <h3>
                        <i class="fas fa-map-marker-alt"></i>KBTG Building<br />(Muang
                        Thong Thani)
                      </h3>
                      <p>
                        46/6, Popular Road, Pak Kret district, Nonthaburi 11120
                      </p>
                    </figcaption>
                  </figure>
                </a>
                <a
                  class="contact-item"
                  href="https://goo.gl/maps/dZnYegAeXb6wqBQ3A"
                  target="_blank"
                >
                  <figure>
                    <div class="wow fadeInRight" data-wow-delay="0.25s">
                      <img src="~assets/images/contact2.jpg" alt="" />
                    </div>
                    <figcaption class="wow fadeInRight" data-wow-delay=".5s">
                      <h3>
                        <i class="fas fa-map-marker-alt"></i>K+ Building<br />(Samyan,
                        Bangkok)
                      </h3>
                      <p>
                        188/72 Soi Chula 20, Wang Mai, Pathum Wan District,
                        Bangkok 10330
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-12 col-md-8 contact-message">
          <h3>
            OUR TEAMS ARE HERE TO HELP
            <img src="~assets/images/double-quote.svg" alt="" />
          </h3>
          <p>
            Sometimes you need a little help from your friends. Or a KBTG
            Inspire support rep.
          </p>
          <p>Don’t worry... we’re here for you</p>
        </div>
        <div class="col-12 col-md-4 contact-btn">
          <a href="#">CONTACT SUPPORT</a>
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
 
    };
  },
  mounted() {
      new WOW.WOW({  animateClass: "animated", offset: 100, }).init();
     $('.mainmenu > ul > li:nth-child(5) > a').addClass('active');

  },
};
</script>