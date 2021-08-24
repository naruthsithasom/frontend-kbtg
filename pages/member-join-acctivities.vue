<template>
  <div>
  <section class="container-fluid wow fadeInDown">
      <div class="row">
          <div class="col-12 member-head">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>USER INFORMATION</h1>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </section>
  <section class="container-fluid">
      <div class="row">
          <div class="col-12 member-bg">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8 member-profile offset-lg-4">
                        <div class="member-image">
                            <figure>
                                <img src="~/assets/images/profile-img.jpg" alt="">
                            </figure>
                            <button class="btn_upload_imgpf">
                                <i class="fas fa-camera"></i>
                            </button>
                        </div>
                        <div class="profile-name">
                            <h6>Thanwa Sirisongtham</h6>
                            <p>Bangkok, Thailand</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-4 member-menu">
                    <div class="member-menu-btn">
                        <div class="menu_symbol"><span></span><span></span><span></span></div>
                    </div>
                    <ul class="wow fadeInLeft">
                        <li><a href="/member-user-info"><img class="svg" src="~/assets/images/member-icon01.svg" alt="">User info</a></li>
                        <li><a href="/member-job-apply"><img class="svg" src="~/assets/images/member-icon02.svg" alt="">Job Apply Status</a></li>
                        <li><a href="/member-join-acctivities"><img class="svg" src="~/assets/images/member-icon03.svg" alt="">Join an Activities</a></li>
                        <li><a href="/member-change-password"><img class="svg" src="~/assets/images/member-icon04.svg" alt="">Change Password</a></li>
                    </ul>
                    <a href="" class="btn-logout wow fadeInLeft"><img class="svg" src="~/assets/images/member-icon04.svg" alt="">Log out</a>
                    </div>
                    <div class="col-12 col-md-8 member-form member-join">
                        <h4>Joining KBTG Inspire activities</h4>
                        <p>If you are not interested in joining KBTG but would still like to join the activities at KBTG Inspire to level up your tech skills, we also welcome you with open arms.</p>
                        <div class="member-join-box">
                            <div class="member-join-img">
                                <img src="~/assets/images/member-join.jpg" alt="">
                            </div>
                            <div class="col-12 col-md-10 member-join-detail">
                                <div class="member-join-status">Status: <span>Coming up next</span></div>
                                <h2>KBTG INSPIRE</h2>
                                <h3>ONLINE ALL-DAY WORKSHOP</h3>
                                <p>A chance to learn from KBTG experts in various fields and pick their brains like this is hard to come by, not to mention you might get to be a part of Thailand’s leading tech company.</p>
                                <div class="member-join-wicon">
                                    <div><i class="far fa-calendar-alt"></i>4th September 2021</div>
                                    <div><i class="far fa-clock"></i>10:00am - 05:00pm (GMT+7)</div>
                                    <div class="icon-video"><i class="fas fa-video"></i>Webinar</div>
                                </div>
                                <form class="member-join-input">
                                    <input type="text" placeholder="Self introduction (company/university)">
                                    <textarea rows="4" placeholder="Why you would like to attend KBTG Inspire"></textarea>
                                    <button>APPLY</button>
                                    <!-- <button class="disabled">FINISH</button> -->
                                </form>
                    
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
    {  body: true, async: true, type: "text/javascript", src: "/js/jquery-3.6.0.min.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/jquery-ui.min.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/modernizr.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/jquery.fancybox.min.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/wow.js" },
    {  body: true, async: true, type: "text/javascript", src: "/js/owl.carousel.min.js" },
    {  body: true, async: true, type: "text/javascript", src: "https://kit.fontawesome.com/3e8060abb4.js",crossorigin: "anonymous",},
    {  body: true, async: true, type: "text/javascript", src: "/js/bootstrap-datepicker.min.js",},
    ],
  },
  components: {
    MenuTop,
    MenuBottom,
    Cookie,
  },
  data(){
    return{
        sliding: null,slide:0,
        date:"",
    }
  },
  mounted() {
     
    new WOW.WOW({ animateClass: "animated", offset: 100, }).init();
    $(document).ready(function() {

 
      $('.member-menu > ul > li:nth-child(3) > a').addClass('active');
        $('.datepicker').datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            orientation: "bottom auto"
        });
        $('.btn_signin').addClass('active').html('MY ACCOUNT<img class="svg" src="~/assets/images/i-quote-wc.svg" alt="">');
 
   
  });

  
  },
    methods:{
 
  }
};
</script>