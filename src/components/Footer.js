import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import twt from './img/twt.png'
import inst from './img/inst.png'
import linki from './img/linki.png'
import giti from './img/giti.png'

export default function Footer() {
 
  const [state, handleSubmit] = useForm("https://formspree.io/f/xvoeqvea");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  const formStyles = {
    maxWidth: '700px',
    marginLeft:'100px',
    marginTop:'10px'
  };

  const inputStyles = {
    width: '100%',
    padding: '10px ',
    margin: '16px 0',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: '2px solid #808080', // Underline style
    outline:'none', 
    color:'#808080',
    backgroundColor:'black',
  };
  
  const inputGroupStyles = {
    width: '88%', // Adjust as needed
    display: 'inline-block',
    marginRight: '2%', // Adjust as needed
    textAlign: 'left',
  };

  return (
    <>
    <div className="container-fluid hero hero-top" style={{ backgroundColor:'black'}}>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-4" style={{ marginLeft: '', marginTop:'190px' }}>
                        
                        <p style={{ fontSize: '15px', color: '#808080',fontFamily: '"Merriweather", serif',}}>shindeshreyash23@gmail.com</p>
                        <p style={{ fontSize: '15px', color: '#808080', fontFamily: '"Merriweather", serif',}}>+91 895 639 3094</p>
                        </div>

                        <div className="col-sm-4" style={{ marginLeft: '', marginTop:'70px', marginBottom:'' }}>
                        <a href="planner" style={{color: '#FFB677' , fontFamily: '"Merriweather", serif', fontSize: '2.1667rem',  textDecoration: 'none ' , marginLeft:'100px', }}> Start a project &rarr;
                        </a>
                        <p style={{ fontSize: '20px' }}></p> 

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
                
                <input
                  id="Email"
                  placeholder="your email"
                  type="text"
                  name="name"
                  required="required"
                  style={inputStyles}
                />
                <button type="submit" id="submit-button" class="btn btn-outline-secondary" style={{ padding:'5px 10px', cursor:'pointer', borderRadius:'none', width: '100px', height:'auto', marginTop:'5px'}}>Tap</button>
                <ValidationError  prefix="name"  field="name" errors={state.errors} />
              </div>
              </form>

              <div className='d-flex' style={{ marginTop: '50px',marginLeft:'115px'}}>
     
                <a href="https://www.linkedin.com/in/shreyash-shinde-8500a2236/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '40px',}} >
                 <img src={linki} alt="LinkedIn Icon" style={{ width: '30px', height: '30px' }}/>
                </a>
                <a href="https://github.com/Shreyash018" target="_blank" rel="noopener noreferrer" style={{ marginRight: '40px',}}>
                 <img src={giti} alt="Github Icon" style={{ width: '30px', height: '30px' }}/>
                </a>
                <a href="https://www.instagram.com/shreyas._.shinde/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '40px',}} >
                 <img src={inst} alt="Instagram Icon" style={{ width: '30px', height: '30px' }}/>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '40px', }} >
                 <img src={twt} alt="Twitter Icon" style={{ width: '30px', height: '30px' }}/>
                </a>

           </div>

             </div>

                        <div className="col-sm-4" style={{  marginTop:'190px', marginBottom:'150px' }}>
                        
                        <p style={{ marginLeft: '200px',fontSize: '15px', color: '#808080', fontFamily: '"Merriweather", serif', }}>© Shreyash Shinde <br/> Privacy and Terms </p> 
                        </div>

                    </div>
                  </div>
                </div>
    </>
  )
}
