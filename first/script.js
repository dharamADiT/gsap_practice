gsap.from("#box1 .box",{
  scale:0,
  rotate:360,
  duration:1,
  delay:1
  
})

var tl = gsap.timeline()
tl.from("#box2 .box",{
  scale:0,
  borderRadius:200,

    scrollTrigger:{
    trigger:"#box2 .box",
    scroller:"body",
    start:"top 80%",
    end:"top 50%",
    scrub:2,

  }
})