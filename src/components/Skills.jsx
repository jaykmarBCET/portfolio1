import SkillFormate from "./SkillFormate";
import SkillData from "../data/skillsData";
import BackandFormate from "./BackandFormate";
import BackandData from "../data/backandData";
import frontenData  from "../data/frontendData";
import {useStore} from '../data/store'
import { useEffect } from "react";

function Skills({id}) {
  const {backend,frontend,getBackend,getFrontend} = useStore()

  useEffect(()=>{
    getBackend()
    getFrontend()
  },[])
  return (
    <div id={id??'box'} className="min-h-screen py-10 px-4 bg-black">
      <h1 className="text-white pt-32 text-center font-bold text-4xl mb-10">Skills</h1>

      {/* Main grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {/* Programming Languages Section */}
        <div className="w-full flex flex-col items-center  max-w-xl bg-black text-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-serif text-center mb-4">Programming Languages</h2>
          {
            SkillData.map((skill, index) => {
              return (
                <SkillFormate key={index} title={skill.title} description={skill.description} img={skill.image} level={skill.level} />
              );
            })
          }
        </div>

        {/* Backend Section */}
        <div className="w-full max-w-xl bg-black text-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-serif text-center mb-4">Backend</h2>
          {
            backend.map((back, index) => {
              return (
                <BackandFormate key={index} img={back.image} title={back.technology} description={back.description}/>
              )
            })
          }

        </div>

        {/* Frontend Section */}
        <div className="w-full max-w-xl bg-black text-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-serif text-center mb-4">Frontend</h2>
             {
              frontend.map((front, index) => {
                return (
                  <BackandFormate key={index}  img={front.image} title={front.technology} description={front.description}/>

                )
              })
             }
        </div>
      </div>
    </div>
  );
}

export default Skills;
