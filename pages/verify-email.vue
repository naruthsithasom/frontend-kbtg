<template>
  <div>
    <section class="container-fluid wow fadeInDown">
      <div class="row">
        <div class="col-12 signin-bg">
          <div class="container">
            <div class="row">
              <div
                class=" col-12 col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2 signin-box
                "
              >
                <div class="row">
                  <div class="col-12 col-md-4 signin-img">
                    <img src="~/assets/images/register.jpg" alt="" />
                  </div>
                  <div class="col-12 col-md-8 signin-form">
                    <hgroup>
                      <h2>Verify your e-mail to finish registration</h2>
                    </hgroup>
                    <p>
                      We sent a verification email to you at
                      <span>ken.bgdg@gmail.com</span>
                      Please check your inbox and click the “Verify Email”
                      button to validate your email address.
                    </p>
                    <button class="btn_resend">
                      RESEND VERIFICATION EMAIL
                    </button>
                    <div class="signin-registertext float-bot">
                      I’ve already verified
                      <a href="/sign-in">take me to my account</a>
                    </div>
                  </div>
                </div>
              </div>
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
      {
        async: true,
        defer: true,
        src: "https://www.google.com/recaptcha/api.js",
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
    new WOW.WOW({ animateClass: "animated", offset: 100 }).init();
 
  },
  methods: {
 
  },
};
</script>