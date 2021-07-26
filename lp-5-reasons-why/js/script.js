//* Load
jQuery(window).bind('load', function() {
   
})

//* Resize
jQuery(window).resize(function() {

})

//* Scroll
jQuery(window).scroll(function() {

})

//* Register
function damaxRegister() {
    smoothScroll();
	fbEvents();
}
damaxRegister()
//** BEG CUSTOM FUNCTIONS **//

$(document).ready(function() {
    setTimeout('$("body").css("opacity", 1)', 200);
});

  
function smoothScroll() {

    $(document).on('click', 'a[href^="#"]', function (event) {
  
  
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });
  }

  function giftPopup() {


    let modalContainer = document.querySelectorAll('.gift_modal');
    if (modalContainer == null) {
      return
    }
  
    // if (localStorage.getItem('popStateSecond') != 'shown') {
    //   window.setTimeout(function(){
    //     $('.gift_modal').toggleClass('is-visible');
    //   }, 3000);
    // }
  
    $('.gift_modal_toggler').click(function (e) {
      $('.gift_modal').toggleClass('is-visible');
        // localStorage.setItem('popStateSecond', 'shown');
    });
  }
  giftPopup();
  
function fbEvents() {
$('.shop__item-btn').on( "click", function() {
	gtag('event', 'all', {
	'event_category' : 'Lead',
	'event_label' : 'AddToCart'
	});
	fbq('track', 'AddToCart');
});

}