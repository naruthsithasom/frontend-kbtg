<template>
  <div>
      <section class="container-fluid">
    <div class="row wow fadeInDown">
      <div class="col-12 jobs-banner">
        <!-- <div class="banner-carousel owl-carousel owl-theme">
            <div class="jobs-banner-img">
                <img src="~/assets/images/R1565ac64.jpg" alt="">
            </div>
            <div class="jobs-banner-img">
                <img src="~/assets/images/R4494cb4e.jpg" alt="">
            </div>
        </div> -->
          <b-carousel id="carousel-1"  :interval="3000" @sliding-start="onSlideStart" @sliding-end="onSlideEnd" >
              <b-carousel-slide class="jobs-banner-img" :img-src=" require(`~/assets/images/R1565ac64.jpg`)"></b-carousel-slide>
              <b-carousel-slide class="jobs-banner-img" :img-src=" require(`~/assets/images/R4494cb4e.jpg`)"></b-carousel-slide>
           </b-carousel> 
        <div class="jobs-caption container">
            <h1 class="wow fadeInLeft">INSPIRATION BEGINS WITH YOU</h1>
            <div class="dropdown dropdown_sortby wow fadeInLeft">
                <div class="select">
                    <span>Find your KBTG job today!</span>
                    <i class="fas fa-caret-down"></i>
                </div>
                <input type="hidden" name="category">
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
                <div class="row jobs-border">
                    <div class="col-12 col-md-6 jobs-head jobs-head-inside wow fadeInLeft">
                        <div>
                            <h1>SOFTWARE ENGINEER<img src="~/assets/images/icon_fresh_grad.6cc0248.svg" alt=""></h1>
                            <h4>All Levels</h4>
                            <p>In this role, you will be responsible for the application design and development of application components or multiple application solutions to meet business and customer requirements.</p>
                        </div>
                        <a class="jobs-btnapply" href="/job-apply">Apply Now</a><a class="jobs-btnrefer" href="/job-refer">Refer Job</a>
                    </div>
                    <div class="col-12 col-md-6 jobs-inside-slide wow fadeInRight">
                          <b-carousel id="carousel-2" :interval="3000"  class="job-carousel">
                            <b-carousel-slide class="jobs-inside-img" :img-src=" require(`~/assets/images/random/1.jpg`)"></b-carousel-slide>
                            <b-carousel-slide class="jobs-inside-img" :img-src=" require(`~/assets/images/random/3.jpg`)"></b-carousel-slide>
                            <b-carousel-slide class="jobs-inside-img" :img-src=" require(`~/assets/images/random/5.jpg`)"></b-carousel-slide>
                            <b-carousel-slide class="jobs-inside-img" :img-src=" require(`~/assets/images/random/6.jpg`)"></b-carousel-slide>
                            <b-carousel-slide class="jobs-inside-img" :img-src=" require(`~/assets/images/random/7.jpg`)"></b-carousel-slide>
                            <b-carousel-slide class="jobs-inside-img" :img-src=" require(`~/assets/images/random/8.jpg`)"></b-carousel-slide>
                            <b-carousel-slide class="jobs-inside-img" :img-src=" require(`~/assets/images/random/9.jpg`)"></b-carousel-slide>
                            <b-carousel-slide class="jobs-inside-img" :img-src=" require(`~/assets/images/random/10.jpg`)"></b-carousel-slide>
                            <b-carousel-slide class="jobs-inside-img" :img-src=" require(`~/assets/images/random/11.jpg`)"></b-carousel-slide>
                            <b-carousel-slide class="jobs-inside-img" :img-src=" require(`~/assets/images/random/12.jpg`)"></b-carousel-slide>
                            <b-carousel-slide class="jobs-inside-img" :img-src=" require(`~/assets/images/random/13.jpg`)"></b-carousel-slide>
                          </b-carousel>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 jobs-detail">
                        <h3>RESPONSIBILITIES</h3>
                        <ul>
                            <li>Develop accurate and efficient programs</li>
                            <li>Maintain current knowledge of standard language, coding methods, and operations requirements</li>
                            <li>Thoroughly tests the operation of completed programs and linkage to other programs</li>
                            <li>Assists the system analyst to establish file requirements and processing specifications for automated portions of the system</li>
                            <li>Build software and deploy to UIS/SIT/UAT environment</li>
                            <li>Support defect/problem investigation</li>
                        </ul>
                        <h3>QUALIFICATIONS</h3>
                        <ul>
                            <li>Bachelor's degree in Computer Engineering, Computer Science, IT or other related fields (fresh grads welcome!)</li>
                            <li>At least 3 years of experience in JAVA software development or other programming languages (Java, GO, JavaScript, Kotlin, Swift, Node.js, C#, Python)</li>
                            <li>Experience working with one or more from the following: web application development, Unix environments, mobile application development, information retrieval, networking, developing large-scale software system, version control system, and/or security software development</li>
                            <li>Knowledge of XML, Restful, JSON, Framework, SQLite and OOP Concept</li>
                            <li>Knowledge of SVN,GIT</li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-6 jobs-detail">
                        <h3>PREFERRED SKILLS</h3>
                        <ul>
                            <li>Programming Languages (Java, GO, JavaScript, Kotlin, Swift, Node.js, C#, Python)​</li>
                        </ul>
                        <h3>WORK LOCATION</h3>
                        <ul>
                            <li>KBTG Building (Muang Thong Thani, Nonthaburi)</li>
                            <li>K+ Building (Samyan, Bangkok)</li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 jobs-wrap-btn">
                        <div>
                            <a class="jobs-btnapply" href="/job-apply">Apply Now</a><a class="jobs-btnrefer" href="/job-refer">Refer Job</a>
                        </div>
                        <a class="jobs-btnmorejob" href="/jobs">View more jobs<img src="~/assets/images/i-quote-wc.svg" alt=""></a>
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
        defer : true,
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
  data(){
    return{
        sliding: null,
        slide:0,
    }
  },
  mounted() {
    new WOW.WOW({
      animateClass: "animated",
      offset: 100,
    }).init();
    
    $(".mainmenu > ul > li:nth-child(2) > a").addClass("active");
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