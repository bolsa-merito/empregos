import { useState } from "react";

function ExpandableImage({ imgUrl, children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    return (
      <>
        <div 
          className="h-52 w-28 cursor-pointer"
          onClick={openModal}
        >
          {children}
        </div>
        
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div 
              className="max-w-4xl max-h-screen p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={imgUrl} 
                alt="Foto de perfil ampliada" 
                className="max-w-full max-h-screen object-contain" 
              />
            </div>
          </div>
        )}
      </>
    );
  }

export default ExpandableImage