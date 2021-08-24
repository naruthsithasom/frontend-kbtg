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
                    <form class="col-12 col-md-8 member-form">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <label>First Name</label>
                                <input type="text" value="Thanwa">
                            </div>
                            <div class="col-12 col-md-6">
                                <label>Last name</label>
                                <input type="text" value="Sirisongtham">
                            </div>
                            <div class="col-12 col-md-6">
                                <label>Gender</label>
                                <select>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div class="col-12 col-md-6">
                                <label>Date of Birth</label>
                                <input class="datepicker" v-model="date" type="text" value="22/12/1983">
                            </div>
                            <div class="col-12 col-md-6">
                                <label>Email</label>
                                <input type="text" value="ken.bgdg@gmail.com">
                            </div>
                            <div class="col-12 col-md-6">
                                <label>Phone Number</label>
                                <input type="text" value="+66 84 923 5666">
                            </div>
                            <div class="col-12">
                                <button class="btn_save">SAVE CHANGES</button>
                            </div>
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
        sliding: null,
        slide:0,
        date:"",
    }
  },
  mounted() {
     
    new WOW.WOW({ animateClass: "animated", offset: 100, }).init();
    $(document).ready(function() {

      $('.member-menu > ul > li:nth-child(1) > a').addClass('active');
      $('.btn_signin').addClass('active').html('MY ACCOUNT<img class="svg" src="@/assets/images/i-quote-wc.svg" alt="">');
      $('.datepicker').datepicker({ format: "dd/mm/yyyy", autoclose: true});
   
  });

  
  },
    methods:{
 
  }
};
</script>