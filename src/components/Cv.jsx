import Header from './cv/Header';
import Summary from './cv/Summary';
// import Experience from './cv/Experience';
import Education from './cv/Education';
import Skills from './cv/Skills';
import Projects from './cv/Projects';
import Achievements from './cv/Achivement';

function Cv({ id }) {
  const printCV = () => {
    window.print(); // Ensures the print functionality works
  };

  return (
    <div id={id ?? "box"} className="bg-black-400 rounded-xl pt-32 min-w-72 mx-2 max-w-3/4 m-auto">
      <div className="  flex flex-wrap gap-y-2 rounded-md mb-10 shadow-lg bg-gray-200 px-2 py-2">
        <Header />
        <Summary />
          <Projects />
          <Education />
          <Skills />
        
        <Achievements />
      </div>

      {/* Optionally add a print button */}
      <div className="text-center mt-6">
        <button
          onClick={printCV}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Print CV
        </button>
      </div>
    </div>
  );
}

export default Cv;
