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
                 <form class="col-12 col-md-8 member-form member-changepassword">
                        <fieldset class="member-changepassword-form">
                            <label>Current Password</label>
                            <input type="password">
                            <!-- Password input-->
                            <div class="form-group">
                                <label class="  control-label" for="passwordinput">Password</label>
                                <div class=" ">
                                    <div class="password-status">
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </div>
                                    <input id="password" name="password" type="password" placeholder="" class="form-control input-md" data-placement="bottom" data-toggle="popover" data-container="body"  data-html="true">
                                    <div id="popover-password">
                                        <p>Password must have :</p>
                                        <div class="progress">
                                            <div id="password-strength" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:0%">
                                            </div>
                                        </div>
                                        <ul class="list-unstyled">
                                            <li class=""><span class="eight-character"><i class="fa fa-times" aria-hidden="true"></i></span>&nbsp; Be a minimum of 8 characters</li>
                                            <li class=""><span class="upper-case"><i class="fa fa-times" aria-hidden="true"></i></span>&nbsp; Include at least one uppercase letter (A-Z)</li>
                                            <li class=""><span class="low-case"><i class="fa fa-times" aria-hidden="true"></i></span>&nbsp; Include at least one lowercase letter (a-z)</li>
                                            <li class=""><span class="one-number"><i class="fa fa-times" aria-hidden="true"></i></span> &nbsp;Include at least one number (0-9)</li>
                                            <li class=""><span class="one-special-char"><i class="fa fa-times" aria-hidden="true"></i></span> &nbsp;Non-alphanumeric character, for example (!@#$%^&amp;*).</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- Repeat Password -->
                            <div class="form-group">
                                <label class="  control-label" for="passwordinput">Retype New Password</label>
                                <div class=" ">
                                    <input id="confirm-password" name="confirm-password" type="password" placeholder="" class="form-control input-md">
                                </div>
                            </div>
                        </fieldset>
                        <div>
                            <button class="btn_save">CHANGE PASSWORD</button>
                            <button class="btn_cancel">CANCEL</button>
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
        sliding: null,slide:0,
        date:"",
    }
  },
  mounted() {
     
    new WOW.WOW({ animateClass: "animated", offset: 100, }).init();
    $(document).ready(function() {
         $('.member-menu > ul > li:nth-child(4) > a').addClass('active');
        $('.btn_signin').addClass('active').html('MY ACCOUNT<img class="svg" src="images/i-quote-wc.svg" alt="">');

        //Password
        // Code By Webdevtrick ( https://webdevtrick.com ) 
        $( "#password" ).focus(function() {
            $( this ).next( "#popover-password" ).fadeIn();
        });

        $('#password').focusout(function () {
            $( "#popover-password" ).fadeOut();
            $('.password-status').fadeOut();
        });

        $('#password').keyup(function() {
            var password = $('#password').val();
            if (checkStrength(password) == false) {
                //$('#change-pass').attr('disabled', true);
            }
        });

        function checkStrength(password) {
            var strength = 0;

            //If password contains both lower and uppercase characters, increase strength value.
            if (password.match(/([a-z])|([a-z])/)) {
                strength += 1;
                $('.low-case').addClass('text-success');
                $('.low-case i').removeClass('fa-times').addClass('fa-check');
                $('#popover-password-top').addClass('hide');


            } else {
                $('.low-case').removeClass('text-success');
                $('.low-case i').addClass('fa-times').removeClass('fa-check');
                $('#popover-password-top').removeClass('hide');
            }

            if (password.match(/([A-Z])|([A-Z])/)) {
                strength += 1;
                $('.upper-case').addClass('text-success');
                $('.upper-case i').removeClass('fa-times').addClass('fa-check');
                $('#popover-password-top').addClass('hide');


            } else {
                $('.upper-case').removeClass('text-success');
                $('.upper-case i').addClass('fa-times').removeClass('fa-check');
                $('#popover-password-top').removeClass('hide');
            }

            //If it has numbers and characters, increase strength value.
            if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
                strength += 1;
                $('.one-number').addClass('text-success');
                $('.one-number i').removeClass('fa-times').addClass('fa-check');
                $('#popover-password-top').addClass('hide');

            } else {
                $('.one-number').removeClass('text-success');
                $('.one-number i').addClass('fa-times').removeClass('fa-check');
                $('#popover-password-top').removeClass('hide');
            }

            //If it has one special character, increase strength value.
            if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
                strength += 1;
                $('.one-special-char').addClass('text-success');
                $('.one-special-char i').removeClass('fa-times').addClass('fa-check');
                $('#popover-password-top').addClass('hide');

            } else {
                $('.one-special-char').removeClass('text-success');
                $('.one-special-char i').addClass('fa-times').removeClass('fa-check');
                $('#popover-password-top').removeClass('hide');
            }

            if (password.length > 7) {
                strength += 1;
                $('.eight-character').addClass('text-success');
                $('.eight-character i').removeClass('fa-times').addClass('fa-check');
                $('#popover-password-top').addClass('hide');

            } else {
                $('.eight-character').removeClass('text-success');
                $('.eight-character i').addClass('fa-times').removeClass('fa-check');
                $('#popover-password-top').removeClass('hide');
            }


            // If value is less than 2

            if (strength < 5) {
                $('#password').removeClass();
                $('.password-status').fadeIn();
                $('#password').addClass('fail');
                $('.password-status i').addClass('fa-times').removeClass('fa-check');
            } else if (strength == 5) {
                $('#password').removeClass();
                $("#password").addClass('pass');
                $('.password-status i').removeClass('fa-times').addClass('fa-check');
            }

        }

   
  });

  
  },
    methods:{
 
  }
};
</script>