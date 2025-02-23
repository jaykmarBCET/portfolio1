import { useState } from "react";

export default function ImageShow({ image = [], SetFlag }) {
    const [selectedImage, setSelectedImage] = useState(image.length > 0 ? image[0] : null);

    return (
        
        <div className="flex flex-row  min-w-96 w-screen gap-4 p-4">
            <button 
                onClick={() => SetFlag(false)} 
                className="px-4 py-2 w-20 h-10 bg-red-500 text-white rounded"
            >
                Close
            </button>
            
          
            <div className="w-64 h-64 ">
                {selectedImage ? (
                    <img src={selectedImage} alt="Selected" className="w-full h-[100vh] object-cover" />
                ) : (
                    <p className="text-center">No Image Selected</p>
                )}
            </div>
            
            <div className="flex flex-col gap-2">
                {image.map((item, index) => (
                    <button 
                        key={index} 
                        onClick={() => setSelectedImage(item)} 
                        className="border rounded"
                    >
                        <img src={item} alt={`Thumbnail ${index + 1}`} className="w-20 h-20 object-cover" />
                    </button>
                ))}
            </div>
           
        </div>
        
    );
}
