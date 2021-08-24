<template>
  <div>
    <section class="container-fluid wow fadeInDown">
      <div class="row">
        <div class="col-12 signin-bg">
          <div class="container">
            <div class="row">
              <div
                class="
                  col-12 col-lg-10
                  offset-lg-1
                  col-xxl-8
                  offset-xxl-2
                  signin-box
                "
              >
                <div class="row">
                  <div class="col-12 col-md-4 signin-img">
                    <img src="~/assets/images/register.jpg" alt="" />
                  </div>
                  <form class="col-12 col-md-8 signin-form form-register">
                    <hgroup>
                      <h1>
                        Register<img
                          src="~/assets/images/i-quote-wc.svg"
                          alt=""
                        />
                      </h1>
                      <h6>Please fill in this form to create an account.</h6>
                    </hgroup>
                    <div class="half-width">
                      <input type="text" placeholder="First Name" />
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <div class="staysignin_forget termandprivacy">
                      <label><input type="checkbox" /> I accept the</label>
                      <a href="#terms-of-use" data-fancybox>Terms of Use</a> &
                      <a href="#privacy-policy" data-fancybox>Privacy Policy</a>
                    </div>
                    <div class="signin-captcha d-flex justify-content-center">
                      <div
                        v-if="true"
                        class="g-recaptcha"
                        data-sitekey="6LcoTs4bAAAAAIVEFf6Bq_tU15tA6cLpIrrHcohX"
                        data-callback="confirmRecaptCha"
                      ></div>
                    </div>
                    <button class="signin-btn">REGISTER</button>
                    <div class="signin-registertext">
                      Already have an account?
                      <a href="/sign-in">Login here.</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="fancybox-popup" id="terms-of-use">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3>Terms of Use</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              ligula nibh, tristique id congue ut, accumsan at lectus.
              Vestibulum ipsum erat, convallis at velit nec, accumsan egestas
              risus. Fusce scelerisque elit sed enim pellentesque, sit amet
              vehicula ex pharetra. Cras posuere enim in tincidunt aliquam.
              Integer sit amet condimentum mi. Vivamus quis vehicula lorem. In
              mauris urna, fringilla vitae ultrices non, blandit vitae tortor.
              Donec sit amet ex tempor, egestas mi eu, accumsan lacus.
              Suspendisse potenti.
            </p>
            <p>
              Morbi sed nulla molestie, imperdiet turpis vel, fermentum metus.
              Integer pharetra lectus lectus, in pellentesque sapien congue
              quis. Vestibulum eu lacus pulvinar, cursus metus in, tristique
              orci. Duis ac leo venenatis, pretium elit convallis, efficitur
              quam. Sed vel quam at risus pharetra rhoncus sit amet at eros.
              Pellentesque sagittis nisl libero, sed ornare magna placerat nec.
              Sed libero erat, tincidunt vitae commodo commodo, sodales vel
              purus. Suspendisse porta vel leo imperdiet ornare. Vestibulum
              rutrum ligula pellentesque lacus mattis, eget accumsan elit
              tristique. Ut pulvinar in erat a elementum.
            </p>
            <p>
              Praesent lacinia elit est, sit amet molestie nisi suscipit non.
              Suspendisse efficitur, massa et imperdiet scelerisque, nulla sem
              lobortis eros, a vulputate lectus dolor id justo. Nullam aliquet
              ultricies vulputate. Vestibulum malesuada dignissim enim.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="fancybox-popup" id="privacy-policy">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3>Privacy Policy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              ligula nibh, tristique id congue ut, accumsan at lectus.
              Vestibulum ipsum erat, convallis at velit nec, accumsan egestas
              risus. Fusce scelerisque elit sed enim pellentesque, sit amet
              vehicula ex pharetra. Cras posuere enim in tincidunt aliquam.
              Integer sit amet condimentum mi. Vivamus quis vehicula lorem. In
              mauris urna, fringilla vitae ultrices non, blandit vitae tortor.
              Donec sit amet ex tempor, egestas mi eu, accumsan lacus.
              Suspendisse potenti.
            </p>
            <p>
              Morbi sed nulla molestie, imperdiet turpis vel, fermentum metus.
              Integer pharetra lectus lectus, in pellentesque sapien congue
              quis. Vestibulum eu lacus pulvinar, cursus metus in, tristique
              orci. Duis ac leo venenatis, pretium elit convallis, efficitur
              quam. Sed vel quam at risus pharetra rhoncus sit amet at eros.
              Pellentesque sagittis nisl libero, sed ornare magna placerat nec.
              Sed libero erat, tincidunt vitae commodo commodo, sodales vel
              purus. Suspendisse porta vel leo imperdiet ornare. Vestibulum
              rutrum ligula pellentesque lacus mattis, eget accumsan elit
              tristique. Ut pulvinar in erat a elementum.
            </p>
            <p>
              Praesent lacinia elit est, sit amet molestie nisi suscipit non.
              Suspendisse efficitur, massa et imperdiet scelerisque, nulla sem
              lobortis eros, a vulputate lectus dolor id justo. Nullam aliquet
              ultricies vulputate. Vestibulum malesuada dignissim enim.
            </p>
          </div>
        </div>
      </div>
    </div>
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
      isProcess: true,
      isRecaptchaCheck: false,
    };
  },
  mounted() {
    new WOW.WOW({ animateClass: "animated", offset: 100 }).init();
    window.confirmRecaptCha = this.confirmRecaptCha;
  },
  methods: {
    confirmRecaptCha() {
      this.isRecaptchaCheck = true;
      console.log("reCaptcha..OK");
    },
  },
};
</script>