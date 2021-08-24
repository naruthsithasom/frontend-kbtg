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
                    <div class="col-12 col-md-8 member-form memberjob-table">
                        <div class="row memberjob-table-head">
                            <div class="col-8">
                                <h3>Job Title</h3>
                            </div>
                            <div class="col-4">
                                <h3>Status</h3>
                            </div>
                        </div>
                        <div class="row memberjob-table-list">
                            <div class="col-8">
                                <h4>Software Engineer<i class="fas fa-caret-down"></i></h4>
                            </div>
                            <div class="col-4">
                                <p>Submitted</p>
                            </div>
                        </div>
                        <div class="row memberjob-table-list">
                            <div class="col-8">
                                <h4>Test Manager / Test Engineer<i class="fas fa-caret-down"></i></h4>
                            </div>
                            <div class="col-4">
                                <p>Submitted</p>
                            </div>
                        </div>
                        <div class="row memberjob-table-list">
                            <div class="col-8">
                                <h4>System Engineer - Server Management<i class="fas fa-caret-down"></i></h4>
                            </div>
                            <div class="col-4">
                                <a href="#" class="memberjob-table-btn memberjob-table-btn-selected">Selected</a>
                            </div>
                        </div>
                        <div class="row memberjob-table-list">
                            <div class="col-8">
                                <h4>System Engineer - Server Management<i class="fas fa-caret-down"></i></h4>
                            </div>
                            <div class="col-4">
                                <a href="#" class="memberjob-table-btn memberjob-table-btn-notselected">Not selected</a>
                                <button class="button-job button-job-delete"><i class="fas fa-times-circle"></i>Delete</button>
                            </div>
                        </div>
                        <div class="row memberjob-table-list">
                            <div class="col-8">
                                <h4>System Engineer - Server Management<i class="fas fa-caret-down"></i></h4>
                            </div>
                            <div class="col-4">
                                <a href="#" class="memberjob-table-btn memberjob-table-btn-selected">Selected</a>
                            </div>
                            <div class="col-12 memberjob-table-boxbtn">
                                <button class="button-job button-job-reserve"><i class="fas fa-plus-circle"></i>Reserve Appointment</button>
                                <button class="button-job button-job-delete"><i class="fas fa-times-circle"></i>Delete</button>
                                <div class="box-reserve">
                                    <h6>Please select a date and time</h6>
                                    <div class="row row-select-date">
                                        <div class="col-12 col-md-5 calendar-select">
                                            <input type="text" class="datepicker" placeholder="Select date"><i class="far fa-calendar-alt"></i>
                                        </div>
                                        <div class="col-12 col-md-3 calendar-select">
                                            <div class="dropdown dropdown_time">
                                                <div class="select">
                                                    <span>Select time</span>
                                                    <i class="far fa-clock"></i>
                                                </div>
                                                <input type="hidden" name="category">
                                                <ul class="dropdown-menu">
                                                    <li class="listmenu"><i class="fas fa-check"></i>01:00 PM</li>
                                                    <li class="listmenu"><i class="fas fa-check"></i>01:30 PM</li>
                                                    <li class="listmenu disabled"><i class="fas fa-times"></i> 02:00 PM</li>
                                                    <li class="listmenu disabled"><i class="fas fa-times"></i>02:30 PM</li>
                                                    <li class="listmenu"><i class="fas fa-check"></i>03:00 PM</li>
                                                    <li class="listmenu"><i class="fas fa-check"></i>03:30 PM</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4 wrap-btn-adddate">
                                            <button class="btn-adddate btn-adddate-confirm">CONFIRM</button>
                                            <button class="btn-adddate btn-adddate-previous">PREVIOUS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row memberjob-table-list">
                            <div class="col-8">
                                <h4>System Engineer - Server Management<i class="fas fa-caret-down"></i></h4>
                            </div>
                            <div class="col-4">
                                <a href="#" class="memberjob-table-btn memberjob-table-btn-selected">Interview</a>
                            </div>
                            <div class="col-12 memberjob-table-boxbtn">
                                <div class="row list-interview">
                                    <div class="col-8"><h6>Saturday, September 4, 2021 01:00 PM - 01:30 PM (Online)</h6></div>
                                    <div class="col-4">
                                        <button class="button-job button-job-edit"><i class="fas fa-pen"></i>Edit</button>
                                        <button class="button-job button-job-delete"><i class="fas fa-times-circle"></i>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row memberjob-table-list">
                            <div class="col-8">
                                <h4>Unavailable</h4>
                            </div>
                            <div class="col-4">
                                <p>-</p>
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

 $(document).ready(function(){
        $('.member-menu > ul > li:nth-child(2) > a').addClass('active');
        $('.datepicker').datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            orientation: "bottom auto"
        });
        $( '.memberjob-table-list > .col-8, .memberjob-table-list > .col-4' ).click(function (event) {
            if (  $(this).siblings( ".memberjob-table-boxbtn" ).is( ":hidden" ) ) {
                    $('.memberjob-table-list').removeClass("selected");
                    $( ".memberjob-table-boxbtn" ).slideUp();
                    $(this).parent('.memberjob-table-list').addClass("selected");
                    $(this).siblings( ".memberjob-table-boxbtn" ).slideDown();
            } else {
                $('.memberjob-table-list').removeClass("selected");
                $( ".memberjob-table-boxbtn" ).slideUp();
            }
            event.stopPropagation();
        });
        $( '.button-job-reserve' ).click(function (event) {
            if (  $(this).siblings( ".box-reserve" ).is( ":hidden" ) ) {
                    $(this).addClass("active");
                    $(this).siblings( ".box-reserve" ).slideDown();
            } else {
                $('.button-job-reserve').removeClass("active");
                $( ".box-reserve" ).slideUp();
            }
            event.stopPropagation();
        });
        $('.btn_signin').addClass('active').html('MY ACCOUNT<img class="svg" src="~/assets/images/i-quote-wc.svg" alt="">');
    });    
   
  });

  
  },
    methods:{
 
  }
};
</script>