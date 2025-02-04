

function BackandFormat({ img, title, description }) {

  
    return (
      <div className="bg-white  shadow-lg rounded-lg hover:rotate-3 p-6 mb-4 hover:shadow-xl  duration-500 transition-all hover:scale-110 hover:bg-blue-100 ">
        <div className="flex items-center mb-4">
          <img src={img} alt={`${title} icon`} className="w-12 h-12 rounded-full mr-4" />
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  
  export default BackandFormat;
  