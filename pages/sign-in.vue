<template>
  <div>
  <section class="container-fluid wow fadeInDown">
      <div class="row">
          <div class="col-12 signin-bg">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2 signin-box">
                        <div class="row">
                            <div class="col-12 col-md-4 signin-img">
                                <img src="~/assets/images/SIGN-IN-REV2_02.jpg" alt="">
                            </div>
                            <form class="col-12 col-md-8 signin-form">
                                <hgroup>
                                    <h1>Join KBTG Inspire<img src="~/assets/images/i-quote-wc.svg" alt=""></h1>
                                    <h6>Sign in to your account</h6>
                                </hgroup>
                                <input type="text" placeholder="Email">
                                <input type="password" placeholder="Password">
                                <div class="staysignin_forget">
                                    <label><input type="checkbox"> Stay signed in</label>
                                    <a href="/forgot-password" class="btn_forgot">Forget <span>Password?</span></a>
                                </div>
                                <div class="signin-captcha d-flex justify-content-center">
                                  <div v-if="true" class="g-recaptcha" data-sitekey="6LcoTs4bAAAAAIVEFf6Bq_tU15tA6cLpIrrHcohX" data-callback="confirmRecaptCha"></div>
                                </div>
                                <button class="signin-btn" @click="test()"> SIGN IN </button>
                                <!-- <button class="signin-btn"> SIGN IN </button> -->
                                <div class="signin-registertext">Don’t have an account? <a href="/register">Register</a></div>
                            </form>
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
      { 
         async: true,
         defer: true,
         src: "https://www.google.com/recaptcha/api.js"
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
      isProcess: true,
      isRecaptchaCheck: false,

    };
  },
  mounted() {
      new WOW.WOW({  animateClass: "animated", offset: 100, }).init();
          // window.confirmRecaptCha = this.confirmRecaptCha;

 
  },
  methods:{
      confirmRecaptCha(){
      this.isRecaptchaCheck = true
      console.log('reCaptcha..OK')
    },
    test(){
      this.$router.push('/member-user-info')
    }
  }
};
</script>