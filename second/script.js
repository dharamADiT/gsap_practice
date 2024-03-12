gsap.to("#box1 h1",{
  transform:"translateX(-100%)",
  fontWeight:100,
  scrollTrigger:{
    trigger:"#box1",
    scroller:"body",
    start:"top 0%",
    end:"top -200%",
    scrub:2,
    pin:true
  }
})


gsap.from("#eye",{
  duration:1.2,
  height:30,
  scrub:true, 

})

gsap.from(".nav-brand",{
  duration:1.2,
  height:0,
  scrub:true,
  yoyo:-1
})