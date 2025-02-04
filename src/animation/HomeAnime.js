import gsap from "gsap"

export  const navigation = ()=>{
    const tl = gsap.timeline();
    tl.from(".navigation",{
        width:"0px",
        opacity:0,
        
        duration:0.3,
        ease:"bounce.inOut"
    })

    tl.from(".heading",{
        opacity:0,
        duration:0.5,
    })

    tl.from(".navItem",{
        duration:0.3,
        opacity:0,

    })
}

export const navLinkHover = ()=>{
    gsap.from(".navItem",{
        width:"100px"
    })
}

export const titleAnimation = ()=>{
    const tl = gsap.timeline()
    tl.from('.heading1', {
      duration: 1,
      x: -100,
      opacity: 0,
      ease:"bounce",
      rotate:"10",
      color:"blue",
      delay: 0.3,
      yoyo:true,
      fontSize:"0px"
    })
    tl.from(".name1",{
      duration: 1,
      x: -100,
      opacity: 0,
      ease:"bounce",
      rotate:"10",
      color:"blue",
      delay: 0.3,
      yoyo:true,
      fontSize:"0px"
    })

    tl.from(".btn",{
        opacity:0,
        color:"blue",
        duration:0.1
    })

    tl.from(".img", {duration: 1,
        // opacity:0,
        background:"linear-gradient(30deg, black,black,black,black,gray,rgba(190,134,150,0.6))",
        borderRadius:"30px",
        duration:2,
        yoyo:true,
        repeat:-1
    })

}

export const cardAnimation = ()=>{
    const tl = gsap.timeline();
    tl.fromTo(".card",{
        background:"linear-gradient(90deg,rgba(123,243,12,0.4),rgba(126,154,0.4))",
        duration:0.3,
        y:-20,
    
        
        
    },{
        background:"linear-gradient(30deg, rgba(34,35,23,0.5),rgba(56,29,45,0.5))",
        color:"white",
        duration:2,
        boxShadow:"1px 1px 10px 1px rgba(30 , 60 , 80,1)",
        border:"0px",
        rotate:0,

        y:0,
        x:0,
        scrollTrigger:{
           markers:true
        }
    })

     tl.from(".card img",{
        opacity:100,
        duration:1,
        // rotate:30,
        
    }),
    tl.fromTo(".card",{
        repeat:-1,
        background:"linear-gradient(30deg,rgba(56,29,45,0.5),rgba(34,35,23,0.5))",
    },{
        duration:500,
        delay:200,
        background:"linear-gradient(30deg, rgba(34,35,23,0.5),rgba(56,29,45,0.5))",
        repeat:-1,
    })
}

// contact animation
export const contactAnimated = ()=>{
    gsap.from(".container",{
        duration:0.3,
        x:10,
        y:10,
        rotate:10
    })

    const tl = gsap.timeline()
    tl.from(".block",{
        opacity:0,
        duration:1,
        stagger:0.3,
        repeatRefresh:true
    })

}

// gsap.registerPlugin(ScrollTrigger)
export const scrollAnimation = ()=>{
}


export const scrollAbout = ()=>{
    
}


