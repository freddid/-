$(document).ready(function () {
   $(".phone").mask("+7(999)999-99-99");
   $('.fifth__slider').slick({
      dots: true,
      slidesToShow: 3,
      touchThreshold: 10,
      waitForAnimate: false,
      centerMode: true,
      variableWidth: true,
      initialSlide: 2,
      infinite: false
   });

   $('.sixth__block_btn').on('click', function () {
      $(this).children().toggleClass("transform")
      $(this.previousElementSibling).toggleClass('sixth__block_active ')
      $(this.parentElement.nextElementSibling).toggleClass('sixth__block_hiddenClick')
   })

   $('.doctors__card').on('click', function () {
      $('.doctors__card, .doctors__info').removeClass("doctors__card_active doctors__active")
      $(this).addClass("doctors__card_active")
      $($('.doctors__info')[$('.doctors__card').index($(this))]).addClass("doctors__active")
   })

   $('.doctors__card_arrowUp').on('click', function () {
      let i = $('.doctors__card').index($('.doctors__card.doctors__card_active'))
      if (i < 1) {
         i = 4
      }
      $($('.doctors__card, .doctors__info')).removeClass("doctors__card_active doctors__active")
      $($('.doctors__info')[i - 1]).addClass("doctors__active")
      $($(".doctors__card")[i - 1]).addClass("doctors__card_active")
   })

   $('.doctors__card_arrowDown').on('click', function () {
      let i = $('.doctors__card').index($('.doctors__card.doctors__card_active'))
      if (i > 2) {
         i = -1
      }
      $($('.doctors__card, .doctors__info')).removeClass("doctors__card_active doctors__active")
      $($('.doctors__info')[i + 1]).addClass("doctors__active")
      $($(".doctors__card")[i + 1]).addClass("doctors__card_active")
   })
})