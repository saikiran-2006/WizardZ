function page1animation() {
    var tl = gsap.timeline()

    tl.from("#nav #logo, #nav h1, #nav h5, #nav button", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.15,
        delay: 1,
    })

    tl.from("#content1 #text1 h1", {
        x: -400,
        duration: 0.8,
        opacity: 0
    })
    tl.from("#content1 #text2 p", {
        x: -400,
        duration: 0.8,
        opacity: 0
    })
    tl.from("#left button, #rightimage img", {
        opacity: 0,
        duration: 1,
    })
    tl.from("#company img", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.15
    })
}
page1animation()

function page2animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#services",
            scroller: "body",
            start: "top 50%",
            end: "top 0%",
            scrub: 2
        }
    })
    tl2.from("#services", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "bounce"
    })

    tl2.from(".leftelem", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "left")
    tl2.from(".leftelem2", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "left")


    tl2.from(".rightelem", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "right")
    tl2.from(".rightelem2", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "right")
}
page2animation()