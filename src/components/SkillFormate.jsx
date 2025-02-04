function SkillFormat({ img, title, description, level }) {
    return (
      <div className="bg-white shadow-lg rounded-xl mb-3 p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out max-w-xs">
        <header className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <img className="w-12 h-12 rounded-full object-cover shadow-md" src={img} alt={`${title} icon`} />
        </header>
        <div className="mb-4">
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex items-center">
          <input
            id="large-range"
            type="range"
            value={level}
            className="w-full h-3 bg-gray-300 rounded-full appearance-none cursor-pointer"
          />
          <span className="ml-3 text-sm font-semibold text-gray-700">{level}%</span>
        </div>
      </div>
    );
  }
  
  export default SkillFormat;
  