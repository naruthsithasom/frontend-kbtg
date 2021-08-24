<template>
  <div>
    <!-- <MenuTop /> -->
    <section class="container-fluid">
      <div class="row wow fadeInDown">
        <div class="col-12 jobs-banner">
          <!-- <div class="banner-carousel owl-carousel owl-theme">
            <div class="jobs-banner-img">
              <img src="~/assets/images/R1565ac64.jpg" alt="" />
            </div>
            <div class="jobs-banner-img">
              <img src="~/assets/images/R4494cb4e.jpg" alt="" />
            </div>
          </div> -->
          <b-carousel id="carousel-1"  :interval="4000" @sliding-start="onSlideStart" @sliding-end="onSlideEnd" >
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
      <div class="row">
        <div class="col-12">
          <div class="container">
            <div class="row">
              <div class="col-12 jobs-head wow fadeInLeft">
                <h1>WE ARE <span>HIRING!</span></h1>
              </div>
            </div>
            <div class="row wow fadeInDown">
              <div class="col-12 jobs-title">
                <h3>Job Title</h3>
                <div class="dropdown dropdown_sortby">
                  <div class="select">
                    <span>Level</span>
                    <i class="fas fa-angle-down"></i>
                  </div>
                  <input type="hidden" name="category" />
                  <ul class="dropdown-menu">
                    <li class="listmenu">All Levels</li>
                    <li class="listmenu">Junior - Middle</li>
                    <li class="listmenu">Middle</li>
                    <li class="listmenu">Middle - Senior</li>
                    <li class="listmenu">Senior</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row wow fadeInDown">
               <div v-for="data in res" :key="data.id">
                <a href="/job-detail" class="col-12 jobs-item">
                <h2>
                  {{data.title}}<img  src="~/assets/images/icon_fresh_grad.6cc0248.svg" alt="" v-if="data.fresh_grad"/>
                </h2>
                <div>{{data.level}}</div>
              </a>
              </div>
              <!-- 
                <a href="/job-detail" class="col-12 jobs-item">
                <h2>
                  SOFTWARE ENGINEER<img
                    src="~/assets/images/icon_fresh_grad.6cc0248.svg"
                    alt=""
                  />
                </h2>
                <div>All Levels</div>
              </a>
              <a href="/job-detail" class="col-12 jobs-item">
                <h2>
                  TEST MANAGER/TEST ENGINEER<img
                    src="~/assets/images/icon_fresh_grad.6cc0248.svg"
                    alt=""
                  />
                </h2>
                <div>All Levels</div>
              </a>
              <a href="/job-detail" class="col-12 jobs-item">
                <h2>
                  SYSTEM ENGINEER - SERVER MANAGEMENT
                  <img
                    src="~/assets/images/icon_fresh_grad.6cc0248.svg"
                    alt=""
                  />
                </h2>
                <div>Junior – Middle</div>
              </a>
              <a href="/job-detail" class="col-12 jobs-item">
                <h2>
                  SOFTWARE ENGINEER<img
                    src="~/assets/images/icon_fresh_grad.6cc0248.svg"
                    alt=""
                  />
                </h2>
                <div>All Levels</div>
              </a>
              <a href="/job-detail" class="col-12 jobs-item">
                <h2>
                  TEST MANAGER/TEST ENGINEER<img
                    src="~/assets/images/icon_fresh_grad.6cc0248.svg"
                    alt=""
                  />
                </h2>
                <div>All Levels</div>
              </a>
              <a href="/job-detail" class="col-12 jobs-item">
                <h2>
                  SYSTEM ENGINEER - SERVER MANAGEMENT
                  <img
                    src="~/assets/images/icon_fresh_grad.6cc0248.svg"
                    alt=""
                  />
                </h2>
                <div>Junior – Middle</div>
              </a>
              <a href="/job-detail" class="col-12 jobs-item">
                <h2>
                  SOFTWARE ENGINEER<img
                    src="~/assets/images/icon_fresh_grad.6cc0248.svg"
                    alt=""
                  />
                </h2>
                <div>All Levels</div>
              </a>
              <a href="/job-detail" class="col-12 jobs-item">
                <h2>
                  TEST MANAGER/TEST ENGINEER<img
                    src="~/assets/images/icon_fresh_grad.6cc0248.svg"
                    alt=""
                  />
                </h2>
                <div>All Levels</div>
              </a>
              <a href="/job-detail" class="col-12 jobs-item">
                <h2>SYSTEM ENGINEER - SERVER MANAGEMENT</h2>
                <div>Junior – Middle</div>
              </a> -->
            </div>
            <div class="row">
              <div class="col-12">
                <ul class="pagination">
                  <li>
                    <a class="active" href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <MenuBottom /> -->
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
        res:{},
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
    this.getJobs()
  },
    methods:{
     onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      getJobs(){
        this.$axios.$get('http://13.212.145.117:8000/api/jobs').then(
        // this.$axios.$get('localhost:8000/api/jobs').then(
          res => {
            if(res){
              console.log(res)
              this.res = res
          }
        }
        ).catch((error) => {console.log(error)})
      }
      
  }
};
</script>