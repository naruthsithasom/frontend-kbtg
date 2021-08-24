<template>
  <div>
    <section class="container-fluid">
      <div class="row wow fadeInDown">
        <div class="col-12 jobs-banner">
            <b-carousel id="carousel-1"  :interval="4000" @sliding-start="onSlideStart" @sliding-end="onSlideEnd" >
              <b-carousel-slide   class="jobs-banner-img" :img-src=" require(`~/assets/images/R1565ac64.jpg`)"></b-carousel-slide>
              <b-carousel-slide   class="jobs-banner-img" :img-src=" require(`~/assets/images/R4494cb4e.jpg`)"></b-carousel-slide>
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
    <section class="container-fluid inspiration-fp-bg">
      <div class="inspiration-fp-quote-inside wow fadeInRight"></div>
       <div class="row">
        <div class="col-12 wow fadeInDown">
          <div class="container">
            <div class="row">
              <div class="col-12 inspiration-fp-head">
                <h2>FIND YOUR INSPIRATION</h2>
               </div>
            </div>
            <div class="row">
              <article
                class="col-12 col-md-4 inspiration-fp-item wow fadeInDown"
              >
                <a href="#">
                  <figure>
                    <div>
                      <img
                        class="qoute-img svg"
                        src="~/assets/images/i-quote-wc.svg"
                        alt=""
                      />
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
                      <img
                        class="qoute-img svg"
                        src="~/assets/images/i-quote-wc.svg"
                        alt=""
                      />
                      <div>
                        <img src="~/assets/images/img-find1.e557581.png" alt="" />
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
                      <img
                        class="qoute-img svg"
                        src="~/assets/images/i-quote-wc.svg"
                        alt=""
                      />
                      <div>
                        <img src="~/assets/images/img-find3.fcb6ffb.png" alt="" />
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
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid wow fadeInDown">
      <div class="row">
        <div class="col-12 activities">
          <div class="activities-img">
            <img src="~/assets/images/Activities01-01.a46113b.jpg" alt="" />
          </div>
          <div class="activities-caption container">
            <div class="wow fadeInUp">
              <h1>
                <span>KBTG</span> INSPIRE<img
                  src="~/assets/images/i-quote-wc.svg"
                  alt=""
                />
              </h1>
              <p>
                WE INSPIRE YOU WITH OUR INSIGHTS, <br />YOU INSPIRE US WITH YOUR
                TALENTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid">
      <div class="row">
        <div class="col-12 speaker-bg">
          <div class="container">
            <div class="row">
              <div class="col-12 speaker-head wow fadeInDown">
                <h1>WELCOME TALK SPEAKER</h1>
              </div>
            </div>
            <div class="row">
              <figure class="col-12 col-md-4 speaker-item wow fadeInDown">
                <div>
                  <img src="~/assets/images/Activities02-01.2667b5c.png" alt="" />
                </div>
                <figcaption>
                  <h2>Charassri Phaholyotin</h2>
                  <p>Chief IT Operation Officer<br />People Expert</p>
                </figcaption>
              </figure>
              <figure class="col-12 col-md-4 speaker-item wow fadeInDown">
                <div>
                  <img src="~/assets/images/Activities03-01.0dcff18.png" alt="" />
                </div>
                <figcaption>
                  <h2>Chetaphan Siridanupath</h2>
                  <p>
                    Senior Principal Visionary Architect <br />Innovation Expert
                  </p>
                </figcaption>
              </figure>
              <figure class="col-12 col-md-4 speaker-item wow fadeInDown">
                <div>
                  <img src="~/assets/images/Activities04-01.52bf24b.png" alt="" />
                </div>
                <figcaption>
                  <h2>Tawan Jithavech</h2>
                  <p>
                    Managing Director <br />
                    Infrastructure Expert
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-12 schedule-head wow fadeInDown">
          <h1><span>KBTG</span> INSPIRE SCHEDULE</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 schedule-wrapper wow fadeInDown">
          <div class="schedule-tab">
            <h3 class="active">Upskill<span>Workshop</span></h3>
            <h3>Agile<span>Playground</span></h3>
            <h3>1:1 Career<span>Mentorship</span></h3>
          </div>
          <div class="schedule-tab-detail">
            <div>
              <div class="schedule-item">
                <div class="schedule-time">10:00 - 10:30 AM.</div>
                <div class="schedule-event">
                  <h3>Welcome to KBTG Inspire</h3>
                  <div class="team-member">
                    <span>Charassri Phaholyotin</span>
                    Chief IT Operation Officer
                  </div>
                  <div class="team-member">
                    <span>Chetaphan Siridanupath</span>Senior Principal
                    Visionary Architect
                  </div>
                  <div class="team-member">
                    <span>Tawan Jithavech</span>Managing Director
                  </div>
                  <p>
                    Kick off this grand expedition with a greeting from KBTG
                    Leadership Team
                  </p>
                </div>
              </div>
              <div class="schedule-item">
                <div class="schedule-time">10:30 - 12:00 PM.</div>
                <div class="schedule-event">
                  <h3>Ideation Workshop - Jam Your Thoughts With FigJam</h3>
                  <p>
                    Experience how to ideate without hitting the wall and
                    collaborate on ideas at a whole new level with FigJam, a new
                    tool by Figma
                  </p>
                </div>
              </div>
              <div class="schedule-item break">
                <div class="schedule-time">12:00 - 01:00 PM.</div>
                <div class="schedule-event">
                  <h3>Lunch Break</h3>
                </div>
              </div>
              <div class="schedule-item">
                <div class="schedule-time">01:00 - 02:30 PM.</div>
                <div class="schedule-event">
                  <h3>
                    A Journey of Test Automation: When Quality Is Driven by
                    Technology and Team
                  </h3>
                  <p>
                    Learn how to ramp up automation under standardized framework
                    and boost up the quality with various types of enterprise
                    applications and common platforms
                  </p>
                </div>
              </div>
              <div class="schedule-item">
                <div class="schedule-time">02:30 - 04:00 PM.</div>
                <div class="schedule-event">
                  <h3>The Data Evolution Powered by Data Engineers</h3>
                  <p>
                    Walk through the 10-year history of platform development by
                    data engineers to support every financial need and analytics
                    requirement
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="schedule-item">
                <div class="schedule-time">10:00 - 10:30 AM.</div>
                <div class="schedule-event">
                  <h3>Welcome to KBTG Inspire</h3>
                  <div class="team-member">
                    <span>Charassri Phaholyotin</span>
                    Chief IT Operation Officer
                  </div>
                  <div class="team-member">
                    <span>Chetaphan Siridanupath</span>Senior Principal
                    Visionary Architect
                  </div>
                  <div class="team-member">
                    <span>Tawan Jithavech</span>Managing Director
                  </div>
                  <p>
                    Kick off this grand expedition with a greeting from KBTG
                    Leadership Team
                  </p>
                </div>
              </div>
              <div class="schedule-item">
                <div class="schedule-time">10:30 - 12:00 PM.</div>
                <div class="schedule-event">
                  <h3>Agile Playground (Group 1)</h3>
                  <p>
                    Let your talent shine through this fun activity, practice
                    solving problems and experience agile at first hand
                  </p>
                </div>
              </div>
              <div class="schedule-item break">
                <div class="schedule-time">12:00 - 01:00 PM.</div>
                <div class="schedule-event">
                  <h3>Lunch Break</h3>
                </div>
              </div>
              <div class="schedule-item">
                <div class="schedule-time">01:00 - 02:30 PM.</div>
                <div class="schedule-event">
                  <h3>Agile Playground (Group 2)</h3>
                  <p>
                    Let your talent shine through this fun activity, practice
                    solving problems and experience agile at first hand
                  </p>
                </div>
              </div>
              <div class="schedule-item">
                <div class="schedule-time">03:00 - 04:30 PM.</div>
                <div class="schedule-event">
                  <h3>Agile Playground (Group 3)</h3>
                  <p>
                    Let your talent shine through this fun activity, practice
                    solving problems and experience agile at first hand
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="schedule-item">
                <div class="schedule-time">10:30 - 05:00 PM.</div>
                <div class="schedule-event">
                  <h3>1:1 Career Mentorship</h3>
                  <p>
                    - Business Analyst <br />

                    - Blockchain / Defi<br />

                    - Blockchain Research Engineer<br />

                    - Data Engineer<br />

                    - Data Scientist<br />

                    - Research Engineer<br />

                    - Machine Learning Engineer<br />

                    - Enterprise Architect<br />

                    - IT Infrastructure Project Manager<br />

                    - Innovation Product Manager<br />

                    - Kubix Operation & Risk Management<br />

                    - Project Manager<br />

                    - Security Infrastructure Engineer<br />

                    - Software Engineer<br />

                    - System Engineer<br />

                    - Test Engineer<br />

                    - UX/UI Designer<br />

                    - KBTG Recruitment<br />

                    - KBTG Culture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid wow fadeInDown">
      <div class="row">
        <div class="col-12 findjob-bg">
          <div class="findjob-icon"></div>
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-8 findjob-text">
                <h3>
                  FIND A JOB THAT SUITS YOU
                  <img src="~/assets/images/i-quote-wc.svg" alt="" />
                </h3>
                <p>
                  Show off your personality and capability for a chance to join
                  KASIKORN Business-Technology Group, Thailand’s top tech
                  company
                </p>
              </div>
              <div class="col-12 col-md-4 findjob-button">
                <a href="~/assets/jobs.php">See Positions</a>
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
    {  body: true, async: true, type: "text/javascript", src: "/js/jquery-3.6.0.min.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/jquery-3.6.0.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/jquery-ui.min.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/modernizr.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/jquery.fancybox.min.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/wow.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/owl.carousel.min.js" },
    {  body: true, async: true, type: "text/javascript", src: "https://kit.fontawesome.com/3e8060abb4.js",crossorigin: "anonymous",},
  ],
  },
  components: {
    MenuTop,
    MenuBottom,
    Cookie,
  },
  data(){
    return{
        sliding: null,
        slide:0,
    }
  },
  mounted() {

    new WOW.WOW({ animateClass: "animated", offset: 100, }).init();

    // $(document).ready(function () {});
       $(".schedule-tab h3").click(function (event) {
        var stno = $(this).index();
        if ($(".schedule-tab-detail > div").eq(stno).is(":hidden")) {
          $(".schedule-tab h3").removeClass("active");
          $(this).addClass("active");
          $(".schedule-tab-detail > div").slideUp();
          $(".schedule-tab-detail > div")
            .eq(stno)
            .slideDown({
              complete: function () {
                if (Modernizr.mq("(min-width: 768px)")) {
                  $("html, body").animate(
                    {
                      scrollTop:
                        $(this).offset().top -
                        $(".mainnav").outerHeight(true) -
                        10,
                    },
                    500
                  );
                }
              },
            });
        } else {
        }
        event.stopPropagation();
      });

      $(".mainmenu > ul > li:nth-child(3) > a").addClass("active");
  },
  methods:{
     onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
  }
};
</script>