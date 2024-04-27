import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
export default function Planner() {

    const [state, handleSubmit] = useForm("https://formspree.io/f/xvoeqvea");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    const formStyles = {
        textAlign: 'center',
        maxWidth: '860px',
        marginLeft:'50px',
      };
  
      const inputStyles = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        boxSizing: 'border-box',
        border: 'none',
        borderBottom: '2px solid #636363', // Underline style
        outline:'none', 
        
      };
  
  
      const textareaStyles = {
       width: '100%',
       padding: '10px',
       margin: '10px 0',
       boxSizing: 'border-box',
       border: 'none',
       borderBottom: '2px solid #636363', // Underline style
       outline:'none', 
       backgroundColor:'#E6FFFF',
      };
  
      const inputGroupStyles = {
        width: '48%', // Adjust as needed
        display: 'inline-block',
        marginRight: '2%', // Adjust as needed
        textAlign: 'left',
      };
      
  return (
    <>
      <div className ="container-fluid hero mbc-loc">
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7C6-dVroVYwKXlJSnBBFZDgac8EQ5NRzEg&usqp=CAU"
                  alt=""
                  width="150"
                  height="140"
                  
                ></img>
                <a href="body" style={{color: 'Black' , fontFamily:'poppins', fontSize: '18px', fontWeight:'bold', textDecoration: 'none ', marginRight:'50px', marginTop:'51px'}}> Go Home 
                <button style={{width:'5px' , height:'5px', marginLeft:'5px',}} type="button" class="btn-close" aria-label="Close"></button>
                </a>
                
     
      </div>
       <div className="container" style={{marginTop:'70px'}}>
         <div className="col-sm-9 offset-sm-2 text-center">
         <div style={{marginRight:'30px',}}>
         <h2 style={{ fontSize: '1.9333rem', fontFamily: 'poppins', fontWeight: '1000', color: '#636363',}}> Let's start a new project</h2>
         <p style={{fontSize:'17px'}}>I am honoured you are interested in working with me. Please fill out the project planner and I'll get back to you.</p>
         </div> 
         <form
            onSubmit={handleSubmit}
            className="contact-form hYlwmr"
            method="POST"
            target="_blank"
            action="https://formspree.io/f/xvoeqvea"
            id="home-contact"
            style={formStyles}
          >
           <input type="hidden" name="_subject" value="Message from olaolu.dev!" />
              <div className="cWhpWP input-group" data-id="full-name" style={inputGroupStyles}>
                <label htmlFor="full-name" style={{display:'flex', marginTop:'50px', fontSize:'18px',}}>What's should we call you?</label>
                <input
                  id="full-name"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  required="required"
                  style={inputStyles}
                />
                <ValidationError  prefix="name"  field="name" errors={state.errors} />
              </div>
              <div className="cWhpWP input-group" data-id="email" style={inputGroupStyles}>
                <label htmlFor="email" style={{display:'flex', fontSize:'18px',}}> What is the name of your company / organization? </label>
                <input
                  id="Designers"
                  placeholder="Designers Inc"
                  type="email"
                  name="_replyto"
                  required="required"
                  style={inputStyles}
                />
                 <ValidationError  prefix="Email"  field="email" errors={state.errors} />
              </div>
            <div className="form-row">
              <div className="cWhpWP input-group" data-id="message">
                <label htmlFor="message" style={{display:'flex', marginTop:'20px', fontSize:'18px',}}> How should we contact you? </label>
                <input
                  placeholder="Your Eamil"
                  id="email"
                  name="message"
                  required="required"
                  style={inputStyles}
                ></input>
              </div>
            </div>
            <button type="submit" id="submit-button" class="btn btn-outline-dark" style={{ padding:'10px 20px', cursor:'pointer', borderRadius:'none', width: '100px', height:'auto', marginRight:'840px', marginTop:'20px'}}>SUBMIT</button>
          </form>

         </div>
      </div>
    </div>
    </>
  )
}
