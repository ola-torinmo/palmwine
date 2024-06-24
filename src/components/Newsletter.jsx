import React, { useState } from 'react'
import { useScroll } from './ScrollContext';


const Newsletter = ({ id }) => {

  const subscribe = useScroll();
  
    const  [formState, setFormState] =useState({
      email: ''
    });
  const changeHandler =(event) =>{
   setFormState({...formState,[event.target.name]:event.target.value});
  };

  const submitHandler=(event)=>{
    event.preventDefault();

  // Data to be sent to the server
  const userData = {
    
    email: formState.email,
    
  };

      // POST data to the server
      fetch('https://express-palmwine.onrender.com', {
        method: 'POST', // Specify the request method
        headers: {
          'Content-Type': 'application/json' // Specify the content type
        },
        body: JSON.stringify(userData) // Convert the data to a JSON string
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        alert('Email sent');
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        alert('Failed to send email')
      });

      // if (window.Email) {
    //   window.Email.send(config)
    //     .then((response) => {
    //       console.log(response)
    //       alert('Success');
    //       console.log('Email sent successfully:', config);
    //     })
    //     .catch((error) => {
    //       console.error('Failed to send email:', error);
    //       alert('Failed to send email');
    //     });
    // } else {
    //   console.error('window.Email is not available');
    //   alert('Email service is not available');
    // }

    
    // Reset the form state
    setFormState({
      email: ''
    });

    event.target.reset()

  };

  

  return (
    <section className="bg-[#121212]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
                <p className="mx-auto mb-4 max-w-2xl font-light  md:mb-6 text-white text-[16px] text-center">Subscribe to our newsletter to stay updated with our latest events.</p>
                <form ref={subscribe} onSubmit={submitHandler} id={id} >
                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="relative w-full">
                            <label for="email" className="hidden mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input onChange={changeHandler} value={formState.email} className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg" placeholder="email" type="email" name="email"  required/>
                        </div>
                        
                        <div>
                            
                        <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-[#FDC448] border-[#FDC448] sm:rounded-none sm:rounded-r-lg hover:bg-[#FDC448]-800  ">Subscribe</button>
                           
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    </section>

  )
}

export default Newsletter