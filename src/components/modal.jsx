import React, { useRef, useEffect, useCallback } from 'react';
import { MdClose } from 'react-icons/md';
import poster from '../assets/palmwine.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom';

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/event#target-component');
  };

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('Escape key pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  useEffect(()=>{
    Aos.init({duration: 5000});
  },[])

  return (
    <>
      {showModal ? (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-40" 
          data-aos="fade-down"
          onClick={closeModal} 
          ref={modalRef}
        >
          <div className={`relative z-10 w-4/5 max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden 
            ${showModal ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} 
            transition-transform duration-300 ease-out`}>
            <div className="grid grid-cols-1 md:grid-cols-2  ">
            <div className="relative h-64 md:h-auto">
              <img 
                src={poster}
                alt='palmwine logo' 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-800 opacity-35"></div>
            </div>

              <div className="p-6 flex flex-col justify-center items-center md:pt-10">
                <h1 className="md:text-[22px] text-[21px] font-semibold mb-4 text-center">Ready to join the community?</h1>
                <p className="mb-4 text-center text-sm">Sign up to our newsletter to get a chance for a free ticket to the next edition of Palmwine and Friends.</p>
                <button 
                  onClick={handleClick}
                  className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <MdClose 
              className="absolute top-4 right-4 text-2xl cursor-pointer fill-white md:fill-current" 
              onClick={() => setShowModal(false)} 
              aria-label='Close modal'
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal; 





// const DelayedModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     Set a timeout to open the modal after 30 seconds (30,000 milliseconds)
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 30000);

//     Clean up the timer if the component is unmounted
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       <div className={isOpen ? 
//         "fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 opacity-100" : 
//         "fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 opacity-0 pointer-events-none"
//       }>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold mb-4">Welcome to Our Site</h2>
//           <p className="mb-4">Thanks for staying with us! Here's some important information.</p>
//           <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-red-500 text-white rounded">
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DelayedModal;
