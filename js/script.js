var swiper = new Swiper(".image-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    }
  });

console.log("Script called");