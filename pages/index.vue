<template>
  <div>
    <!-- <MenuTop/> -->
    <section class="container-fluid">
      <div class="row wow fadeInDown">
        <div class="col-12 wrap_banner_video">
          <video autoplay loop muted playsinline>
            <source
              src="~/assets/video/KBTG_Inspire_720-Broadband_High.92a1321.mp4"
              type="video/mp4"
            />
          </video>
          <hgroup class="container banner_caption">
            <h1><span>KBTG </span>INSPIRE</h1>
            <h2>
              WE INSPIRE YOU WITH OUR INSIGHTS,<br />YOU INSPIRE US WITH YOUR
              TALENTS
            </h2>
          </hgroup>
        </div>
        <div class="col-12 bg_calendar">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-5">
                <a href="#"
                  ><img src="~/assets/images/i-calendar.svg" alt="" />21 - 23
                  May, 2021</a
                >
              </div>
              <div class="col-12 col-md-7">
                <a href="#"
                  ><img src="~/assets/images/i-quote.svg" alt="" />KBTG Muang
                  Thong Thani, Nonthaburi</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid">
      <div class="row about-fp-bg wow fadeInDown">
        <div class="col-12">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-6 about-fp-text wow fadeInLeft">
                <h2>ABOUT KBTG INSPIRE</h2>
                <p>
                  KBTG Inspire is a convention for IT talents who constantly
                  seek new experiences and growth alongside their peers. Hosted
                  by KASIKORN Business-Technology Group (KBTG), one of
                  Thailand’s leading tech companies, this is the place to
                  challenge your capability. Our array of experts are happy to
                  share their knowledge, offer career advice, and provide
                  assorted workshops. Job interviews are also available for
                  those who aspire to join our family. KBTG Inspire will help
                  ignite your inspiration, level up your skill set and expand
                  your circle of friends. Are you ready to spark the potential
                  in you?
                </p>
                <div class="about-fp-btn">
                  <a href="/jobs">See Positions</a>
                  <a href="#">View Activities</a>
                </div>
              </div>
              <div class="col-12 col-lg-6 about-fp-img wow fadeInRight">
                <img src="~/assets/images/img-about.a740438.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 about-fp-proimg wow fadeInDown">
          <img
            src="~/assets/images/img-professional_02.f3f2208.1a89448.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-12 job-fp-head wow fadeInDown">
          <h2>JOBS AT <span>KBTG</span> INSPIRE</h2>
          <a href="/jobs">View all Jobs</a>
        </div>
      </div>
      <div class="row job-fp-row">
        <div class="col-12 col-md-6 col-lg-4 job-fp-item wow fadeInDown" v-for="data in res" :key="data.id">
          <a href="/job-detail">
            <h3>
              {{data.title}}<img
                src="~/assets/images/i-quote-wc.svg"
                alt=""
              />
            </h3>
            <div class="location">
             {{data.location[0]}} {{data.location[1]}}
            </div>
            <p>
             {{data.description}}
            </p>
          </a>
        </div>
        <!-- 
          <div class="col-12 col-md-6 col-lg-4 job-fp-item wow fadeInDown">
          <a href="/job-detail">
            <h3>
              Test Manager/Test Engineer<img
                src="~/assets/images/i-quote-wc.svg"
                alt=""
              />
            </h3>
            <div class="location">
              KBTG Building (Muang Thong Thani, Nonthaburi)
            </div>
            <p>
              In this role, you will be the key person to drive software quality
              through test management strategy to ensure that software delivered
              with quality and zero incident. If you are experienced in software
              development, software testing, test management, agile testing,
              test automation, testing technology and tools, this is the role
              for you.
            </p>
          </a>
        </div>
        <div class="col-12 col-md-6 col-lg-4 job-fp-item wow fadeInDown">
          <a href="/job-detail">
            <h3>
              System Engineer - Server Management<img
                src="~/assets/images/i-quote-wc.svg"
                alt=""
              />
            </h3>
            <div class="location">
              KBTG Building (Muang Thong Thani, Nonthaburi)
            </div>
            <p>
              In this role, you will be involved in the planning and development
              of the database with the fit recommendation and technology, as
              well as in troubleshooting any issues.
            </p>
          </a>
        </div>
        <div class="col-12 col-md-6 col-lg-4 job-fp-item wow fadeInDown">
          <a href="/job-detail">
            <h3>
              Software Engineer<img
                src="~/assets/images/i-quote-wc.svg"
                alt=""
              />
            </h3>
            <div class="location">
              KBTG Building (Muang Thong Thani, Nonthaburi) K+ Building (Samyan,
              Bangkok)
            </div>
            <p>
              In this role, you will be responsible for the application design
              and development of application components or multiple application
              solutions to meet business and customer requirements.
            </p>
          </a>
        </div>
        <div class="col-12 col-md-6 col-lg-4 job-fp-item wow fadeInDown">
          <a href="/job-detail">
            <h3>
              Software Engineer<img
                src="~/assets/images/i-quote-wc.svg"
                alt=""
              />
            </h3>
            <div class="location">
              KBTG Building (Muang Thong Thani, Nonthaburi) K+ Building (Samyan,
              Bangkok)
            </div>
            <p>
              In this role, you will be responsible for the application design
              and development of application components or multiple application
              solutions to meet business and customer requirements.
            </p>
          </a>
        </div>
        <div class="col-12 col-md-6 col-lg-4 job-fp-item wow fadeInDown">
          <a href="/job-detail">
            <h3>
              Software Engineer<img
                src="~/assets/images/i-quote-wc.svg"
                alt=""
              />
            </h3>
            <div class="location">
              KBTG Building (Muang Thong Thani, Nonthaburi) K+ Building (Samyan,
              Bangkok)
            </div>
            <p>
              In this role, you will be responsible for the application design
              and development of application components or multiple application
              solutions to meet business and customer requirements.
            </p>
          </a>
        </div> 
        -->
      </div>
    </section>
    <section class="container-fluid inspiration-fp-bg">
      <div class="inspiration-fp-quote wow fadeInRight"></div>
      <div class="inspiration-fp-quote-bot wow fadeInLeft"></div>
      <div class="row">
        <div class="col-12 wow fadeInDown">
          <div class="container">
            <div class="row">
              <div class="col-12 inspiration-fp-head">
                <h2>FIND YOUR INSPIRATION</h2>
                <a href="#">View all Activities</a>
              </div>
            </div>
            <div class="row">
              <article
                class="col-12 col-md-4 inspiration-fp-item wow fadeInDown"
              >
                <a href="#">
                  <figure>
                    <div>
                      <div>
                        <img
                          src="~/assets/images/img-find5.288c838.9ad3c9a.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <figcaption>
                      <h3>Upskill Workshop</h3>
                      <p>
                        Level up to the best of your ability, sharpen your
                        skills under the guidance of KBTG pros.
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </article>
              <article
                class="col-12 col-md-4 inspiration-fp-item wow fadeInDown"
              >
                <a href="#">
                  <figure>
                    <div>
                      <div>
                        <img
                          src="~/assets/images/img-find1.e557581.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <figcaption>
                      <h3>Agile Playground</h3>
                      <p>
                        Let your talent shine through this fun activity,
                        practice solving problems and experience agile at first
                        hand.
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </article>
              <article
                class="col-12 col-md-4 inspiration-fp-item wow fadeInDown"
              >
                <a href="#">
                  <figure>
                    <div>
                      <div>
                        <img
                          src="~/assets/images/img-find3.fcb6ffb.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <figcaption>
                      <h3>1:1 Career Mentorship</h3>
                      <p>
                        Consult and receive valuable advice for how to thrive in
                        your career path from KBTG experts.
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </article>
              <article
                class="col-12 col-md-4 inspiration-fp-item wow fadeInDown"
              >
                <a href="#">
                  <figure>
                    <div>
                      <div>
                        <img
                          src="~/assets/images/img-find5.288c838.9ad3c9a.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <figcaption>
                      <h3>Upskill Workshop</h3>
                      <p>
                        Level up to the best of your ability, sharpen your
                        skills under the guidance of KBTG pros.
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </article>
              <article
                class="col-12 col-md-4 inspiration-fp-item wow fadeInDown"
              >
                <a href="#">
                  <figure>
                    <div>
                      <div>
                        <img
                          src="~/assets/images/img-find1.e557581.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <figcaption>
                      <h3>Agile Playground</h3>
                      <p>
                        Let your talent shine through this fun activity,
                        practice solving problems and experience agile at first
                        hand.
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </article>
              <article
                class="col-12 col-md-4 inspiration-fp-item wow fadeInDown"
              >
                <a href="#">
                  <figure>
                    <div>
                      <div>
                        <img
                          src="~/assets/images/img-find3.fcb6ffb.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <figcaption>
                      <h3>1:1 Career Mentorship</h3>
                      <p>
                        Consult and receive valuable advice for how to thrive in
                        your career path from KBTG experts.
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </article>
            </div>
            <div class="row faq-fp-head" data-id="FAQ">
              <div class="col-12 wow fadeInDown">
                <h2>FREQUENTLY ASKED QUESTIONS <span>(FAQ)</span></h2>
              </div>
            </div>
            <div class="row faq-fp wow fadeInDown">
              <div class="col-12 faq-fp-item">
                <h3>
                  How can I join KBTG Inspire?<i class="fas fa-angle-down"></i>
                </h3>
                <div class="faq-fp-detail">
                  <p>
                    By applying through this website. ​You can find the
                    instructions on the “join event” page.
                  </p>
                </div>
              </div>
              <div class="col-12 faq-fp-item">
                <h3>
                  How can I join KBTG Inspire?<i class="fas fa-angle-down"></i>
                </h3>
                <div class="faq-fp-detail">
                  <p>
                    By applying through this website. ​You can find the
                    instructions on the “join event” page.
                  </p>
                </div>
              </div>
              <div class="col-12 faq-fp-item">
                <h3>
                  How can I join KBTG Inspire?<i class="fas fa-angle-down"></i>
                </h3>
                <div class="faq-fp-detail">
                  <p>
                    By applying through this website. ​You can find the
                    instructions on the “join event” page.
                  </p>
                </div>
              </div>
              <div class="col-12 faq-fp-item">
                <h3>
                  How can I join KBTG Inspire?<i class="fas fa-angle-down"></i>
                </h3>
                <div class="faq-fp-detail">
                  <p>
                    By applying through this website. ​You can find the
                    instructions on the “join event” page.
                  </p>
                </div>
              </div>
              <div class="col-12 faq-fp-item">
                <h3>
                  How can I join KBTG Inspire?<i class="fas fa-angle-down"></i>
                </h3>
                <div class="faq-fp-detail">
                  <p>
                    By applying through this website. ​You can find the
                    instructions on the “join event” page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <MenuBottom />
  <Cookie /> -->
  </div>
</template>
<script>
import WOW from "WOWjs";
import MenuTop from "../components/MenuTop";
import MenuBottom from "../components/MenuBottom";
import Cookie from "../components/Cookie";
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
  data(){
    return{
      res: []
    }
  },
  components: {
    MenuTop,
    MenuBottom,
    Cookie,
  },
  methods:{
    getJobs() {
      this.$axios
        .$get("http://13.212.145.117:8000/api/jobs")
        .then(
          // this.$axios.$get('localhost:8000/api/jobs').then(
          (res) => {
            if (res) {
              console.log(res);
              this.res = res;
            }
          }
        )
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    new WOW.WOW({
      animateClass: "animated",
      offset: 100,
    }).init();

    this.getJobs();

    $(document).ready(function () {
      $(".banner_caption").addClass("fadeout");

      function smoothsc() {
        var idpage = window.location.hash.substring(1);
        if (idpage.length == 0) {
        } else {
          $("html, body").animate(
            {
              scrollTop:
                $('[data-id="' + idpage + '"').offset().top -
                $(".mainnav").outerHeight(true),
            },
            1000
          );
        }
      }

      smoothsc();

      $(".mainnav .mainmenu ul li a").click(function (event) {
        smoothsc();
      });

      $(".faq-fp-item h3").click(function (event) {
        if ($(this).next(".faq-fp-detail").is(":hidden")) {
          $(".faq-fp-item").removeClass("active");
          $(this).parent(".faq-fp-item").addClass("active");
          $(".faq-fp-detail").slideUp();
          $(this).next(".faq-fp-detail").slideDown();
        } else {
          $(this).parent(".faq-fp-item").removeClass("active");
          $(this).next(".faq-fp-detail").slideUp();
        }
        event.stopPropagation();
      });
    });
    $(".mainmenu > ul > li:nth-child(1) > a").addClass("active");
  },
 
};
</script>