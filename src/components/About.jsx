import {useGSAP} from "@gsap/react"
import gsap  from "gsap";


const About = () => {

  useGSAP(()=>{
    gsap.from(".about-info", {
      duration: 1,
      opacity:0,
      stagger:0.3,
      repeat:2,
      yoyo:true
    })
  })
  return (
    <div className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto max-w-md grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info mx-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">About Me</h2>
          <p className="pb-5">Hi, My Name Is Jay Kumar everyone calls me Jay. I am a Full Stack Web Developer with a passion for creating innovative and user-friendly web applications.</p>

          <p className="pb-5">I am proficient in Web developer like Backand.</p>
          <p>In my spare time I Enjoy  playing Cricket and watching movies.</p>

        </div>
        <div className="about-img">
          <img src={""} alt="Jay Kumar, Full Stack Web Developer" className="lg:w-1/2 md:ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;